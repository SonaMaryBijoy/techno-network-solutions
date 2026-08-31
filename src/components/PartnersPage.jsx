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
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-20 bg-transparent min-h-screen text-slate-900 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Main Heading Box (KEPT AS REQUESTED) */}
        <div className="mb-10 sm:mb-12 font-sans pt-4 space-y-4 sm:space-y-6">
          <div className="w-full h-[160px] sm:h-[260px] lg:h-[320px] relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 p-4 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-center items-center text-center">
            
            {/* Particle Canvas Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <ParticleText
                text="Certified Global OEM Partners"
                fontSize="clamp(1.3rem, 5.2vw, 6.8rem)"
                fontWeight={900}
                color="#ffffff"
                highlightColor="#12ACE0"
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

            {/* Mobile Fallback Sharp Heading (Visible on Mobile Screens < 640px) */}
            <div className="sm:hidden relative z-10 px-2 py-3 bg-slate-950/80 rounded-xl">
              <h1 className="text-xl font-black font-sans text-white uppercase tracking-tight leading-tight">
                Certified Global OEM Partners
              </h1>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-lg lg:text-xl font-medium leading-relaxed font-sans max-w-4xl pt-1">
            Our engineers undergo continuous OEM certification to deliver up to 25-year manufacturer system performance warranties on every installation.
          </p>
        </div>

        {/* Clean Unboxed OEM Partner Grid (Cards Removed, Only Main Heading Box Kept) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-16 font-sans">
          {oemPartners.map((partner, idx) => (
            <div key={idx} className="p-2 flex flex-col justify-between font-sans">
              <div>
                {/* Big Clean Logo */}
                <div className="h-20 sm:h-24 lg:h-28 w-full flex items-center justify-start mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 hover:scale-105" 
                  />
                </div>

                <span className="text-xs font-mono font-bold text-[#12ACE0] block mb-1 uppercase tracking-wider">
                  {partner.category}
                </span>

                <h3 className="text-lg sm:text-xl font-sans font-black text-slate-950 mb-1">
                  {partner.name}
                </h3>

                <span className="text-xs font-sans text-emerald-600 font-semibold block mb-2">
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
