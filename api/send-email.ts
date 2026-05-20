export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return res.status(500).json({ error: 'Resend API key is not configured in Vercel env' });
    }

    // Recipient for leads. Set `LEADS_EMAIL` in your environment (e.g. your Gmail address).
    const leadsEmail = process.env.LEADS_EMAIL || 'support@h2t.tech';

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Website Lead</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; }
          .header { background: #cc0000; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
          .value { font-size: 16px; margin-top: 5px; color: #111; }
          .footer { text-align: center; font-size: 12px; color: #999; margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin:0;">H2T Technologies Website Lead</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${firstName} ${lastName || ''}</div>
            </div>
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${phone ? `
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Message Details</div>
              <div class="value" style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 3px solid #cc0000; margin-top:5px;">${message}</div>
            </div>
          </div>
          <div class="footer">
            Sent securely via H2T Technologies Lead Capture System
          </div>
        </div>
      </body>
      </html>
    `;

    // Try sending from official domains first
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'H2T Lead <website@h2t.tech>',
        to: [leadsEmail],
        subject: `New Lead: ${firstName} ${lastName || ''}`,
        html: emailHtml,
        reply_to: email
      })
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.warn('Resend send failed, attempting fallback...', resendData);
      
      // Fallback: send from onboarding@resend.dev (always works for owners)
      const fallbackResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'H2T Lead <onboarding@resend.dev>',
          to: [leadsEmail],
          subject: `New Lead: ${firstName} ${lastName || ''} (Onboarding)`,
          html: emailHtml,
          reply_to: email
        })
      });

      const fallbackData = await fallbackResponse.json();

      if (!fallbackResponse.ok) {
        return res.status(fallbackResponse.status).json({ error: fallbackData.message || 'Failed to send email' });
      }

      return res.status(200).json({ success: true, id: fallbackData.id, fallback: true });
    }

    return res.status(200).json({ success: true, id: resendData.id });
  } catch (error: any) {
    console.error('Serverless function error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
