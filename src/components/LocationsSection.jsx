import React, { useState } from 'react';
import TiltedCard from './TiltedCard';
import AnimatedContent from './AnimatedContent';
import { MapPin, Activity } from 'lucide-react';

export default function LocationsSection({ onOpenQuote }) {
  const hubs = [
    {
      id: 'bangalore',
      city: 'Bangalore',
      region: 'KARNATAKA & HEADQUARTERS',
      desc: 'Central Engineering Command, Cable Assembly Testing Facility & Master Warehouse.',
      specs: 'Central Support Command · 24/7 Deployment Unit',
      coords: { x: '41%', y: '68%' },
      isHQ: true
    },
    {
      id: 'hyderabad',
      city: 'Hyderabad',
      region: 'TELANGANA & AP HUB',
      desc: 'Data Center & Tech Park Cabling Execution Unit.',
      specs: 'Dedicated Tech Park Cabling & CCTV Support Crew',
      coords: { x: '46.5%', y: '56.5%' }
    },
    {
      id: 'chennai',
      city: 'Chennai',
      region: 'TAMIL NADU HUB',
      desc: 'Enterprise Structured Cabling & Optical Fiber Execution Team.',
      specs: 'Enterprise Cabling & Fiber Optics Support',
      coords: { x: '50.5%', y: '68.5%' }
    },
    {
      id: 'kerala',
      city: 'Kerala',
      region: 'KERALA REGIONAL HUB',
      desc: 'Regional Infrastructure Engineering & Security Systems Command.',
      specs: 'Regional Engineering & Security Support Unit',
      coords: { x: '37.5%', y: '74.5%' }
    }
  ];

  const [activeHub, setActiveHub] = useState('bangalore');
  const currentHubData = hubs.find(h => h.id === activeHub) || hubs[0];

  return (
    <section id="locations" className="py-16 sm:py-24 bg-transparent border-t border-slate-200 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center font-sans">
          
          {/* Left Column: Geographically Precise Interactive India SVG Map */}
          <div className="lg:col-span-6 font-sans">
            <div className="w-full h-[460px] sm:h-[540px]">
              <TiltedCard
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                scaleOnHover={1.02}
                rotateAmplitude={8}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div className="w-full h-full relative p-4 flex flex-col justify-between font-sans bg-transparent">
                    
                    {/* Vector SVG Geographically Precise Contour Map of India */}
                    <div className="absolute inset-0 flex items-center justify-center p-2">
                      <svg viewBox="0 0 1000 1000" className="w-full h-full max-h-[480px] object-contain opacity-95">
                        <defs>
                          <linearGradient id="india-map-grad-clean" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#12ACE0" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>

                        {/* Detailed Contour Map Path of India */}
                        <path
                          d="
                            M 360 80 
                            L 390 90 L 410 70 L 440 90 L 460 120 L 440 150 L 480 170 L 520 160 L 560 180 L 590 170 
                            L 630 190 L 680 180 L 720 210 L 760 200 L 770 230 L 730 250 L 750 280 L 710 300 L 670 270 
                            L 640 290 L 590 280 L 560 300 L 580 340 L 620 370 L 590 420 L 550 450 L 520 510 L 490 560 
                            L 460 630 L 440 700 L 420 740 L 410 770 L 390 730 L 370 660 L 340 600 L 310 540 L 280 500 
                            L 270 450 L 290 420 L 260 390 L 280 340 L 300 320 L 270 290 L 310 260 L 300 220 L 330 180 
                            L 310 140 Z
                          "
                          fill="url(#india-map-grad-clean)"
                          opacity="0.95"
                          stroke="#12ACE0"
                          strokeWidth="2.5"
                        />

                        {/* State Border Grid Accent Lines */}
                        <path d="M 330 180 L 440 220 M 310 260 L 480 260 M 300 320 L 590 280 M 270 450 L 550 450 M 310 540 L 520 510 M 370 660 L 460 630" stroke="#0284c7" strokeWidth="1" strokeDasharray="4 4" opacity="0.35" />

                        {/* Geographically Precise Network Connectors from Bangalore HQ (410, 680) */}
                        {/* Line to Hyderabad (465, 565) */}
                        <line x1="410" y1="680" x2="465" y2="565" stroke="#12ACE0" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" />
                        {/* Line to Chennai (505, 685) */}
                        <line x1="410" y1="680" x2="505" y2="685" stroke="#12ACE0" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" />
                        {/* Line to Kerala (375, 745) */}
                        <line x1="410" y1="680" x2="375" y2="745" stroke="#12ACE0" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" />

                        {/* SVG Core Hub Pulse Markers */}
                        <circle cx="465" cy="565" r="4" className="fill-[#12ACE0]" />
                        <circle cx="505" cy="685" r="4" className="fill-[#12ACE0]" />
                        <circle cx="375" cy="745" r="4" className="fill-[#12ACE0]" />

                        {/* Precise Bangalore HQ Core Pin */}
                        <circle cx="410" cy="680" r="18" className="stroke-[#12ACE0] fill-none stroke-[2.5] animate-ping" />
                        <circle cx="410" cy="680" r="9" className="fill-[#12ACE0]" />
                        <circle cx="410" cy="680" r="4" className="fill-white" />
                      </svg>
                    </div>

                    {/* Interactive Location Pins on India Map */}
                    <div className="absolute inset-0 pointer-events-auto font-sans">
                      {hubs.map((h) => {
                        const isSelected = h.id === activeHub;
                        return (
                          <button
                            key={h.id}
                            type="button"
                            onClick={() => setActiveHub(h.id)}
                            style={{ left: h.coords.x, top: h.coords.y }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer transition-transform hover:scale-125 focus:outline-none z-10"
                          >
                            {/* Outer Ring Animation */}
                            <span className={`absolute -inset-2 rounded-full ${isSelected ? 'bg-cyan-500/40 animate-ping' : 'bg-[#12ACE0]/20 group-hover/pin:animate-ping'}`} />
                            
                            {/* Marker Icon Pin */}
                            <span className={`relative flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 shadow-md transition-all ${
                              isSelected
                                ? 'bg-[#12ACE0] border-white text-white scale-110 shadow-cyan-500/50'
                                : 'bg-white border-cyan-400 text-[#12ACE0] hover:bg-cyan-50'
                            }`}>
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                            </span>

                            {/* City Name Badge */}
                            <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono font-extrabold shadow-md transition-all ${
                              isSelected
                                ? 'bg-slate-900 text-white border border-slate-800'
                                : 'bg-white text-slate-800 border border-slate-200 opacity-95 group-hover/pin:opacity-100'
                            }`}>
                              {h.city}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                  </div>
                }
              />
            </div>
          </div>

          {/* Right Column: Clean Professional Display Typography */}
          <div className="lg:col-span-6 space-y-6 font-sans">
            
            <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out">
              <div className="font-sans">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-slate-950 uppercase tracking-tight leading-[1.05] mb-5 font-sans">
                  <div>WE SPREAD ACROSS</div>
                  <div className="text-[#12ACE0]">INDIA & PAN-ASIA</div>
                </h2>
                
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-6 max-w-xl font-sans">
                  With our central logistics & engineering command headquarters based in Bangalore, Techno Network Solutions delivers end-to-end structured cabling, IP CCTV surveillance, and data center infrastructure across Bangalore, Hyderabad, Chennai, and Kerala. Our extensive network ensures timely supply, reliable service, and 24/7 customer support.
                </p>
              </div>
            </AnimatedContent>

            {/* Hub Selection Button Chips */}
            <div className="flex flex-wrap gap-2 pt-1 font-sans">
              {hubs.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setActiveHub(h.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all border cursor-pointer ${
                    activeHub === h.id
                      ? 'bg-[#12ACE0] text-[#FFFFFF] border-[#12ACE0] shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {h.city}
                </button>
              ))}
            </div>

            {/* Active Hub Info Card with Ultra High-Definition Enhanced Cyan Architectural Skyline */}
            <TiltedCard
              rotateAmplitude={6}
              scaleOnHover={1.01}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md relative overflow-hidden h-full font-sans flex flex-col justify-between">
                  
                  {/* Enhanced HD Transparent Architectural Skyline Image Layer */}
                  <div className="absolute right-2 bottom-3 pointer-events-none opacity-95 w-1/2 sm:w-7/12 max-h-24 sm:max-h-28 z-0 flex items-end justify-end">
                    <img
                      src="/bangalore-skyline.png"
                      alt="Bangalore Architectural Skyline HD"
                      className="w-full h-auto max-h-24 sm:max-h-28 object-contain object-right-bottom drop-shadow-[0_2px_8px_rgba(18,172,224,0.2)]"
                    />
                  </div>

                  <div className="relative z-10 font-sans">
                    <div className="flex items-center justify-between mb-1.5 font-sans">
                      <span className="text-[11px] font-mono font-extrabold text-[#12ACE0] uppercase tracking-wider">
                        COMMAND REGION // {currentHubData.region}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 mb-1 font-sans">
                      {currentHubData.city}
                    </h3>
                    <div className="w-12 h-1 bg-[#12ACE0] rounded-full mb-3" />

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-medium font-sans max-w-xs sm:max-w-sm">
                      {currentHubData.desc}
                    </p>
                  </div>

                  <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 font-bold font-sans">
                    <span className="flex items-center gap-1.5 text-slate-800 font-sans">
                      <Activity className="w-3.5 h-3.5 text-[#12ACE0]" />
                      {currentHubData.specs}
                    </span>
                  </div>
                </div>
              }
            />

          </div>

        </div>

      </div>
    </section>
  );
}
