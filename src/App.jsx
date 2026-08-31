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

    lenis.on('scroll', ScrollTrigger.update);

    const updateRaf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    if (lenisRef.current) {
      try {
        if (typeof lenisRef.current.resize === 'function') {
          lenisRef.current.resize();
        }
        lenisRef.current.scrollTo(0, { immediate: true, force: true });
        lenisRef.current.scroll = 0;
        lenisRef.current.targetScroll = 0;
      } catch (e) {
        // Fallback for safety
      }
    }
  };

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    scrollToTop();
  };

  // Multi-burst scroll reset to handle async font/image/canvas loading after page changes
  useEffect(() => {
    scrollToTop();

    const delays = [0, 50, 100, 150, 250, 350, 450, 600, 800, 1000];
    const timerIds = delays.map((delay) =>
      setTimeout(() => {
        scrollToTop();
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      }, delay)
    );

    return () => {
      timerIds.forEach((id) => clearTimeout(id));
    };
  }, [currentPage]);

  const handleSelectServiceQuote = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setQuoteOpen(true);
  };

  const pagesWithoutLiquidEther = ['services', 'gallery', 'clients', 'partners'];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#12ACE0]/20 selection:text-[#12ACE0] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && (
          <Loader onFinish={() => setLoading(false)} onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="min-h-screen flex flex-col justify-between"
        >
          {/* Main Executive Header Navigation */}
          <Navbar
            currentPage={currentPage}
            onNavigate={navigateTo}
            onOpenQuote={() => setQuoteOpen(true)}
          />

          <main className="flex-grow relative overflow-hidden">
            <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
              {currentPage === 'home' ? (
                <motion.div
                  key="home-page"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <PageWrapper pageKey="home" onMountScroll={scrollToTop}>
                  {/* Hero Section */}
                  <Hero onOpenQuote={() => setQuoteOpen(true)} />

                  {/* Post-Hero Home Page Container */}
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
                      <LocationsSection onOpenQuote={() => setQuoteOpen(true)} />
                      <Clients />
                    </div>
                  </div>
                  </PageWrapper>
                </motion.div>
              ) : (
                <motion.div
                  key={`page-${currentPage}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-0 pt-20 sm:pt-24 min-h-screen bg-white"
                >
                  <PageWrapper pageKey={currentPage} onMountScroll={scrollToTop}>
                  {!pagesWithoutLiquidEther.includes(currentPage) && (
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
                  )}

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
                    {currentPage === 'services' && (
                      <ServicesPage onOpenQuote={() => setQuoteOpen(true)} />
                    )}

                    {currentPage === 'about' && (
                      <AboutPage onOpenQuote={() => setQuoteOpen(true)} />
                    )}

                    {currentPage === 'clients' && (
                      <ClientsPage onOpenQuote={() => setQuoteOpen(true)} />
                    )}

                    {currentPage === 'partners' && (
                      <PartnersPage onOpenQuote={() => setQuoteOpen(true)} />
                    )}

                    {currentPage === 'gallery' && (
                      <GalleryPage onOpenQuote={() => setQuoteOpen(true)} />
                    )}

                    {currentPage === 'careers' && (
                      <CareersPage />
                    )}

                    {currentPage === 'contact' && (
                      <ContactPage />
                    )}
                  </div>
                  </PageWrapper>
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Site Footer */}
          <Footer
            onNavigate={navigateTo}
            onOpenQuote={() => setQuoteOpen(true)}
          />

          {/* Interactive Quote Request Modal */}
          <ContactModal
            isOpen={quoteOpen}
            onClose={() => setQuoteOpen(false)}
            preselectedService={selectedService}
          />
        </motion.div>
      )}
    </div>
  );
}
