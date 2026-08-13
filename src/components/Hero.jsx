import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './BlurText';
import CountUp from './CountUp';
import Lightfall from './Lightfall';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const taglines = [
    "Every cable lands exactly where it should.",
    "Precision in every single step.",
    "Zero-compromise enterprise network backbone.",
    "Fluke-certified 100G fiber & Cat6A infrastructure.",
    "Built to power mission-critical operations."
  ];

  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [taglines.length]);

  const stats = [
    { from: 0, to: 12, suffix: '+', label: 'YEARS DELIVERING' },
    { from: 0, to: 40, suffix: '+', label: 'IN-HOUSE ENGINEERS' },
    { from: 0, to: 10, suffix: 'L+', label: 'COPPER NODES' },
    { from: 0, to: 25, suffix: 'K+', label: 'FIBER CONNECTIONS' },
    { prefix: '₹', from: 0, to: 100, suffix: 'CR+', label: 'PROJECT VALUE DELIVERED' },
  ];

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 bg-[#060b1c] text-white overflow-hidden font-sans">
      {/* Lightfall Canvas Spreading Across the Entire Hero Section */}
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
          mouseStrength={0.5}
          mouseRadius={1}
        />
      </div>

      {/* Subtle Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b1c]/60 via-transparent to-[#060b1c]/80 z-[1] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        <div className="max-w-4xl mb-12 sm:mb-16 pt-2 sm:pt-4 font-sans">
          
          {/* Eyebrow Header with Official Logo */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6 font-sans">
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 shadow-xl inline-flex items-center">
              <img src="/techno-logo.png" alt="Techno Network Solutions Logo" className="h-6 sm:h-8 w-auto object-contain" />
            </div>
            
            <span className="font-heading text-[10px] sm:text-xs lg:text-sm font-extrabold text-[#12ACE0] tracking-wider uppercase py-1 drop-shadow-md">
              Structured Cabling & Infrastructure Specialists
            </span>
          </div>

          {/* Looping BlurText Main Headline */}
          <div className="mb-4 sm:mb-6 min-h-[130px] sm:min-h-[170px] lg:min-h-[210px] flex items-center overflow-hidden font-sans">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={taglineIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full"
              >
                <BlurText
                  text={taglines[taglineIndex]}
                  delay={45}
                  animateBy="words"
                  direction="top"
                  className="text-3xl sm:text-5xl lg:text-7xl font-black font-heading text-white tracking-tight leading-[1.1] sm:leading-[1.05] drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subhead Lead */}
          <p className="text-slate-200 text-sm sm:text-lg lg:text-xl font-medium leading-relaxed mb-6 sm:mb-8 max-w-2xl drop-shadow font-sans">
            Structured cabling, networking, CCTV, security and AV infrastructure — designed, terminated, tested and supported by a <strong className="text-[#12ACE0] font-bold">40+ person in-house team</strong> with <strong className="text-white font-extrabold">12+ years</strong> on live enterprise sites across India.
          </p>

          {/* GET A QUOTE Button — Logo Sky Blue #12ACE0 */}
          <div className="font-sans">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4.5 rounded-xl font-sans text-xs sm:text-sm font-bold bg-[#12ACE0] hover:bg-[#0f96c4] text-white shadow-[0_0_25px_rgba(18,172,224,0.5)] hover:shadow-cyan-500/70 hover:scale-105 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats Band Bar with CountUp */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/20 font-sans">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-white/95 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl border border-white/50 shadow-2xl flex flex-col items-start justify-center relative overflow-hidden group hover:border-[#12ACE0] transition-colors font-sans"
            >
              <div className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight flex items-center">
                {stat.prefix}
                <CountUp
                  from={stat.from}
                  to={stat.to}
                  duration={1.5}
                  className="font-heading font-black text-slate-950"
                />
                <span className="text-[#12ACE0] ml-0.5">{stat.suffix}</span>
              </div>

              <span className="font-mono text-[9px] sm:text-[10px] text-slate-700 tracking-wider font-bold uppercase mt-0.5 sm:mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
