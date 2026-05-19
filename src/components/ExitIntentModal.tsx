import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, User, Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Status: 'idle' | 'sending' | 'success'
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  useEffect(() => {
    // 1. Check if the modal has already been shown in this session
    const isShown = sessionStorage.getItem('h2t_exit_modal_shown');
    if (isShown === 'true') return;

    // 2. Setup 5 minutes (300000ms) delay trigger
    const timer = setTimeout(() => {
      triggerModal();
    }, 300000);

    // 3. Setup Exit Intent detector (triggers when mouse leaves window at the top)
    const handleMouseLeave = (e: MouseEvent) => {
      // clientY < 15 detects when cursor moves up toward the tabs / address bar area
      if (e.clientY < 15) {
        triggerModal();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const triggerModal = () => {
    const isShown = sessionStorage.getItem('h2t_exit_modal_shown');
    if (isShown !== 'true') {
      setIsOpen(true);
      sessionStorage.setItem('h2t_exit_modal_shown', 'true');
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    const apiEndpoint = window.location.hostname === 'localhost'
      ? 'https://h2t.tech/api/send-email'
      : '/api/send-email';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: name,
          lastName: '(Exit Intent Lead)',
          email,
          phone,
          message: 'Requesting Free Automation & Growth Blueprint ($499 Value)'
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
          throw new Error(`Server error status ${response.status}`);
        }
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit exit intent lead');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
    } catch (error: any) {
      console.error('Exit intent lead request failed:', error);
      setStatus('idle');
      setErrors({ phone: error.message || 'Failed to submit. Please check network connection.' });
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setStatus('idle');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[500px] overflow-hidden rounded-[24px] p-[1.5px] shadow-[0_0_60px_rgba(204,0,0,0.25)]"
          >
            {/* Rotating border animation layer (Star Border style) */}
            <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none">
              <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,transparent_75%,#ff1a1a_100%)] animate-[spin_4s_linear_infinite]" />
            </div>

            {/* Inner Content Card container */}
            <div className="relative z-10 w-full rounded-[22.5px] bg-[#050505]/95 p-8 sm:p-10 backdrop-blur-xl">
              
              {/* Close Icon Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {status !== 'success' ? (
                <div>
                  {/* Premium Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-h2t-red/10 border border-h2t-red/20 text-h2t-red text-xs font-semibold tracking-wider uppercase mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Exclusive Offer</span>
                  </div>

                  {/* Header Title */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight mb-2">
                    Before You Leave...
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                    Get a personalized custom automation & growth blueprint for your business (valued at $499) completely free.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name input */}
                    <div className="flex flex-col">
                      <label className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
                          <User size={16} />
                        </span>
                        <input
                          type="text"
                          disabled={status === 'sending'}
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          placeholder="John Doe"
                          className={`w-full bg-white/[0.02] border ${
                            errors.name ? 'border-h2t-red' : 'border-white/10'
                          } focus:border-h2t-red rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300`}
                        />
                      </div>
                      {errors.name && (
                        <span className="text-h2t-red text-[11px] mt-1 font-medium">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col">
                      <label className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1.5">
                        Corporate Email
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
                          <Mail size={16} />
                        </span>
                        <input
                          type="email"
                          disabled={status === 'sending'}
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="john@company.com"
                          className={`w-full bg-white/[0.02] border ${
                            errors.email ? 'border-h2t-red' : 'border-white/10'
                          } focus:border-h2t-red rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300`}
                        />
                      </div>
                      {errors.email && (
                        <span className="text-h2t-red text-[11px] mt-1 font-medium">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Phone Number input */}
                    <div className="flex flex-col">
                      <label className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
                          <Phone size={16} />
                        </span>
                        <input
                          type="tel"
                          disabled={status === 'sending'}
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full bg-white/[0.02] border ${
                            errors.phone ? 'border-h2t-red' : 'border-white/10'
                          } focus:border-h2t-red rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300`}
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-h2t-red text-[11px] mt-1 font-medium">
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="relative flex items-center justify-center w-full bg-h2t-red hover:bg-red-600 text-white font-semibold py-3.5 px-6 rounded-xl overflow-hidden group transition-all duration-300 shadow-[0_0_20px_rgba(255,26,26,0.2)] hover:shadow-[0_0_30px_rgba(255,26,26,0.5)] active:scale-98 mt-6"
                    >
                      <AnimatePresence mode="wait">
                        {status === 'sending' ? (
                          <motion.div
                            key="sending"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>Securing Offer...</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <span>Claim Free Blueprint</span>
                            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </form>
                </div>
              ) : (
                /* Success screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', duration: 0.6 }}
                  className="flex flex-col items-center justify-center py-6 text-center"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-h2t-red/20 rounded-full blur-xl animate-pulse scale-150" />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 150 }}
                    >
                      <CheckCircle2 size={72} className="text-h2t-red relative z-10" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                    Offer Secured!
                  </h3>
                  <p className="text-gray-400 text-sm font-light mt-3 max-w-[320px] leading-relaxed">
                    Our lead automation engineers have booked your priority request. Expect your custom roadmap in your email inbox within <span className="text-white font-medium">12 hours</span>.
                  </p>

                  <button
                    onClick={handleClose}
                    className="mt-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-medium py-2.5 px-8 rounded-xl transition-all duration-300 active:scale-95"
                  >
                    Dismiss
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
