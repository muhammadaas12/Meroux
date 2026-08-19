import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

const ProjectDetails = ({ project, onBack }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  const slides = [
    {
      src: "/images/project1.jpg",
      title: "Initial Design Concept",
      desc: "Early visual concept showcasing the layout, colors, and material choices."
    },
    {
      src: "/images/project2.jpg",
      title: "Work in Progress",
      desc: "On-site progress with structural updates and interior refinements."
    },
    {
      src: "/images/project3.jpg",
      title: "Final Look",
      desc: "Completed project with lighting, decor, and final styling in place."
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="text-gray-900 relative"
    >
      {/* Close Icon - positioned in top right corner */}
      <button
        onClick={onBack}
        className="absolute top-4 right-4 z-20 w-10 h-10 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center border border-gray-200"
        aria-label="Close"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-5 h-5 text-gray-700" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </button>

      {/* Back button - kept for alternative navigation */}
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-4 h-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        Back
      </button>

      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="text-lg mb-6 text-gray-600">{project.desc}</p>

      {/* Carousel card */}
      <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden bg-white shadow-lg">
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div key={i} className="pb-4">
              <div className="w-full h-80 bg-gray-900 flex items-center justify-center relative">
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23333"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%23fff" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="px-5 pt-4 pb-2">
                <h3 className="text-lg font-semibold mb-1">
                  {slide.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {slide.desc}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;