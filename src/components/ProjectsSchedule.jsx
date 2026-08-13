import React, { useState } from 'react';
import { Database, Search, Filter, CheckCircle2, Server, Building, ShieldCheck } from 'lucide-react';

export default function ProjectsSchedule() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSector, setFilterSector] = useState('ALL');

  const projects = [
    {
      id: 'TNS-PRJ-101',
      client: 'Global Tech Park Phase 2 (Bangalore)',
      sector: 'IT Park',
      nodes: '14,500 Cat6A Drops',
      fiber: '48-Core SMF Trunk',
      racks: '28 x 42U Racks',
      scope: 'Structured Cabling, Server Rack Dressing, Fluke OTDR Testing',
      status: 'DELIVERED & DLP ACTIVE'
    },
    {
      id: 'TNS-PRJ-102',
      client: 'Enterprise Financial Tower (Whitefield)',
      sector: 'Banking & Finance',
      nodes: '8,200 Cat6A Drops',
      fiber: '24-Core OM4 MMF',
      racks: '16 x 42U Racks',
      scope: 'Cat6A Cabling, Biometric Access, Boardroom AV, IP CCTV',
      status: 'COMPLETED'
    },
    {
      id: 'TNS-PRJ-103',
      client: 'Aerospace R&D Facility (Electronic City)',
      sector: 'Manufacturing',
      nodes: '6,400 Cat6 Drops',
      fiber: '96-Core Armored SMF',
      racks: '12 x 42U Racks',
      scope: 'Industrial Fiber Backbone, CCTV Surveillance, Clean Room Cabling',
      status: 'COMPLETED'
    },
    {
      id: 'TNS-PRJ-104',
      client: 'Commercial Retail Mall & Multiplex (Outer Ring Rd)',
      sector: 'Commercial Retail',
      nodes: '3,800 Nodes',
      fiber: '24-Core SMF',
      racks: '10 x 42U Racks',
      scope: 'IP Surveillance (240 Cameras), EAS Anti-Theft, Public Address AV',
      status: 'COMPLETED'
    },
    {
      id: 'TNS-PRJ-105',
      client: 'Cloud Data Center Facility (Hyderabad)',
      sector: 'Data Center',
      nodes: '22,000 Cat6A Drops',
      fiber: '144-Core MPO Fiber',
      racks: '48 x 42U Racks',
      scope: 'Hot Aisle Containment, Fiber MPO Trunks, Intelligent PDU Power',
      status: 'DELIVERED & DLP ACTIVE'
    },
    {
      id: 'TNS-PRJ-106',
      client: 'Healthcare & Multi-Specialty Hospital (Chennai)',
      sector: 'Healthcare',
      nodes: '5,100 Cat6A Drops',
      fiber: '36-Core SMF',
      racks: '14 x 42U Racks',
      scope: 'Medical Grade Cabling, Nurse Call Integration, Access Control',
      status: 'COMPLETED'
    }
  ];

  const filteredProjects = projects.filter((prj) => {
    const matchesSearch = prj.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          prj.scope.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          prj.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = filterSector === 'ALL' || prj.sector === filterSector;
    return matchesSearch && matchesSector;
  });

  return (
    <section id="projects" className="py-20 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-semibold bg-cyan-50 text-[#12ACE0] border border-cyan-200 mb-3">
              <Database className="w-3.5 h-3.5" />
              CABLE SCHEDULE & DEPLOYMENT RECORDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Sample executed projects schedule.
            </h2>
          </div>

          <span className="text-xs font-mono text-slate-500 font-semibold">
            TOTAL RECORDED DEPLOYMENTS: <strong className="text-[#12ACE0] font-bold">10L+ NODES // ₹100CR+ VALUE</strong>
          </span>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          
          {/* Search Box */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects, client names, or scope..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-900 focus:border-[#12ACE0] focus:outline-none"
            />
          </div>

          {/* Sector Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto">
            {['ALL', 'IT Park', 'Data Center', 'Banking & Finance', 'Manufacturing'].map((sector) => (
              <button
                key={sector}
                onClick={() => setFilterSector(sector)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap font-semibold ${
                  filterSector === sector
                    ? 'bg-cyan-50 border border-[#12ACE0] text-[#12ACE0] shadow-sm'
                    : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="bg-slate-50 text-[#12ACE0] border-b border-slate-200 uppercase tracking-wider text-[11px] font-bold">
                  <th className="py-4 px-4">Project ID</th>
                  <th className="py-4 px-4">Client / Site Facility</th>
                  <th className="py-4 px-4">Copper Nodes</th>
                  <th className="py-4 px-4">Fiber Backbone</th>
                  <th className="py-4 px-4">Server Racks</th>
                  <th className="py-4 px-4">Executed Scope</th>
                  <th className="py-4 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-semibold">
                {filteredProjects.map((prj) => (
                  <tr key={prj.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 font-bold text-[#12ACE0]">{prj.id}</td>
                    <td className="py-4 px-4 font-bold text-slate-900">
                      <div>{prj.client}</div>
                      <span className="text-[10px] text-slate-500 font-mono font-normal">{prj.sector}</span>
                    </td>
                    <td className="py-4 px-4 text-emerald-600 font-bold">{prj.nodes}</td>
                    <td className="py-4 px-4 text-pink-600 font-bold">{prj.fiber}</td>
                    <td className="py-4 px-4 text-[#985AC0]">{prj.racks}</td>
                    <td className="py-4 px-4 text-slate-600 text-[11px] max-w-xs">{prj.scope}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {prj.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
