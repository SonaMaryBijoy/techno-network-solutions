import React, { useRef } from 'react';
import StrokeText from './StrokeText';
import TiltedCard from './TiltedCard';

export default function ServicesPage() {
  const containerRef = useRef(null);

  const fullServices = [
    {
      id: 'cabling',
      title: 'Structured Cabling & Fiber Optic Infrastructure',
      image: '/service-network.png',
      overview: 'Complete active & passive cabling infrastructure — pathways, cable trays, patch panels, server rack dressing, copper Cat6/Cat6A/Cat8, and Single-mode/Multi-mode fiber optic splicing.',
      features: [
        'Cat6, Cat6A UTP/FTP Copper Cable termination & permanent link testing',
        'Single-mode (SMF) & Multi-mode (OM3/OM4/OM5) Fiber Optic splicing & MPO trunks',
        'Fluke Versiv DSX-8000 OTDR Tier 1 & Tier 2 certification reports',
        'Server rack dressing, ladder racks, and color-coded patch panel identification',
        'OEM warranties up to 25 years with CommScope, Panduit, Molex, Belden & R&M'
      ],
      oems: ['CommScope Systimax', 'Panduit NetKey', 'Molex Premise', 'Belden Hirschmann', 'R&M Swiss']
    },
    {
      id: 'cctv',
      title: 'IP CCTV & Video Surveillance Systems',
      image: '/service-cctv.png',
      overview: 'High-definition IP camera design, NVR/SAN storage integration, AI video analytics (ANPR, perimeter intrusion), and encrypted mobile remote monitoring for commercial facilities.',
      features: [
        '4K IP Dome, Bullet, PTZ & Thermal Camera deployment',
        'NVR/SAN Video Storage with RAID redundancy & long-term archiving',
        'AI Video Analytics: License Plate Recognition (ANPR), Facial Recognition, Perimeter Intrusion',
        'Centralized Video Management Software (VMS) with multi-site command center feeds',
        'Encrypted remote mobile app access for facility managers'
      ],
      oems: ['Hikvision', 'Dahua Technology', 'Bosch Security', 'Axis Communications', 'CP Plus']
    },
    {
      id: 'security',
      title: 'Biometric Access Control & Security Systems',
      image: '/service-security.png',
      overview: 'Advanced biometric fingerprint, facial recognition & RFID access control integrated with turnstiles, flap barriers, HRMS attendance software, and fire alarm systems.',
      features: [
        'Biometric fingerprint, facial recognition & contactless RFID card access control',
        'Flap barriers, turnstiles, and boom barriers for vehicle & pedestrian entry',
        'Intrusion detection alarms, motion sensors, and glass-break detectors',
        'Integration with HRMS attendance software & visitor management systems',
        'Retail Electronic Article Surveillance (EAS) anti-theft pedestals'
      ],
      oems: ['Suprema', 'HID Global', 'Matrix Comsec', 'Honeywell', 'ZKTeco']
    },
    {
      id: 'av',
      title: 'AV Collaborative Solutions & Smart Boardrooms',
      image: '/service-av.png',
      overview: 'Turnkey AV solutions for boardrooms, video conferencing rooms, auditoriums, experience centers, and digital signage with touch control automation.',
      features: [
        'Interactive Video Conference Systems (Zoom Rooms, Microsoft Teams Rooms, Cisco Webex)',
        'High-density LED Video Walls, Ultra-short throw projectors, & Digital Signage',
        'Ceiling array microphones, digital sound processors (DSP), & acoustic optimization',
        'Smart Touch Control Panels for lighting, shades, display, and audio switching',
        'Command & Control Centers, Virtual Classrooms, Experience Centers & Banquet spaces'
      ],
      oems: ['Crestron', 'Logitech', 'Polycom', 'Bose Professional', 'Samsung Displays']
    },
    {
      id: 'datacenter',
      title: 'Data Center & Server Infrastructure',
      image: '/about-server-racks.png',
      overview: 'Hot/Cold aisle containment design, Intelligent PDU power routing, high-density fiber patch bays, raised flooring, and environmental monitoring.',
      features: [
        'Structured server rack arrangement with color-coded patch cabling',
        'Hot & Cold Aisle containment design for optimal airflow efficiency',
        'Smart IP PDU power monitoring & UPS battery backup redundancy',
        'Environmental sensors (Temperature, Humidity, Water Leak Detection)',
        'Precision Raised Floor & Overhead Wire Mesh Cable Trays'
      ],
      oems: ['APC Schneider', 'Vertiv', 'Eaton', 'Rittal', 'Netrack']
    },
    {
      id: 'maintenance',
      title: 'Annual Maintenance Contracts (AMC) & 24/7 SLA Support',
      image: '/service-maintenance.png',
      overview: 'Comprehensive 1-Year Defect Liability Period (DLP) and customized Annual Maintenance Contracts with 6–12 hour emergency on-site engineer response across India.',
      features: [
        '1-Year Defect Liability Period (DLP) covering all labor and termination work',
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
      
      {/* Ultra-Smooth Premium Header Banner Container (Zero Scroll Locking) */}
      <div className="mb-14 font-sans px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full relative rounded-3xl overflow-hidden bg-slate-950 p-6 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl flex flex-col items-center justify-center text-center">
          
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <img src="/service-header-bg.png" alt="Engineering Services Header" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
          </div>

          {/* Main Display Heading */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center text-center my-2 drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] max-w-full overflow-visible">
            
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
                strokeColor="#3b82f6"
                fillColor="#2563eb"
                strokeWidth={3.8}
                drawDuration={1.8}
                fillDelay={0.3}
                trigger="mount"
                fillMode="wipe"
                fontSize={96}
                fontWeight={900}
                letterSpacing={-2}
                fontFamily="Unbounded, SuperGType, GType, Syne, sans-serif"
                className="text-center drop-shadow-[0_6px_30px_rgba(37,99,235,0.95)] max-w-full font-black uppercase"
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

          <p className="relative z-10 text-white text-xs sm:text-base lg:text-lg font-bold text-center leading-relaxed max-w-3xl mx-auto mt-6 px-4 drop-shadow-[0_2px_18px_rgba(0,0,0,0.95)]">
            Delivering high-performance cabling, CCTV, access control, and boardroom AV infrastructure backed by Fluke certification and 25-year manufacturer warranties.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">

        {/* Detailed Service Content List */}
        <div className="space-y-16 sm:space-y-20 mb-20 font-sans">
          {fullServices.map((svc, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div key={svc.id} className="py-8 sm:py-10 border-b border-slate-200/90 font-sans">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-slate-950 tracking-tight">
                      {svc.title}
                    </h2>

                    <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
                      {svc.overview}
                    </p>

                    <div className="space-y-2.5 font-sans pt-1">
                      <h4 className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider mb-2">KEY DELIVERABLES</h4>
                      {svc.features.map((feat, i) => (
                        <div key={i} className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed flex items-start gap-2">
                          <span className="text-[#2563eb] font-bold">•</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Short Heading for Certified OEM Brands */}
                    <div className="pt-3">
                      <h4 className="text-xs font-mono text-[#2563eb] font-bold uppercase tracking-wider mb-2.5">
                        CERTIFIED OEM BRANDS
                      </h4>
                      <div className="flex flex-wrap gap-2 font-sans">
                        {svc.oems.map((oem) => (
                          <span key={oem} className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-mono text-[#2563eb] font-bold shadow-xs">
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
