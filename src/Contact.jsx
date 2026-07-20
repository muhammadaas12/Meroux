import React, { useState } from 'react';
import './css/Contact.css' // Ensure you have a CSS file for styling
import Map from './Map'; // your existing Map component (must accept className etc.)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    email: '',
    phone: '',
    quote: '',
  });

  const [hasContent, setHasContent] = useState({
    name: false,
    occupation: false,
    email: false,
    phone: false,
    quote: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setHasContent((prev) => ({ ...prev, [name]: value.trim() !== '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://meroux-backend.onrender.com/send-contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      alert("Message sent successfully!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2>Contact Us</h2>

        <div className="side-by-side">
          {/* Map Area */}
          <div className="map-area">
            <div className="map-wrapper">
              <Map /> {/* your Map component – ensure it renders an iframe or similar */}
            </div>

            <div className="contact-info">
              <h3>Get In Touch</h3>

              <div className="info-item">
                <span className="label">Email</span>
                <span className="value">
                  <a href="mailto:info@meroux.co.uk">info@meroux.co.uk</a>
                </span>
              </div>

              <div className="info-item">
                <span className="label">Phone</span>
                <span className="value">
                  <a href="tel:+447702180129">+44 7702 180129</a>
                </span>
              </div>

              <div className="info-item full">
                <span className="label">Address</span>
                <span className="value">42 Star Road, Isleworth, TW7 4HB</span>
              </div>

              <div className="info-item full">
                <span className="label">Business Hours</span>
                <span className="value">Mon – Fri: 9:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="form-area">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className={`input-group ${hasContent.name ? 'has-content' : ''}`}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className={`input-group ${hasContent.occupation ? 'has-content' : ''}`}>
                  <input
                    type="text"
                    name="occupation"
                    id="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="occupation">Business / Occupation</label>
                </div>
              </div>

              <div className="form-row">
                <div className={`input-group ${hasContent.email ? 'has-content' : ''}`}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className={`input-group ${hasContent.phone ? 'has-content' : ''}`}>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="phone">Phone Number</label>
                </div>
              </div>

              <div className="form-row">
                <div className={`input-group textarea-group ${hasContent.quote ? 'has-content' : ''}`}>
                  <textarea
                    rows="5"
                    name="quote"
                    id="quote"
                    value={formData.quote}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="quote">Your Message</label>
                </div>
              </div>

              <div className="form-row">
                <button type="submit" className="submit-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;