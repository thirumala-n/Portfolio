import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Using FormSubmit.co - replace YOUR_EMAIL with your actual email
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/nthirumala2274@gmail.com', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <a href="nthirumala2274@gmail.com">nthirumala2274@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p>+91 8074788326</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>Bengaluru, India</p>
              </div>
            </div>

            <div className="contact-social">
              <a href="https://github.com/thirumala-n" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/n-thirumala" target="_blank" rel="noopener noreferrer">LinkedIn</a>
             <a href="mailto:nthirumala2274@gmail.com">Email</a>

            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <input type="hidden" name="_subject" value="New Portfolio Contact!" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                placeholder="Your name"
              />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                placeholder="Your message..."
              />
            </div>
            
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'} 📤
            </button>

            {status === 'success' && <p className="success-msg">✅ Message sent successfully!</p>}
            {status === 'error' && <p className="error-msg">❌ Failed to send. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;