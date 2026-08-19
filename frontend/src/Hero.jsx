import { Link } from "react-router-dom";
import logoImg from "../src/assets/NewLogo.png";

function Hero() {
  return (
  <div className="relative min-h-screen font-['Libre_Franklin'] text-white ">
  
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed "
    style={{
      backgroundImage:
        "url('../assets/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus.jpg')",
    }}
  ></div>

 
  <div className="relative z-10 flex flex-col min-h-screen ">
  
    <div className="flex flex-col justify-center items-center text-center px-4" style={{ minHeight: '70vh' }}>
      <div className="animate-fadeUp">
        <h1 className="text-3xl md:text-6xl font-light mb-6">
          "Your Vision. Our Responsibility."
        </h1>
        <p className="text-lg md:text-xl font-light mb-8">
          Building with precision, from homes to high-rises — excellence you can trust.
        </p>


<Link
  to="/quote"
  className="px-6 py-3 bg-gradient-to-r from-[#FFFDD0] via-[#F8E7B9] to-[#E6C76A] rounded-lg text-[#3A2F1B] text-base font-medium shadow-lg hover:opacity-90 transition"
>
  Get a Quote
</Link>
      </div>
    </div>
  </div>
</div>

  );
}

export default Hero;
