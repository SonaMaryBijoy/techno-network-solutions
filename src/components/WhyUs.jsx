import React, { useRef } from 'react';
import { HardHat, Layers, FileText, CheckCircle2, GraduationCap, ShieldCheck } from 'lucide-react';
import AnimatedContent from './AnimatedContent';
import TiltedCard from './TiltedCard';
import ElectricBorder from './ElectricBorder';
import DepthText from './DepthText';

export default function WhyUs() {
  const containerRef = useRef(null);

  const steps = [
    {
      num: '01',
      title: 'Safety First for All Personnel',
      desc: 'Branded PPE — helmets, safety jackets, harness belts, goggles, gloves, ladders — with dedicated on-site safety officers on every site.',
      icon: HardHat,
    },
    {
      num: '02',
      title: 'Pre-Execution Design Verification',
      desc: 'End-customer requirements and cable pathways are verified against CAD engineering blueprints before any trunking or pull is initiated.',
      icon: Layers,
    },
    {
      num: '03',
      title: 'Daily Project Review & Milestones',
      desc: 'Every site is managed by a dedicated project lead who submits daily progress logs and resolves bottlenecks with site management.',
      icon: FileText,
    },
    {
      num: '04',
      title: 'Fluke OTDR Permanent Link Certification',
      desc: '100% of copper drops and fiber strands are tested with Fluke Versiv DSX-8000 analyzers. Written PDF certificates delivered for every node.',
      icon: CheckCircle2,
    },
    {
      num: '05',
      title: 'On-Site IT Staff Training',
      desc: 'Before final signoff, your internal IT team receives hands-on training on rack layouts, patch panel mapping, and troubleshooting.',
      icon: GraduationCap,
    },
    {
      num: '06',
      title: '1-Year Defect Liability Period (DLP)',
      desc: 'Every project includes a comprehensive 1-year DLP service warranty. Response to service requests within 6–12 hours across India.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-transparent border-t border-slate-200 relative overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: TiltedCard Image Container Wrapped in Subtle ElectricBorder */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ElectricBorder color="#2563eb" speed={0.6} chaos={0.04} borderRadius={24} className="w-full">
              <div className="relative w-full h-[480px] sm:h-[540px] rounded-3xl overflow-hidden">
                <TiltedCard
                  imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80"
                  altText="On-Site Infrastructure Execution & Server Rack Cable Dressing"
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.04}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent
                  overlayContent={
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl pointer-events-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-display font-black text-slate-950 uppercase tracking-wider">100% IN-HOUSE CREW</h4>
                          <p className="text-[11px] font-mono text-slate-500 font-semibold">Fluke Versiv Certified Engineers</p>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
            </ElectricBorder>
          </div>

          {/* Right Column: Header & Vertical Stack of Protocol Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Section Header wrapped in AnimatedContent */}
            <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out">
              <div>
                {/* Executive Super Massive 3D DepthText Heading with White & Blue Text Colors */}
                <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <DepthText
                    text="WHAT ACTUALLY HAPPENS ON"
                    layers={36}
                    depth={2.6}
                    faceColor="#ffffff"
                    depthColor="#2563eb"
                    tilt={8}
                    pointerTracking
                    smoothing={0.14}
                    perspective={900}
                    autoOrbit
                    orbitSpeed={0.35}
                    fontSize="clamp(2.2rem, 4.8vw, 3.8rem)"
                    fontWeight={900}
                    fontFamily="'Unbounded', 'Syne', 'Bricolage Grotesque', sans-serif"
                    shadow
                  />
                  <DepthText
                    text="YOUR SITE."
                    layers={36}
                    depth={2.6}
                    faceColor="#2563eb"
                    depthColor="#1d4ed8"
                    tilt={8}
                    pointerTracking
                    smoothing={0.14}
                    perspective={900}
                    autoOrbit
                    orbitSpeed={0.35}
                    fontSize="clamp(2.2rem, 4.8vw, 3.8rem)"
                    fontWeight={900}
                    fontFamily="'Unbounded', 'Syne', 'Bricolage Grotesque', sans-serif"
                    shadow
                  />
                </div>
                
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  Not marketing language — this is our strict, step-by-step execution protocol on every single job.
                </p>
              </div>
            </AnimatedContent>

            {/* 6 Step Vertical Feature Cards Stack wrapped in TiltedCard 3D Spring Tilt Filters */}
            <div className="space-y-4 pt-2">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <TiltedCard
                    key={step.num}
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={8}
                    scaleOnHover={1.02}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent
                    overlayContent={
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md transition-all flex items-start gap-4 sm:gap-5 relative group h-full">
                        {/* Left Icon Container */}
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50/80 text-[#2563eb] border border-blue-100/80 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>

                        {/* Title & Description */}
                        <div className="pr-8">
                          <h3 className="text-base sm:text-lg font-heading font-black text-slate-900 mb-1.5 group-hover:text-[#2563eb] transition-colors leading-snug">
                            {step.title}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                            {step.desc}
                          </p>
                        </div>

                        {/* Top Right Index Number */}
                        <span className="font-mono text-xs sm:text-sm text-slate-300 font-extrabold absolute top-5 right-5 group-hover:text-[#2563eb]/60 transition-colors">
                          {step.num}
                        </span>
                      </div>
                    }
                  />
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
