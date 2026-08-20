import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Star, Sparkles, ArrowUpDown, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import logoImg from "./assets/NewLogo.png";
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
import logoImg16 from "./assets/Finceley1.png";
import logoImg17 from "./assets/Finceley2.png";
import logoImg18 from "./assets/Finceley3.png";
import logoImg19 from "./assets/Finceley4.png";
import logoImg20 from "./assets/Finceley5.png";
import logoImg21 from "./assets/Finceley6.png";
import logoImg22 from "./assets/Finceley7.png";
import logoImg23 from "./assets/Finceley8.png";
import logoImg24 from "./assets/Finceley9.png";
import logoImg25 from "./assets/Finceley10.png";
import logoImg26 from "./assets/Finceley11.png";

const Projects = () => {
  const projectList = useMemo(
    () => [
      
      {
        id: 1,
        title: "315 Regents Park Rd, Greater, London N3 1DP",
        category: "Office Renovation",
        badge: "Work in Progress",
        rating: 4.9,
        desc:
          "A modern office space with a focus on functionality and comfort. " +
          "We design flexible layouts, incorporate smart technology, and use high-quality materials to create an inspiring work environment. " +
          "The result is a productive and aesthetically pleasing space that supports collaboration and innovation.",
        images: [logoImg16, logoImg17, logoImg18, logoImg19, logoImg20, logoImg21, logoImg22, logoImg23, logoImg24, logoImg25, logoImg26],

      }
    ],
    []
  );

  const categories = useMemo(() => {
    const set = new Set(projectList.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [projectList]);

  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const filtered = useMemo(() => {
    let data = projectList.filter((p) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      const matchesCat = activeCat === "All" || p.category === activeCat;
      return matchesQuery && matchesCat;
    });

    if (sortBy === "Rating") data = [...data].sort((a, b) => b.rating - a.rating);
    if (sortBy === "New") data = [...data].sort((a, b) => (b.badge === "New") - (a.badge === "New"));
    if (sortBy === "Featured") data = [...data].sort((a, b) => (b.badge === "Featured") - (a.badge === "Featured"));

    return data;
  }, [projectList, query, activeCat, sortBy]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Lightbox state
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
    if (selectedProject || lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject, lightboxOpen]);

  const openProject = (project) => {
    setSelectedProject(project);
    setSlideIndex(0);
    setAutoPlay(true);
  };

  const closeProject = () => {
    setSelectedProject(null);
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
    if (!selectedProject) return;
    const newIndex = (slideIndex + 1) % selectedProject.images.length;
    setSlideIndex(newIndex);
    if (lightboxOpen) setLightboxIndex(newIndex);
  };

  const prevSlide = () => {
    if (!selectedProject) return;
    const newIndex = (slideIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
    setSlideIndex(newIndex);
    if (lightboxOpen) setLightboxIndex(newIndex);
  };

  const zoomIn = () => setZoomScale((z) => Math.min(4, +(z + 0.25).toFixed(2)));
  const zoomOut = () => setZoomScale((z) => Math.max(1, +(z - 0.25).toFixed(2)));
  const resetZoom = () => {
    setZoomScale(1);
    setPan({ x: 0, y: 0 });
  };

  // Touch/Mouse handlers for pan
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

  // Swipe detection for touch devices
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
// Keyboard controls
useEffect(() => {
  const onKey = (e) => {
    if (!selectedProject) return;

    // Close with Escape
    if (e.key === "Escape") {
      e.preventDefault();

      if (lightboxOpen) {
        closeLightbox();
      } else {
        closeProject();
      }
      return;
    }

    // Image navigation
    if (e.key === "ArrowRight") {
      e.preventDefault();

      if (lightboxOpen) {
        setLightboxIndex(
          (lightboxIndex + 1) % selectedProject.images.length
        );
        setSlideIndex(
          (lightboxIndex + 1) % selectedProject.images.length
        );
      } else {
        nextSlide();
      }

      return;
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();

      if (lightboxOpen) {
        const newIndex =
          (lightboxIndex - 1 + selectedProject.images.length) %
          selectedProject.images.length;

        setLightboxIndex(newIndex);
        setSlideIndex(newIndex);
      } else {
        prevSlide();
      }

      return;
    }

    // Zoom controls
    if (lightboxOpen) {
      if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        zoomIn();
      }

      if (e.key === "-") {
        e.preventDefault();
        zoomOut();
      }

      if (e.key === "0") {
        e.preventDefault();
        resetZoom();
      }
    }
  };

  window.addEventListener("keydown", onKey);

  return () => {
    window.removeEventListener("keydown", onKey);
  };
}, [
  selectedProject,
  lightboxOpen,
  lightboxIndex,
  slideIndex,
]);

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
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold">Our Projects</h2>
            <p className="text-sm text-gray-600 mt-1">Search, filter, and open a project for a full gallery.</p>
          </div>

          {/* Search + Sort */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center">
            <div className="relative w-full sm:w-[320px] lg:w-[400px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
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

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl cursor-pointer transition-all"
              onClick={() => openProject(project)}
            >
              <div className="relative">
                <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge text={project.badge} />
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-[12px] opacity-90">{project.category}</div>
                  <div className="text-[14px] font-semibold">{project.title}</div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] text-gray-500">Rating</span>
                  <span className="text-[12px] font-semibold">{project.rating.toFixed(1)}</span>
                </div>
                <p className="text-[12px] text-gray-600 leading-5 line-clamp-3">{project.desc}</p>
                <span className="inline-block mt-3 text-[12px] font-medium text-gray-700">
                  Open gallery →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal - Fixed scroll on mobile */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-6xl w-full p-5 relative flex flex-col lg:flex-row gap-6 my-4 max-h-[98vh] overflow-y-auto"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button with X icon */}
              <button
                className="absolute top-3 right-4 z-10 w-9 h-9 bg-white hover:bg-gray-100 rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all border border-gray-200"
                onClick={closeProject}
                aria-label="Close"
              >
                <X size={18} className="text-gray-700" />
              </button>

              {/* Details */}
              <div className="flex-1 max-h-[440px] overflow-y-auto pr-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge text={selectedProject.badge} />
                  <span className="text-xs text-gray-500">{selectedProject.category}</span>
                </div>

                <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-[12.5px] text-gray-700 leading-6">
                  {selectedProject.desc}
                  <br />
                  <br />
                  This project includes detailed planning, modern styling, premium finishing, and expert craftsmanship.
                  We focus on comfort, aesthetics, and long-term durability—ensuring your space looks great and performs well.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setAutoPlay((a) => !a)}
                    className="px-4 py-2 bg-black text-white rounded-lg hover:opacity-90 text-sm"
                  >
                    {autoPlay ? "Pause slideshow" : "Play slideshow"}
                  </button>
                  <button
                    onClick={closeProject}
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
                    src={selectedProject.images[slideIndex]}
                    alt={`${selectedProject.title} slide ${slideIndex + 1}`}
                    className="w-full h-[340px] sm:h-[440px] lg:h-[540px] object-cover cursor-pointer"
                    onClick={() => openLightbox(slideIndex)}
                    onMouseEnter={() => setAutoPlay(false)}
                    onMouseLeave={() => setAutoPlay(true)}
                  />

                  {/* Progress */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/30">
                    <div
                      className="h-full bg-white"
                      style={{
                        width: `${((slideIndex + 1) / selectedProject.images.length) * 100}%`,
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
                    Click to zoom • {slideIndex + 1}/{selectedProject.images.length}
                  </div>
                </div>

                {/* Thumbs + dots */}
                <div className="flex items-center justify-between mt-3 gap-3">
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSlideIndex(idx)}
                        className={`shrink-0 rounded-lg overflow-hidden border ${
                          idx === slideIndex ? "border-black" : "border-transparent"
                        }`}
                        aria-label={`Open slide ${idx + 1}`}
                      >
                        <img src={img} alt="" className="w-16 h-12 object-cover" />
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-1.5">
                    {selectedProject.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlideIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full ${
                          i === slideIndex ? "bg-black" : "bg-gray-300"
                        }`}
                        aria-label={`Dot ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full‑screen Lightbox - Fixed for mobile */}
      <AnimatePresence>
        {lightboxOpen && selectedProject && (
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
                  className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-all hover:scale-110 z-30"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation buttons */}
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

              {/* Image container with pan/zoom */}
              <div
                className="w-full h-full flex items-center justify-center select-none z-10 px-2 sm:px-4"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                style={{ cursor: zoomScale > 1 ? "grab" : "default" }}
              >
                <img
                  src={selectedProject.images[lightboxIndex]}
                  alt={selectedProject.title}
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
                {lightboxIndex + 1} / {selectedProject.images.length} • Zoom: {Math.round(zoomScale * 100)}%
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;