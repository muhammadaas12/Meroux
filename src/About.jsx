import React from "react";
import bgImg from "./assets/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus.jpg";
import "../src/css/About.css";

const About = () => {
  return (
    <div
      className="min-h-screen text-white bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="min-h-screen bg-black/30">

        <div className="max-w-6xl mx-auto px-6 py-20">

          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-700">
              About Us
            </h1>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              With over 19 years of experience in residential construction, we have built a strong reputation for delivering high-quality homes that combine modern design, structural strength, and long-term durability. Our approach focuses on understanding client needs, maintaining transparency throughout the process, and ensuring every project is completed with precision and attention to detail. By using premium materials and advanced construction techniques, we consistently deliver results that reflect both functionality and aesthetic excellence.
            </p>
          </div>

          {/* About Sections */}
          <div className="grid md:grid-cols-2 gap-12">

            {/* Left */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md">
              <h2 className="text-1xl mb-4 font-medium text-gray-700">Who We Are</h2>
              <p className='text-xl text-gray-100 leading-relaxed mb-5'>
                We are a dedicated construction team focused on delivering reliable and high-quality residential projects. Over the years, we have developed strong expertise in planning, design coordination, and execution, allowing us to handle projects of varying complexity with confidence. Our work is driven by a commitment to safety, precision, and long-lasting quality, ensuring every home we build meets the highest standards.
              </p>

              <h2 className="text-1xl mb-4 font-medium text-gray-700">Our Mission & Vision</h2>
              <p className="text-xl text-gray-100 leading-relaxed mb-5">
                Our mission is to provide transparent, efficient, and innovative construction services that exceed expectations while maintaining trust and reliability. We aim to create living spaces that are not only visually appealing but also practical and sustainable. Our vision is to continue growing as a trusted name in residential construction by consistently delivering excellence, adopting modern techniques, and maintaining strong relationships with our clients.
              </p>
            </div>

            {/* Right */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md">
              <h2 className="text-1xl mb-4 font-medium text-gray-700">Why Choose Us</h2>
              <p className="text-xl text-gray-100 leading-relaxed mb-5">
                Choosing the right construction partner is essential, and we stand out through our experience, quality standards, and client-focused approach. We prioritize timely delivery, cost transparency, and attention to detail in every stage of the project. By combining skilled workmanship with modern construction methods, we ensure that each project is completed efficiently without compromising on quality.
              </p>

              <h2 className="text-1xl mb-4 font-medium text-gray-700">Our Values</h2>
              <p className="text-xl text-gray-100 leading-relaxed">
                Our core values guide everything we do. Integrity ensures honest communication and trust, quality drives us to maintain high construction standards, and innovation allows us to adapt to modern design and building practices. Above all, client satisfaction remains our top priority, and we continuously strive to deliver results that meet and exceed expectations.
              </p>
              

            </div>
                        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md">
  <h2 className="text-1xl mb-4 font-medium text-gray-700">Healthy And Safety Commitment</h2>
              <p className="text-xl text-gray-100 leading-relaxed">
                The health, safety, and wellbeing of our employees, clients, subcontractors, and the public are our highest priorities. We are committed to maintaining a safe working environment on every project by following all applicable health and safety regulations and industry best practices.
              </p>
              

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;