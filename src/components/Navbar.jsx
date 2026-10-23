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
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-lg py-2'
          : 'bg-slate-900/80 backdrop-blur-md py-2.5 sm:py-3 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
        
        {/* Top Header Row: Clean Brand Logo & Mobile Toggle */}
        <div className="flex items-center justify-between gap-3">
          <button onClick={() => handleNavClick('home')} className="flex items-center group text-left cursor-pointer flex-shrink-0" aria-label="Techno Network Solutions Home">
            <div className="group-hover:scale-105 transition-transform flex items-center">
              <img src="/techno-logo.png" alt="Techno Network Solutions Logo" className="h-7 sm:h-9 lg:h-10 w-auto object-contain" />
            </div>
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
                      ? 'bg-[#12ACE0] text-white shadow-sm scale-[1.02]'
                      : 'text-slate-300 hover:text-[#12ACE0] hover:bg-white/10'
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
          <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5 font-sans">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-heading font-extrabold text-xs tracking-wider uppercase transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-[#12ACE0] text-white shadow-sm font-black'
                        : 'text-slate-300 hover:bg-white/10 hover:text-[#12ACE0]'
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
