import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MessageSquare, Send, CheckCircle2, Loader2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiry, setInquiry] = useState('');
  
  // Status can be: 'idle' | 'sending' | 'success'
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [errors, setErrors] = useState<{ email?: string; phone?: string; inquiry?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!inquiry) {
      newErrors.inquiry = 'Please tell us briefly about your project';
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
          firstName: 'Consultation Inquiry',
          lastName: '',
          email,
          phone,
          message: inquiry
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
        throw new Error(data.error || 'Failed to submit consultation request');
      }

      setStatus('success');
      // Reset form fields
      setEmail('');
      setPhone('');
      setInquiry('');
    } catch (error: any) {
      console.error('Consultation request failed:', error);
      setStatus('idle');
      setErrors({ inquiry: error.message || 'Failed to send. Please check your network or try again.' });
    }
  };

  const handleClose = () => {
    setStatus('idle');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-[500px] overflow-hidden rounded-[20px] border border-white/10 bg-[#0a0a0a]/90 p-8 shadow-[0_0_50px_rgba(204,0,0,0.15)] backdrop-blur-2xl"
          >
            {/* Red accent line at the top */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#cc0000] via-[#ff3333] to-[#cc0000]" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors p-1"
            >
              <X size={20} />
            </button>

            {status !== 'success' ? (
              <div>
                {/* Title Section */}
                <div className="mb-6">
                  <h3 className="text-[24px] font-extrabold tracking-tight text-white leading-none">
                    Start Your Growth Journey
                  </h3>
                  <p className="text-gray-400 text-xs mt-2 font-normal leading-relaxed">
                    Leave your details below, and our engineering & marketing experts will assemble a bespoke strategy for your business.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email Field */}
                  <div className="flex flex-col">
                    <label className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
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
                        placeholder="you@company.com"
                        className={`w-full bg-[#121212]/90 border ${
                          errors.email ? 'border-[#cc0000]' : 'border-white/10'
                        } focus:border-[#cc0000] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300`}
                      />
                    </div>
                    {errors.email && (
                      <span className="text-[#cc0000] text-[11px] mt-1.5 font-medium">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="flex flex-col">
                    <label className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
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
                        className={`w-full bg-[#121212]/90 border ${
                          errors.phone ? 'border-[#cc0000]' : 'border-white/10'
                        } focus:border-[#cc0000] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300`}
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-[#cc0000] text-[11px] mt-1.5 font-medium">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Inquiry details */}
                  <div className="flex flex-col">
                    <label className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      Inquiries & Project Details
                    </label>
                    <div className="relative">
                      <span className="absolute top-3 left-4 text-gray-500">
                        <MessageSquare size={16} />
                      </span>
                      <textarea
                        rows={3}
                        disabled={status === 'sending'}
                        value={inquiry}
                        onChange={(e) => {
                          setInquiry(e.target.value);
                          if (errors.inquiry) setErrors({ ...errors, inquiry: undefined });
                        }}
                        placeholder="Describe your goals, current challenges, or ideas..."
                        className={`w-full bg-[#121212]/90 border ${
                          errors.inquiry ? 'border-[#cc0000]' : 'border-white/10'
                        } focus:border-[#cc0000] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none`}
                      />
                    </div>
                    {errors.inquiry && (
                      <span className="text-[#cc0000] text-[11px] mt-1.5 font-medium">
                        {errors.inquiry}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="relative flex items-center justify-center w-full bg-[#cc0000] hover:bg-red-600 text-white font-semibold py-3.5 px-6 rounded-xl overflow-hidden group transition-all duration-300 shadow-[0_0_20px_rgba(204,0,0,0.2)] hover:shadow-[0_0_30px_rgba(204,0,0,0.5)] active:scale-98"
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
                          <span>Processing Data...</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <span>Send Inquiry</span>
                          <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </form>
              </div>
            ) : (
              /* Success Animation Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="relative mb-6">
                  {/* Outer glowing pulsing circles */}
                  <div className="absolute inset-0 bg-[#cc0000]/20 rounded-full blur-xl animate-pulse scale-150" />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 150 }}
                  >
                    <CheckCircle2 size={72} className="text-[#cc0000] relative z-10" />
                  </motion.div>
                </div>

                <h3 className="text-[24px] font-extrabold text-white leading-tight">
                  Transmission Received!
                </h3>
                
                <p className="text-gray-400 text-sm mt-3 font-normal max-w-[320px] leading-relaxed">
                  Your inquiry has been successfully sent to our systems. An agency representative will follow up on <span className="text-white font-medium">within 24 hours</span>.
                </p>

                <button
                  onClick={handleClose}
                  className="mt-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-medium py-2.5 px-8 rounded-xl transition-all duration-300 active:scale-95"
                >
                  Dismiss
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
