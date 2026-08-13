import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectServiceQuote = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setQuoteOpen(true);
  };

  const pagesWithoutLiquidEther = ['services', 'gallery', 'clients', 'partners'];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#12ACE0]/20 selection:text-[#12ACE0]">
      <AnimatePresence>
        {loading && (
          <Loader onFinish={() => setLoading(false)} onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex flex-col justify-between"
        >
          {/* Main Executive Header Navigation */}
          <Navbar
            currentPage={currentPage}
            onNavigate={navigateTo}
            onOpenQuote={() => setQuoteOpen(true)}
          />

          <main className="flex-grow relative overflow-hidden">
            {/* Direct Instant Page Navigation Without Transition Delay */}
            {currentPage === 'home' ? (
              <div key="home-page">
                {/* Hero Section */}
                <Hero onOpenQuote={() => setQuoteOpen(true)} />

                {/* Post-Hero Home Page Container with Refined LiquidEther Background */}
                <div className="relative z-0 bg-white">
                  {/* Layer 1: Subtle Refined LiquidEther Background Animation */}
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

                  {/* Layer 2: Subtle Touch-Highlighted CursorGrid Backdrop */}
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

                  {/* Layer 3: Soft Light ShapeGrid Page Background */}
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
                    {/* Certified OEM Leaders section & Logo Loop positioned cleanly at the bottom of the home page */}
                    <Clients />
                  </div>
                </div>
              </div>
            ) : (
              <div key={`page-${currentPage}`} className="relative z-0 pt-24 min-h-screen bg-white">
                {/* Render LiquidEther only on inner pages that are NOT in pagesWithoutLiquidEther */}
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

                {/* Subtle Touch-Highlighted CursorGrid Backdrop */}
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

                {/* Soft Light ShapeGrid Page Background */}
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
              </div>
            )}
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
