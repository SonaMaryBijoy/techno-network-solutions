import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyUs from './components/WhyUs';
import LocationsSection from './components/LocationsSection';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ContactModal from './components/ContactModal';
import LiquidEther from './components/LiquidEther';
import CursorGrid from './components/CursorGrid';
import ShapeGrid from './components/ShapeGrid';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ClientsPage from './components/ClientsPage';
import PartnersPage from './components/PartnersPage';
import GalleryPage from './components/GalleryPage';
import CareersPage from './components/CareersPage';
import ContactPage from './components/ContactPage';

gsap.registerPlugin(ScrollTrigger);

// Helper component that forces scroll-to-top BEFORE DOM paint on every page change
function PageWrapper({ pageKey, children, onMountScroll }) {
  useLayoutEffect(() => {
    onMountScroll();
  }, [pageKey, onMountScroll]);

  return <>{children}</>;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const lenisRef = useRef(null);

  // Disable automatic browser scroll restoration on page navigation
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Initialize Lenis Ultra-Smooth Inertial Scrolling across entire application
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top helper function
  const scrollToTopInstant = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    scrollToTopInstant();
  };

  const handleOpenQuoteModal = (serviceTitle = '') => {
    setSelectedService(serviceTitle);
    setQuoteOpen(true);
  };

  const handleSelectServiceQuote = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setQuoteOpen(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen selection:bg-[#12ACE0] selection:text-white font-sans antialiased overflow-x-hidden relative">
      {/* Global Preloader Screen */}
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen font-sans bg-white"
        >
          {/* Main Top Navigation Header */}
          <Navbar 
            currentPage={currentPage}
            onNavigate={handleNavigate}
            setCurrentPage={handleNavigate}
            onOpenQuote={() => handleOpenQuoteModal()} 
          />

          {/* Page Routing Views */}
          <main className="relative font-sans bg-white">
            {currentPage === 'home' && (
              <PageWrapper pageKey="home" onMountScroll={scrollToTopInstant}>
                <div>
                  <Hero onOpenQuote={() => handleOpenQuoteModal()} />
                  
                  {/* Post-Hero Home Page Container with Clean White Background & Interactive Filters */}
                  <div className="relative z-0 bg-white">
                    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-38 will-change-transform">
                      <LiquidEther
                        colors={['#5227FF', '#FF9FFC', '#B497CF']}
                        mouseForce={15}
                        cursorSize={80}
                        isViscous
                        viscous={20}
                        iterationsViscous={12}
                        iterationsPoisson={12}
                        resolution={0.25}
                        isBounce={false}
                        autoDemo
                        autoSpeed={0.4}
                        autoIntensity={1.8}
                        takeoverDuration={0.2}
                        autoResumeDelay={3000}
                        autoRampDuration={0.5}
                      />
                    </div>

                    <div className="absolute inset-0 pointer-events-auto z-[1] overflow-hidden opacity-85">
                      <CursorGrid
                        cellSize={68}
                        color="#12ACE0"
                        radius={145}
                        falloff="smooth"
                        holdTime={400}
                        fadeDuration={800}
                        lineWidth={1.25}
                        maxOpacity={1}
                        fillOpacity={0.05}
                        gridOpacity={0.08}
                        cellRadius={0}
                        clickPulse
                        pulseSpeed={600}
                      />
                    </div>

                    <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden opacity-14">
                      <ShapeGrid
                        speed={0.5}
                        squareSize={65}
                        direction="diagonal"
                        borderColor="#cbd5e1"
                        hoverFillColor="#12ACE0"
                        shape="square"
                        hoverTrailAmount={4}
                      />
                    </div>

                    <div className="relative z-10">
                      <ServicesSection onSelectService={handleSelectServiceQuote} />
                      <WhyUs />
                      <LocationsSection onOpenQuote={() => handleOpenQuoteModal()} />
                      <Clients />
                    </div>
                  </div>
                </div>
              </PageWrapper>
            )}

            {currentPage === 'services' && (
              <PageWrapper pageKey="services" onMountScroll={scrollToTopInstant}>
                <ServicesPage 
                  onOpenQuote={handleOpenQuoteModal} 
                  onSelectService={handleSelectServiceQuote}
                />
              </PageWrapper>
            )}

            {currentPage === 'about' && (
              <PageWrapper pageKey="about" onMountScroll={scrollToTopInstant}>
                <AboutPage onOpenQuote={handleOpenQuoteModal} />
              </PageWrapper>
            )}

            {currentPage === 'clients' && (
              <PageWrapper pageKey="clients" onMountScroll={scrollToTopInstant}>
                <ClientsPage onOpenQuote={handleOpenQuoteModal} />
              </PageWrapper>
            )}

            {currentPage === 'partners' && (
              <PageWrapper pageKey="partners" onMountScroll={scrollToTopInstant}>
                <PartnersPage onOpenQuote={handleOpenQuoteModal} />
              </PageWrapper>
            )}

            {currentPage === 'gallery' && (
              <PageWrapper pageKey="gallery" onMountScroll={scrollToTopInstant}>
                <GalleryPage onOpenQuote={handleOpenQuoteModal} />
              </PageWrapper>
            )}

            {currentPage === 'careers' && (
              <PageWrapper pageKey="careers" onMountScroll={scrollToTopInstant}>
                <CareersPage onOpenQuote={handleOpenQuoteModal} />
              </PageWrapper>
            )}

            {currentPage === 'contact' && (
              <PageWrapper pageKey="contact" onMountScroll={scrollToTopInstant}>
                <ContactPage onOpenQuote={handleOpenQuoteModal} />
              </PageWrapper>
            )}
          </main>

          {/* Footer Component */}
          <Footer onNavigate={handleNavigate} setCurrentPage={handleNavigate} onOpenQuote={() => handleOpenQuoteModal()} />

          {/* Interactive Lead Generation Contact Modal */}
          <ContactModal 
            isOpen={quoteOpen} 
            onClose={() => setQuoteOpen(false)}
            initialService={selectedService}
          />
        </motion.div>
      )}
    </div>
  );
}
