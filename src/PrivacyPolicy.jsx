import React from "react";
import bgImg from "./assets/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus.jpg";
import "./css/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div
      className="privacy-page"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="privacy-overlay">
        <div className="privacy-container">

          <h1>Privacy Policy</h1>
          <p className="last-updated">
            Last Updated: 31 July 2026
          </p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              Meroux Limited respects your privacy and is committed to
              protecting your personal information. This Privacy Policy
              explains how we collect, use, store, and protect your data
              when you use our website and mobile application.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <ul>
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Project Information</li>
              <li>Location (when permitted)</li>
              <li>Photos and Documents</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>Manage construction projects</li>
              <li>Respond to enquiries</li>
              <li>Provide quotations</li>
              <li>Track project progress</li>
              <li>Record employee attendance</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>
              We use industry-standard security measures to protect your
              information from unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2>5. Third-Party Services</h2>
            <p>
              We may use secure third-party providers for hosting,
              notifications, authentication, analytics, and cloud storage.
            </p>
          </section>

          <section>
            <h2>6. Your Rights</h2>
            <p>
              You may request access, correction, or deletion of your
              personal information by contacting us.
            </p>
          </section>

          <section>
            <h2>7. Contact Us</h2>
            <p>
              Email: info@meroux.co.uk
              <br />
              Website: https://meroux.co.uk
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;