import { Link } from "react-router-dom";
import { materials } from "@/data/materials";
import { materialImages } from "@/data/images";

export default function HomeMaterials() {
  return (
    <section className="relative w-full bg-[#F8F5EF] py-12 sm:py-16 overflow-hidden font-sans">
      {/* Decorative side text (Hidden on mobile) */}
      <div className="hidden lg:block absolute left-4 top-24 text-[#55716C]/40 text-[10px] tracking-[0.25em] uppercase rotate-[-90deg] origin-left">
        Spaces that feel like you
      </div>

      {/* Decorative vertical lines */}
      <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-[#B9965A]/20"></div>
      <div className="hidden lg:block absolute right-8 top-0 bottom-0 w-px bg-[#B9965A]/20"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 sm:w-8 h-px bg-[#B9965A]"></div>
            <span className="text-[#B9965A] text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] uppercase">
              Our Materials
            </span>
            <div className="w-6 sm:w-8 h-px bg-[#B9965A]"></div>
          </div>
          
          <h2 className="font-display text-[#073F3A] text-3xl sm:text-4xl lg:text-[44px] leading-tight font-medium mb-4">
            Luxury begins with the right material
          </h2>
          
          <p className="text-[#55716C] text-base sm:text-lg leading-relaxed max-w-[650px]">
            We work in PU finish, laminate, membrane, acrylic, and lacquer finish — each chosen for how it will actually perform in your home.
          </p>
        </div>

        {/* Material Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-nowrap gap-4 lg:gap-3 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory hide-scrollbar">
          {materials.map((m, idx) => (
            <Link
              to={`/materials/${m.slug}`}
              key={m.slug}
              className="group flex flex-col snap-start shrink-0 w-full sm:w-auto lg:w-[calc(16.666%-12px)] min-w-[220px] max-w-[280px] lg:max-w-none bg-[#FFFDF9] border border-[#E4DED3] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-400 ease-out flex-1"
            >
              {/* Image Section */}
              <div className="h-[160px] sm:h-[180px] lg:h-[190px] w-full overflow-hidden rounded-t-xl relative">
                <img
                  src={materialImages[m.slug] || "/images/brochure/laminate-swatch.jpg"}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#B9965A] font-sans text-xs font-medium tracking-wider">
                    0{idx + 1}
                  </span>
                  <div className="w-3 h-px bg-[#B9965A]"></div>
                </div>

                <h3 className="font-display text-[#073F3A] text-lg sm:text-xl font-semibold mb-2 leading-snug">
                  {m.name}
                </h3>
                
                <p className="text-[#71807B] text-[13px] sm:text-[14px] leading-[1.4] mb-6 flex-grow">
                  {m.description}
                </p>

                <div className="mt-auto flex items-center text-[#073F3A] font-display font-medium text-[15px] group-hover:text-[#B9965A] transition-colors">
                  <span className="relative">
                    View details
                    <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-[#B9965A]/30 group-hover:bg-[#B9965A] transition-colors"></span>
                  </span>
                  <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            to="/materials"
            className="inline-flex items-center justify-center w-full sm:w-[260px] h-[50px] border border-[#073F3A] rounded-[5px] text-[#073F3A] font-sans font-medium uppercase tracking-widest text-[12px] hover:bg-[#073F3A] hover:text-[#FFFDF9] transition-all duration-300 group"
          >
            Explore all materials
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="hidden md:flex justify-between mt-14 pt-6 border-t border-[#B9965A]/20">
          <div className="text-[#71807B] text-[9px] font-medium tracking-[0.2em] uppercase">
            Thoughtful materials.<br/>Beautiful spaces.
          </div>
          <div className="text-[#71807B] text-[9px] font-medium tracking-[0.2em] uppercase text-right">
            Built<br/>for a brighter<br/>tomorrow
          </div>
        </div>

      </div>
    </section>
  );
}
