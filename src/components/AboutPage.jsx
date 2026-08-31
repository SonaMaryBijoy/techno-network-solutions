import React, { useRef } from 'react';
import AnimatedContent from './AnimatedContent';
import StrokeText from './StrokeText';
import DepthText from './DepthText';
import TextType from './TextType';
import ElasticMesh from './ElasticMesh';

export default function AboutPage() {
  const containerRef = useRef(null);

  // Exact 8 OEM Brands from Picture
  const oemBrands = [
    { name: "CommScope", logo: "/logos/commscope.svg" },
    { name: "Panduit", logo: "/logos/panduit.svg" },
    { name: "Molex", logo: "/logos/molex.svg" },
    { name: "Belden", logo: "/logos/belden.svg" },
    { name: "D-Link", logo: "/logos/dlink.svg" },
    { name: "R&M", logo: "/logos/rm.svg" },
    { name: "MRS Modular", logo: "/logos/mrs.svg" },
    { name: "President / APC", logo: "/logos/apc-president.svg" }
  ];

  return (
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-20 bg-transparent min-h-screen text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* High-Impact Main Header Section */}
        <AnimatedContent distance={60} direction="vertical" duration={0.8}>
          <div ref={containerRef} className="mb-20 sm:mb-28 w-full">
            
            {/* Massive 3D DepthText Animated Heading in Dual-Tone Blue & White */}
            <div className="mb-6 flex flex-wrap items-center justify-start gap-x-4 gap-y-2 drop-shadow-[0_8px_24px_rgba(37,99,235,0.25)]">
              <DepthText
                text="TECHNO"
                layers={40}
                depth={3.0}
                faceColor="#ffffff"
                depthColor="#2563eb"
                tilt={9}
                pointerTracking
                smoothing={0.14}
                perspective={900}
                autoOrbit
                orbitSpeed={0.35}
                fontSize="clamp(2.5rem, 5.8vw, 4.8rem)"
                fontWeight={900}
                fontFamily="'Unbounded', 'Syne', 'Bricolage Grotesque', sans-serif"
                shadow
              />
              <DepthText
                text="NETWORK SOLUTIONS"
                layers={40}
                depth={3.0}
                faceColor="#2563eb"
                depthColor="#1d4ed8"
                tilt={9}
                pointerTracking
                smoothing={0.14}
                perspective={900}
                autoOrbit
                orbitSpeed={0.35}
                fontSize="clamp(2.5rem, 5.8vw, 4.8rem)"
                fontWeight={900}
                fontFamily="'Unbounded', 'Syne', 'Bricolage Grotesque', sans-serif"
                shadow
              />
            </div>

            {/* Top Grid: Description + ElasticMesh Interactive Picture of Server Racks */}
            <div className="grid lg:grid-cols-12 gap-8 items-center mt-6">
              <div className="lg:col-span-7">
                <p className="text-slate-700 text-base sm:text-xl font-medium leading-relaxed mb-4 max-w-4xl">
                  Established in 2010 with a singular commitment to engineering excellence, Techno Network Solutions is Bangalore's premier structured cabling, fiber optic, CCTV surveillance, access control, and boardroom AV integration firm.
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center w-full">
                <div className="w-full h-[300px] sm:h-[340px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white relative">
                  <ElasticMesh
                    image="/about-server-racks.png"
                    interaction="hover"
                    tilt={14}
                    shading={0.5}
                    color1="#5227FF"
                    color2="#B19EEF"
                    showGrid
                    gridDensity={20}
                    gridOpacity={0.28}
                    gridColor="#ffffff"
                    highlight="#ffffff"
                    borderRadius={25}
                    stiffness={0.05}
                    damping={0.2}
                    grabRadius={0.6}
                    pull={0.4}
                    wobble={5}
                    resolution={25}
                    enabled
                  />
                </div>
              </div>
            </div>

          </div>
        </AnimatedContent>

        {/* Corporate Profile Details - Clean Layout Without Glassmorphic Cards */}
        <div className="grid md:grid-cols-2 gap-10 sm:gap-14 mt-16 sm:mt-24 mb-24 sm:mb-32 pt-8 font-sans">
          
          {/* OUR MISSION - Pure Black Heading & Cursor */}
          <div className="p-2 space-y-4 overflow-hidden">
            <div className="mb-2 min-h-[40px] whitespace-nowrap overflow-hidden flex items-center">
              <TextType
                text="OUR MISSION"
                typingSpeed={35}
                loop={false}
                startOnVisible={true}
                showCursor={true}
                cursorCharacter="▋"
                cursorClassName="text-black font-mono text-2xl animate-pulse ml-1"
                className="text-xl sm:text-2xl font-display font-black text-black uppercase tracking-wide whitespace-nowrap"
              />
            </div>
            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
              We ensure that every network drop, server rack, and security system installed by our crew adheres to international TIA/EIA-568 and ISO/IEC 11801 standards. We continuously invest in our engineers' training so customers receive state-of-the-art technology and lifetime reliability.
            </p>

            {/* Figures from Company File */}
            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="font-display font-black text-3xl text-[#12ACE0] block">40+</span>
                <span className="text-[11px] font-mono font-bold text-slate-600 uppercase mt-1 block">In-House Engineers</span>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="font-display font-black text-3xl font-black text-emerald-600 block">100%</span>
                <span className="text-[11px] font-mono font-bold text-slate-600 uppercase mt-1 block">Fluke Certified Links</span>
              </div>
            </div>
          </div>

          {/* SAFETY & QUALITY FIRST - Pure Black Heading & Cursor */}
          <div className="p-2 space-y-4 overflow-hidden">
            <div className="mb-2 min-h-[40px] whitespace-nowrap overflow-hidden flex items-center">
              <TextType
                text="SAFETY & QUALITY FIRST"
                typingSpeed={35}
                loop={false}
                startOnVisible={true}
                showCursor={true}
                cursorCharacter="▋"
                cursorClassName="text-black font-mono text-2xl animate-pulse ml-1"
                className="text-xl sm:text-2xl font-display font-black text-black uppercase tracking-wide whitespace-nowrap"
              />
            </div>
            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
              "Excellence in Safety leads to excellence in business." Over 90% of our projects are executed exclusively by our own trained personnel wearing branded PPE. Every copper link is certified with Fluke Versiv analyzers, with zero compromises on bend radius or dressing.
            </p>

            {/* Figures from Company File */}
            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="font-display font-black text-3xl text-[#3E91D5] block">90%+</span>
                <span className="text-[11px] font-mono font-bold text-slate-600 uppercase mt-1 block">Direct PPE Crew</span>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="font-display font-black text-3xl text-[#985AC0] block">6-12h</span>
                <span className="text-[11px] font-mono font-bold text-slate-600 uppercase mt-1 block">SLA Response DLP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Track Record Stats Band - Pure Black Heading & Cursor */}
        <div className="my-24 sm:my-32 font-sans">
          <div className="text-center max-w-6xl mx-auto mb-10 min-h-[56px] overflow-hidden whitespace-nowrap flex items-center justify-center">
            <TextType
              text="12+ YEARS OF ENTERPRISE DELIVERY"
              typingSpeed={35}
              loop={false}
              startOnVisible={true}
              showCursor={true}
              cursorCharacter="▋"
              cursorClassName="text-black font-mono text-4xl animate-pulse ml-2"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-black text-black uppercase tracking-wide whitespace-nowrap"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 font-sans">
            <div className="p-4 bg-white/80 rounded-xl border border-slate-200/80 text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-display font-black text-[#12ACE0] block">12+</span>
              <span className="text-[11px] font-mono font-bold text-slate-600 uppercase mt-1 block">Years Delivering</span>
            </div>
            <div className="p-4 bg-white/80 rounded-xl border border-slate-200/80 text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-display font-black text-[#3E91D5] block">40+</span>
              <span className="text-[11px] font-mono font-bold text-slate-600 uppercase mt-1 block">In-House Engineers</span>
            </div>
            <div className="p-4 bg-white/80 rounded-xl border border-slate-200/80 text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-display font-black text-[#6B76CA] block">10L+</span>
              <span className="text-[11px] font-mono font-bold text-slate-600 uppercase mt-1 block">Copper Nodes</span>
            </div>
            <div className="p-4 bg-white/80 rounded-xl border border-slate-200/80 text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-display font-black text-[#985AC0] block">25K+</span>
              <span className="text-[11px] font-mono font-bold text-slate-600 uppercase mt-1 block">Fiber Connections</span>
            </div>
            <div className="p-4 bg-white/80 rounded-xl border border-slate-200/80 text-center col-span-2 md:col-span-1 shadow-xs">
              <span className="text-2xl sm:text-3xl font-display font-black text-emerald-600 block">₹100Cr+</span>
              <span className="text-[11px] font-mono font-bold text-slate-600 uppercase mt-1 block">Project Value</span>
            </div>
          </div>
        </div>

        {/* Global OEM Certifications & Brand Associations (Clean Logos Only) */}
        <div className="mb-20 font-sans">
          <div className="text-center max-w-5xl mx-auto mb-10">
            {/* Massive 3D DepthText Animated Heading with Electric Glow */}
            <div className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 drop-shadow-[0_8px_24px_rgba(37,99,235,0.3)]">
              <DepthText
                text="CERTIFIED BY GLOBAL LEADERS IN"
                layers={40}
                depth={2.8}
                faceColor="#ffffff"
                depthColor="#2563eb"
                tilt={9}
                pointerTracking
                smoothing={0.14}
                perspective={900}
                autoOrbit
                orbitSpeed={0.35}
                fontSize="clamp(1.8rem, 4.2vw, 3.4rem)"
                fontWeight={900}
                fontFamily="'Unbounded', 'Syne', 'Bricolage Grotesque', sans-serif"
                shadow
              />
              <DepthText
                text="CABLING & SECURITY"
                layers={40}
                depth={2.8}
                faceColor="#2563eb"
                depthColor="#1d4ed8"
                tilt={9}
                pointerTracking
                smoothing={0.14}
                perspective={900}
                autoOrbit
                orbitSpeed={0.35}
                fontSize="clamp(1.8rem, 4.2vw, 3.4rem)"
                fontWeight={900}
                fontFamily="'Unbounded', 'Syne', 'Bricolage Grotesque', sans-serif"
                shadow
              />
            </div>

            <p className="text-slate-700 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Direct factory certified installation teams delivering up to 25-year manufacturer system performance warranties.
            </p>
          </div>

          {/* 8 OEM Brand Logos Rendered Cleanly - Only Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center pt-4">
            {oemBrands.map((brand, idx) => (
              <div key={idx} className="h-20 sm:h-24 w-full flex items-center justify-center p-3 group">
                <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
