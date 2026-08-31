import React, { useRef } from 'react';
import StrokeText from './StrokeText';
import TiltedCard from './TiltedCard';
import ScrollExpand from './ScrollExpand';

export default function ServicesPage() {
  const containerRef = useRef(null);

  const fullServices = [
    {
      id: 'cabling',
      title: 'Structured Cabling & Networking Infrastructure',
      image: '/service-network.png',
      overview: 'Active and passive network infrastructure engineering — pathways, server racks, Cat6/6A copper and singlemode/multimode fiber optic termination, testing, and cable dressing.',
      features: [
        'High-density copper Cat6 / Cat6A UTP/STP cable installations',
        'Multimode (OM3/OM4/OM5) & Singlemode (OS2) fiber optic backbones',
        'Fluke Versiv DSX-8000 OTDR Tier 1 & Tier 2 link certification',
        'Server rack assembly, patch panel mapping, & cable comb dressing',
        'Overhead ladder rack, wire mesh, & underfloor conduit pathways'
      ],
      oems: ['CommScope Systimax', 'Panduit NetKey', 'Molex Premise', 'Belden', 'R&M Swiss']
    },
    {
      id: 'cctv',
      title: 'IP CCTV & AI Video Surveillance Systems',
      image: '/service-cctv.png',
      overview: 'Enterprise-grade 4K IP camera deployment, AI video analytics, central NVR storage arrays, and VMS control room integrations for 24/7 facility security.',
      features: [
        '4K Ultra-HD Dome, Bullet, & PTZ IP camera installations',
        'AI video analytics (Facial recognition, License plate ANPR, Perimeter intrusion)',
        'Central NVR storage infrastructure with RAID 5/6 redundancy',
        'Encrypted remote live monitoring via mobile & web VMS platforms',
        'Integration with central security command centers & video walls'
      ],
      oems: ['Hikvision Enterprise', 'Dahua Technology', 'Bosch Security', 'Axis Communications', 'CP Plus']
    },
    {
      id: 'security',
      title: 'Biometric Access Control & Physical Security',
      image: '/service-security.png',
      overview: 'Integrated biometric, RFID, and physical barrier solutions engineered to regulate, monitor, and audit entry across server rooms, lobbies, and high-security zones.',
      features: [
        'Biometric fingerprint, facial recognition, & RFID access readers',
        'Optical flap barrier turnstiles & motorized lobby boom barriers',
        'Intrusion detection alarms, glass-break sensors, & panic triggers',
        'Server rack biometric locks & multi-factor door access control',
        'Centralized access management software with HR payroll integration'
      ],
      oems: ['Matrix Comsec', 'Suprema', 'Honeywell', 'ZKTeco', 'HID Global']
    },
    {
      id: 'av',
      title: 'Smart Boardroom AV & Unified Communication',
      image: '/service-av.png',
      overview: 'Next-generation audiovisual architecture for boardrooms, conference spaces, and auditoriums — seamless telepresence, acoustic optimization, and touch control.',
      features: [
        'Commercial 4K interactive touch panels & fine-pitch LED video walls',
        'Ceiling beamforming microphone arrays & DSP acoustic echo cancellation',
        'Zoom Rooms, Microsoft Teams, & Cisco Webex hardware deployment',
        'Automated touch panel environmental controls (Lighting, Shades, Input)',
        'Acoustic wall paneling & hidden cable pop-up floor/table boxes'
      ],
      oems: ['Crestron', 'Logitech', 'Poly (Plantronics)', 'Samsung Display', 'Bose Professional']
    },
    {
      id: 'datacenter',
      title: 'Data Center & Server Room Infrastructure',
      image: '/gallery-server-aisle.png',
      overview: 'Turnkey data center engineering incorporating hot/cold aisle containment, intelligent PDU power routing, high-density optical cassettes, and cable tray pathways.',
      features: [
        'Hot/Cold Aisle containment enclosures for maximum thermal efficiency',
        'Intelligent network-monitored PDU power distribution units',
        'Pre-terminated MPO/MTP high-density fiber cassette patch panels',
        'Environmental sensors (Temperature, Humidity, Water Leak Detection)',
        'Precision Raised Floor & Overhead Wire Mesh Cable Trays'
      ],
      oems: ['APC Schneider', 'Vertiv', 'Eaton', 'Rittal', 'Netrack']
    },
    {
      id: 'maintenance',
      title: 'Annual Maintenance Contracts (AMC) & 24/7 SLA Support',
      image: '/service-maintenance.png',
      overview: 'Comprehensive Support After Installation and customized Annual Maintenance Contracts with 6–12 hour emergency on-site engineer response across India.',
      features: [
        'Support After Installation covering all labor and termination work',
        'Dedicated SLA with 6–12 hour emergency on-site engineer deployment',
        'Annual Maintenance Contracts (AMC) with preventative health audits',
        'Network health monitoring, cable re-dressing, & optical power testing',
        'On-site client IT staff training & comprehensive handover documentation'
      ],
      oems: ['Techno Dedicated SLAs', 'In-House 40+ Engineers', 'Pan-India Service']
    }
  ];

  return (
    <div ref={containerRef} className="pt-16 pb-20 bg-transparent min-h-screen text-slate-900 font-sans overflow-x-hidden">
      
      {/* Restored ScrollExpand Header Background Section */}
      <div className="mb-14 font-sans">
        <ScrollExpand
          src="/service-header-bg.png"
          alt="High-Density Fiber Optic Data Center Infrastructure"
          title=""
          scrollHint="Scroll down to expand view"
          startWidth={65}
          startHeight={70}
          startRadius={24}
          endRadius={0}
          mediaZoom={1.25}
          scrollDistance={1.0}
          holdDistance={0.35}
          smoothing={0.08}
          overlayScrim={0.35}
          useWindowScroll
        >
          {/* Main Display Heading */}
          <div className="w-full flex flex-col items-center justify-center text-center my-2 drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] max-w-[98vw] sm:max-w-6xl mx-auto px-2 overflow-visible">
            
            {/* Line 1: ENGINEERING & */}
            <div className="w-full flex justify-center">
              <StrokeText
                text="ENGINEERING &"
                strokeColor="#ffffff"
                fillColor="#ffffff"
                strokeWidth={3.8}
                drawDuration={1.8}
                fillDelay={0.3}
                trigger="mount"
                fillMode="wipe"
                fontSize={96}
                fontWeight={900}
                letterSpacing={-2}
                fontFamily="Unbounded, SuperGType, GType, Syne, sans-serif"
                className="text-center drop-shadow-[0_6px_30px_rgba(0,0,0,0.95)] max-w-full font-black uppercase"
              />
            </div>

            {/* Line 2: INSTALLATION */}
            <div className="w-full flex justify-center mt-1 sm:mt-2">
              <StrokeText
                text="INSTALLATION"
                strokeColor="#12ACE0"
                fillColor="#12ACE0"
                strokeWidth={3.8}
                drawDuration={1.8}
                fillDelay={0.3}
                trigger="mount"
                fillMode="wipe"
                fontSize={96}
                fontWeight={900}
                letterSpacing={-2}
                fontFamily="Unbounded, SuperGType, GType, Syne, sans-serif"
                className="text-center drop-shadow-[0_6px_30px_rgba(18,172,224,0.95)] max-w-full font-black uppercase"
              />
            </div>

            {/* Line 3: SERVICES */}
            <div className="w-full flex justify-center mt-1 sm:mt-2">
              <StrokeText
                text="SERVICES"
                strokeColor="#ffffff"
                fillColor="#ffffff"
                strokeWidth={3.8}
                drawDuration={1.8}
                fillDelay={0.3}
                trigger="mount"
                fillMode="wipe"
                fontSize={96}
                fontWeight={900}
                letterSpacing={-2}
                fontFamily="Unbounded, SuperGType, GType, Syne, sans-serif"
                className="text-center drop-shadow-[0_6px_30px_rgba(0,0,0,0.95)] max-w-full font-black uppercase"
              />
            </div>

          </div>

          <p className="text-white text-xs sm:text-base lg:text-lg font-bold text-center leading-relaxed max-w-3xl mx-auto mt-4 px-4 drop-shadow-[0_2px_18px_rgba(0,0,0,0.95)]">
            Delivering high-performance cabling, CCTV, access control, and boardroom AV infrastructure backed by Fluke certification and 25-year manufacturer warranties.
          </p>
        </ScrollExpand>
      </div>

      {/* Main Service List Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans pt-24 sm:pt-28 lg:pt-32">

        {/* Detailed Service Content List */}
        <div className="space-y-16 sm:space-y-20 mb-20 font-sans">
          {fullServices.map((svc, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div key={svc.id} className="py-8 sm:py-10 border-b border-slate-200/90 font-sans">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-slate-950 tracking-tight leading-tight">
                      {svc.title}
                    </h2>

                    <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
                      {svc.overview}
                    </p>

                    <div className="space-y-2.5 font-sans pt-1">
                      <h4 className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider mb-2">KEY DELIVERABLES</h4>
                      {svc.features.map((feat, i) => (
                        <div key={i} className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed flex items-start gap-2">
                          <span className="text-[#12ACE0] font-bold">•</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Short Heading for Certified OEM Brands */}
                    <div className="pt-3">
                      <h4 className="text-xs font-mono text-[#12ACE0] font-bold uppercase tracking-wider mb-2.5">
                        CERTIFIED OEM BRANDS
                      </h4>
                      <div className="flex flex-wrap gap-2 font-sans">
                        {svc.oems.map((oem) => (
                          <span key={oem} className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-mono text-[#12ACE0] font-bold shadow-xs">
                            {oem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 3D TiltedCard Image Card */}
                  <div className={`lg:col-span-5 flex justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="w-full max-w-md h-[340px] sm:h-[400px] relative z-10">
                      <TiltedCard
                        imageSrc={svc.image}
                        altText={svc.title}
                        captionText=""
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        scaleOnHover={1.12}
                        rotateAmplitude={26}
                        showTooltip={false}
                      />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
