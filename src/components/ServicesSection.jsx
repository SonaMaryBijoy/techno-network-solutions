import React, { useRef } from 'react';
import TiltedCard from './TiltedCard';
import RotatingText from './RotatingText';
import AnimatedContent from './AnimatedContent';

export default function ServicesSection({ onSelectService }) {
  const containerRef = useRef(null);

  const services = [
    {
      id: 'cabling',
      num: '01',
      title: 'Structured Cabling & Networking',
      shortDesc: 'Active & passive infrastructure — pathways, server racks, copper Cat6/6A and fiber MMF/SMF termination, testing and dressing.',
    },
    {
      id: 'cctv',
      num: '02',
      title: 'CCTV & Video Surveillance',
      shortDesc: 'IP and analog camera design, NVR/DVR integration, AI video management software and mobile remote monitoring.',
    },
    {
      id: 'security',
      num: '03',
      title: 'Security & Access Control',
      shortDesc: 'Biometric & RFID access, intrusion detection, fire & life safety and retail anti-theft systems.',
    },
    {
      id: 'av',
      num: '04',
      title: 'AV Solutions & Smart Boardrooms',
      shortDesc: 'Boardrooms, auditoriums and telepresence — unified communication that cuts cost and lifts productivity.',
    },
    {
      id: 'datacenter',
      num: '05',
      title: 'Data Center & Server Infrastructure',
      shortDesc: 'Hot/Cold aisle containment, Intelligent PDU power routing, cable trays, and high-density fiber management.',
    }
  ];

  const firstThree = services.slice(0, 3);
  const finalTwo = services.slice(3, 5);

  const renderCard = (svc) => (
    <TiltedCard
      key={svc.id}
      containerHeight="100%"
      containerWidth="100%"
      imageHeight="100%"
      imageWidth="100%"
      rotateAmplitude={10}
      scaleOnHover={1.03}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent
      overlayContent={
        <div className="p-6 sm:p-8 h-full min-h-[320px] sm:min-h-[350px] flex flex-col justify-between bg-[#2563eb] text-white rounded-[24px] border border-blue-400/40 shadow-xl hover:shadow-2xl hover:bg-[#1d4ed8] transition-all group relative overflow-hidden box-border">
          
          {/* Giant Faded White Number Centered in Card */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <span className="font-mono text-[110px] sm:text-[140px] font-black text-white/10 group-hover:text-white/20 transition-colors leading-none tracking-tighter">
              {svc.num}
            </span>
          </div>

          {/* Profile Title & Description */}
          <div className="relative z-10 pt-2">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white mb-3 group-hover:text-cyan-100 transition-colors leading-tight break-words">
              {svc.title}
            </h3>

            <p className="text-blue-50/95 text-xs sm:text-sm leading-relaxed font-medium break-words">
              {svc.shortDesc}
            </p>
          </div>

          {/* Bottom Clean Accent Dot */}
          <div className="relative z-10 pt-4 mt-4 border-t border-white/20 flex items-center justify-end">
            <div className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-150 transition-transform shadow-xs" />
          </div>
        </div>
      }
    />
  );

  return (
    <section id="services" className="py-16 sm:py-24 relative bg-transparent border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full-width Executive Header Box */}
        <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out">
          <div ref={containerRef} className="w-full mb-10 sm:mb-14 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md overflow-hidden">
            <div className="w-full max-w-full">
              {/* Single-line Display Title */}
              <h2 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-[38px] 2xl:text-[42px] tracking-tight leading-none mb-3 sm:mb-4 flex items-center flex-nowrap whitespace-nowrap overflow-x-auto scrollbar-none gap-x-2 sm:gap-x-4 pb-1">
                <span className="flex-shrink-0 font-united-colony font-black text-slate-950 uppercase">
                  FIVE CORE DISCIPLINES,
                </span>
                <span className="flex-shrink-0 font-united-colony font-black text-[#2563eb] inline-flex items-center">
                  <RotatingText
                    texts={['INFINITE POSSIBILITIES.', 'ONE TURNKEY PARTNER.', 'ZERO PACKET DROP.']}
                    mainClassName="px-2 bg-blue-50 text-[#2563eb] rounded-lg border border-blue-200"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    rotationInterval={2500}
                  />
                </span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-4xl font-medium leading-relaxed font-sans">
                From high-density data center optical fiber backbones to AI video surveillance and smart boardroom AV, Techno Network Solutions delivers turnkey infrastructure engineering across 5 core verticals.
              </p>
            </div>
          </div>
        </AnimatedContent>

        {/* First Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 font-sans">
          {firstThree.map((svc) => renderCard(svc))}
        </div>

        {/* Second Row: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 font-sans">
          {finalTwo.map((svc) => renderCard(svc))}
        </div>

      </div>
    </section>
  );
}
