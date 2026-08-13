import React, { useState, useRef } from 'react';
import { Upload, CheckCircle2, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import AnimatedContent from './AnimatedContent';
import { sendCareerApplication } from '../services/emailService';

export default function CareersPage() {
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Lead Structured Cabling & Fiber Engineer',
    experience: '3-5 Years',
    comments: '',
    resume: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const [refId, setRefId] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, resume: file });
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newRefId = `TNS-HR-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(newRefId);

    // Send application via background email service
    await sendCareerApplication({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      experience: formData.experience,
      comments: formData.comments,
      resume: formData.resume,
      refId: newRefId
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
    <div ref={containerRef} className="pt-24 pb-20 bg-transparent min-h-screen text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Static Extra-Large Header Section */}
        <div className="mb-16 text-center max-w-5xl mx-auto pt-4 font-sans space-y-2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight mb-4 leading-tight sm:leading-tight">
            <span className="text-[#0a192f] block">Build Your Career with</span>
            <span className="text-[#2563eb] block">Techno Network Solutions</span>
          </h1>
        </div>

        {/* Candidate Application Form Box Animated STRICTLY ONLY Upon Scrolling Down */}
        <AnimatedContent distance={120} direction="vertical" duration={0.9} threshold={0.45}>
          <div className="max-w-2xl mx-auto font-sans mb-16">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 font-sans">
              
              {submitted ? (
                <div className="text-center py-8 font-sans">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-slate-900 mb-2">APPLICATION SUBMITTED!</h3>
                  <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed max-w-md mx-auto mb-6 font-sans">
                    Thank you, <strong className="text-[#2563eb] font-bold">{formData.fullName}</strong>. Our HR & Engineering recruitment team has received your application and will review your resume within 48 hours.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-sans text-slate-700 text-left mb-6 space-y-1.5 font-medium leading-relaxed">
                    <div><strong>Position:</strong> {formData.role}</div>
                    <div><strong>Application Ref ID:</strong> {refId}</div>
                    {fileName && <div><strong>Resume Uploaded:</strong> {fileName}</div>}
                  </div>

                  <button
                    onClick={() => { setSubmitted(false); setFileName(''); }}
                    className="px-6 py-3 rounded-xl font-sans text-xs sm:text-sm font-bold bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-md cursor-pointer transition-colors"
                  >
                    SUBMIT ANOTHER APPLICATION
                  </button>
                </div>
              ) : (
                <div className="font-sans">
                  <div className="mb-6 border-b border-slate-100 pb-4">
                    <h3 className="text-2xl font-sans font-bold text-slate-900">Apply Online</h3>
                    <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed mt-1 font-sans">Submit your details and upload your resume for review by our engineering team.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                    <div>
                      <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">FULL NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-900 font-medium focus:border-[#2563eb] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">EMAIL ADDRESS *</label>
                        <input
                          type="email"
                          required
                          placeholder="anand@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-900 font-medium focus:border-[#2563eb] outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">PHONE / WHATSAPP *</label>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">POSITION APPLIED FOR</label>
                        <select
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-900 font-medium focus:border-[#2563eb] outline-none"
                        >
                          <option value="Lead Structured Cabling & Fiber Engineer">Lead Structured Cabling & Fiber Engineer</option>
                          <option value="IP CCTV & VMS Solutions Specialist">IP CCTV & VMS Solutions Specialist</option>
                          <option value="Biometric Access Control & Turnstile Technician">Biometric Access Control & Turnstile Technician</option>
                          <option value="AV & Smart Boardroom Integration Systems Tech">AV & Smart Boardroom Tech</option>
                          <option value="General Engineering Trainee">General Engineering Trainee</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">TOTAL EXPERIENCE</label>
                        <select
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-900 font-medium focus:border-[#2563eb] outline-none"
                        >
                          <option value="Fresher / 0-1 Years">Fresher / 0-1 Years</option>
                          <option value="1-3 Years">1-3 Years</option>
                          <option value="3-5 Years">3-5 Years</option>
                          <option value="5+ Years">5+ Years</option>
                        </select>
                      </div>
                    </div>

                    {/* Resume Upload Box */}
                    <div>
                      <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">UPLOAD RESUME (PDF / DOCX)</label>
                      <label className="border-2 border-dashed border-slate-200 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center cursor-pointer hover:border-[#2563eb] hover:bg-blue-50/50 transition-colors">
                        <Upload className="w-6 h-6 text-[#2563eb] mb-2" />
                        <span className="text-xs font-sans font-bold text-slate-700">
                          {fileName ? fileName : 'Click to select or drag & drop resume file'}
                        </span>
                        <span className="text-[11px] font-sans text-slate-500 mt-1 font-medium">PDF, DOC, DOCX (Max 10MB)</span>
                        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                      </label>
                    </div>

                    <div>
                      <label className="text-xs font-sans text-slate-700 uppercase block font-bold mb-1">ADDITIONAL NOTES / CERTIFICATIONS</label>
                      <textarea
                        rows={3}
                        placeholder="Mention any certifications (OEM, Fluke, FOA, BICSI) or key project highlights..."
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
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
                          <span>SUBMITTING APPLICATION...</span>
                        </>
                      ) : (
                        <span>SUBMIT APPLICATION TO HR TEAM</span>
                      )}
                    </button>
                  </form>
                </div>
              )}

            </div>
          </div>
        </AnimatedContent>

      </div>
    </div>
  );
}
