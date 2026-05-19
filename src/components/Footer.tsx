import React from 'react';

interface FooterProps {
  onOpenPrivacy: (tab: 'privacy' | 'terms') => void;
  onOpenVision: () => void;
}

export function Footer({ onOpenPrivacy, onOpenVision }: FooterProps) {
  return (
    <footer className="bg-h2t-black py-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex-shrink-0">
            <a href="#" className="block hover:opacity-85 transition-opacity">
              <img src="/image.png" alt="H2T Technologies Logo" className="h-8 sm:h-9 w-auto object-contain" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Gmail */}
            <a 
              href="mailto:support@h2t.tech" 
              title="Email Us"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-h2t-red hover:text-white hover:border-h2t-red transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/h2t.tech?igsh=b2t3YmRsdzN3bWFq" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Follow us on Instagram"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-h2t-red hover:text-white hover:border-h2t-red transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/919566245321" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Chat on WhatsApp"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-h2t-red hover:text-white hover:border-h2t-red transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/h2t-technologies/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Follow us on LinkedIn"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-h2t-red hover:text-white hover:border-h2t-red transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/H2TTechnologies" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Join us on Telegram"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-h2t-red hover:text-white hover:border-h2t-red transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} H2T Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <button 
              onClick={() => onOpenPrivacy('privacy')} 
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenPrivacy('terms')} 
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Terms of Service
            </button>
            <button 
              onClick={onOpenVision} 
              className="hover:text-white transition-colors cursor-pointer focus:outline-none animate-pulse"
              style={{ animationDuration: '3s' }}
            >
              Vision & Mission
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
