import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../src/css/index.css';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx';
import Quote from './Quote.jsx';
import Contact from './Contact.jsx';
import Services from './Services.jsx';
import Portfolio from './Portfolio.jsx';
import Footer from './Footer.jsx';
import ProjectDetails from './ProjectDetails.jsx';
import Chatbot from './Chatbot';
import Testimonials from './Testimonials.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path='testimonials' element ={<Testimonials />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot /> {/* Chatbot will appear on all pages */}
    </div>
  </BrowserRouter>
);