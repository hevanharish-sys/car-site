import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, Info, Scale, HelpCircle } from 'lucide-react';

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
                      {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
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
                >
                  Terms of Service
                </button>
              </div>

              {/* Scrollable text panel */}
              <div className="overflow-y-auto pr-2 max-h-[50vh] space-y-6 text-sm text-gray-300 font-light leading-relaxed scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                
                {activeTab === 'privacy' ? (
                  /* ================== PRIVACY POLICY TAB ================== */
                  <div className="space-y-6">
                    <p className="text-white/90">
                      At H2T Technologies, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website, services, and digital platforms.
                    </p>

                    <hr className="border-white/5 my-4" />

                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">1.</span> Information We Collect
                      </h4>
                      <p>We may collect the following information when you use our website or contact our team:</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-h2t-red mb-2 flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5" /> Personal Information
                          </h5>
                          <ul className="list-disc list-inside space-y-1 text-xs text-gray-400">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Business details</li>
                            <li>Social media profile links</li>
                          </ul>
                        </div>

                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-h2t-red mb-2 flex items-center gap-1.5">
                            <Info className="w-3.5 h-3.5" /> Technical Information
                          </h5>
                          <ul className="list-disc list-inside space-y-1 text-xs text-gray-400">
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>Device information</li>
                            <li>Pages visited</li>
                            <li>Cookies and analytics data</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mt-3">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-h2t-red mb-2">
                          Service-Related Information
                        </h5>
                        <p className="text-xs text-gray-400 mb-2">Information shared while requesting:</p>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-1 list-disc list-inside text-xs text-gray-400">
                          <li>Website development</li>
                          <li>Video editing</li>
                          <li>Marketing services</li>
                          <li>Automation solutions</li>
                          <li>Advertisement campaigns</li>
                        </ul>
                      </div>
                    </div>

                    <hr className="border-white/5 my-4" />

                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">2.</span> How We Use Your Information
                      </h4>
                      <p>H2T Technologies uses collected information to:</p>
                      <ul className="list-disc list-inside space-y-1 pl-2 text-gray-400">
                        <li>Provide and improve our services</li>
                        <li>Respond to inquiries and consultation requests</li>
                        <li>Deliver project updates and support</li>
                        <li>Improve website performance and user experience</li>
                        <li>Run analytics and marketing campaigns</li>
                        <li>Maintain platform security and prevent misuse</li>
                      </ul>
                      <p className="text-white/80 italic font-normal mt-2">
                        We do not sell, rent, or trade your personal information to third parties.
                      </p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">3.</span> Cookies & Tracking Technologies
                      </h4>
                      <p>Our website may use cookies and similar technologies to:</p>
                      <ul className="list-disc list-inside space-y-1 pl-2 text-gray-400">
                        <li>Analyze website traffic</li>
                        <li>Improve user experience</li>
                        <li>Remember preferences</li>
                        <li>Enhance website functionality</li>
                      </ul>
                      <p>You may disable cookies through your browser settings if preferred.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">4.</span> Data Protection & Security
                      </h4>
                      <p>We implement industry-standard security measures to protect your data against unauthorized access, data loss, misuse, disclosure, or alteration.</p>
                      <p className="text-gray-400 italic">While we strive to protect your information, no online platform can guarantee absolute security.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">5.</span> Third-Party Services
                      </h4>
                      <p>We may use trusted third-party tools and platforms including:</p>
                      <ul className="list-disc list-inside space-y-1 pl-2 text-gray-400">
                        <li>Google Analytics</li>
                        <li>Meta Advertising Platforms</li>
                        <li>LinkedIn Marketing Tools</li>
                        <li>WhatsApp Business Services</li>
                        <li>Payment gateways and hosting providers</li>
                      </ul>
                      <p>These services may collect information according to their own privacy policies.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">6.</span> Data Sharing
                      </h4>
                      <p>We only share information when legally required, to provide requested services, or with trusted partners involved in project delivery. We ensure reasonable confidentiality measures are maintained.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">7.</span> Your Rights
                      </h4>
                      <p>You have the right to:</p>
                      <ul className="list-disc list-inside space-y-1 pl-2 text-gray-400">
                        <li>Access your personal information</li>
                        <li>Request corrections or updates</li>
                        <li>Request deletion of your data</li>
                        <li>Withdraw consent for marketing communications</li>
                      </ul>
                      <p>To request any changes, contact us directly.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">8.</span> External Links
                      </h4>
                      <p>Our website may contain links to third-party websites or social platforms. H2T Technologies is not responsible for the privacy practices or content of external websites.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">9.</span> Changes to This Policy
                      </h4>
                      <p>We may update this Privacy Policy periodically to reflect service changes, legal updates, or security improvements. Updated versions will be published on this page.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">10.</span> Contact Information
                      </h4>
                      <p>For privacy-related questions or requests, contact:</p>
                      
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 text-xs text-gray-400">
                        <p className="font-bold text-white text-sm mb-1">H2T Technologies</p>
                        <p>Email: <a href="mailto:support@h2t.tech" className="text-h2t-red hover:underline">support@h2t.tech</a></p>
                        <p>Website: <a href="https://h2t.tech" target="_blank" rel="noopener noreferrer" className="text-h2t-red hover:underline">h2t.tech</a></p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ================== TERMS OF SERVICE TAB ================== */
                  <div className="space-y-6">
                    <p className="text-white/90">
                      Welcome to H2T Technologies. By accessing our website, services, or digital platforms, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully before using our services.
                    </p>

                    <hr className="border-white/5 my-4" />

                    {/* Section 1 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">1.</span> Acceptance of Terms
                      </h4>
                      <p>
                        By accessing or using any services provided by H2T Technologies, you confirm that you have read, understood, and agreed to these Terms of Service and our Privacy Policy.
                      </p>
                      <p className="text-gray-400 italic">
                        If you do not agree with any part of these terms, please discontinue use of our services immediately.
                      </p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 2 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">2.</span> Services Offered
                      </h4>
                      <p>H2T Technologies provides digital and technology-related services including, but not limited to:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-disc list-inside text-gray-400">
                        <li>Website Development</li>
                        <li>Video Editing</li>
                        <li>Business Automation</li>
                        <li>WhatsApp Marketing & Automation</li>
                        <li>Meta Ads Management</li>
                        <li>Google & YouTube Advertising</li>
                        <li>LinkedIn Growth Solutions</li>
                        <li>SEO Optimization</li>
                        <li>Branding & Creative Services</li>
                        <li>Digital Consultation & Strategy</li>
                      </ul>
                      <p className="text-xs text-gray-500 pt-1">
                        We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
                      </p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 3 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">3.</span> Client Responsibilities
                      </h4>
                      <p>Clients agree to:</p>
                      <ul className="list-disc list-inside space-y-1 pl-2 text-gray-400">
                        <li>Provide accurate project requirements and information</li>
                        <li>Respond to communication within a reasonable timeframe</li>
                        <li>Provide necessary access, credentials, approvals, and assets when required</li>
                        <li>Ensure submitted content complies with applicable laws and regulations</li>
                        <li>Avoid submitting illegal, copyrighted, harmful, or misleading materials</li>
                      </ul>
                      <p className="text-xs text-gray-500 italic mt-2">
                        H2T Technologies shall not be responsible for delays caused by incomplete information, delayed responses, or lack of client cooperation.
                      </p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 4 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">4.</span> Payments, Billing & Refunds
                      </h4>
                      <ul className="list-disc list-inside space-y-1 pl-2 text-gray-400 mb-3">
                        <li>Payments must be made according to agreed project terms and timelines.</li>
                        <li>Advance payments may be required before project initiation.</li>
                        <li>Delayed payments may result in paused services, restricted access, or project delays.</li>
                        <li>Pricing for custom projects, retainers, subscriptions, and marketing services will be discussed individually.</li>
                      </ul>
                      
                      <div className="p-4 rounded-xl bg-h2t-red/5 border border-h2t-red/15 mt-2">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-h2t-red mb-2">
                          Refund Policy
                        </h5>
                        <p className="text-xs text-gray-400 mb-2">
                          All payments made to H2T Technologies are generally non-refundable once work has commenced.
                        </p>
                        <p className="text-xs text-gray-400">
                          However, refunds may be issued only if H2T Technologies agrees under specific circumstances after reviewing the project status, service usage, and work completed. Refund approvals, if any, will be provided solely at the discretion of H2T Technologies.
                        </p>
                      </div>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 5 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">5.</span> Intellectual Property
                      </h4>
                      <p>Unless otherwise agreed in writing:</p>
                      <ul className="list-disc list-inside space-y-1 pl-2 text-gray-400">
                        <li>Final approved deliverables become the property of the client after full payment is completed.</li>
                        <li>H2T Technologies retains the right to showcase completed work in portfolios, social media, presentations, and case studies unless restricted through a confidentiality agreement.</li>
                      </ul>
                      <p className="text-white/80 mt-2 font-normal">
                        All proprietary systems, frameworks, automation setups, internal processes, concepts, and development methodologies remain the intellectual property of H2T Technologies.
                      </p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 6 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">6.</span> Revisions & Scope Changes
                      </h4>
                      <p>Projects include revisions based on agreed service terms.</p>
                      <p>Additional revisions, feature additions, or requests beyond the original project scope may increase project costs, extend delivery timelines, or require a revised agreement. Major scope changes may be treated as separate project phases.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 7 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">7.</span> Delivery Timelines
                      </h4>
                      <p>Estimated timelines are provided based on project scope and available information. H2T Technologies will make reasonable efforts to deliver projects on time but shall not be held liable for delays caused by client-side delays, third-party platform issues, hosting or server problems, unexpected technical complications, or force majeure events.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 8 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">8.</span> Third-Party Platforms & Services
                      </h4>
                      <p>Our services may involve third-party platforms including: Google, Meta Platforms, Instagram, Facebook, LinkedIn, YouTube, WhatsApp Business, hosting providers, and analytics tools.</p>
                      <p className="text-gray-400 italic">H2T Technologies is not responsible for platform policy changes, account suspensions, advertising restrictions, algorithm updates, or third-party outages or technical failures.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 9 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">9.</span> Limitation of Liability
                      </h4>
                      <p>H2T Technologies shall not be held liable for: indirect or consequential damages, business interruption or revenue loss, data loss caused by third-party services, security breaches outside our reasonable control, marketing performance fluctuations, or client misuse of delivered systems or services.</p>
                      <p className="text-xs text-gray-500">All services are provided on a best-effort and commercially reasonable basis.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 10 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">10.</span> Confidentiality
                      </h4>
                      <p>H2T Technologies respects client confidentiality and will take reasonable measures to protect sensitive business information shared during projects. Clients also agree not to publicly disclose confidential pricing, strategies, proprietary systems, or internal workflows without written consent.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 11 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">11.</span> Termination of Services
                      </h4>
                      <p>We reserve the right to suspend or terminate services if these terms are violated, fraudulent/illegal activity is detected, payments remain unpaid, abusive/inappropriate behavior occurs, or platform misuse damages company reputation. Clients may terminate services according to mutually agreed notice periods and contract terms.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 12 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">12.</span> Website Usage
                      </h4>
                      <p>Users agree not to: attempt unauthorized access to systems, copy or misuse website content, distribute harmful software or malicious code, or use our services for illegal or unethical activities. Violation may result in immediate service termination and legal action if necessary.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 13 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">13.</span> Modifications to Terms
                      </h4>
                      <p>H2T Technologies reserves the right to update or modify these Terms of Service at any time without prior notice. Updated versions will be published on this page with a revised effective date. Continued use of our services after updates constitutes acceptance of the revised terms.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 14 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">14.</span> Governing Law
                      </h4>
                      <p>These Terms of Service shall be governed and interpreted in accordance with applicable laws and regulations. Any disputes arising from these terms shall be subject to the appropriate legal jurisdiction.</p>
                    </div>

                    <hr className="border-white/5 my-4" />

                    {/* Section 15 */}
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-h2t-red font-mono">15.</span> Contact Information
                      </h4>
                      <p>For questions regarding these Terms of Service, contact:</p>
                      
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 text-xs text-gray-400">
                        <p className="font-bold text-white text-sm mb-1">H2T Technologies</p>
                        <p>Email: <a href="mailto:support@h2t.tech" className="text-h2t-red hover:underline">support@h2t.tech</a></p>
                        <p>Website: <a href="https://h2t.tech" target="_blank" rel="noopener noreferrer" className="text-h2t-red hover:underline">h2t.tech</a></p>
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
