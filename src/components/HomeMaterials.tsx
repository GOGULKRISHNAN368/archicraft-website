import { useRef } from "react";
import { Link } from "react-router-dom";
import { homeMaterials } from "@/data/materials";
import { homeMaterialImages, materialImages } from "@/data/images";

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
      {direction === "left" ? <path d="M16 10H4m6 6-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /> : <path d="M4 10h12m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
}

export default function HomeMaterials() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveCarousel = (direction: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector<HTMLElement>("[data-material-card]");
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 16;
    carousel.scrollBy({ left: direction * ((card?.offsetWidth ?? 280) + gap), behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-[#F8F5EF] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B9965A]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B9965A]">Our Materials</span>
            </div>
            <h2 className="font-display text-[26px] font-medium leading-tight text-[#073F3A] sm:text-[32px] lg:text-[38px]">
              Luxury begins with the right material
            </h2>
            <p className="mt-3 max-w-[650px] text-sm leading-relaxed text-[#55716C] sm:mt-4 sm:text-base">
              A closer look at the finishes that bring character to every space.
            </p>
          </div>
          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <Link to="/materials" className="mr-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#073F3A] transition hover:text-[#B9965A]">View all</Link>
            <button type="button" onClick={() => moveCarousel(-1)} aria-label="Show previous materials" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073F3A]/20 text-[#073F3A] transition hover:bg-[#073F3A] hover:text-white"><Arrow direction="left" /></button>
            <button type="button" onClick={() => moveCarousel(1)} aria-label="Show next materials" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073F3A]/20 text-[#073F3A] transition hover:bg-[#073F3A] hover:text-white"><Arrow /></button>
          </div>
        </div>

        <div ref={carouselRef} role="region" aria-label="Featured materials" className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 scroll-smooth sm:mx-0 sm:gap-4 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {homeMaterials.map((material, index) => (
            <Link
              data-material-card
              to={`/materials/${material.slug}`}
              key={material.slug}
              className="group relative block aspect-[4/5] w-[62%] max-w-[250px] shrink-0 snap-start overflow-hidden rounded-2xl bg-[#D8D2C7] sm:w-[36%] sm:max-w-[290px] lg:w-[calc((100%-3rem)/4)] lg:max-w-[310px]"
            >
              <img
                src={homeMaterialImages[material.slug] || materialImages[material.slug]}
                alt={`${material.name} interior finish`}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 36vw, 62vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/5 transition-opacity group-hover:from-black/80" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-semibold tracking-[0.18em] text-[#073F3A] sm:left-5 sm:top-5">{String(index + 1).padStart(2, "0")}</span>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                <h3 className="font-display text-xl font-medium leading-tight sm:text-2xl">{material.name}</h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/80 sm:text-sm">{material.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:mt-5">Explore finish <Arrow /></span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between sm:hidden">
          <span className="text-xs text-[#71807B]">Swipe to explore</span>
          <div className="flex gap-2">
            <button type="button" onClick={() => moveCarousel(-1)} aria-label="Show previous materials" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073F3A]/20 text-[#073F3A]"><Arrow direction="left" /></button>
            <button type="button" onClick={() => moveCarousel(1)} aria-label="Show next materials" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073F3A]/20 text-[#073F3A]"><Arrow /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
