import React from 'react';
import FoldText from './FoldText';
import { Building2, Server, Landmark, Factory } from 'lucide-react';

export default function ClientsPage() {
  const verticals = [
    {
      name: "IT & Software Parks",
      drops: "4,50,000+ Drops",
      desc: "High-density Cat6A & MPO fiber backbones across multi-tenant tech campuses in Bangalore, Hyderabad, & Pune.",
      icon: Building2
    },
    {
      name: "Enterprise Data Centers",
      drops: "1,20,000+ Racks",
      desc: "Precision hot/cold aisle containment, raised floor wire mesh, and intelligent PDU deployment for Tier 3 & 4 data centers.",
      icon: Server
    },
    {
      name: "Financial & Banking Hubs",
      drops: "2,00,000+ Drops",
      desc: "Encrypted CCTV surveillance, biometric dual-factor access control, and redundant fiber links for national banks.",
      icon: Landmark
    },
    {
      name: "Manufacturing & Industrial",
      drops: "1,80,000+ Drops",
      desc: "Armored optical fiber backbones and industrial IP cameras engineered for high EMI factory floors.",
      icon: Factory
    },
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
        <div className="mb-10 sm:mb-14 font-sans pt-4 space-y-4 sm:space-y-6">
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

        {/* Verticals Grid with Solid Black Icons Centered Above Headings (Matching Reference Image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-16 sm:mb-20 font-sans">
          {verticals.map((vert, idx) => {
            const IconComponent = vert.icon;
            return (
              <div key={idx} className="w-full p-2 flex flex-col items-center sm:items-start text-center sm:text-left font-sans">
                {/* Related Solid Black Icon Centered Above Title */}
                <div className="mb-4 text-slate-950 flex items-center justify-center">
                  <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 stroke-[2.2] text-slate-950" />
                </div>

                <h3 className="font-sans font-black text-lg sm:text-xl text-slate-950 mb-1.5">
                  {vert.name}
                </h3>

                <span className="text-xs font-sans font-mono font-extrabold text-[#12ACE0] block mb-3 uppercase tracking-wider">
                  {vert.drops}
                </span>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium font-sans">
                  {vert.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Clean Unboxed Testimonials Grid */}
        <div className="mb-12 font-sans">
          <h2 className="text-2xl sm:text-3xl font-sans font-black text-slate-950 mb-6 sm:mb-8 tracking-tight text-center sm:text-left">
            What Facility Leaders Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 font-sans">
            {testimonials.map((t, idx) => (
              <div key={idx} className="w-full p-2 font-sans border-l-4 border-[#12ACE0] pl-5 sm:pl-6">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium mb-4 italic font-sans">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="font-sans font-black text-sm sm:text-base text-slate-950">
                    {t.client}
                  </h4>
                  <span className="text-xs font-sans font-semibold text-[#12ACE0]">
                    {t.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
