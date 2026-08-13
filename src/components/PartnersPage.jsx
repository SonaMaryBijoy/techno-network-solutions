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
        
        {/* Clean Header with Mobile-Responsive ParticleText Canvas Animation */}
        <div className="mb-10 sm:mb-12 font-sans pt-4 space-y-4 sm:space-y-6">
          <div className="w-full h-[180px] sm:h-[280px] lg:h-[340px] relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 p-3 sm:p-6 border-2 border-blue-500/50 shadow-2xl">
            <ParticleText
              text="Certified Global OEM Partners"
              fontSize="clamp(1.8rem, 6.5vw, 7.2rem)"
              fontWeight={900}
              color="#ffffff"
              highlightColor="#3b82f6"
              scatter={160}
              gatherDuration={1400}
              stagger={360}
              pointerRepel={45}
              repelRadius={120}
              idleDrift={0.8}
              trigger="mount"
              glow={true}
            />
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
