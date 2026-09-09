import React, { useState, useRef } from 'react';
import { Calculator, Server, Layers, Cpu, CheckCircle2, ArrowRight, RefreshCw, Zap } from 'lucide-react';
import BorderGlow from './BorderGlow';
import VariableProximity from './VariableProximity';
import AnimatedContent from './AnimatedContent';
import LiquidEther from './LiquidEther';

export default function CableCalculator({ onExportQuote }) {
  const containerRef = useRef(null);
  const [sqft, setSqft] = useState(10000);
  const [seats, setSeats] = useState(80);
  const [cameras, setCameras] = useState(16);
  const [accessPoints, setAccessPoints] = useState(8);
  const [cableType, setCableType] = useState('CAT6A');

  const dataDrops = seats * 2;
  const totalNodes = dataDrops + Number(cameras) + Number(accessPoints);
  const avgCableMeters = totalNodes * 70;
  const cableRolls = Math.ceil(avgCableMeters / 305);
  const patchPanels24P = Math.ceil(totalNodes / 24);
  const rackUHeight = Math.max(12, Math.ceil(patchPanels24P * 3 + 8));
  const patchCords = totalNodes * 2;
  const fiberCores = sqft > 20000 ? 24 : 12;
  const estimatedDays = Math.ceil(totalNodes / 25);

  const handleExport = () => {
    const specs = {
      sqft,
      seats,
      totalNodes,
      cableType,
      cableRolls,
      patchPanels24P,
      rackUHeight,
      patchCords,
      cameras,
      accessPoints,
      estimatedDays
    };
    onExportQuote(specs);
  };

  return (
    <section id="cable-calculator" className="py-16 sm:py-20 relative bg-white border-t border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <AnimatedContent distance={80} direction="vertical" duration={0.8} ease="power3.out">
          {/* Full-width Header Container wrapped with LiquidEther */}
          <div ref={containerRef} className="w-full mb-8 sm:mb-12 relative p-5 sm:p-8 rounded-2xl sm:rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm">
            
            {/* LiquidEther WebGL Canvas in Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
              <LiquidEther
                colors={['#5227FF', '#FF9FFC', '#B497CF']}
                mouseForce={20}
                cursorSize={100}
                isViscous
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={false}
                autoDemo
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
              />
            </div>

            <div className="relative z-10 max-w-4xl">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-snug sm:leading-tight mb-3 sm:mb-4">
                <VariableProximity
                  label="Calculate your network cable & hardware requirements."
                  className="cursor-pointer font-black text-slate-900"
                  fromFontVariationSettings="'wght' 700, 'opsz' 14"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={130}
                  falloff="linear"
                />
              </h2>
              <p className="text-slate-700 text-sm sm:text-lg font-medium leading-relaxed">
                Adjust your office parameters below to generate instant estimates for copper rolls, patch panels, rack U-height, and Fluke certification test points.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Controls Input Panel */}
            <div className="lg:col-span-6 bg-slate-50/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 space-y-5 sm:space-y-6 shadow-sm">
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#12ACE0]" />
                <span>Site Input Parameters</span>
              </h3>

              {/* Slider 1: Sq Ft */}
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex justify-between text-xs font-mono text-slate-600 font-bold">
                  <span>FACILITY FLOOR AREA</span>
                  <strong className="text-slate-900 font-extrabold">{sqft.toLocaleString()} SQ FT</strong>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#12ACE0]"
                />
              </div>

              {/* Slider 2: Seat Drops */}
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex justify-between text-xs font-mono text-slate-600 font-bold">
                  <span>WORKSTATION SEATS</span>
                  <strong className="text-slate-900 font-extrabold">{seats} SEATS ({dataDrops} DROPS)</strong>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="5"
                  value={seats}
                  onChange={(e) => setSeats(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#12ACE0]"
                />
              </div>

              {/* Input Grid 3: Cameras & APs */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-600 uppercase block font-bold">IP CCTV CAMERAS</label>
                  <input
                    type="number"
                    min="0"
                    max="300"
                    value={cameras}
                    onChange={(e) => setCameras(Number(e.target.value))}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-mono text-slate-900 font-bold focus:border-[#12ACE0] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-600 uppercase block font-bold">WIFI ACCESS POINTS</label>
                  <input
                    type="number"
                    min="0"
                    max="200"
                    value={accessPoints}
                    onChange={(e) => setAccessPoints(Number(e.target.value))}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-mono text-slate-900 font-bold focus:border-[#12ACE0] outline-none"
                  />
                </div>
              </div>

              {/* Cable Standard Radio Selector */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-slate-600 uppercase block font-bold">CABLE INFRASTRUCTURE GRADE</label>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setCableType('CAT6A')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                      cableType === 'CAT6A'
                        ? 'bg-cyan-50 border-[#12ACE0] text-[#12ACE0] shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Cat6A (10G 500MHz)
                  </button>

                  <button
                    type="button"
                    onClick={() => setCableType('CAT6')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                      cableType === 'CAT6'
                        ? 'bg-cyan-50 border-[#12ACE0] text-[#12ACE0] shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Cat6 (1G 250MHz)
                  </button>
                </div>
              </div>
            </div>

            {/* Calculated Results Panel */}
            <div className="lg:col-span-6">
              <BorderGlow
                edgeSensitivity={30}
                backgroundColor="#ffffff"
                borderRadius={24}
                glowRadius={40}
                glowIntensity={1}
                colors={['#12ACE0', '#3E91D5', '#985AC0']}
                className="h-full"
              >
                <div className="p-5 sm:p-8 space-y-5 sm:space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 font-mono text-xs">
                    <span className="text-slate-400 font-bold">BILL OF MATERIALS</span>
                    <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 font-bold text-[10px]">
                      ISO/IEC 11801 SPEC
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase font-bold block">NETWORK NODES</span>
                      <strong className="text-xl sm:text-2xl font-heading font-black text-slate-900 block mt-1">{totalNodes} Drops</strong>
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#12ACE0] mt-1 block font-semibold">{cableType} Link Tested</span>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase font-bold block">CABLE ROLLS</span>
                      <strong className="text-xl sm:text-2xl font-heading font-black text-[#12ACE0] block mt-1">{cableRolls} Rolls</strong>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-1 block font-semibold">305m (1000ft) Boxes</span>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase font-bold block">PATCH PANELS</span>
                      <strong className="text-xl sm:text-2xl font-heading font-black text-[#3E91D5] block mt-1">{patchPanels24P} Panels</strong>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-1 block font-semibold">24-Port Loaded</span>
                    </div>

                    <div className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase font-bold block">SERVER RACK</span>
                      <strong className="text-xl sm:text-2xl font-heading font-black text-[#985AC0] block mt-1">{rackUHeight}U Rack</strong>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-1 block font-semibold">Floor Standing</span>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900 text-white font-mono text-xs space-y-2 shadow-inner">
                    <div className="flex justify-between items-center text-slate-300">
                      <span>FIBER BACKBONE:</span>
                      <strong className="text-cyan-400">{fiberCores}-Core SMF</strong>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>TIMELINE:</span>
                      <strong className="text-amber-300">~{estimatedDays} Working Days</strong>
                    </div>
                  </div>

                  {/* Export Quote CTA */}
                  <button
                    onClick={handleExport}
                    className="w-full py-3.5 sm:py-4 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-[#12ACE0] via-[#3E91D5] to-[#985AC0] text-white shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>EXPORT ESTIMATE TO SITE QUOTE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </BorderGlow>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
