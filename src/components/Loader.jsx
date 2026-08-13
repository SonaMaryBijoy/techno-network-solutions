import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import DecryptedText from './DecryptedText';
import Hyperspeed from './Hyperspeed';

export default function Loader({ onFinish, onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING NETWORK BACKBONE...');

  const handleDone = onFinish || onComplete || (() => {});

  useEffect(() => {
    const statuses = [
      { at: 15, text: 'AUTHENTICATING FIBER BACKBONE [SMF 100G]...' },
      { at: 35, text: 'SCANNING CAT6A COPPER NODES (100,000+ ACTIVE)...' },
      { at: 60, text: 'VERIFYING COMMSCOPE & PANDUIT CERTIFICATIONS...' },
      { at: 80, text: 'ENGAGING SECURITY & ACCESS CONTROL PROTOCOLS...' },
      { at: 95, text: 'SYSTEM READY // WELCOME TO TECHNO NETWORK SOLUTIONS' }
    ];

    // Reduced preloader duration (~1.4s total duration, 1s faster)
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => handleDone(), 200);
          return 100;
        }
        const next = Math.min(100, prev + 2);
        const matched = statuses.find(s => s.at <= next && s.at > prev);
        if (matched) setStatusText(matched.text);
        return next;
      });
    }, 24);

    return () => clearInterval(timer);
  }, [handleDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] text-slate-100 overflow-hidden select-none"
    >
      {/* Hyperspeed WebGL Backdrop in Preloader */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
      </div>

      {/* Dark Gradient Overlay for High Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 via-[#985AC0]/15 to-[#000000]/85 z-[1] pointer-events-none" />

      {/* Preloader Main Content Box */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full px-4 text-center">
        
        {/* Glass Card for Logo with Purple Glow Border */}
        <div className="mb-6">
          <div className="p-4 rounded-2xl bg-slate-950/95 border border-purple-500/50 shadow-[0_0_35px_rgba(152,90,192,0.45)] flex items-center justify-center relative backdrop-blur-xl">
            <img src="/techno-logo.png" alt="Techno Network Solutions Logo" className="h-14 sm:h-16 w-auto object-contain" />
          </div>
        </div>

        {/* Executive Custom G-Type Single Line Display Heading */}
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-black tracking-tight text-white mb-3 font-gtype uppercase drop-shadow-[0_4px_30px_rgba(152,90,192,0.8)] inline-flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden">
          <DecryptedText
            text="TECHNO NETWORK SOLUTIONS"
            speed={18}
            maxIterations={10}
            sequential
            revealDirection="start"
            animateOn="view"
            className="text-white font-gtype font-black tracking-tight whitespace-nowrap"
            encryptedClassName="text-purple-400 font-gtype whitespace-nowrap"
          />
          <span className="w-1.5 sm:w-2 h-6 sm:h-8 bg-[#3b82f6] rounded-full animate-pulse inline-block flex-shrink-0" />
        </h1>

        <p className="text-[11px] sm:text-xs font-mono text-purple-300 font-bold tracking-widest uppercase mb-8 drop-shadow-md whitespace-nowrap">
          Structured Cabling & Infrastructure Specialists
        </p>

        {/* Progress Bar Container with Purple Gradient */}
        <div className="w-full bg-slate-950/90 border border-purple-500/40 rounded-full p-1.5 mb-4 shadow-[0_0_25px_rgba(152,90,192,0.4)] relative backdrop-blur-xl">
          <motion.div
            className="h-2.5 rounded-full bg-gradient-to-r from-[#985AC0] via-[#C43FB5] to-[#12ACE0] relative overflow-hidden shadow-[0_0_15px_rgba(152,90,192,0.6)]"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-shimmer" />
          </motion.div>
        </div>

        {/* Status Line & Percentage Counter */}
        <div className="flex items-center justify-between w-full text-xs font-mono text-slate-300 font-bold drop-shadow">
          <span className="flex items-center gap-1.5 text-purple-300 text-[10px] sm:text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-[340px] sm:max-w-[440px]">
            <Activity className="w-3.5 h-3.5 animate-spin flex-shrink-0 text-purple-400" />
            <DecryptedText
              text={statusText}
              speed={15}
              maxIterations={6}
              animateOn="view"
              className="text-purple-300 whitespace-nowrap"
              encryptedClassName="text-purple-500 whitespace-nowrap"
            />
          </span>
          <span className="font-extrabold text-purple-300 text-sm ml-2 flex-shrink-0">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
