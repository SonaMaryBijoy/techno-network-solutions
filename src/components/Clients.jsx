import React, { useRef } from 'react';
import { LogoLoop } from './LogoLoop';
import AnimatedContent from './AnimatedContent';

export default function Clients() {
  const containerRef = useRef(null);

  const oemLogos = [
    { src: "/logos/commscope.svg", alt: "CommScope Systimax", title: "CommScope Systimax" },
    { src: "/logos/panduit.svg", alt: "Panduit NetKey", title: "Panduit NetKey" },
    { src: "/logos/molex.svg", alt: "Molex Premise Networks", title: "Molex Premise Networks" },
    { src: "/logos/belden.svg", alt: "Belden Hirschmann", title: "Belden Hirschmann" },
    { src: "/logos/dlink.svg", alt: "D-Link Enterprise", title: "D-Link Enterprise" },
    { src: "/logos/rm.svg", alt: "R&M (Reichle & De-Massari)", title: "R&M" },
    { src: "/logos/mrs.svg", alt: "MRS Modular Racks", title: "MRS Modular Racks" },
    { src: "/logos/apc-president.svg", alt: "President / APC", title: "President / APC" }
  ];

  return (
    <section id="clients" className="py-14 sm:py-20 bg-transparent border-y border-slate-200/80 overflow-hidden relative text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Extra-Large Display Header Section */}
        <AnimatedContent distance={40} direction="vertical" duration={0.8} ease="power3.out">
          <div ref={containerRef} className="w-full mb-8 sm:mb-12 text-center max-w-6xl mx-auto font-sans">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-slate-950 uppercase tracking-tight leading-[1.08] mb-3 sm:mb-4 font-sans">
              <span>CERTIFIED BY GLOBAL LEADERS IN </span>
              <span className="text-[#12ACE0]">CABLING & SECURITY.</span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-lg lg:text-xl font-medium leading-relaxed max-w-4xl mx-auto font-sans">
              Our engineers undergo continuous OEM certification to deliver up to 25-year manufacturer system performance warranties on every installation.
            </p>
          </div>
        </AnimatedContent>

        {/* Clean Continuous Infinite Logo Marquee Loop */}
        <div className="py-2 relative overflow-hidden font-sans">
          <LogoLoop
            logos={oemLogos}
            speed={40}
            direction="left"
            logoHeight={56}
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="OEM Certified Partner Logos"
          />
        </div>
      </div>
    </section>
  );
}
