import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Activity, ShieldAlert, Cpu, CheckCircle2, Zap, Radio } from 'lucide-react';

export default function NetworkVisualizer() {
  const [activePort, setActivePort] = useState(1);
  const [portFilter, setPortFilter] = useState('ALL');

  // Generate 24 realistic network ports
  const ports = Array.from({ length: 24 }, (_, i) => {
    const id = i + 1;
    let type = 'Cat6A';
    let speed = '10 Gbps';
    let poe = 'PoE+ 30W';
    let status = 'CONNECTED';
    let destination = `RACK-01 // SERVER-NODE-${id < 10 ? '0' + id : id}`;
    let latency = `${(0.8 + Math.random() * 0.4).toFixed(2)} ms`;

    if (id > 16) {
      type = 'Fiber SMF';
      speed = '40 Gbps';
      poe = 'N/A (Optical)';
      destination = `DATA-CENTER-SPINE-0${id - 16}`;
      latency = `${(0.2 + Math.random() * 0.2).toFixed(2)} ms`;
    }

    if (id === 12 || id === 19) {
      status = 'DIAGNOSTIC TEST';
    }

    return { id, type, speed, poe, status, destination, latency };
  });

  const selectedPort = ports.find(p => p.id === activePort) || ports[0];

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl relative overflow-hidden">
      {/* Visual Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200 font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-700 font-semibold">
          <Server className="w-4 h-4 text-[#12ACE0]" />
          <span className="font-bold text-slate-900 uppercase tracking-wider">PATCH PANEL 01 // TNS-MAIN-RACK</span>
          <span className="px-2.5 py-0.5 rounded bg-cyan-50 text-[#12ACE0] border border-cyan-200 text-[10px] font-bold">
            ONLINE
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setPortFilter('ALL')}
            className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-colors font-semibold ${
              portFilter === 'ALL' ? 'bg-cyan-50 text-[#12ACE0] border border-[#12ACE0]' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            ALL (24)
          </button>
          <button
            onClick={() => setPortFilter('COPPER')}
            className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-colors font-semibold ${
              portFilter === 'COPPER' ? 'bg-blue-50 text-[#3E91D5] border border-[#3E91D5]' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            Cat6A
          </button>
          <button
            onClick={() => setPortFilter('FIBER')}
            className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-colors font-semibold ${
              portFilter === 'FIBER' ? 'bg-purple-50 text-[#985AC0] border border-[#985AC0]' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            SMF Fiber
          </button>
        </div>
      </div>

      {/* SVG Circuit Fiber Flow Simulation */}
      <div className="relative mb-5 bg-slate-900 rounded-2xl p-4 border border-slate-800 shadow-inner">
        <div className="text-[11px] font-mono text-slate-300 mb-2 flex items-center justify-between font-semibold">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            LIVE OPTICAL TRAFFIC MONITOR
          </span>
          <span className="text-cyan-300 font-bold">PORT {selectedPort.id} ACTIVE</span>
        </div>

        <svg viewBox="0 0 500 70" className="w-full h-16 overflow-visible">
          <defs>
            <linearGradient id="fiberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#12ACE0" />
              <stop offset="50%" stopColor="#3E91D5" />
              <stop offset="100%" stopColor="#985AC0" />
            </linearGradient>
          </defs>

          {/* Background trace lines */}
          <path d="M 20 15 Q 120 5, 250 35 T 480 20" fill="none" stroke="#334155" strokeWidth="3" />
          <path d="M 20 40 Q 150 65, 300 25 T 480 50" fill="none" stroke="#334155" strokeWidth="3" />

          {/* Animated active fiber line */}
          <path
            d="M 20 15 Q 120 5, 250 35 T 480 20"
            fill="none"
            stroke="url(#fiberGrad)"
            strokeWidth="3"
            className="animate-fiber"
          />
          <path
            d="M 20 40 Q 150 65, 300 25 T 480 50"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            className="animate-fiber"
            style={{ animationDuration: '1.2s' }}
          />

          {/* Interactive Nodes */}
          <circle cx="20" cy="15" r="5" fill="#12ACE0" className="animate-ping" />
          <circle cx="250" cy="35" r="6" fill="#3E91D5" />
          <circle cx="480" cy="20" r="5" fill="#985AC0" />
        </svg>
      </div>

      {/* 24-Port Patch Grid */}
      <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 mb-5">
        {ports.map((port) => {
          const isSelected = port.id === activePort;
          const isFiber = port.id > 16;
          const isHidden = (portFilter === 'COPPER' && isFiber) || (portFilter === 'FIBER' && !isFiber);

          if (isHidden) return null;

          return (
            <button
              key={port.id}
              onClick={() => setActivePort(port.id)}
              className={`relative flex flex-col items-center justify-center p-2 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-cyan-50 border-[#12ACE0] shadow-md scale-105 z-10'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Port Number */}
              <span className="text-[10px] font-mono text-slate-600 font-bold mb-1">
                {port.id < 10 ? `0${port.id}` : port.id}
              </span>

              {/* Port Icon Box */}
              <div
                className={`w-full h-7 rounded-lg bg-slate-900 border flex items-center justify-center relative overflow-hidden ${
                  isSelected ? 'border-[#12ACE0]' : 'border-slate-700'
                }`}
              >
                {/* Simulated Port Hole */}
                <div className={`w-3.5 h-2.5 rounded-sm ${isFiber ? 'bg-pink-500/30' : 'bg-cyan-500/30'} border border-slate-700 flex items-center justify-center`}>
                  <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Status LED Dot */}
              <div className="flex gap-1 mt-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#12ACE0] animate-ping' : isFiber ? 'bg-[#985AC0]' : 'bg-emerald-500'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Port Inspector Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPort.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-slate-900 text-white rounded-2xl p-4 font-mono text-xs shadow-md"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 font-bold border border-cyan-800">
                PORT A-{selectedPort.id < 10 ? `0${selectedPort.id}` : selectedPort.id}
              </span>
              <span className="text-white font-bold">{selectedPort.type}</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300 font-semibold">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                FLUKE TESTED
              </span>
              <span>PING: <strong className="text-cyan-300">{selectedPort.latency}</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-slate-300">
            <div>
              <span className="text-[10px] text-slate-400 uppercase block">BANDWIDTH CAPACITY</span>
              <strong className="text-cyan-400 text-sm">{selectedPort.speed}</strong>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase block">POWER FEED</span>
              <strong className="text-amber-300 text-sm">{selectedPort.poe}</strong>
            </div>
            <div className="col-span-2">
              <span className="text-[10px] text-slate-400 uppercase block">TARGET TERMINATION</span>
              <span className="text-slate-200 text-xs truncate block font-bold">{selectedPort.destination}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
