import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Star, Sparkles, ArrowUpDown } from "lucide-react";

const Testimonials = () => {

  const testimonialsList = useMemo(
    () => [
      {
        id: 1,
        name: "Emily Johnson",
        role: "Homeowner",
        category: "Kitchen",
        rating: 5,
        featured: true,
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        short:
          "The kitchen remodel exceeded our expectations. The team was professional and the results are stunning.",
        full:
          "We hired this team for a full kitchen remodel, and they delivered beyond our expectations. From the initial design consultation to the final walkthrough, every step was handled with care and expertise. The new layout is incredibly functional, and the materials chosen are high-quality. We now have a kitchen that is both beautiful and practical. Highly recommended!",
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Property Investor",
        category: "Bathroom",
        rating: 4.5,
        featured: false,
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        short:
          "Beautiful bathroom styling with modern fixtures. Great attention to detail and on-time completion.",
        full:
          "I've worked with several contractors, but this team stands out. They transformed a dated bathroom into a spa-like retreat. The tile work is impeccable, the lighting is perfect, and the fixtures are top-notch. They communicated clearly throughout the project and finished exactly on schedule. I'm already planning to hire them for another property.",
      },
      {
        id: 3,
        name: "Sarah Williams",
        role: "Architect",
        category: "Construction",
        rating: 5,
        featured: true,
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        short:
          "As an architect, I appreciate their structural integrity and innovative design. Flawless execution.",
        full:
          "Collaborating on a new build was a pleasure. They respected the architectural plans while offering practical suggestions that improved the final outcome. The construction quality is outstanding, and they kept the site clean and safe. Their project management skills ensured we met all deadlines without compromising on quality. I'll definitely work with them again.",
      },
      {
        id: 4,
        name: "David Martinez",
        role: "Interior Designer",
        category: "Living",
        rating: 4,
        featured: false,
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        short:
          "The living room design is elegant and comfortable. Perfect balance of style and functionality.",
        full:
          "I've recommended this team to several clients, and they never disappoint. For this living room project, they created a warm, inviting space with clever lighting and carefully chosen furniture. The attention to detail is evident in every corner. Clients are thrilled, and I'm confident in referring them for any interior work.",
      },
  
      {
        id: 5,
        name: "Jessica Lee",
        role: "Homeowner",
        category: "Kitchen",
        rating: 4.8,
        featured: false,
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        short:
          "A complete transformation! The new kitchen is both stylish and highly functional.",
        full:
          "From outdated to breathtaking – they turned my old kitchen into a modern masterpiece. The custom cabinetry, smart storage solutions, and premium appliances have changed how I use the space. The crew was respectful and kept me informed every day. Couldn't be happier!",
      },
      {
        id: 6,
        name: "Robert Thompson",
        role: "General Contractor",
        category: "Construction",
        rating: 4.9,
        featured: true,
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        short:
          "Their attention to structural details and safety is second to none. A reliable partner.",
        full:
          "As a GC, I've collaborated with many subs, but this team sets the bar high. Their work on the foundation and framing was precise, and they proactively solved challenges on-site. They also communicated seamlessly with the rest of the crew, which kept the project moving. Highly recommended for any complex build.",
      },
      {
        id: 7,
        name: "Amanda Foster",
        role: "Homeowner",
        category: "Bathroom",
        rating: 4.6,
        featured: false,
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        short:
          "They created a spa-like bathroom within a tight budget. Amazing value!",
        full:
          "I was worried about cost, but they worked with me to find affordable yet beautiful materials. The result is a bathroom that feels luxurious. The tile work is flawless, and the layout makes the small space feel larger. I'm so glad I chose them.",
      },
      {
        id: 8,
        name: "Kevin O'Brien",
        role: "Architect",
        category: "Living",
        rating: 5,
        featured: true,
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        short:
          "They brought our design vision to life with perfect craftsmanship. A dream collaboration.",
        full:
          "The team executed our architectural drawings with incredible precision. They even suggested improvements that enhanced the flow and natural light. The finished living area is exactly what we imagined – maybe even better. I'll be using them for all future projects.",
      },
      {
        id: 9,
        name: "Nina Patel",
        role: "Homeowner",
        category: "Kitchen",
        rating: 4.7,
        featured: false,
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        short:
          "Great communication and quality work. The kitchen is now the heart of our home.",
        full:
          "From the first meeting to the final cleanup, they were professional and friendly. The kitchen renovation included new flooring, custom island, and smart lighting – all executed flawlessly. We love hosting now!",
      },
      {
        id: 10,
        name: "Daniel Scott",
        role: "Real Estate Agent",
        category: "Construction",
        rating: 4.4,
        featured: false,
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        short:
          "Their new construction project increased property value significantly. Clients were thrilled.",
        full:
          "I've sold several homes built by this team, and they always impress. The build quality is top-tier, and they pay attention to details that matter to buyers. Timely completion and excellent craftsmanship – a winning combination.",
      },
      {
        id: 11,
        name: "Olivia Garcia",
        role: "Interior Designer",
        category: "Living",
        rating: 4.5,
        featured: false,
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        short:
          "They implemented our design with care and creativity. The clients were overjoyed.",
        full:
          "Collaboration was seamless. They respected the design intent while offering practical tweaks that improved functionality. The living area now has a perfect balance of comfort and style. I'm looking forward to our next project together.",
      },
      {
        id: 12,
        name: "Mark Henderson",
        role: "Homeowner",
        category: "Bathroom",
        rating: 4.2,
        featured: false,
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        short:
          "Quick turnaround and high-quality finish. They made the process stress-free.",
        full:
          "We needed a bathroom renovation done before a family event, and they delivered on time. The new walk-in shower and vanity look fantastic. The team was courteous and kept the area clean. Highly recommend them.",
      },
      {
        id: 13,
        name: "Sophia Liu",
        role: "Homeowner",
        category: "Kitchen",
        rating: 5,
        featured: true,
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        short:
          "Absolutely thrilled with our kitchen! It's modern, spacious, and built to last.",
        full:
          "This was a major renovation, and the team handled everything from permits to final inspection. The custom cabinets, quartz countertops, and new appliances are top-notch. They also helped us choose finishes that fit our style. I can't recommend them enough.",
      },
      {
        id: 14,
        name: "Carlos Mendez",
        role: "Contractor",
        category: "Construction",
        rating: 4.8,
        featured: false,
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        short:
          "A trustworthy partner for any construction project. Their work ethic is outstanding.",
        full:
          "We've subcontracted multiple projects to this team, and they consistently deliver. Their framing, drywall, and finishing are precise. They also manage their crew well and adhere to safety protocols. A reliable choice for any general contractor.",
      },
    ],
    []
  );



  const categories = useMemo(() => {
    const set = new Set(testimonialsList.map((t) => t.category));
    return ["All", ...Array.from(set)];
  }, [testimonialsList]);

  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const filteredTestimonials = useMemo(() => {
    let data = testimonialsList.filter((t) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.short.toLowerCase().includes(q) ||
        t.full.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q);
      const matchesCat = activeCat === "All" || t.category === activeCat;
      return matchesQuery && matchesCat;
    });

    if (sortBy === "Rating") {
      data = [...data].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "Featured") {
      data = [...data].sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1));
    }
    return data;
  }, [testimonialsList, query, activeCat, sortBy]);

  const [selectedTestimonial, setSelectedTestimonial] = useState(null);


  useEffect(() => {
    if (selectedTestimonial) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedTestimonial]);

  const openModal = (testimonial) => setSelectedTestimonial(testimonial);
  const closeModal = () => setSelectedTestimonial(null);

  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );

  const Badge = ({ text }) => (
    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-black/80 text-white">
      {text === "Featured" ? <Sparkles size={14} /> : <Star size={14} />}
      {text}
    </span>
  );

  return (
    <div className="min-h-screen py-14 px-6 text-gray-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <p className="text-sm text-gray-600 mt-1">
              Real feedback from homeowners, architects, and designers.
            </p>
          </div>


          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center">
            <div className="relative w-full sm:w-[320px] lg:w-[400px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or keyword..."
                className="w-full pl-10 pr-10 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent text-sm bg-white"
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
              onClick={() => setSortBy((s) => (s === "Featured" ? "Rating" : "Featured"))}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#FFFDD0] via-[#F8E7B9] to-[#E6C76A] text-black text-sm whitespace-nowrap"
            >
              <ArrowUpDown size={16} />
              Sort: {sortBy}
            </button>
          </div>
        </div>

  
        <div className="flex flex-wrap gap-2 mb-7">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`px-3 py-1.5 rounded-full text-sm border transition ${
                activeCat === c
                  ? "bg-black text-white border-black"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>


        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl cursor-pointer transition-all"
              onClick={() => openModal(testimonial)}
            >
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-xl text-gray-900 truncate">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 truncate">{testimonial.role}</p>
                  </div>
                  {testimonial.featured && (
                    <div className="flex-shrink-0 ml-auto">
                      <Badge text="Featured" />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">Rating</span>
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-sm text-gray-600 leading-5 line-clamp-3">
                  "{testimonial.short}"
                </p>
                <div className="mt-3 text-xs font-medium text-gray-700">
                  <span className="inline-block bg-gray-100 px-2 py-1 rounded-full">
                    {testimonial.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

  
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No testimonials match your filters.
          </div>
        )}
      </div>

 
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full p-6 relative my-4 max-h-[95vh] overflow-y-auto"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1 shadow-sm"
                onClick={closeModal}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-4 mb-4 pr-8">
                <img
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.name}
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold truncate">{selectedTestimonial.name}</h3>
                  <p className="text-sm text-gray-500">{selectedTestimonial.role}</p>
                </div>
                {selectedTestimonial.featured && (
                  <div className="flex-shrink-0">
                    <Badge text="Featured" />
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-sm font-medium">Project: {selectedTestimonial.category}</span>
                <StarRating rating={selectedTestimonial.rating} />
              </div>

              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {selectedTestimonial.full}
              </p>

              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-black text-white rounded-lg hover:opacity-90 text-sm w-full sm:w-auto"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonials;