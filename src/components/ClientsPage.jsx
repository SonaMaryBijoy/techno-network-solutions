import React from 'react';
import FoldText from './FoldText';
import TiltedCard from './TiltedCard';

export default function ClientsPage() {
  const verticals = [
    { name: "IT & Software Parks", drops: "4,50,000+ Drops", desc: "High-density Cat6A & MPO fiber backbones across multi-tenant tech campuses in Bangalore, Hyderabad, & Pune." },
    { name: "Enterprise Data Centers", drops: "1,20,000+ Racks", desc: "Precision hot/cold aisle containment, raised floor wire mesh, and intelligent PDU deployment for Tier 3 & 4 data centers." },
    { name: "Financial & Banking Hubs", drops: "2,00,000+ Drops", desc: "Encrypted CCTV surveillance, biometric dual-factor access control, and redundant fiber links for national banks." },
    { name: "Manufacturing & Industrial", drops: "1,80,000+ Drops", desc: "Armored optical fiber backbones and industrial IP cameras engineered for high EMI factory floors." },
  ];

  const testimonials = [
    {
      quote: "Techno Network Solutions executed our 12,000 Cat6A drop deployment across 5 floors with flawless Fluke test reports. Every cable tray and rack dressing is pristine.",
      client: "Senior VP of Infrastructure",
      company: "Global IT Services Leader, Manyata Tech Park"
    },
    {
      quote: "Their team installed our biometric flap barrier access control and 4K IP CCTV surveillance in record time. Zero downtime during office hours.",
      client: "Head of Security & Facilities",
      company: "Enterprise Financial Hub, EGL Bangalore"
    }
  ];

  return (
    <div className="pt-20 pb-20 bg-transparent min-h-screen text-slate-900 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Clean Header with Mobile-Responsive FoldText Animated Title */}
        <div className="mb-10 sm:mb-12 font-sans pt-4 space-y-4 sm:space-y-6">
          <div className="w-full overflow-visible">
            <FoldText
              text="Trusted by Industry Leaders Across India"
              fontSize={88}
              fontWeight={900}
              color="#020617"
              splitBy="word"
              hinge="top"
              trigger="mount"
              duration={0.7}
              stagger={0.06}
              perspective={850}
              creaseShading={0.4}
              className="font-sans font-black tracking-tight leading-none text-slate-950 max-w-full"
            />
          </div>
          <p className="text-slate-600 text-sm sm:text-lg lg:text-xl font-medium leading-relaxed font-sans max-w-4xl pt-1">
            Over 10L+ copper nodes and 25K+ fiber connections successfully delivered across IT parks, data centers, and corporate facilities.
          </p>
        </div>

        {/* Verticals Grid Wrapped in 3D TiltedCard with Mobile Grid Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14 sm:mb-16 font-sans">
          {verticals.map((vert, idx) => (
            <div key={idx} className="w-full h-auto sm:h-[290px] min-h-[250px]">
              <TiltedCard
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={14}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div className="w-full h-full p-5 sm:p-6 rounded-[24px] sm:rounded-[32px] bg-white border-2 border-blue-500/40 shadow-[0_15px_40px_rgba(37,99,235,0.2)] hover:border-blue-500 hover:shadow-[0_25px_50px_rgba(37,99,235,0.35)] transition-all duration-300 flex flex-col justify-between font-sans">
                    <div>
                      <h3 className="font-sans font-black text-lg sm:text-xl text-slate-950 mb-2">
                        {vert.name}
                      </h3>
                      <span className="text-xs font-sans font-medium text-[#2563eb] block mb-3 px-3 py-1 bg-blue-50 rounded-lg border border-blue-200/80 w-fit">
                        {vert.drops}
                      </span>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium font-sans">
                        {vert.desc}
                      </p>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>

        {/* Testimonials Wrapped in 3D TiltedCard with Mobile Spacing */}
        <div className="mb-12 font-sans">
          <h2 className="text-2xl sm:text-3xl font-sans font-black text-slate-950 mb-6 sm:mb-8 text-center tracking-tight">
            What Facility Leaders Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="w-full h-auto sm:h-[260px] min-h-[240px]">
                <TiltedCard
                  captionText=""
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  scaleOnHover={1.04}
                  rotateAmplitude={12}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="w-full h-full p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-white border-2 border-slate-200/80 shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:border-blue-500/60 hover:shadow-[0_20px_45px_rgba(37,99,235,0.25)] transition-all duration-300 flex flex-col justify-between font-sans">
                      <p className="text-slate-600 text-xs sm:text-base italic leading-relaxed font-medium font-sans">
                        "{t.quote}"
                      </p>
                      <div className="pt-4 border-t border-slate-100 font-sans text-xs sm:text-sm mt-3">
                        <strong className="text-slate-950 font-bold text-xs sm:text-sm block font-sans">{t.client}</strong>
                        <span className="text-slate-600 font-medium font-sans">{t.company}</span>
                      </div>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
