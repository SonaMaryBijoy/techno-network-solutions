import React, { useState } from 'react';
import { MapPin, Activity } from 'lucide-react';
import AnimatedContent from './AnimatedContent';
import TiltedCard from './TiltedCard';

export default function LocationsSection({ onOpenQuote }) {
  const [activeHub, setActiveHub] = useState('bengaluru');

  const hubs = [
    {
      id: 'bengaluru',
      city: 'Bengaluru (HQ)',
      region: 'Central Command HQ',
      desc: 'Central Logistics & Engineering Command Center. Manages 50,000+ active Cat6A & Fiber drops across Electronic City, Whitefield, Manyata & Outer Ring Road.',
      specs: 'SLA: 4-6 Hours // 40+ Certified Engineers',
      coords: { x: '46%', y: '70%' } // Geographical position on India map
    },
    {
      id: 'mumbai',
      city: 'Mumbai & BKC',
      region: 'West Command',
      desc: 'Data Center & BFSI Surveillance Hub. Dedicated team specializing in hot/cold aisle containment and high-security access control.',
      specs: 'SLA: 6 Hours // Data Center Specialists',
      coords: { x: '35%', y: '56%' }
    },
    {
      id: 'delhi',
      city: 'Delhi NCR & Gurgaon',
      region: 'North Command',
      desc: 'Enterprise & Government Infrastructure Operations. Specialized in AV auditorium integrations and campus fiber backbones.',
      specs: 'SLA: 6 Hours // 30+ On-Site Technicians',
      coords: { x: '44%', y: '28%' }
    },
    {
      id: 'hyderabad',
      city: 'Hyderabad Hitec City',
      region: 'South-Central Command',
      desc: 'Telecom & Cloud Hub. High-speed Fluke OTDR permanent link certification and Cat6A patch panel dressing.',
      specs: 'SLA: 6-8 Hours // Fluke DSX-8000 Ready',
      coords: { x: '48%', y: '60%' }
    },
    {
      id: 'chennai',
      city: 'Chennai OMR',
      region: 'South Coast Command',
      desc: 'Industrial & Subsea Cable Landing Hub. Expert in CCTV video wall matrix and IP surveillance deployments.',
      specs: 'SLA: 6-8 Hours // Industrial Grade PPE',
      coords: { x: '54%', y: '74%' }
    },
    {
      id: 'pune',
      city: 'Pune Auto Hub',
      region: 'West Industrial Command',
      desc: 'Manufacturing & Smart Factory Cabling. Trunk pathway tray routing and biometric access control for industrial plants.',
      specs: 'SLA: 6 Hours // Plant Safety Officers',
      coords: { x: '38%', y: '59%' }
    }
  ];

  const currentHubData = hubs.find(h => h.id === activeHub) || hubs[0];

  return (
    <section id="locations" className="py-16 sm:py-24 bg-transparent border-t border-slate-200 relative overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Clean Aesthetic India Vector Map with Hub Markers */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] max-w-xl flex items-center justify-center p-4">
              
              {/* Detailed Aesthetic Vector Map Outline of India */}
              <svg viewBox="0 0 800 900" className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(99,102,241,0.18)]">
                <defs>
                  <linearGradient id="india-map-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a5b4fc" />
                    <stop offset="50%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>

                {/* Detailed Geometric Contour Map Path of India */}
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
                  fill="url(#india-map-grad)"
                  opacity="0.85"
                  stroke="#4f46e5"
                  strokeWidth="2"
                />

                {/* State Border Grid Accent Lines */}
                <path d="M 330 180 L 440 220 M 310 260 L 480 260 M 300 320 L 590 280 M 270 450 L 550 450 M 310 540 L 520 510 M 370 660 L 460 630" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />

                {/* HQ Pulse Connection Lines across India Nodes */}
                <line x1="368" y1="630" x2="280" y2="504" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" />
                <line x1="368" y1="630" x2="352" y2="252" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" />
                <line x1="368" y1="630" x2="384" y2="540" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" />
                <line x1="368" y1="630" x2="432" y2="666" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" />
                <line x1="368" y1="630" x2="304" y2="531" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" />

                {/* Bengaluru HQ Glowing Core Pin */}
                <circle cx="368" cy="630" r="16" className="stroke-indigo-600 fill-none stroke-[2] animate-ping" />
                <circle cx="368" cy="630" r="8" className="fill-indigo-600" />
              </svg>

              {/* Interactive Glowing Location Hub Pins on India Map */}
              <div className="absolute inset-0 pointer-events-auto">
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
                      <span className={`absolute -inset-2 rounded-full ${isSelected ? 'bg-indigo-500/40 animate-ping' : 'bg-blue-400/20 group-hover/pin:animate-ping'}`} />
                      
                      {/* Marker Icon Pin */}
                      <span className={`relative flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 shadow-md transition-all ${
                        isSelected
                          ? 'bg-[#4f46e5] border-white text-white scale-110 shadow-indigo-500/50'
                          : 'bg-white border-indigo-400 text-indigo-600 hover:bg-indigo-50'
                      }`}>
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      </span>

                      {/* City Name Badge */}
                      <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-mono font-extrabold shadow-sm transition-all ${
                        isSelected
                          ? 'bg-slate-900 text-white border border-slate-800'
                          : 'bg-white text-slate-800 border border-slate-200 opacity-90 group-hover/pin:opacity-100'
                      }`}>
                        {h.city.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Column: Clean Bold Display Typography Matching Website Template */}
          <div className="lg:col-span-6 space-y-6">
            
            <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out">
              <div>
                {/* Display Header Matching Reference Picture Typography */}
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-slate-950 uppercase tracking-tight leading-[1.05] mb-5">
                  <div>WE SPREAD ACROSS</div>
                  <div className="text-[#2563eb]">INDIA & PAN-ASIA.</div>
                </h2>
                
                {/* Clean Body Text matching reference image styling */}
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-6 max-w-xl">
                  With our central logistics & engineering command headquarters based in Bengaluru, Techno Network Solutions delivers end-to-end structured cabling, IP CCTV surveillance, and data center infrastructure to clients across India and Pan-Asia. Our extensive network ensures timely supply, reliable service, and nationwide 24/7 customer support.
                </p>
              </div>
            </AnimatedContent>

            {/* Hub Selection Button Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {hubs.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setActiveHub(h.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all border ${
                    activeHub === h.id
                      ? 'bg-[#2563eb] text-white border-[#2563eb] shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {h.city}
                </button>
              ))}
            </div>

            {/* Active Hub Info Card */}
            <TiltedCard
              rotateAmplitude={6}
              scaleOnHover={1.01}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <div className="p-5 rounded-2xl bg-white rounded-2xl border border-slate-200/90 shadow-md relative overflow-hidden h-full">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-extrabold text-[#2563eb] uppercase tracking-wider">
                      COMMAND REGION // {currentHubData.region}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-black text-slate-950 mb-1.5">
                    {currentHubData.city}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 font-medium">
                    {currentHubData.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 font-bold">
                    <span className="flex items-center gap-1.5 text-slate-800">
                      <Activity className="w-3.5 h-3.5 text-[#2563eb]" />
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
