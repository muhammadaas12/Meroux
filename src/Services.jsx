import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Star, Sparkles, ArrowUpDown, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg1 from "./assets/Kr1.png";
import logoImg2 from "./assets/Kr2.png";
import logoImg3 from "./assets/Kr3.png";
import logoImg4 from "./assets/Kr4.png";
import logoImg5 from "./assets/Kr5.png";
import logoImg6 from "./assets/Kr6.png";
import logoImg7 from "./assets/Lr1.png";
import logoImg8 from "./assets/Lr2.png";
import logoImg9 from "./assets/Lr3.png";
import logoImg10 from "./assets/Lr4.png";
import logoImg11 from "./assets/Lr5.png";
import logoImg12 from "./assets/Br1.png";
import logoImg13 from "./assets/Br2.png";
import logoImg14 from "./assets/Br3.png";
import logoImg15 from "./assets/Br4.png";
import logoImg16 from "./assets/Br5.png";
import logoImg17 from "./assets/Br6.png";
import logoImg18 from "./assets/Hc1.png";
import logoImg19 from "./assets/Hc2.png";
import logoImg20 from "./assets/Hc3.png";
import logoImg21 from "./assets/Hc4.png";
import logoImg24 from "./assets/Gl1.png";
import logoImg25 from "./assets/Gl2.png";
import logoImg26 from "./assets/Gl3.png";
import logoImg27 from "./assets/Gl4.png";
import logoImg28 from "./assets/Gl5.png";
import logoImg29 from "./assets/Gl6.png";
import logoImg30 from "./assets/Ho1.png";
import logoImg31 from "./assets/Ho2.png";
import logoImg32 from "./assets/Ho3.png";
import logoImg33 from "./assets/Ho4.png";
import logoImg34 from "./assets/Ho5.png";
import logoImg35 from "./assets/Ho6.png";
import logoImg36 from "./assets/Rr1.png";
import logoImg37 from "./assets/Rr2.png";
import logoImg38 from "./assets/Rr3.png";
import logoImg39 from "./assets/Rr4.png";
import logoImg40 from "./assets/Rr5.png";
import logoImg41 from "./assets/Bc1.png";
import logoImg42 from "./assets/Bc2.png";
import logoImg43 from "./assets/Bc3.png";
import logoImg44 from "./assets/Bc4.png";
import logoImg45 from "./assets/Pd1.png";
import logoImg46 from "./assets/Pd2.png";
import logoImg47 from "./assets/Pd3.png";
import logoImg48 from "./assets/Pd4.png";
import logoImg49 from "./assets/Fl1.png";
import logoImg50 from "./assets/Fl2.png";
import logoImg51 from "./assets/Fl3.png";
import logoImg52 from "./assets/Fl4.png";
import logoImg53 from "./assets/Fl5.png";
import logoImg54 from "./assets/Fl6.png";
import logoImg55 from "./assets/E1.png";
import logoImg56 from "./assets/E2.png";
import logoImg57 from "./assets/E3.png";
import logoImg58 from "./assets/E4.png";
import logoImg59 from "./assets/Pl1.png";
import logoImg60 from "./assets/Pl2.png";
import logoImg61 from "./assets/Pl3.png";
import logoImg62 from "./assets/Pl4.png";
import logoImg from "./assets/NewLogo.png";

const Services = () => {

  const servicesData = useMemo(
    () => [
      {
        id: 1,
        title: "Kitchen Remodelling",
        category: "Kitchen",
        badge: "Featured",
        rating: 4.9,
        short: "Modern design focusing on space and lighting.",
        full: "Complete kitchen renovation including cabinets, flooring, lighting, plumbing, and premium appliances installation.",
        features: ["Custom cabinets", "Quartz countertops", "Energy-efficient appliances", "Smart lighting"],
        images: [logoImg1, logoImg2, logoImg3, logoImg4, logoImg5, logoImg6],
      },
      {
        id: 2,
        title: "Bathroom Styling",
        category: "Bathroom",
        badge: "New",
        rating: 4.8,
        short: "Elegant finishes and modern fixtures.",
        full: "Full bathroom remodeling with waterproofing, luxury fittings, tiles, lighting, and ventilation systems.",
        features: ["Waterproofing", "Heated floors", "Walk‑in shower", "Vanity units"],
        images: [logoImg13, logoImg14, logoImg15, logoImg16, logoImg17],
      },
      {
        id: 3,
        title: "House Construction",
        category: "Construction",
        badge: "Popular",
        rating: 4.9,
        short: "Reliable structure and planning.",
        full: "End‑to‑end house construction including foundation, structure, roofing, electrical, plumbing, and finishing.",
        features: ["Structural engineering", "Energy‑efficient design", "Sustainable materials", "Project management"],
        images: [logoImg18, logoImg19, logoImg20, logoImg21],
      },
      {
        id: 4,
        title: "Interior Design",
        category: "Construction",
        badge: "Featured",
        rating: 4.7,
        short: "Clean and stylish living space.",
        full: "Interior design including furniture setup, lighting, wall panels, flooring, and smart storage solutions.",
        features: ["Custom furniture", "Accent walls", "Smart home integration", "Ambient lighting"],
        images: [logoImg7, logoImg8, logoImg9, logoImg10, logoImg11],
      },
      {
        id: 5,
        title: "Garden Landscaping",
        category: "Outdoor",
        badge: "New",
        rating: 4.8,
        short: "Beautiful outdoor spaces.",
        full: "Complete garden design including plants, lawns, patios, water features, and lighting.",
        features: ["Irrigation systems", "Decking & patios", "Low‑maintenance plants", "Outdoor lighting"],
        images: [logoImg24, logoImg25, logoImg26, logoImg27, logoImg28, logoImg29],
      },
      {
        id: 6,
        title: "Home Office Setup",
        category: "Office",
        badge: "",
        rating: 4.6,
        short: "Functional and stylish workspaces.",
        full: "Design and installation of ergonomic desks, storage, lighting, and tech setup for home offices.",
        features: ["Ergonomic furniture", "Cable management", "Acoustic panels", "Task lighting"],
        images: [logoImg30, logoImg31, logoImg32, logoImg33, logoImg34, logoImg35],
      },
      {
        id: 7,
        title: "Roof Renovation",
        category: "Exterior",
        badge: "",
        rating: 4.7,
        short: "Strong and durable roofing solutions.",
        full: "Roof repair and replacement, insulation, waterproofing, and gutter installation.",
        features: ["Leak repairs", "New shingles", "Insulation", "Gutter systems"],
        images: [logoImg36, logoImg37, logoImg38, logoImg39, logoImg40],
      },
      {
        id: 8,
        title: "Basement Conversion",
        category: "Basement",
        badge: "Popular",
        rating: 4.8,
        short: "Maximize your home's space.",
        full: "Transform basements into living spaces, home gyms, or entertainment areas with full interior work.",
        features: ["Waterproofing", "Flooring", "Lighting", "HVAC integration"],
        images: [logoImg41, logoImg42, logoImg43, logoImg44],
      },
      {
        id: 9,
        title: "Painting & Decorating",
        category: "Interior",
        badge: "",
        rating: 4.7,
        short: "Fresh colours and flawless finishes.",
        full: "Professional interior and exterior painting, wallpaper installation, decorative finishes, and colour consultation.",
        features: ["Wall painting", "Wallpaper installation", "Decorative finishes", "Color consultation"],
        images: [logoImg45, logoImg46, logoImg47, logoImg48],
      },
      {
        id: 10,
        title: "Flooring Installation",
        category: "Flooring",
        badge: "",
        rating: 4.8,
        short: "Durable and stylish flooring options.",
        full: "Expert installation of hardwood, laminate, tile, carpet, and luxury vinyl. Includes subfloor preparation and finishing.",
        features: ["Hardwood", "Laminate", "Tile", "Carpet"],
        images: [logoImg49, logoImg50, logoImg51, logoImg52, logoImg53, logoImg54],
      },
      {
        id: 11,
        title: "Electrical & Lighting",
        category: "Electrical",
        badge: "",
        rating: 4.8,
        short: "Safe, modern electrical solutions.",
        full: "Complete electrical services including wiring upgrades, lighting fixture installation, smart home setup, and safety inspections.",
        features: ["Wiring upgrades", "Lighting fixtures", "Smart home setup", "Safety inspection"],
        images: [logoImg55, logoImg56, logoImg57, logoImg58],
      },
      {
        id: 12,
        title: "Plumbing Services",
        category: "Plumbing",
        badge: "",
        rating: 4.7,
        short: "Reliable plumbing for your home.",
        full: "Pipe installation and repair, fixture replacement, water heater services, drain cleaning, and leak detection.",
        features: ["Pipe installation", "Fixture replacement", "Water heater", "Drain cleaning"],
        images: [logoImg59, logoImg60, logoImg61, logoImg62],
      },
    ],
    []
  );

  // Extract categories
  const categories = useMemo(() => {
    const set = new Set(servicesData.map((s) => s.category));
    return ["All", ...Array.from(set)];
  }, [servicesData]);

  // State for filtering/sorting
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  // Filter & sort
  const filteredServices = useMemo(() => {
    let data = servicesData.filter((s) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.full.toLowerCase().includes(q) ||
        s.short.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      const matchesCat = activeCat === "All" || s.category === activeCat;
      return matchesQuery && matchesCat;
    });

    if (sortBy === "Rating") data = [...data].sort((a, b) => b.rating - a.rating);
    if (sortBy === "New") data = [...data].sort((a, b) => (b.badge === "New") - (a.badge === "New"));
    if (sortBy === "Featured") data = [...data].sort((a, b) => (b.badge === "Featured") - (a.badge === "Featured"));

    return data;
  }, [servicesData, query, activeCat, sortBy]);

  // Modal & lightbox state
  const [selectedService, setSelectedService] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [zoomScale, setZoomScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });
  const [swipeStartX, setSwipeStartX] = useState(null);

  // Prevent body scroll when modals are open
  useEffect(() => {
    if (selectedService || lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedService, lightboxOpen]);

  const openService = (service) => {
    setSelectedService(service);
    setSlideIndex(0);
    setAutoPlay(true);
  };

  const closeService = () => {
    setSelectedService(null);
    setLightboxOpen(false);
    setZoomScale(1);
    setPan({ x: 0, y: 0 });
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    setZoomScale(1);
    setPan({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setZoomScale(1);
    setPan({ x: 0, y: 0 });
  };

  const nextSlide = () => {
    if (!selectedService) return;
    const newIndex = (slideIndex + 1) % selectedService.images.length;
    setSlideIndex(newIndex);
    if (lightboxOpen) setLightboxIndex(newIndex);
  };

  const prevSlide = () => {
    if (!selectedService) return;
    const newIndex = (slideIndex - 1 + selectedService.images.length) % selectedService.images.length;
    setSlideIndex(newIndex);
    if (lightboxOpen) setLightboxIndex(newIndex);
  };

  const zoomIn = () => setZoomScale((z) => Math.min(4, +(z + 0.25).toFixed(2)));
  const zoomOut = () => setZoomScale((z) => Math.max(1, +(z - 0.25).toFixed(2)));
  const resetZoom = () => {
    setZoomScale(1);
    setPan({ x: 0, y: 0 });
  };

  // Pan handlers - Only work on image
  const onPointerDown = (e) => {
    if (e.target.tagName !== 'IMG') return;
    if (zoomScale === 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setStartPan({ ...pan });
    e.preventDefault();
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setPan({ x: startPan.x + dx, y: startPan.y + dy });
  };

  const onPointerUp = () => setIsDragging(false);

  // Wheel zoom
  const onWheel = (e) => {
    if (!lightboxOpen) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setZoomScale((z) => Math.max(1, Math.min(4, z + delta)));
  };

  // Touch swipe
  const onTouchStart = (e) => {
    const touch = e.touches[0];
    setSwipeStartX(touch.clientX);
  };

  const onTouchEnd = (e) => {
    if (swipeStartX === null) return;
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - swipeStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) prevSlide();
      else nextSlide();
    }
    setSwipeStartX(null);
  };

  // Keyboard controls
  useEffect(() => {
    const onKey = (e) => {
      if (!selectedService) return;
      if (e.key === "Escape") {
        if (lightboxOpen) closeLightbox();
        else closeService();
      }
      if (lightboxOpen) {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "+" || e.key === "=") zoomIn();
        if (e.key === "-") zoomOut();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedService, lightboxOpen]);

  // Autoplay slides
  useEffect(() => {
    if (!selectedService || lightboxOpen || !autoPlay) return;
    const t = setInterval(() => nextSlide(), 2500);
    return () => clearInterval(t);
  }, [selectedService, lightboxOpen, autoPlay]);

  // Badge component
  const Badge = ({ text }) => {
    const icon =
      text === "Featured" ? <Star size={14} /> : text === "New" ? <Sparkles size={14} /> : <Star size={14} />;
    return (
      <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-black/80 text-white">
        {icon}
        {text}
      </span>
    );
  };

  return (
    <div className="min-h-screen py-14 px-6 text-gray-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-sm text-gray-600 mt-1">Search, filter, and explore our full range of services.</p>
          </div>

          {/* Search + Sort */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center">
            <div className="relative w-full sm:w-[320px] lg:w-[400px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services..."
                className="w-full pl-10 pr-10 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent text-sm"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                  aria-label="Clear"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <button
              onClick={() => setSortBy((s) => (s === "Featured" ? "Rating" : s === "Rating" ? "New" : "Featured"))}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#FFFDD0] via-[#F8E7B9] to-[#E6C76A] text-black text-sm whitespace-nowrap"
            >
              <ArrowUpDown size={16} />
              Sort: {sortBy}
            </button>
          </div>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-7">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`px-3 py-1.5 rounded-full text-sm border transition ${
                activeCat === c ? "bg-black text-white border-black" : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl cursor-pointer transition-all"
              onClick={() => openService(service)}
            >
              <div className="relative">
                <img src={service.images[0]} alt={service.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge text={service.badge} />
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-[12px] opacity-90">{service.category}</div>
                  <div className="text-[14px] font-semibold">{service.title}</div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[12px] px-2 py-1 rounded-full">
                  {service.rating} ★
                </div>
              </div>

              <div className="p-4">
                <p className="text-[12px] text-gray-600 leading-5 line-clamp-3">{service.short}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[12px] font-medium text-gray-700">Open gallery →</span>
                  <span className="text-xl">{service.icon}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal - Fixed scroll on mobile */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeService}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-6xl w-full p-5 relative flex flex-col lg:flex-row gap-6 my-4 max-h-[98vh] overflow-y-auto"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-4 z-10 w-9 h-9 bg-white hover:bg-gray-100 rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all border border-gray-200"
                onClick={closeService}
                aria-label="Close"
              >
                <X size={18} className="text-gray-700" />
              </button>

              {/* Details */}
              <div className="flex-1 max-h-[440px] overflow-y-auto pr-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge text={selectedService.badge} />
                  <span className="text-xs text-gray-500">{selectedService.category}</span>
                </div>

                <h3 className="text-xl font-bold mb-2">{selectedService.title}</h3>
                <p className="text-[12.5px] text-gray-700 leading-6">{selectedService.full}</p>

                {/* Features */}
                <div className="mt-4 bg-gray-50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">What's Included</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedService.features.map((feat, idx) => (
                     <div
  key={idx}
  className="flex items-center gap-2 text-sm text-[var(--text-mid)]"
>
  <Sparkles
    size={14}
    className="text-[var(--gold-main)]"
  />
  <span>{feat}</span>
</div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Link
                    to="/quote"
                    className="px-4 py-2 bg-[var(--gold-main)] text-white rounded-lg hover:bg-[var(--gold-dark)] hover:shadow-lg transition-all duration-300 text-sm font-medium"
                  >
                    Get Quote
                  </Link>
                  <button
                    onClick={() => setAutoPlay((a) => !a)}
                    className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm"
                  >
                    {autoPlay ? "Pause slideshow" : "Play slideshow"}
                  </button>
                  <button
                    onClick={closeService}
                    className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Gallery */}
              <div className="w-full lg:w-[420px]">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={selectedService.images[slideIndex]}
                    alt={`${selectedService.title} slide ${slideIndex + 1}`}
                    className="w-full h-[340px] sm:h-[440px] lg:h-[540px] object-cover cursor-pointer"
                    onClick={() => openLightbox(slideIndex)}
                    onMouseEnter={() => setAutoPlay(false)}
                    onMouseLeave={() => setAutoPlay(true)}
                  />

                  {/* Progress bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/30">
                    <div
                      className="h-full bg-white"
                      style={{
                        width: `${((slideIndex + 1) / selectedService.images.length) * 100}%`,
                      }}
                    />
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-gray-900 rounded-full w-10 h-10 grid place-items-center"
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-gray-900 rounded-full w-10 h-10 grid place-items-center"
                    aria-label="Next"
                  >
                    ›
                  </button>

                  <div className="absolute bottom-3 left-3 bg-black/60 text-white text-[12px] px-2 py-1 rounded">
                    Click to zoom • {slideIndex + 1}/{selectedService.images.length}
                  </div>
                </div>

                {/* Thumbnails + Dots */}
                <div className="flex items-center justify-between mt-3 gap-3">
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {selectedService.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSlideIndex(idx)}
                        className={`shrink-0 rounded-lg overflow-hidden border ${
                          idx === slideIndex ? "border-black" : "border-transparent"
                        }`}
                      >
                        <img src={img} alt="" className="w-16 h-12 object-cover" />
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-1.5">
                    {selectedService.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlideIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full ${
                          i === slideIndex ? "bg-black" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full‑screen Lightbox - FIXED for mobile scroll */}
      <AnimatePresence>
        {lightboxOpen && selectedService && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onWheel={onWheel}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Background click to close */}
            <div 
              className="absolute inset-0 z-0"
              onClick={closeLightbox}
            />
            
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Controls overlay - Top */}
              <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 flex justify-between items-start z-20">
                <div className="flex gap-1 sm:gap-2 flex-wrap">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      zoomOut();
                    }}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-all hover:scale-110"
                    aria-label="Zoom out"
                  >
                    <ZoomOut size={18} className="sm:size-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      zoomIn();
                    }}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-all hover:scale-110"
                    aria-label="Zoom in"
                  >
                    <ZoomIn size={18} className="sm:size-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      resetZoom();
                    }}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-all hover:scale-110"
                    aria-label="Reset zoom"
                  >
                    <RotateCcw size={18} className="sm:size-5" />
                  </button>
                </div>
                <button
                  onClick={closeLightbox}
                  className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-all hover:scale-110"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation arrows */}
              <div className="absolute inset-y-0 left-0 flex items-center z-20">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="ml-2 sm:ml-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 backdrop-blur-sm transition-all hover:scale-110 text-xl sm:text-2xl"
                  aria-label="Previous"
                >
                  ‹
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center z-20">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="mr-2 sm:mr-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 backdrop-blur-sm transition-all hover:scale-110 text-xl sm:text-2xl"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>

              {/* Image with pan/zoom */}
              <div
                className="w-full h-full flex items-center justify-center select-none z-10 px-2 sm:px-4"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                style={{ cursor: zoomScale > 1 ? "grab" : "default" }}
              >
                <img
                  src={selectedService.images[lightboxIndex]}
                  alt={selectedService.title}
                  style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomScale})`,
                    transformOrigin: "center",
                    transition: isDragging ? "none" : "transform 0.1s ease-out",
                    maxWidth: "95%",
                    maxHeight: "90%",
                    objectFit: "contain",
                    touchAction: "none",
                  }}
                  onClick={(e) => e.stopPropagation()}
                  draggable={false}
                />
              </div>

              {/* Info indicator */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-xs sm:text-sm z-20 pointer-events-none px-4">
                {lightboxIndex + 1} / {selectedService.images.length} • Zoom: {Math.round(zoomScale * 100)}%
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;