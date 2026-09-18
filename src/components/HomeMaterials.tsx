import { Link } from "react-router-dom";
import { materials } from "@/data/materials";
import { materialImages } from "@/data/images";

export default function HomeMaterials() {
  return (
    <section className="relative w-full bg-[#F8F5EF] py-20 sm:py-28 overflow-hidden font-sans">
      {/* Decorative side text (Hidden on mobile) */}
      <div className="hidden lg:block absolute left-8 top-32 text-[#55716C]/40 text-xs tracking-[0.3em] uppercase rotate-[-90deg] origin-left">
        Spaces that feel like you
      </div>

      {/* Decorative vertical lines */}
      <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-px bg-[#B9965A]/20"></div>
      <div className="hidden lg:block absolute right-12 top-0 bottom-0 w-px bg-[#B9965A]/20"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center max-w-[850px] mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 sm:w-12 h-px bg-[#B9965A]"></div>
            <span className="text-[#B9965A] text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
              Our Materials
            </span>
            <div className="w-8 sm:w-12 h-px bg-[#B9965A]"></div>
          </div>
          
          <h2 className="font-display text-[#073F3A] text-4xl sm:text-[52px] lg:text-[60px] leading-tight font-medium mb-6">
            Luxury begins with the right material
          </h2>
          
          <p className="text-[#55716C] text-lg sm:text-[21px] leading-relaxed max-w-[760px]">
            We work in PU finish, laminate, membrane, acrylic, and lacquer finish — each chosen for how it will actually perform in your home.
          </p>
        </div>

        {/* Material Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-nowrap gap-5 lg:gap-4 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory hide-scrollbar">
          {materials.map((m, idx) => (
            <Link
              to={`/materials/${m.slug}`}
              key={m.slug}
              className="group flex flex-col snap-start shrink-0 w-full sm:w-auto lg:w-[calc(16.666%-16px)] min-w-[250px] max-w-[320px] lg:max-w-none bg-[#FFFDF9] border border-[#E4DED3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-400 ease-out flex-1"
            >
              {/* Image Section */}
              <div className="h-[200px] sm:h-[220px] lg:h-[240px] w-full overflow-hidden rounded-t-2xl relative">
                <img
                  src={materialImages[m.slug] || "/images/brochure/laminate-swatch.jpg"}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#B9965A] font-sans text-sm font-medium tracking-wider">
                    0{idx + 1}
                  </span>
                  <div className="w-4 h-px bg-[#B9965A]"></div>
                </div>

                <h3 className="font-display text-[#073F3A] text-2xl font-semibold mb-3 leading-snug">
                  {m.name}
                </h3>
                
                <p className="text-[#71807B] text-[15px] sm:text-base leading-[1.45] mb-8 flex-grow">
                  {m.description}
                </p>

                <div className="mt-auto flex items-center text-[#073F3A] font-display font-medium text-[17px] group-hover:text-[#B9965A] transition-colors">
                  <span className="relative">
                    View details
                    <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-[#B9965A]/30 group-hover:bg-[#B9965A] transition-colors"></span>
                  </span>
                  <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 sm:mt-24 text-center">
          <Link
            to="/materials"
            className="inline-flex items-center justify-center w-full sm:w-[310px] h-[60px] border border-[#073F3A] rounded-[6px] text-[#073F3A] font-sans font-medium uppercase tracking-widest text-[13px] hover:bg-[#073F3A] hover:text-[#FFFDF9] transition-all duration-300 group"
          >
            Explore all materials
            <span className="ml-3 transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="hidden md:flex justify-between mt-20 pt-8 border-t border-[#B9965A]/20">
          <div className="text-[#71807B] text-[11px] font-medium tracking-[0.2em] uppercase">
            Thoughtful materials.<br/>Beautiful spaces.
          </div>
          <div className="text-[#71807B] text-[11px] font-medium tracking-[0.2em] uppercase text-right">
            Built<br/>for a brighter<br/>tomorrow
          </div>
        </div>

      </div>
    </section>
  );
}
