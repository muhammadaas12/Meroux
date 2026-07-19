import React, { useState } from 'react';
import './css/Contact.css';
import Map from './Map';

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

    // Reload page after success
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
<div className="map-area">
  <Map />

  <div className="contact-info">
    <h3>Get In Touch</h3>

    <p>
      <strong>Email:</strong><br />
      office@meroux.co.uk
    </p>

    <p>
      <strong>Phone:</strong><br />
                <a href="tel:+447702180129" className="text-sm text-gray-600 hover:text-gray-800">
              +44 7702180129
            </a>
    </p>

    <p>
      <strong>Address:</strong><br />
      42 Star Road, Isleworth ,TW7 4HB
    </p>

    <p>
      <strong>Business Hours:</strong><br />
      Mon - Fri: 9:00 AM - 5:00 PM
    </p>
  </div>
</div>

          <div className="form-area">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className={`input-group ${hasContent.name ? 'has-content' : ''}`}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label>Name</label>
                </div>
                <div className={`input-group ${hasContent.occupation ? 'has-content' : ''}`}>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    required
                  />
                  <label>Business/Occupation</label>
                </div>
              </div>

              <div className="form-row">
                <div className={`input-group ${hasContent.email ? 'has-content' : ''}`}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label>Email Address</label>
                </div>
                <div className={`input-group ${hasContent.phone ? 'has-content' : ''}`}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label>Phone Number</label>
                </div>
              </div>

              {/* Message field: textarea with no resize handle */}
              <div className="form-row">
                <div className={`input-group textarea-group ${hasContent.message ? 'has-content' : ''}`}>
                  <textarea
                    rows="5"
                    name="quote"
                    value={formData.quote}
                    onChange={handleChange}
                    required
                  />
                  <label>Your Message</label>
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