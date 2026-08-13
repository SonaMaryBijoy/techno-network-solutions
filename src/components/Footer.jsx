import React from 'react';
import { Phone, Mail, MapPin, Globe, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate, onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (id) => {
    if (onNavigate) onNavigate(id);
    scrollToTop();
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 pt-12 sm:pt-16 pb-10 sm:pb-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand Info */}
          <div className="sm:col-span-2 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="bg-white border border-slate-200 rounded-xl p-1.5 shadow-sm">
                <img src="/techno-logo.png" alt="Techno Network Solutions Logo" className="h-7 sm:h-8 w-auto object-contain" />
              </div>
              <span className="font-heading font-black text-base sm:text-lg text-slate-900 tracking-tight">
                TECHNO <span className="text-[#12ACE0]">NETWORK</span> SOLUTIONS
              </span>
            </div>

            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              Bangalore's trusted structured cabling, fiber optic, CCTV surveillance, access control, and boardroom AV infrastructure team. 40+ in-house engineers, 10L+ copper nodes delivered.
            </p>

            <div className="flex items-center gap-2 text-emerald-600 font-semibold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>SYSTEM STATUS: OPERATIONAL // 24/7 SUPPORT</span>
            </div>
          </div>

          {/* Col 2: Navigation Pages */}
          <div>
            <h4 className="font-heading font-black text-slate-900 uppercase text-xs tracking-wider mb-3 sm:mb-4">NAVIGATION</h4>
            <ul className="space-y-2 text-slate-600 font-semibold">
              <li><button onClick={() => handleNav('home')} className="hover:text-[#12ACE0] transition-colors cursor-pointer">Home Page</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-[#12ACE0] transition-colors cursor-pointer">Our Services</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-[#12ACE0] transition-colors cursor-pointer">About Us & Leadership</button></li>
              <li><button onClick={() => handleNav('clients')} className="hover:text-[#12ACE0] transition-colors cursor-pointer">Clients Portfolio</button></li>
              <li><button onClick={() => handleNav('partners')} className="hover:text-[#12ACE0] transition-colors cursor-pointer">OEM Partners</button></li>
              <li><button onClick={() => handleNav('gallery')} className="hover:text-[#12ACE0] transition-colors cursor-pointer">Project Gallery</button></li>
              <li><button onClick={() => handleNav('careers')} className="hover:text-[#12ACE0] transition-colors cursor-pointer">Careers & Job Portal</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-[#12ACE0] transition-colors cursor-pointer">Contact Us</button></li>
            </ul>
          </div>

          {/* Col 3: Contact HQ with Exact Reference Details */}
          <div>
            <h4 className="font-heading font-black text-slate-900 uppercase text-xs tracking-wider mb-3 sm:mb-4">BANGALORE HQ</h4>
            <ul className="space-y-3 text-slate-600 font-semibold">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#12ACE0] flex-shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <strong className="text-slate-800 font-bold block">ADDRESS:</strong>
                  <span>1st Floor, Sai Nivas, TC Palya Main Road, Bangalore 560036</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <strong className="text-slate-800 font-bold block">CONT NUM:</strong>
                  <a href="tel:+917259279814" className="hover:text-[#12ACE0] transition-colors font-bold">+91 7259279814</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#985AC0] flex-shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <strong className="text-slate-800 font-bold block">EMAIL:</strong>
                  <a href="mailto:projects@tnsnw.com" className="hover:text-[#12ACE0] transition-colors font-bold">projects@tnsnw.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <strong className="text-slate-800 font-bold block">WEB SITE:</strong>
                  <a href="https://www.tnsnw.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#12ACE0] transition-colors font-bold">www.tnsnw.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-semibold text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Techno Network Solutions. All Rights Reserved. ISO/IEC 14763-1 Compliant.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#12ACE0] hover:border-[#12ACE0] transition-colors shadow-sm cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
