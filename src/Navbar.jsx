import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../src/assets/NewLogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Our Projects", link: "/projects" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Services", link: "/services" },
    {name:'Testimonials', link:'/testimonials'}
  ];

  return (
    <nav className="top-0 left-0 w-full z-50 bg px-6 py-5">

      {/* Top Bar */}
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Company Logo" className="h-10 mr-3" />
          <span className="text-lg font-normal text-white">
            Meroux
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl md:hidden"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center nav-links">

          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="text-sm text-white hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}

          <li>
          <Link
  to="/quote"
  className="px-6 py-3 bg-gradient-to-r from-[#FFFDD0] via-[#F8E7B9] to-[#E6C76A] rounded-lg text-[#3A2F1B] text-base font-medium shadow-lg hover:opacity-90 transition"
>
  Instant Quote Generator
</Link>
          </li>

        </ul>
      </div>

     {/* Mobile Menu */}
<div
  className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
    open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <ul className="mt-3 flex flex-col gap-2 bg-black p-3 rounded-lg">

    {menuItems.map((item, index) => (
      <li key={index}>
        <Link
          to={item.link}
          onClick={() => setOpen(false)}
          className="block text-white text-sm sm:text-base py-2 px-2 hover:text-[#E6C76A] transition"
        >
          {item.name}
        </Link>
      </li>
    ))}

    <li className="pt-2">
      <Link
        to="/quote"
        onClick={() => setOpen(false)}
        className="block w-full text-center px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#FFFDD0] via-[#F8E7B9] to-[#E6C76A] rounded-lg text-[#3A2F1B] text-sm sm:text-base font-medium shadow-lg hover:opacity-90 transition"
      >
        Instant Quote Generator
      </Link>
    </li>

  </ul>
</div>
     </nav>
   );
}
