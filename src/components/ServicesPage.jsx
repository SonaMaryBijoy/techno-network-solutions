import React, { useState } from 'react';
import TiltedCard from './TiltedCard';
import DecryptedText from './DecryptedText';
import Lightfall from './Lightfall';
import { Network, Camera, ShieldCheck, Tv, Server, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesPage({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('cabling');

  const detailedServices = [
    {
      id: 'cabling',
      title: 'Structured Cabling & High-Density Networking',
      icon: Network,
      image: '/service-cabling.png',
      overview: 'End-to-end active and passive network cabling engineering for enterprise tech parks, data centers, and corporate headquarters. Engineered to TIA/EIA-568 standards with Fluke DSX-8000 OTDR verification.',
      features: [
        'Cat6, Cat6A, & Cat7 UTP/STP copper cable infrastructure deployment',
        'Singlemode (OS2) & Multimode (OM3/OM4/OM5) optical fiber backbone trunking',
        'Server rack cable management, patch panel termination, & comb dressing',
        'Cable tray, ladder rack, raceway, & conduit pathway design',
        'Fluke Versiv DSX-8000 link certification with PDF report documentation'
      ],
      specs: [
        { label: 'Max Bandwidth', value: '100 Gbps Optical / 10 Gbps Copper' },
        { label: 'Testing Standard', value: 'TIA-568.2-D & ISO/IEC 11801' },
        { label: 'Warranty SLA', value: '25-Year System Performance Warranty' }
      ]
    },
    {
      id: 'cctv',
      title: 'CCTV & AI IP Video Surveillance Systems',
      icon: Camera,
      image: '/service-cctv.png',
      overview: 'High-definition 4K IP camera networks, thermal imaging, AI video analytics, and central VMS control room integrations designed for 24/7 security coverage.',
      features: [
        '4K Ultra-HD IP dome, bullet, & PTZ surveillance camera installation',
        'Central NVR/DVR storage arrays with redundant RAID 5/6 disk pools',
        'AI video management software (facial recognition, perimeter alert, ANPR)',
        'PoE+ switch networking with dedicated fiber video uplinks',
        'Mobile & desktop encrypted remote live video monitoring feeds'
      ],
      specs: [
        { label: 'Resolution Support', value: 'Up to 4K UHD (8MP / 12MP)' },
        { label: 'Storage Retention', value: '30 to 180 Days Continuous NVR RAID' },
        { label: 'Analytics', value: 'AI Perimeter Protection & Motion Tracking' }
      ]
    },
    {
      id: 'security',
      title: 'Biometric Access Control & Physical Security',
      icon: ShieldCheck,
      image: '/service-security.png',
      overview: 'Integrated biometric, RFID, and barrier security control protecting sensitive enterprise assets, server rooms, and executive office facilities.',
      features: [
        'Face recognition, fingerprint, & RFID card reader door access controls',
        'Optical flap barrier turnstiles & motorized boom barriers for lobby entries',
        'Server rack biometric lock handles & multi-factor room access control',
        'Intrusion alarm sensors, glass-break detectors, & panic buttons',
        'Centralized access control software with audit logging & HR payroll sync'
      ],
      specs: [
        { label: 'Verification Speed', value: '< 0.2 Seconds per User' },
        { label: 'Capacity', value: 'Up to 100,000 Users & 500,000 Event Logs' },
        { label: 'Integration', value: 'Fire Alarm Auto-Release & HR Management' }
      ]
    },
    {
      id: 'av',
      title: 'Smart Boardroom AV & Unified Telepresence',
      icon: Tv,
      image: '/service-av.png',
      overview: 'Transform conference rooms and auditoriums into smart hybrid collaborative environments with crystal-clear audio, seamless video conferencing, and automated environmental controls.',
      features: [
        'Commercial 4K interactive display panels, laser projectors, & video walls',
        'Ceiling beamforming microphone arrays & DSP echo cancellation speakers',
        'Zoom Rooms, Microsoft Teams, & Cisco Webex hardware integration',
        'Smart touch panel room automation (lighting, shades, input switching)',
        'Acoustic treatment, cable management pop-up boxes, & HDMI over IP'
      ],
      specs: [
        { label: 'Platform Support', value: 'MS Teams, Zoom, Webex, & BYOD' },
        { label: 'Audio Tech', value: 'Dante Audio over IP & Acoustic Echo Cancellation' },
        { label: 'Control Systems', value: 'Custom Touch Panel Automation' }
      ]
    },
    {
      id: 'datacenter',
      title: 'Data Center & Server Room Infrastructure',
      icon: Server,
      image: '/service-datacenter.png',
      overview: 'High-density server room engineering incorporating hot/cold aisle containment, intelligent PDU power routing, and organized fiber patch bay management.',
      features: [
        'Hot & Cold Aisle containment enclosure engineering for thermal efficiency',
        'Intelligent network-monitored PDU power distribution units',
        'Raised floor wire mesh cable tray routing & server rack deployment',
        'Pre-terminated MPO/MTP high-density optical cassette panels',
        'Environmental monitoring (temperature, humidity, water leak detection)'
      ],
      specs: [
        { label: 'Rack Density', value: 'Up to 48U Server & Network Cabinets' },
        { label: 'Fiber Density', value: 'Ultra High-Density MPO/MTP Cassettes' },
        { label: 'Efficiency SLA', value: 'Hot/Cold Aisle Thermal Optimization' }
      ]
    },
    {
      id: 'maintenance',
      title: 'Annual Maintenance Contracts (AMC) & 24/7 SLA Support',
      icon: CheckCircle2,
      image: '/service-[#12ACE0].png',
      overview: 'Comprehensive Support After Installation and customized Annual Maintenance Contracts with 6–12 hour emergency on-site engineer response across India.',
      features: [
        'Dedicated Support After Installation covering all labor and termination work',
        'Dedicated SLA with 6–12 hour emergency on-site engineer deployment',
        'Annual Maintenance Contracts (AMC) with preventative health audits',
        'Network health monitoring, cable re-dressing, & optical power testing',
        'On-site client IT staff training & comprehensive handover documentation'
      ],
      specs: [
        { label: 'Response Time', value: '6–12 Hours On-Site Emergency SLA' },
        { label: 'Audit Frequency', value: 'Quarterly Preventative Maintenance' },
        { label: 'Coverage', value: 'Nationwide Support Operations Across India' }
      ]
    }
  ];

  const currentService = detailedServices.find(s => s.id === activeTab) || detailedServices[0];

  return (
    <div className="pt-20 pb-20 bg-transparent min-h-screen text-slate-900 font-sans overflow-x-hidden">
      
      {/* Services Page Header with Lightfall Backdrop */}
      <section className="relative py-16 sm:py-24 bg-[#060b1c] text-white overflow-hidden font-sans mb-12 sm:mb-16">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Lightfall
            dpr={1}
            colors={['#12ACE0', '#3E91D5', '#985AC0']}
            backgroundColor="#060b1c"
            speed={0.5}
            streakCount={2}
            streakWidth={1}
            streakLength={1}
            glow={1}
            density={0.6}
            twinkle={1}
            zoom={3}
            backgroundGlow={0.5}
            opacity={0.85}
            mouseInteraction
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[#12ACE0] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            TURNKEY ENGINEERING SERVICES
          </div>

          {/* Service Page Main Header */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white mb-6 leading-tight">
            <DecryptedText
              text="INFRASTRUCTURE DISCIPLINES"
              speed={20}
              sequential
              animateOn="view"
              className="text-white font-sans font-black tracking-tight uppercase"
              encryptedClassName="text-cyan-400 font-sans"
            />
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed font-medium font-sans max-w-3xl mx-auto">
            Explore our specialized infrastructure verticals — engineered for zero downtime, TIA/EIA compliance, and 25-year manufacturer warranties.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Horizontal Service Category Selector Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none font-sans">
          {detailedServices.map((s) => {
            const Icon = s.icon;
            const isSelected = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-4 sm:px-5 py-3 rounded-2xl font-mono text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 whitespace-nowrap cursor-pointer flex-shrink-0 border ${
                  isSelected
                    ? 'bg-[#12ACE0] text-white border-[#12ACE0] shadow-md shadow-cyan-500/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#12ACE0]'}`} />
                <span>{s.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start font-sans">
          
          {/* Left Column: Interactive Image Showcase */}
          <div className="lg:col-span-6 font-sans">
            <div className="relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden font-sans">
              <TiltedCard
                imageSrc={currentService.image}
                altText={currentService.title}
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.03}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent
                overlayContent={
                  <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-t from-slate-950/80 via-transparent to-transparent font-sans">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-slate-950 text-xs font-mono font-bold">
                        FEATURED SOLUTION
                      </span>
                    </div>

                    <div className="text-white font-sans">
                      <h3 className="text-xl sm:text-2xl font-heading font-black mb-1">
                        {currentService.title}
                      </h3>
                    </div>
                  </div>
                }
              />
            </div>
          </div>

          {/* Right Column: Specs & Feature Breakdown */}
          <div className="lg:col-span-6 space-y-6 font-sans">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 mb-3 leading-tight font-sans">
                {currentService.title}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-6 font-sans">
                {currentService.overview}
              </p>
            </div>

            {/* Core Features List */}
            <div className="space-y-3 font-sans">
              <h4 className="text-xs font-mono font-extrabold text-[#12ACE0] uppercase tracking-wider mb-2">
                CORE EXECUTION CAPABILITIES
              </h4>
              {currentService.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs font-sans">
                  <CheckCircle2 className="w-5 h-5 text-[#12ACE0] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 font-sans">{feat}</span>
                </div>
              ))}
            </div>

            {/* Specifications Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-sans">
              {currentService.specs.map((sp, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-cyan-50/50 border border-cyan-100 font-sans">
                  <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {sp.label}
                  </span>
                  <span className="block text-xs sm:text-sm font-bold text-slate-900 font-sans">
                    {sp.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="pt-4 font-sans">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold bg-[#12ACE0] hover:bg-[#0f96c4] text-white shadow-md shadow-cyan-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>REQUEST SITE SURVEY & BOQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
