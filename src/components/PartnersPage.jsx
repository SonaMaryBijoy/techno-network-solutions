import React from 'react';
import ParticleText from './ParticleText';

export default function PartnersPage() {
  // Exact OEM Brands
  const oemPartners = [
    { name: "CommScope", tier: "Systimax & NetConnect Certified Partner", category: "Passive Cabling & Fiber", desc: "Enterprise copper Cat6A UTP/FTP and MPO/MTP fiber optic solutions backed by 25-year manufacturer performance warranties.", logo: "/logos/commscope.svg" },
    { name: "Panduit", tier: "NetKey Enterprise Infrastructure Partner", category: "Network & Cable Trays", desc: "High-density modular patch panels, wire mesh cable trays, and fiber enclosures designed for high-availability environments.", logo: "/logos/panduit.svg" },
    { name: "Molex", tier: "Premise Networks Certified Partner", category: "Copper & Fiber Cabling", desc: "End-to-end structured cabling systems tested for maximum throughput and zero packet drop link performance.", logo: "/logos/molex.svg" },
    { name: "Belden", tier: "Sending All The Right Signals", category: "Industrial & Enterprise", desc: "Shielded heavy-duty industrial cabling and switches for manufacturing floors and mission-critical networks.", logo: "/logos/belden.svg" },
    { name: "D-Link", tier: "Enterprise Cabling & Active Partner", category: "Active & Passive Networking", desc: "Enterprise L2/L3 switching, smart wireless controllers, and structured cabling installation.", logo: "/logos/dlink.svg" },
    { name: "R&M (Reichle & De-Massari)", tier: "Swiss Precision Fiber & Copper Partner", category: "High-Density Fiber ODF", desc: "Swiss-engineered high-density optical distribution frames (ODF) and cassette splicing technology.", logo: "/logos/rm.svg" },
    { name: "MRS Modular Racks", tier: "Rack Systems Pvt Ltd Partner", category: "Server Enclosures & Racks", desc: "Heavy-duty server rack cabinets, intelligent PDU distribution, and cold-aisle containment systems.", logo: "/logos/mrs.svg" },
    { name: "President / APC", tier: "Solutions Beyond Enclosures & Power", category: "Rack Enclosures & UPS", desc: "Network rack enclosures, smart UPS power backup, and environmental monitoring sensors.", logo: "/logos/apc-president.svg" },
  ];

  return (
    <div className="pt-20 pb-20 bg-transparent min-h-screen text-slate-900 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Crystal-Clear Premium Header Box with Ambient Particle Canvas */}
        <div className="mb-10 sm:mb-12 font-sans pt-4 space-y-4 sm:space-y-6">
          <div className="w-full min-h-[160px] sm:min-h-[240px] lg:min-h-[280px] relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 p-6 sm:p-10 border-2 border-blue-500/50 shadow-2xl flex flex-col justify-center items-center text-center">
            
            {/* Background Ambient Particles */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <ParticleText
                text="Certified Global OEM Partners"
                fontSize="clamp(2rem, 7vw, 7.2rem)"
                fontWeight={900}
                color="#ffffff"
                highlightColor="#3b82f6"
                scatter={140}
                gatherDuration={1400}
                stagger={360}
                pointerRepel={40}
                repelRadius={120}
                idleDrift={0.8}
                trigger="mount"
                glow={true}
              />
            </div>

            {/* Crystal-Clear Sharp Overlay Text */}
            <h1 className="relative z-10 text-2xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-white bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent leading-tight sm:leading-tight uppercase drop-shadow-[0_4px_25px_rgba(37,99,235,0.7)]">
              Certified Global OEM Partners
            </h1>
          </div>

          <p className="text-slate-600 text-sm sm:text-lg lg:text-xl font-medium leading-relaxed font-sans max-w-4xl pt-1">
            Our engineers undergo continuous OEM certification to deliver up to 25-year manufacturer system performance warranties on every installation.
          </p>
        </div>

        {/* Clean Solid Partner Cards Grid with Mobile Grid Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 font-sans">
          {oemPartners.map((partner, idx) => (
            <div key={idx} className="p-5 sm:p-6 rounded-[24px] bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between font-sans">
              <div>
                {/* Big Clean Logo */}
                <div className="h-20 sm:h-24 lg:h-28 w-full flex items-center justify-center mb-4 px-2">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-105" 
                  />
                </div>

                <span className="px-3 py-1 rounded-lg bg-blue-50 text-[#2563eb] border border-blue-200/80 font-sans text-xs font-medium block w-fit mb-2">
                  {partner.category}
                </span>

                <h3 className="text-lg sm:text-xl font-sans font-black text-slate-950 mb-1">
                  {partner.name}
                </h3>

                <span className="text-xs font-sans text-emerald-600 font-medium block mb-2">
                  {partner.tier}
                </span>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium font-sans">
                  {partner.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
