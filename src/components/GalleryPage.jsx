import React, { useState, useEffect } from 'react';
import AccordionGallery from './AccordionGallery';

export default function GalleryPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const rackExecutions = [
    { image: '/gallery-rack-multicolor.png', label: 'Color-Coded Server Rack Dressing', link: '#' },
    { image: '/gallery-server-aisle.png', label: 'Data Center Server Lineup', link: '#' },
    { image: '/gallery-red-cabling.png', label: 'Precision Red Fiber Optic Cabling', link: '#' },
    { image: '/gallery-cable-dressing.png', label: 'Structured Cable Pathways & Trays', link: '#' },
    { image: '/gallery-fiber-panel.png', label: 'Illuminated Optical Patch Bay', link: '#' }
  ];

  const securityExecutions = [
    { image: '/gallery-cctv-wall.png', label: '4K Security Command Center Video Wall', link: '#' },
    { image: '/gallery-turnstiles.png', label: 'Biometric Access Control Turnstiles', link: '#' },
    { image: '/service-cctv.png', label: 'IP CCTV Surveillance System', link: '#' },
    { image: '/service-security.png', label: 'Biometric Security & Barrier Entry', link: '#' },
    { image: '/service-maintenance.png', label: 'On-Site Fluke OTDR Link Testing', link: '#' }
  ];

  const avInfrastructure = [
    { image: '/gallery-boardroom-wall.png', label: 'Corporate Smart Boardroom Video Wall', link: '#' },
    { image: '/service-network.png', label: 'High-Density Patch Bay Splicing', link: '#' },
    { image: '/about-server-racks.png', label: 'Server Rack Infrastructure', link: '#' },
    { image: '/service-av.png', label: 'Smart Boardroom AV Setup', link: '#' },
    { image: '/service-header-bg.png', label: 'Illuminated Fiber Optic Data Center', link: '#' }
  ];

  return (
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-20 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-6">
        
        {/* Accordion Row 1: Optimized for Ultra-Smooth Mobile Scroll */}
        <div className="w-full">
          <AccordionGallery
            items={rackExecutions}
            defaultIndex={2}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#3b82f6"
            overlayColor="#020617"
            textColor="#ffffff"
            grayscale={false}
            showLabels={true}
            duration={0.6}
            ease="power3.out"
            parallax={isMobile ? 0 : 0.5}
            tilt={isMobile ? 0 : 10}
            stagger={0.06}
            height={isMobile ? 280 : 380}
            gap={isMobile ? 8 : 12}
            radius={isMobile ? 14 : 20}
            orientation="horizontal"
          />
        </div>

        {/* Accordion Row 2: Optimized for Ultra-Smooth Mobile Scroll */}
        <div className="w-full">
          <AccordionGallery
            items={securityExecutions}
            defaultIndex={1}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#3b82f6"
            overlayColor="#020617"
            textColor="#ffffff"
            grayscale={false}
            showLabels={true}
            duration={0.6}
            ease="power3.out"
            parallax={isMobile ? 0 : 0.5}
            tilt={isMobile ? 0 : 10}
            stagger={0.06}
            height={isMobile ? 280 : 380}
            gap={isMobile ? 8 : 12}
            radius={isMobile ? 14 : 20}
            orientation="horizontal"
          />
        </div>

        {/* Accordion Row 3: Optimized for Ultra-Smooth Mobile Scroll */}
        <div className="w-full">
          <AccordionGallery
            items={avInfrastructure}
            defaultIndex={0}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#3b82f6"
            overlayColor="#020617"
            textColor="#ffffff"
            grayscale={false}
            showLabels={true}
            duration={0.6}
            ease="power3.out"
            parallax={isMobile ? 0 : 0.5}
            tilt={isMobile ? 0 : 10}
            stagger={0.06}
            height={isMobile ? 280 : 380}
            gap={isMobile ? 8 : 12}
            radius={isMobile ? 14 : 20}
            orientation="horizontal"
          />
        </div>

      </div>
    </div>
  );
}
