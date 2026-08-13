import React, { useState } from 'react';
import TiltedCard from './TiltedCard';
import AnimatedContent from './AnimatedContent';
import { Activity } from 'lucide-react';

export default function LocationsSection({ onOpenQuote }) {
  const hubs = [
    {
      id: 'bengaluru',
      city: 'Bengaluru HQ',
      region: 'KARNATAKA & SOUTHERN HUB',
      desc: 'Central Engineering Command, Cable Assembly Testing Facility & Master Warehouse.',
      specs: 'Central Support Command · 24/7 Deployment Unit'
    },
    {
      id: 'hyderabad',
      city: 'Hyderabad',
      region: 'TELANGANA & AP HUB',
      desc: 'Data Center & Tech Park Cabling Execution Unit.',
      specs: 'Dedicated Tech Park Cabling & CCTV Support Crew'
    },
    {
      id: 'pune',
      city: 'Pune / Mumbai',
      region: 'MAHARASHTRA & WESTERN HUB',
      desc: 'Industrial Fiber & High-Density Rack Execution Team.',
      specs: 'Industrial Fiber & Server Rack Specialists'
    },
    {
      id: 'ncr',
      city: 'Delhi NCR',
      region: 'NORTHERN HUB',
      desc: 'Enterprise Access Control & AV Command Center.',
      specs: 'Northern Corporate Office & Government Site Unit'
    },
    {
      id: 'panasia',
      city: 'Pan-Asia Support',
      region: 'INTERNATIONAL LOGISTICS',
      desc: 'Cross-border structured cabling material dispatch & OEM deployment partner network.',
      specs: 'Cross-Border Supply Chain & Partner SLA'
    }
  ];

  const [activeHub, setActiveHub] = useState('bengaluru');
  const currentHubData = hubs.find(h => h.id === activeHub) || hubs[0];

  return (
    <section id="locations" className="py-16 sm:py-24 bg-transparent border-t border-slate-200 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center font-sans">
          
          {/* Left Column: Interactive Map Box */}
          <div className="lg:col-span-6 font-sans">
            <div className="w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl relative p-6 flex flex-col justify-between font-sans">
              
              {/* Top Accent Pill */}
              <div className="relative z-10 flex items-center justify-between font-sans">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[#12ACE0] font-mono text-xs font-bold uppercase tracking-wider">
                  NATIONWIDE NETWORK COVERAGE
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#12ACE0] animate-ping" />
              </div>

              {/* Central Map Graphics */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-80 h-80 rounded-full border border-cyan-500/20 animate-pulse" />
                <div className="absolute w-60 h-60 rounded-full border border-blue-500/30" />
                <div className="absolute w-40 h-40 rounded-full border border-purple-500/20" />
              </div>

              {/* Bengaluru HQ Marker Card inside Map Box */}
              <div className="relative z-10 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-cyan-500/40 max-w-xs font-sans">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#12ACE0]" />
                  <h4 className="text-xs font-mono font-bold text-white uppercase">BENGALURU CENTRAL HQ</h4>
                </div>
                <p className="text-[11px] font-sans text-slate-300 font-medium">Techno Network Solutions Central Office & Logistics Warehouse</p>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Display Typography */}
          <div className="lg:col-span-6 space-y-6 font-sans">
            
            <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out">
              <div className="font-sans">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-slate-950 uppercase tracking-tight leading-[1.05] mb-5 font-sans">
                  <div>WE SPREAD ACROSS</div>
                  <div className="text-[#12ACE0]">INDIA & PAN-ASIA.</div>
                </h2>
                
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mb-6 max-w-xl font-sans">
                  With our central logistics & engineering command headquarters based in Bengaluru, Techno Network Solutions delivers end-to-end structured cabling, IP CCTV surveillance, and data center infrastructure to clients across India and Pan-Asia. Our extensive network ensures timely supply, reliable service, and nationwide 24/7 customer support.
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
                      ? 'bg-[#12ACE0] text-white border-[#12ACE0] shadow-md'
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
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md relative overflow-hidden h-full font-sans">
                  <div className="flex items-center justify-between mb-1.5 font-sans">
                    <span className="text-[11px] font-mono font-extrabold text-[#12ACE0] uppercase tracking-wider">
                      COMMAND REGION // {currentHubData.region}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-black text-slate-950 mb-1.5 font-sans">
                    {currentHubData.city}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 font-medium font-sans">
                    {currentHubData.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 font-bold font-sans">
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
