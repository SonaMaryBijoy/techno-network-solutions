import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Globe, CheckCircle2, Clock, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import AnimatedContent from './AnimatedContent';
import { sendInquiryEmail } from '../services/emailService';

export default function ContactPage() {
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'General Inquiry / Site Survey Request',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newId = `TNS-TICKET-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(newId);

    // Send inquiry via background email service
    await sendInquiryEmail({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      ticketId: newId
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

  const triggerDirectMail = () => {
    const subject = encodeURIComponent(`[${ticketId}] ${formData.subject}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:projects@tnsnw.com?subject=${subject}&body=${body}`;
  };

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-transparent min-h-screen text-slate-900 relative overflow-hidden font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Static Header Section (No Scroll Animation) */}
        <div className="mb-14 text-center max-w-4xl mx-auto pt-4 font-sans">
          <div className="flex justify-center mb-4 font-sans">
            <span className="px-5 py-2 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs sm:text-sm font-bold text-blue-600 tracking-wider uppercase inline-block">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black text-center tracking-tight leading-tight mb-4">
            <span className="text-[#0a192f]">Let's Build </span>
            <span className="text-[#1d4ed8]">Together</span>
          </h1>

          <p className="text-slate-700 text-base sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed font-sans">
            Have an upcoming site expansion, data center buildout, or security requirement? Our senior infrastructure team is ready to assist.
          </p>
        </div>

        {/* Contact Info & Interactive Direct Form Grid with Scroll Animations on Cards Only */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-start font-sans">
          
          {/* Company Contact Info Cards Column Animated On Scroll */}
          <div className="lg:col-span-5 space-y-6 font-sans">
            <AnimatedContent distance={60} direction="vertical" duration={0.8} delay={0.1}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6 font-sans">
                <h3 className="text-xl font-sans font-bold text-slate-900 border-b border-slate-100 pb-3">Corporate Headquarters</h3>

                <div className="flex items-start gap-4 font-sans">
                  <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-[#2563eb] flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold text-slate-500 uppercase tracking-wider">Office Address</h4>
                    <p className="text-slate-900 font-bold text-sm sm:text-base mt-0.5 font-sans">Techno Network Solutions</p>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mt-0.5 font-sans">
                      #42, 2nd Floor, IT Corridor Road, Outer Ring Road, Marathahalli, Bangalore — 560037, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 font-sans">
                  <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-[#2563eb] flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold text-slate-500 uppercase tracking-wider">Project & BOQ Email</h4>
                    <a href="mailto:projects@tnsnw.com" className="text-[#2563eb] font-bold hover:underline block mt-0.5 font-sans">
                      projects@tnsnw.com
                    </a>
                    <span className="text-slate-500 text-xs font-medium font-sans">Guaranteed response within 2–4 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 font-sans">
                  <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-[#2563eb] flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold text-slate-500 uppercase tracking-wider">Engineering Helpline</h4>
                    <a href="tel:+918049583021" className="text-slate-900 font-bold text-sm sm:text-base hover:text-[#2563eb] block mt-0.5 font-sans">
                      +91 (080) 4958 3021
                    </a>
                    <span className="text-slate-500 text-xs font-medium font-sans">Mon – Sat, 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>
            </AnimatedContent>

            <AnimatedContent distance={60} direction="vertical" duration={0.8} delay={0.25}>
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4 font-sans">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-base font-sans font-bold">24/7 SLA Emergency Support</h4>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed font-sans">
                  For existing enterprise contract clients with active 24/7 SLA coverage, dispatch emergency network site engineers via your dedicated account manager portal or SLA hotline.
                </p>
              </div>
            </AnimatedContent>
          </div>

          {/* Interactive Direct Email Form Column Animated On Scroll */}
          <div className="lg:col-span-7 font-sans">
            <AnimatedContent distance={70} direction="vertical" duration={0.85} delay={0.2}>
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 font-sans">
                
                {submitted ? (
                  <div className="text-center py-8 font-sans">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-slate-900 mb-2">INQUIRY RECEIVED!</h3>
                    <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed max-w-md mx-auto mb-6 font-sans">
                      Thank you, <strong className="text-[#2563eb] font-bold">{formData.name}</strong>. Your ticket <strong className="text-slate-900">{ticketId}</strong> has been logged. Our infrastructure team will contact you within 2–4 hours.
                    </p>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-sans text-slate-700 text-left mb-6 space-y-2 font-medium leading-relaxed">
                      <div><strong>Subject:</strong> {formData.subject}</div>
                      <div><strong>Ticket Ref ID:</strong> {ticketId}</div>
                      <div><strong>Recipient Email:</strong> projects@tnsnw.com</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center font-sans">
                      <button
                        onClick={triggerDirectMail}
                        className="px-6 py-3 rounded-xl font-sans text-xs sm:text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 shadow-md cursor-pointer transition-colors"
                      >
                        OPEN DESKTOP MAIL CLIENT
                      </button>

                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-3 rounded-xl font-sans text-xs sm:text-sm font-bold bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-md cursor-pointer transition-colors"
                      >
                        SUBMIT ANOTHER INQUIRY
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="font-sans">
                    <div className="mb-6 border-b border-slate-100 pb-4">
                      <h3 className="text-2xl font-sans font-bold text-slate-900">Send an Inquiry Email</h3>
                      <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed mt-1 font-sans">Fill out the form below to send your technical query or BOQ request directly to <strong className="text-[#2563eb]">projects@tnsnw.com</strong>.</p>
                    </div>

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
                          <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">COMPANY / FACILITY *</label>
                          <input
                            type="text"
                            required
                            placeholder="Infosys / Tech Park Management"
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

                      <div>
                        <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">INQUIRY SUBJECT</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-900 font-medium focus:border-[#2563eb] outline-none"
                        >
                          <option value="General Inquiry / Site Survey Request">General Inquiry / Site Survey Request</option>
                          <option value="Structured Cabling & Fiber Optic BOQ">Structured Cabling & Fiber Optic BOQ</option>
                          <option value="IP CCTV & VMS Security Installation">IP CCTV & VMS Security Installation</option>
                          <option value="Biometric Access Control & Turnstiles">Biometric Access Control & Turnstiles</option>
                          <option value="Smart Boardroom & AV Integration">Smart Boardroom & AV Integration</option>
                          <option value="Data Center Server Rack Containment">Data Center Server Rack Containment</option>
                          <option value="24/7 SLA Maintenance & Fluke OTDR Testing">24/7 SLA Maintenance & Fluke OTDR Testing</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">PROJECT DETAILS / REQUIREMENT *</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Provide details about your facility size (sq ft), number of network nodes, cameras, location, or requested BOQ items..."
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
                            <span>DISPATCHING INQUIRY...</span>
                          </>
                        ) : (
                          <span>SEND INQUIRY TO PROJECTS@TNSNW.COM</span>
                        )}
                      </button>
                    </form>
                  </div>
                )}

              </div>
            </AnimatedContent>
          </div>

        </div>

      </div>
    </div>
  );
}
