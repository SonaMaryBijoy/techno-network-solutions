import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, Calculator, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendInquiryEmail } from '../services/emailService';

export default function ContactModal({ isOpen, onClose, initialSpecs, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Structured Cabling & Networking',
    location: 'Bangalore, Karnataka',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (initialSpecs) {
      const specMsg = `Estimated Requirement: ${initialSpecs.sqft} sq ft floor, ${initialSpecs.seats} seats (${initialSpecs.totalNodes} total nodes), ${initialSpecs.cableRolls} cable boxes (${initialSpecs.cableType}), ${initialSpecs.patchPanels24P} patch panels, ${initialSpecs.rackUHeight}U server rack, ${initialSpecs.cameras} IP cameras, ${initialSpecs.accessPoints} Wi-Fi APs.`;
      setFormData(prev => ({ ...prev, message: specMsg }));
    }
  }, [initialSpecs]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newTicketId = `TNS-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(newTicketId);

    // Send quote request via background email service
    await sendInquiryEmail({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      location: formData.location,
      message: formData.message,
      ticketId: newTicketId
    });

    setLoading(false);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti triggered');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md font-sans">
      <div className="bg-white max-w-3xl w-full rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 relative shadow-2xl max-h-[92vh] overflow-y-auto font-sans">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 sm:py-10 font-sans">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-900 mb-2">
              QUOTE REQUEST SUBMITTED!
            </h3>
            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed max-w-md mx-auto mb-5">
              Thank you, <strong className="text-[#2563eb] font-bold">{formData.name}</strong>. A Techno Network Solutions senior lead engineer will contact you within <strong className="text-slate-900 font-bold">2–4 business hours</strong>.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-sans text-slate-700 max-w-md mx-auto text-left mb-6 space-y-1.5 font-medium leading-relaxed">
              <div><strong>Service Requested:</strong> {formData.service}</div>
              <div><strong>Facility Location:</strong> {formData.location}</div>
              <div><strong>Engineering Ticket ID:</strong> {ticketId}</div>
            </div>

            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-sans text-xs sm:text-sm font-bold bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-md cursor-pointer transition-colors"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <div className="font-sans">
            <div className="mb-5 sm:mb-6 pr-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-sans font-bold bg-blue-50 text-[#2563eb] border border-blue-200 mb-2 uppercase">
                DIRECT ENGINEERING INQUIRY
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-900 leading-snug">
                Request an on-site survey & quote.
              </h3>
              <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mt-1">
                Get an itemized BOQ (Bill of Quantities) and CAD layout for your site within 24 hours.
              </p>
            </div>

            {initialSpecs && (
              <div className="mb-5 p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm font-sans text-[#2563eb] flex items-start gap-2 font-medium leading-relaxed">
                <Calculator className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Cost Estimator Specs Attached:</strong> {initialSpecs.sqft} sq ft, {initialSpecs.seats} seats ({initialSpecs.totalNodes} nodes).
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="Anand Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-900 font-medium focus:border-[#2563eb] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">COMPANY / ORGANISATION *</label>
                  <input
                    type="text"
                    required
                    placeholder="Infosys / Tech Park Facilities"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-900 font-medium focus:border-[#2563eb] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="anand@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-900 font-medium focus:border-[#2563eb] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-900 font-medium focus:border-[#2563eb] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">PRIMARY SERVICE NEEDED</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-900 font-medium focus:border-[#2563eb] outline-none"
                  >
                    <option value="Structured Cabling & Networking">Structured Cabling & Networking</option>
                    <option value="CCTV & Surveillance System">CCTV & Surveillance System</option>
                    <option value="Access Control & Flap Barriers">Access Control & Flap Barriers</option>
                    <option value="Smart Boardroom & AV System">Smart Boardroom & AV System</option>
                    <option value="Server Racks & Containment">Server Racks & Containment</option>
                    <option value="Annual Maintenance & OTDR Testing">Annual Maintenance & OTDR Testing</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">SITE LOCATION</label>
                  <input
                    type="text"
                    placeholder="e.g. Whitefield, Bangalore"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-900 font-medium focus:border-[#2563eb] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">PROJECT SCOPE / REQUIREMENTS</label>
                <textarea
                  rows={3}
                  placeholder="Describe number of drops, floor area, timeline, or BOQ details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-900 font-medium focus:border-[#2563eb] outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-sans text-xs sm:text-sm font-bold bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-lg cursor-pointer transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>SUBMITTING INQUIRY...</span>
                  </>
                ) : (
                  <span>SUBMIT QUOTE & SURVEY REQUEST</span>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
