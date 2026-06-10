import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Send, User, Edit3, Loader2, CheckCircle2, AlertCircle, X, Package } from 'lucide-react';

export interface SelectedPlan {
  name: string;
  price: string;
  period?: string;
}

export interface ServiceContactConfig {
  headline: string;
  accent: string;
  description: string;
  messagePlaceholder: string;
  highlights: string[];
}

interface ServiceContactProps {
  serviceName: string;
  contact: ServiceContactConfig;
  selectedPlan?: SelectedPlan | null;
  onClearPlan?: () => void;
}

export function ServiceContact({
  serviceName,
  contact,
  selectedPlan,
  onClearPlan,
}: ServiceContactProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [customization, setCustomization] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !phone || !projectDetails) return;

    const planLine = selectedPlan
      ? `Selected Plan: ${selectedPlan.name} (${selectedPlan.price}${selectedPlan.period ?? ''})`
      : 'Selected Plan: Not specified';

    const fullMessage = [
      `[${serviceName}]`,
      planLine,
      '',
      'Project Details:',
      projectDetails,
      '',
      'Customization Requirements:',
      customization || 'None specified',
    ].join('\n');

    setStatus('submitting');
    setErrorMessage('');

    const apiEndpoint =
      window.location.hostname === 'localhost'
        ? 'https://h2t.tech/api/send-email'
        : '/api/send-email';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message: fullMessage,
          service: serviceName,
        }),
      });

      let data: { error?: string } = {};
      const contentType = response.headers.get('content-type');
      if (contentType?.includes('application/json')) {
        data = await response.json();
      } else if (!response.ok) {
        throw new Error(`Server returned error status ${response.status}`);
      }

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setProjectDetails('');
      setCustomization('');
      onClearPlan?.();
    } catch (error: unknown) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Server error. Please try again.');
    }
  };

  return (
    <section id="service-contact" className="py-20 sm:py-28 bg-[#030303] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-h2t-red/10 border border-h2t-red/30 mb-6">
              <span className="text-h2t-red text-[10px] font-bold tracking-[0.2em] uppercase">
                {serviceName}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              {contact.headline}
              <br />
              <span className="text-h2t-red">{contact.accent}</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-md">
              {contact.description}
            </p>

            <ul className="space-y-3 mb-10">
              {contact.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-h2t-red shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:support@h2t.tech"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-h2t-red/30 text-gray-300 text-xs transition-colors"
              >
                <Mail className="w-4 h-4 text-h2t-red" />
                support@h2t.tech
              </a>
              <a
                href="https://wa.me/919566245321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#051105] border border-green-500/30 text-gray-300 text-xs transition-colors hover:border-green-500/50"
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                WhatsApp Us
              </a>
              <a
                href="tel:+919566245321"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-h2t-red/30 text-gray-300 text-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-h2t-red" />
                +91 95662 45321
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-h2t-red/40 via-h2t-red/5 to-transparent">
              <div className="bg-[#080808] rounded-2xl p-6 sm:p-8 border border-black">
                <h3 className="text-h2t-red font-bold tracking-widest text-xs uppercase mb-6 pb-4 border-b border-white/5">
                  Request a Quote — {serviceName}
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {selectedPlan ? (
                    <div className="flex items-start justify-between gap-3 p-4 rounded-xl bg-h2t-red/10 border border-h2t-red/30">
                      <div className="flex items-start gap-3 min-w-0">
                        <Package className="w-5 h-5 text-h2t-red shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] font-bold tracking-widest uppercase text-h2t-red mb-1">
                            Selected Plan
                          </p>
                          <p className="text-white font-bold text-sm">{selectedPlan.name}</p>
                          <p className="text-gray-400 text-xs mt-0.5">
                            {selectedPlan.price}
                            {selectedPlan.period ?? ''}
                          </p>
                        </div>
                      </div>
                      {onClearPlan && (
                        <button
                          type="button"
                          onClick={onClearPlan}
                          className="text-gray-500 hover:text-white transition-colors shrink-0"
                          aria-label="Clear selected plan"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-xs font-light px-1">
                      Select a plan above, or describe your project below and we&apos;ll recommend the best fit.
                    </p>
                  )}

                  {status === 'success' && (
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Thank you! We&apos;ll get back to you about {serviceName} shortly.</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-[11px] font-semibold tracking-wider">First Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          disabled={status === 'submitting'}
                          placeholder="John"
                          className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-h2t-red/50 transition-all placeholder:text-gray-600 disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-[11px] font-semibold tracking-wider">Last Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          disabled={status === 'submitting'}
                          placeholder="Doe"
                          className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-h2t-red/50 transition-all placeholder:text-gray-600 disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-[11px] font-semibold tracking-wider">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={status === 'submitting'}
                          placeholder="john@example.com"
                          className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-h2t-red/50 transition-all placeholder:text-gray-600 disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-[11px] font-semibold tracking-wider">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          disabled={status === 'submitting'}
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-h2t-red/50 transition-all placeholder:text-gray-600 disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white text-[11px] font-semibold tracking-wider">Project Details</label>
                    <div className="relative">
                      <Edit3 className="absolute left-4 top-4 w-4 h-4 text-gray-500" />
                      <textarea
                        rows={3}
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                        required
                        disabled={status === 'submitting'}
                        placeholder={contact.messagePlaceholder}
                        className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-h2t-red/50 transition-all resize-none placeholder:text-gray-600 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white text-[11px] font-semibold tracking-wider">
                      Customization Requirements
                    </label>
                    <div className="relative">
                      <Edit3 className="absolute left-4 top-4 w-4 h-4 text-gray-500" />
                      <textarea
                        rows={3}
                        value={customization}
                        onChange={(e) => setCustomization(e.target.value)}
                        disabled={status === 'submitting'}
                        placeholder="Pages, features, integrations, branding, timeline, or any specific changes you need..."
                        className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-h2t-red/50 transition-all resize-none placeholder:text-gray-600 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-h2t-red hover:bg-red-600 disabled:bg-red-950 text-white font-bold tracking-widest text-xs py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,26,26,0.3)] disabled:shadow-none disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        SENDING...
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        SEND INQUIRY
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
