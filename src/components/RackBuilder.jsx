import React, { useState, useRef } from 'react';
import { Server, Activity, Cpu, ShieldCheck, Zap, Radio, CheckCircle } from 'lucide-react';
import BorderGlow from './BorderGlow';
import VariableProximity from './VariableProximity';
import AnimatedContent from './AnimatedContent';
import LiquidEther from './LiquidEther';

export default function RackBuilder() {
  const containerRef = useRef(null);
  const [selectedUnit, setSelectedUnit] = useState(2);
  const [powerMode, setPowerMode] = useState(true);

  const rackUnits = [
    { u: '42U-40U', name: 'OPTICAL FIBER LIU ENCLOSURE (144 CORE SMF)', status: 'ACTIVE 100G', color: 'border-pink-300 text-pink-700 bg-pink-50', desc: 'MPO/MTP Cassettes, Ultra Low Loss, Splice Trays' },
    { u: '39U-37U', name: 'CAT6A HIGH-DENSITY PATCH PANEL 01 (48 PORT)', status: 'TERMINATED & DRESSED', color: 'border-cyan-300 text-[#12ACE0] bg-cyan-50', desc: 'CommScope Systimax Cat6A FTP, Color Coded' },
    { u: '36U-35U', name: 'HORIZONTAL CABLE MANAGER 01', status: 'PASSIVE', color: 'border-slate-300 text-slate-600 bg-slate-50', desc: 'High capacity finger duct with hinged cover' },
    { u: '34U-32U', name: 'CORE L3 NETWORK SWITCH (C9300 48P PoE+)', status: 'ONLINE 90W PoE', color: 'border-emerald-300 text-emerald-700 bg-emerald-50', desc: 'Cisco Catalyst 9300 48-Port 802.3bt PoE+' },
    { u: '31U-29U', name: 'CAT6A HIGH-DENSITY PATCH PANEL 02 (48 PORT)', status: 'TERMINATED & DRESSED', color: 'border-cyan-300 text-[#12ACE0] bg-cyan-50', desc: 'Molex Premise Networks Certified' },
    { u: '28U-27U', name: 'HORIZONTAL CABLE MANAGER 02', status: 'PASSIVE', color: 'border-slate-300 text-slate-600 bg-slate-50', desc: 'Velcro tie management & bend radius control' },
    { u: '26U-22U', name: 'ENTERPRISE APPLIANCE & FIREWALL RACK UNIT', status: 'HA CLUSTER', color: 'border-amber-300 text-amber-700 bg-amber-50', desc: 'Fortinet FortiGate Active/Passive Failover' },
    { u: '21U-15U', name: 'BLADE SERVER CHASSIS & STORAGE NODE', status: 'SAN / NAS ACTIVE', color: 'border-blue-300 text-[#3E91D5] bg-blue-50', desc: 'Redundant Power Supply, Hot Swappable NVMe' },
    { u: '06U-01U', name: 'SMART INTELLIGENT PDU & ONLINE UPS (10kVA)', status: 'POWER NORMAL', color: 'border-purple-300 text-[#985AC0] bg-purple-50', desc: 'Dual Feed A+B Power Grid, Battery Backup' },
  ];

  const current = rackUnits[selectedUnit];

  return (
    <section id="rack-builder" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <AnimatedContent distance={80} direction="vertical" duration={0.8} ease="power3.out">
          {/* Full-width Header Container wrapped with LiquidEther */}
          <div ref={containerRef} className="w-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 sm:mb-12 relative">
            
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

            <div className="max-w-3xl relative z-10">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-snug sm:leading-tight">
                <VariableProximity
                  label="Precision Server Rack & Cable Dressing Standard."
                  className="cursor-pointer font-black text-slate-900"
                  fromFontVariationSettings="'wght' 700, 'opsz' 14"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={130}
                  falloff="linear"
                />
              </h2>
            </div>

            <button
              onClick={() => setPowerMode(!powerMode)}
              className={`relative z-10 w-full sm:w-auto px-4 py-2.5 rounded-xl font-mono text-xs font-bold border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                powerMode
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 shadow-sm'
                  : 'bg-slate-100 border-slate-300 text-slate-600'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>RACK POWER: {powerMode ? 'ACTIVE (230V A+B)' : 'STANDBY'}</span>
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* 42U Server Rack Graphic */}
            <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-lg relative">
              <div className="border-2 sm:border-4 border-slate-300 rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-slate-50 relative">
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-500 pb-2 mb-3 border-b border-slate-200 font-semibold">
                  <span>RACK 01 // 42U ENCLOSURE</span>
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                    <span className={`w-2 h-2 rounded-full ${powerMode ? 'bg-emerald-500 animate-ping' : 'bg-slate-400'}`} />
                    <span>{powerMode ? 'ENERGIZED' : 'OFFLINE'}</span>
                  </span>
                </div>

                {/* Rack Units Stack */}
                <div className="space-y-1.5 sm:space-y-2">
                  {rackUnits.map((item, idx) => {
                    const isSelected = idx === selectedUnit;

                    return (
                      <button
                        key={item.u}
                        onClick={() => setSelectedUnit(idx)}
                        className={`w-full p-2.5 sm:p-3 rounded-lg sm:rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'bg-white border-[#12ACE0] shadow-md ring-2 ring-cyan-100 scale-[1.01]'
                            : 'bg-white/80 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[9px] sm:text-[10px] font-mono text-slate-600 font-bold flex-shrink-0">
                            {item.u}
                          </span>
                          <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-800 truncate">
                            {item.name}
                          </span>
                        </div>

                        <span className={`text-[9px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded border flex-shrink-0 ${item.color}`}>
                          {item.status}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Component Inspector Detail */}
            <div className="lg:col-span-5">
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
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                    <span className="text-[11px] sm:text-xs font-mono text-[#12ACE0] font-bold">{current.u} // INSPECTOR</span>
                    <span className={`text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${current.color}`}>
                      {current.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-black text-slate-900 mb-2 leading-snug">
                      {current.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-xs leading-relaxed font-medium">
                      {current.desc}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-3.5 border-t border-slate-100 text-xs font-mono font-semibold">
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Fluke Versiv Link Test Verified</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Zero-Tension Bend Radius Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Color Coded Cable Pathway Tagging</span>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
