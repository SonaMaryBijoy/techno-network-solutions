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
      coords: { x: '38.5%', y: '66%' },
      isHQ: true
    },
    {
      id: 'hyderabad',
      city: 'Hyderabad',
      region: 'TELANGANA & AP HUB',
      desc: 'Data Center & Tech Park Cabling Execution Unit.',
      specs: 'Dedicated Tech Park Cabling & CCTV Support Crew',
      coords: { x: '47%', y: '54.5%' }
    },
    {
      id: 'chennai',
      city: 'Chennai',
      region: 'TAMIL NADU HUB',
      desc: 'Enterprise Structured Cabling & Optical Fiber Execution Team.',
      specs: 'Enterprise Cabling & Fiber Optics Support',
      coords: { x: '48.5%', y: '71.5%' }
    },
    {
      id: 'kerala',
      city: 'Kerala',
      region: 'KERALA REGIONAL HUB',
      desc: 'Regional Infrastructure Engineering & Security Systems Command.',
      specs: 'Regional Engineering & Security Support Unit',
      coords: { x: '37.5%', y: '83.5%' }
    }
  ];

  const [activeHub, setActiveHub] = useState('bangalore');
  const currentHubData = hubs.find(h => h.id === activeHub) || hubs[0];

  return (
    <section id="locations" className="py-16 sm:py-24 bg-transparent border-t border-slate-200 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center font-sans">
          
          {/* Left Column: Standalone India Map Graphic */}
          <div className="lg:col-span-6 font-sans flex items-center justify-center">
            <div className="relative w-full max-w-lg h-[440px] sm:h-[500px] flex items-center justify-center bg-transparent">
              
              {/* Standalone Map Image */}
              <img
                src="/india-map-graphic.png"
                alt="Techno Network Solutions India & Pan-Asia Map"
                className="w-full h-full object-contain drop-shadow-sm select-none"
              />

              {/* Interactive Clickable Hotspots overlaying Map Locations */}
              <div className="absolute inset-0 font-sans pointer-events-auto">
                {hubs.map((h) => {
                  const isSelected = h.id === activeHub;
                  return (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => setActiveHub(h.id)}
                      style={{ left: h.coords.x, top: h.coords.y }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer focus:outline-none z-20"
                      title={`Click to view ${h.city} details`}
                    >
                      {/* Animated Pulse Halo around active marker */}
                      {isSelected && (
                        <span className="absolute -inset-3 rounded-full bg-cyan-500/40 animate-ping" />
                      )}
                      <span className={`block w-6 h-6 rounded-full border-2 transition-all ${
                        isSelected ? 'border-white bg-[#12ACE0] scale-125 shadow-lg shadow-cyan-500/50' : 'border-transparent bg-transparent hover:scale-110'
                      }`} />
                    </button>
                  );
                })}
              </div>

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

            {/* Active Hub Info Card with Faded Skyline Graphic */}
            <TiltedCard
              rotateAmplitude={6}
              scaleOnHover={1.01}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md relative overflow-hidden h-full font-sans flex flex-col justify-between">
                  
                  {/* Faded Architectural Skyline Image Layer */}
                  <div className="absolute right-2 bottom-3 pointer-events-none opacity-40 sm:opacity-45 w-1/2 sm:w-7/12 max-h-24 sm:max-h-28 z-0 flex items-end justify-end">
                    <img
                      src="/bangalore-skyline.png"
                      alt="Bangalore Architectural Skyline Faded"
                      className="w-full h-auto max-h-24 sm:max-h-28 object-contain object-right-bottom mix-blend-multiply"
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
