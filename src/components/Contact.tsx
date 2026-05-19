import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, ChevronRight, User, LayoutGrid, Edit3, ShieldCheck, Clock, Target, Headphones, Zap, Hexagon, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const HexIcon = ({ icon, colorClass = "text-red-500", wrapperClass = "text-red-500/30" }: any) => (
  <div className={`relative w-12 h-12 flex items-center justify-center flex-shrink-0 ${colorClass}`}>
    <Hexagon className={`absolute inset-0 w-full h-full ${wrapperClass} fill-black/50`} strokeWidth={1.5} />
    <div className="relative z-10">{icon}</div>
  </div>
);

const ContactCard = ({ icon, title, desc, href = "#" }: any) => (
  <a href={href} className="flex items-center justify-between p-4 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-red-500/30 transition-all duration-300 group">
    <div className="flex items-center gap-4">
      <HexIcon icon={icon} />
      <div>
        <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-1">{title}</h4>
        <div className="text-gray-400 text-sm font-light leading-snug">{desc}</div>
      </div>
    </div>
    <ChevronRight className="w-5 h-5 text-red-500/50 group-hover:text-red-500 transition-colors mr-2" />
  </a>
);

const WhatsAppCard = ({ href = "#" }: any) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-[#051105] border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-300 group">
    <div className="flex items-center gap-4">
      <HexIcon icon={<MessageCircle className="w-5 h-5" strokeWidth={2} />} colorClass="text-green-500" wrapperClass="text-green-500/40" />
      <div>
        <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-1">CHAT ON WHATSAPP</h4>
        <div className="text-gray-400 text-sm font-light leading-snug">We're online and ready to help!</div>
      </div>
    </div>
    <ChevronRight className="w-5 h-5 text-green-500/50 group-hover:text-green-500 transition-colors mr-2" />
  </a>
);

const InputField = ({ label, icon, type = "text", placeholder, value, onChange, required, disabled }: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-white text-[11px] font-semibold tracking-wider">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
        {icon}
      </div>
      <input 
        type={type} 
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-red-500/50 focus:bg-[#111] transition-all placeholder:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed" 
        placeholder={placeholder} 
      />
    </div>
  </div>
);

const TrustItem = ({ icon, title, desc }: any) => (
  <div className="flex items-start gap-4 flex-1 min-w-[200px]">
    <div className="w-10 h-10 rounded-full border border-red-500/20 bg-red-500/5 flex items-center justify-center flex-shrink-0 text-red-500">
      {icon}
    </div>
    <div>
      <h4 className="text-white text-xs font-bold tracking-widest mb-1">{title}</h4>
      <p className="text-gray-500 text-[11px] leading-relaxed pr-4">{desc}</p>
    </div>
  </div>
);

export function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !message) return;

    setStatus('submitting');
    setErrorMessage('');

    // Local Testing Mock to prevent 404 HTML parse errors on localhost:5173
    if (window.location.hostname === 'localhost') {
      console.log('Local development detected. Simulating API call...');
      setTimeout(() => {
        setStatus('success');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      }, 1500);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message
        })
      });

      let data: any = {};
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.warn('Received non-JSON response from API:', text);
        if (!response.ok) {
          throw new Error(`Server returned error status ${response.status}`);
        }
      }

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } catch (error: any) {
      console.error('Lead submit error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Server error. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#030303] relative overflow-hidden font-sans">
      {/* Cyberpunk Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0wIDYwaDYwTTAgMGg2ME02MCAwdjYwTTAgMHY2MCIvPjwvZz48L3N2Zz4=')] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-red-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-[40%] h-[40%] bg-red-900/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12">
        {/* Main Grid: Left (Info) | Right (Form) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-start">
          
          {/* LEFT COLUMN */}
          <div className="xl:col-span-5 flex flex-col">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/5 border border-red-500/20 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="text-red-500 text-[10px] font-bold tracking-[0.2em] uppercase">Contact Us</span>
              </div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-[64px] font-extrabold leading-[1.05] mb-6 text-white tracking-tight"
              >
                Let's Build<br />Something<br />
                <span className="text-red-500 text-glow block mt-1">Powerful.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-md"
              >
                Ready to grow your business with modern digital solutions? Get in touch with us today and let's create impact together.
              </motion.p>
            </div>

            {/* Contact Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-3 w-full max-w-md"
            >
              <ContactCard icon={<Mail className="w-5 h-5" strokeWidth={1.5} />} title="EMAIL US" desc="support@h2t.tech" href="mailto:support@h2t.tech" />
              <ContactCard icon={<Phone className="w-5 h-5" strokeWidth={1.5} />} title="CALL US" desc="+91 95662 45321" href="tel:+919566245321" />
              <WhatsAppCard href="https://wa.me/919566245321" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN (Form) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-7"
          >
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-b from-red-500/40 via-red-500/5 to-transparent">
              {/* Top right decorative elements */}
              <div className="absolute top-4 right-6 flex gap-1 z-20">
                 <div className="w-3 h-1.5 bg-red-500/80 -skew-x-[20deg]" />
                 <div className="w-3 h-1.5 bg-red-500/80 -skew-x-[20deg]" />
                 <div className="w-3 h-1.5 bg-red-500/80 -skew-x-[20deg]" />
              </div>

              <div className="bg-[#080808] rounded-[2rem] p-6 sm:p-10 relative overflow-hidden h-full border border-black shadow-[inset_0_0_60px_rgba(255,0,0,0.03)]">
                {/* Header row in form */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-white/5">
                  <h3 className="text-red-500 font-bold tracking-widest text-[13px] uppercase">Send Us A Message</h3>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0a0a0a] border border-white/5">
                    <Zap className="w-3.5 h-3.5 text-green-400 fill-green-400" />
                    <span className="text-gray-400 text-[10px] font-medium tracking-wide">We typically reply within a few minutes</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs flex items-center gap-3 shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <strong className="font-semibold block mb-0.5">Message Sent Successfully!</strong>
                        Thank you! We have received your inquiry and our support team will reach out to you within minutes.
                      </div>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-3 shadow-[0_0_15px_rgba(230,0,0,0.1)]"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <strong className="font-semibold block mb-0.5">Submission Failed</strong>
                        {errorMessage}
                      </div>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                      label="First Name" 
                      icon={<User className="w-4 h-4"/>} 
                      placeholder="John" 
                      value={firstName} 
                      onChange={(e: any) => setFirstName(e.target.value)} 
                      required 
                      disabled={status === 'submitting'}
                    />
                    <InputField 
                      label="Last Name" 
                      icon={<User className="w-4 h-4"/>} 
                      placeholder="Doe" 
                      value={lastName} 
                      onChange={(e: any) => setLastName(e.target.value)} 
                      disabled={status === 'submitting'}
                    />
                  </div>
                  
                  <InputField 
                    label="Email Address" 
                    type="email" 
                    icon={<Mail className="w-4 h-4"/>} 
                    placeholder="john@example.com" 
                    value={email} 
                    onChange={(e: any) => setEmail(e.target.value)} 
                    required 
                    disabled={status === 'submitting'}
                  />

                  <div className="flex flex-col gap-2">
                    <label className="text-white text-[11px] font-semibold tracking-wider">Message</label>
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-gray-500">
                        <Edit3 className="w-4 h-4" />
                      </div>
                      <textarea 
                        rows={4} 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        disabled={status === 'submitting'}
                        className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-red-500/50 focus:bg-[#111] transition-all resize-none placeholder:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed" 
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full mt-2 bg-[#e60000] hover:bg-red-600 disabled:bg-red-950 text-white font-bold tracking-widest text-[13px] py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(230,0,0,0.3)] disabled:shadow-none disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        SENDING...
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 lg:p-8 flex flex-wrap xl:flex-nowrap justify-between gap-8 xl:gap-6 mt-4"
        >
          <TrustItem icon={<ShieldCheck className="w-5 h-5"/>} title="100% SECURE" desc="Your data is safe with us always." />
          <TrustItem icon={<Clock className="w-5 h-5"/>} title="FAST REPLY" desc="We reply within minutes guaranteed." />
          <TrustItem icon={<Target className="w-5 h-5"/>} title="RESULT DRIVEN" desc="We build strategies that drive real results." />
          <TrustItem icon={<Headphones className="w-5 h-5"/>} title="EXPERT SUPPORT" desc="Our team is here to support you anytime." />
        </motion.div>
      </div>
    </section>
  );
}
