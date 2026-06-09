import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, Info, Scale, HelpCircle, User, Settings, Share2, Cookie, Lock, Link, UserCheck, Database, Smile } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab: 'privacy' | 'terms';
}

export function PrivacyModal({ isOpen, onClose, defaultTab }: PrivacyModalProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(defaultTab);

  // Sync activeTab with defaultTab when modal is triggered open
  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 30 }}
            transition={{ type: 'spring', duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[720px] overflow-hidden rounded-[24px] p-[1.5px] shadow-[0_0_60px_rgba(255,26,26,0.15)]"
          >
            {/* Star Border gradient tracking */}
            <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none">
              <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,transparent_75%,#ff1a1a_100%)] animate-[spin_6s_linear_infinite]" />
            </div>

            {/* Inner Content Card container */}
            <div className="relative z-10 w-full rounded-[22.5px] bg-[#060608]/98 p-6 sm:p-10 backdrop-blur-2xl flex flex-col max-h-[90vh]">
              
              {/* Header block */}
              <div className="flex items-start justify-between border-b border-white/10 pb-5 mb-6 relative">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-h2t-red/10 border border-h2t-red/25 flex items-center justify-center text-h2t-red">
                    {activeTab === 'privacy' ? <ShieldCheck className="w-6 h-6" /> : <Scale className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-tight leading-none">
                      {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1.5 font-normal tracking-wide uppercase">
                      H2T Technologies
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Dynamic Pill Tabs Switch */}
              <div className="flex bg-white/[0.03] border border-white/5 p-1 rounded-xl mb-6">
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`flex-1 py-2 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    activeTab === 'privacy'
                      ? 'bg-h2t-red text-white shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setActiveTab('terms')}
                  className={`flex-1 py-2 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    activeTab === 'terms'
                      ? 'bg-h2t-red text-white shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >Terms & Conditions</button>
              </div>

              {/* Scrollable text panel */}
              <div className="overflow-y-auto pr-2 max-h-[50vh] space-y-6 text-sm text-gray-300 font-light leading-relaxed scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                
                {activeTab === 'privacy' ? (
                  /* ================== PRIVACY POLICY TAB ================== */
                  <div className="space-y-8 mb-8">
                    <div className="text-center mb-8 mt-2">
                      <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-widest mb-4 flex items-center justify-center gap-4">
                        <span className="h-[2px] w-6 bg-h2t-red"></span>
                        PRIVACY POLICY
                        <span className="h-[2px] w-6 bg-h2t-red"></span>
                      </h2>
                      <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        H2T Technologies respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                      {/* Item 1 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">1</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Information We Collect</h3>
                        </div>
                        <div className="flex gap-4 items-start">
                          <User className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                          <p className="text-xs text-gray-400 leading-relaxed">
                            We collect personal information that you provide to us, such as your name, email address, phone number, company name, and any other details shared while contacting us or using our services. We may also collect non-personal information such as browser type, device information, and website usage data.
                          </p>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">2</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">How We Use Your Information</h3>
                        </div>
                        <div className="flex gap-4 items-start">
                          <Settings className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                          <p className="text-xs text-gray-400 leading-relaxed">
                            We use the information we collect to provide, maintain, and improve our services, to respond to inquiries, to communicate with you, to send updates or promotional materials (with your consent), and to enhance your overall experience with our website and services.
                          </p>
                        </div>
                      </div>

                      {/* Item 3 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">3</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Information Sharing</h3>
                        </div>
                        <div className="flex gap-4 items-start">
                          <Share2 className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                          <p className="text-xs text-gray-400 leading-relaxed">
                            We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners or service providers who assist us in operating our website and delivering our services, provided they agree to keep your information confidential.
                          </p>
                        </div>
                      </div>

                      {/* Item 4 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">4</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Cookies And Tracking Technologies</h3>
                        </div>
                        <div className="flex gap-4 items-start">
                          <Cookie className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                          <p className="text-xs text-gray-400 leading-relaxed">
                            Our website uses cookies and similar technologies to enhance user experience, analyze website traffic, and understand user behavior. You can choose to disable cookies through your browser settings, but this may affect certain functionality of our website.
                          </p>
                        </div>
                      </div>

                      {/* Item 5 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">5</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Data Security</h3>
                        </div>
                        <div className="flex gap-4 items-start">
                          <Lock className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                          <p className="text-xs text-gray-400 leading-relaxed">
                            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of online transmission is 100% secure.
                          </p>
                        </div>
                      </div>

                      {/* Item 6 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">6</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Third-Party Links</h3>
                        </div>
                        <div className="flex gap-4 items-start">
                          <Link className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                          <p className="text-xs text-gray-400 leading-relaxed">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. We encourage you to review the privacy policies of those websites before providing any information.
                          </p>
                        </div>
                      </div>

                      {/* Item 7 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">7</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Your Rights</h3>
                        </div>
                        <div className="flex gap-4 items-start">
                          <UserCheck className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                          <p className="text-xs text-gray-400 leading-relaxed">
                            You have the right to access, update, or delete your personal information. You may also opt out of receiving promotional communications from us at any time by contacting us directly.
                          </p>
                        </div>
                      </div>

                      {/* Item 8 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">8</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Data Retention</h3>
                        </div>
                        <div className="flex gap-4 items-start">
                          <Database className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                          <p className="text-xs text-gray-400 leading-relaxed">
                            We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for legal, accounting, or reporting requirements.
                          </p>
                        </div>
                      </div>

                      {/* Item 9 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">9</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Children's Privacy</h3>
                        </div>
                        <div className="flex gap-4 items-start">
                          <Smile className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                          <p className="text-xs text-gray-400 leading-relaxed">
                            Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take steps to delete it.
                          </p>
                        </div>
                      </div>

                      {/* Item 10 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">10</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Changes To This Policy</h3>
                        </div>
                        <div className="flex gap-4 items-start">
                          <FileText className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                          <p className="text-xs text-gray-400 leading-relaxed">
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-12 flex items-center justify-center gap-2 text-gray-400 border-t border-white/10 pt-6">
                      <ShieldCheck className="w-4 h-4 text-h2t-red" />
                      <p className="text-xs italic">
                        By using our website or services, you consent to the terms of this Privacy Policy.
                      </p>
                    </div>
                  </div>
                ) : (
                  /* ================== TERMS & CONDITIONS TAB ================== */
                  <div className="space-y-8 mb-8">
                    <div className="text-center mb-8 mt-2">
                      <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-widest mb-4 flex items-center justify-center gap-4">
                        <span className="h-[2px] w-6 bg-h2t-red"></span>
                        TERMS & CONDITIONS
                        <span className="h-[2px] w-6 bg-h2t-red"></span>
                      </h2>
                    </div>

                    <div className="flex flex-col gap-8">
                      {/* Item 1 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">1</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Project Initiation</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-9">
                          All projects will commence only after confirmation from the client and acceptance of the quotation, proposal, or invoice shared by H2T Technologies.
                        </p>
                      </div>

                      {/* Item 2 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">2</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Payment Terms</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-9">
                          A minimum advance payment may be required before starting the project. Remaining payments must be completed according to the agreed milestones or delivery schedule.
                        </p>
                      </div>

                      {/* Item 3 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">3</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Project Delivery</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-9">
                          Delivery timelines are estimated based on project scope and client response time. Delays in content, approvals, or communication from the client may affect final delivery dates.
                        </p>
                      </div>

                      {/* Item 4 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">4</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Revisions</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-9">
                          Reasonable revisions are included as per the agreed project scope. Additional revisions or major scope changes may involve extra charges.
                        </p>
                      </div>

                      {/* Item 5 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">5</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Client Responsibilities</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-9">
                          The client must provide all necessary content, credentials, branding assets, and approvals required for successful project execution.
                        </p>
                      </div>

                      {/* Item 6 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">6</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Intellectual Property</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-9">
                          All completed deliverables become the property of the client only after full payment clearance. H2T Technologies reserves the right to showcase completed work in its portfolio unless otherwise agreed.
                        </p>
                      </div>

                      {/* Item 7 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">7</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Website & Digital Services</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-9">
                          H2T Technologies is not responsible for downtime, third-party hosting failures, API limitations, domain issues, or external platform policy changes affecting project performance.
                        </p>
                      </div>

                      {/* Item 8 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">8</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Confidentiality</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-9">
                          All sensitive business information shared with H2T Technologies will be handled with strict confidentiality and used solely for project purposes.
                        </p>
                      </div>

                      {/* Item 9 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">9</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Support & Maintenance</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-9">
                          Post-delivery support or maintenance will be provided only if included in the project agreement or maintenance package.
                        </p>
                      </div>

                      {/* Item 10 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">10</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Termination</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-9">
                          H2T Technologies reserves the right to pause or terminate services in cases involving payment delays, misuse, illegal activities, or violation of agreed terms.
                        </p>
                      </div>

                      {/* Item 11 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">11</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Limitation of Liability</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-9">
                          H2T Technologies shall not be held liable for indirect losses, business interruption, data loss, or damages arising from the use of delivered digital products or services.
                        </p>
                      </div>

                      {/* Item 12 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm shrink-0">12</div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Acceptance</h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-9">
                          By proceeding with H2T Technologies services, the client acknowledges and agrees to these terms and conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {/* Closing quote */}
                <div className="pt-6 pb-2 border-t border-white/5 text-center">
                  <p className="italic text-xs text-gray-400 font-sans px-4">
                    {activeTab === 'privacy' 
                      ? '“Your trust is important to us. We are committed to protecting your data with transparency, security, and responsibility.”'
                      : '“At H2T Technologies, we believe in building transparent, reliable, and growth-focused partnerships through innovation, trust, and long-term collaboration.”'}
                  </p>
                </div>
              </div>

              {/* Bottom footer button bar */}
              <div className="border-t border-white/10 pt-5 mt-6 flex justify-end">
                <button
                  onClick={onClose}
                  className="bg-h2t-red hover:bg-red-600 text-white font-semibold py-2.5 px-8 rounded-xl transition-all duration-300 active:scale-95 text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(255,26,26,0.2)]"
                >
                  I Understand
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
