import React, { useState, useEffect } from 'react';

export default function Navbar({ currentPage, onNavigate, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main Page Links
  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About Us' },
    { id: 'services', name: 'Services' },
    { id: 'clients', name: 'Clients' },
    { id: 'partners', name: 'Partners' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'careers', name: 'Careers' },
    { id: 'contact', name: 'Contact Us' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md py-2'
          : 'bg-white/90 backdrop-blur-md py-2.5 sm:py-3 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
        
        {/* Top Header Row: Clean Brand Logo & Title */}
        <div className="flex items-center justify-between gap-3">
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer flex-shrink-0">
            <div className="bg-white border border-slate-200/90 rounded-xl p-1.5 shadow-xs group-hover:scale-105 transition-transform flex items-center">
              <img src="/techno-logo.png" alt="Techno Network Solutions Logo" className="h-7 sm:h-8 lg:h-9 w-auto object-contain" />
            </div>
            <span className="font-heading font-black text-sm sm:text-base lg:text-lg text-slate-950 tracking-tight whitespace-nowrap uppercase">
              TECHNO <span className="text-[#12ACE0]">NETWORK</span> SOLUTIONS
            </span>
          </button>
        </div>

        {/* Bottom Header Row: Single Line Executive Navigation Pages */}
        <div>
          <nav className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-xl font-heading font-extrabold text-[11px] sm:text-xs tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm scale-[1.02]'
                      : 'text-slate-700 hover:text-[#12ACE0] hover:bg-slate-100/90'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>
        </div>

      </div>
    </header>
  );
}
