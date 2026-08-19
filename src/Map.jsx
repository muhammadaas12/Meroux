import React from 'react';

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.2050930326595!2d-0.35068462335330775!3d51.4727496132341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d1e1f3997d7%3A0xd17a40ee0027da91!2s41%20Star%20Rd%2C%20Isleworth%20TW7%204HB!5e0!3m2!1sen!2suk!4v1761223317221!5m2!1sen!2suk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;