/**
 * Email Service Handler
 * Connects form submissions to Web3Forms / Formspree / Resend API or native mailto fallback.
 * 
 * Instructions to enable background email delivery:
 * 1. Get a FREE Access Key from https://web3forms.com (No login/credit card required, takes 10 seconds).
 * 2. Add VITE_WEB3FORMS_ACCESS_KEY=your_key_here to your .env file or deployment environment variables.
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Send Contact / Quote / BOQ Request Email in background
 */
export async function sendInquiryEmail({ name, company, email, phone, service, location, subject, message, ticketId }) {
  const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

  const emailSubject = subject || `[${ticketId || 'TNS-INQUIRY'}] New BOQ & Site Survey Request from ${name}`;

  if (apiKey) {
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: apiKey,
          subject: emailSubject,
          from_name: name,
          replyto: email,
          name: name,
          company: company || 'N/A',
          email: email,
          phone: phone,
          service_requested: service || 'General Inquiry',
          location: location || 'India',
          ticket_id: ticketId || '',
          message: message
        })
      });

      const result = await response.json();
      return { success: result.success, message: result.message };
    } catch (err) {
      console.warn('Background email dispatch failed, falling back to mailto:', err);
    }
  }

  // Fallback to mailto link if API key is not configured or network fails
  return { success: true, fallback: true };
}

/**
 * Send Candidate Job Application + Resume File in background
 */
export async function sendCareerApplication({ fullName, email, phone, role, experience, comments, resume, refId }) {
  const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

  const emailSubject = `[${refId || 'TNS-HR'}] New Job Application: ${role} - ${fullName}`;

  if (apiKey) {
    try {
      const formData = new FormData();
      formData.append('access_key', apiKey);
      formData.append('subject', emailSubject);
      formData.append('from_name', fullName);
      formData.append('replyto', email);
      formData.append('full_name', fullName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('position_applied', role);
      formData.append('experience', experience);
      formData.append('comments', comments || 'None');
      formData.append('application_ref_id', refId || '');

      if (resume) {
        formData.append('attachment', resume);
      }

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      return { success: result.success, message: result.message };
    } catch (err) {
      console.warn('Background career dispatch failed:', err);
    }
  }

  return { success: true, fallback: true };
}

/**
 * Trigger native mailto link for direct desktop mail client
 */
export function openNativeMailto({ to = 'projects@tnsnw.com', subject, body }) {
  const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
}
