import { useRef } from "react";
import { Link } from "react-router-dom";
import { materials } from "@/data/materials";
import { materialImages } from "@/data/images";

export default function HomeMaterials() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveCarousel = (direction: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector<HTMLElement>("[data-material-card]");
    carousel.scrollBy({ left: direction * ((card?.offsetWidth ?? 300) + 20), behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-14 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B9965A]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B9965A]">Our Materials</span>
            </div>
            <h2 className="font-display text-[26px] font-medium leading-tight text-[#073F3A] sm:text-[32px] lg:text-[38px]">
              Luxury begins with the right material
            </h2>
            <p className="mt-4 max-w-[650px] text-[15px] leading-relaxed text-[#55716C] sm:text-base">
              Explore considered finishes chosen for their character, durability, and how they perform in everyday spaces.
            </p>
          </div>
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button type="button" onClick={() => moveCarousel(-1)} aria-label="Show previous materials" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#073F3A]/25 text-[#073F3A] transition hover:bg-[#073F3A] hover:text-white">←</button>
            <button type="button" onClick={() => moveCarousel(1)} aria-label="Show next materials" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#073F3A]/25 text-[#073F3A] transition hover:bg-[#073F3A] hover:text-white">→</button>
          </div>
        </div>

        <div ref={carouselRef} role="region" aria-label="Featured materials" className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scroll-smooth sm:mx-0 sm:gap-5 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {materials.map((material, index) => (
            <Link data-material-card to={`/materials/${material.slug}`} key={material.slug} className="group flex w-[84%] max-w-[340px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-[#E4DED3] bg-[#FFFDF9] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[calc((100%-1.25rem)/2)] sm:max-w-none lg:w-[calc((100%-2.5rem)/3)]">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E1D3]">
                <img src={materialImages[material.slug] || "/images/brochure/laminate-swatch.jpg"} alt={`${material.name} finish`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-[#FFFDF9]/90 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#073F3A]">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="font-display text-lg font-semibold text-[#073F3A] sm:text-xl">{material.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#71807B]">{material.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#073F3A] transition group-hover:text-[#B9965A]">Explore finish <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between sm:hidden">
          <span className="text-xs text-[#71807B]">Swipe to explore</span>
          <div className="flex gap-2">
            <button type="button" onClick={() => moveCarousel(-1)} aria-label="Show previous materials" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073F3A]/25 text-[#073F3A]">←</button>
            <button type="button" onClick={() => moveCarousel(1)} aria-label="Show next materials" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073F3A]/25 text-[#073F3A]">→</button>
          </div>
        </div>
        <div className="mt-8 text-center sm:mt-10">
          <Link to="/materials" className="inline-flex h-12 items-center justify-center rounded border border-[#073F3A] px-7 text-xs font-medium uppercase tracking-[0.16em] text-[#073F3A] transition hover:bg-[#073F3A] hover:text-white">Explore all materials <span className="ml-2" aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
