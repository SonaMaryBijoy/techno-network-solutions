import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md py-2'
          : 'bg-white/90 backdrop-blur-md py-2.5 sm:py-3 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
        
        {/* Top Header Row: Clean Brand Logo & Mobile Toggle */}
        <div className="flex items-center justify-between gap-3">
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 sm:gap-3 group text-left cursor-pointer flex-shrink-0">
            <div className="bg-white border border-slate-200/90 rounded-xl p-1.5 shadow-xs group-hover:scale-105 transition-transform flex items-center">
              <img src="/techno-logo.png" alt="Techno Network Solutions Logo" className="h-6 sm:h-8 lg:h-9 w-auto object-contain" />
            </div>
            <span className="font-heading font-black text-xs sm:text-base lg:text-lg text-slate-950 tracking-tight whitespace-nowrap uppercase">
              TECHNO <span className="text-[#12ACE0]">NETWORK</span> SOLUTIONS
            </span>
          </button>

          {/* Mobile Hamburger Menu Button (Visible on screens < 768px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
          </button>
        </div>

        {/* Desktop Single Line Executive Navigation Pages */}
        <div className="hidden md:block">
          <nav className="flex items-center justify-center gap-1.5 py-1 scrollbar-none">
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

        {/* Mobile Slide-Down Navigation Drawer (Visible on screens < 768px) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5 font-sans">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-heading font-extrabold text-xs tracking-wider uppercase transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-sm font-black'
                        : 'text-slate-800 hover:bg-slate-100/90 hover:text-[#12ACE0]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#12ACE0]" />}
                  </button>
                );
              })}
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
