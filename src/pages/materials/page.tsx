import { useRef } from "react";
import { Link } from "react-router-dom";
import MaterialCard from "@/components/MaterialCard";
import { materials } from "@/data/materials";

export default function MaterialsPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const moveCarousel = (direction: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector<HTMLElement>("[data-material-card]");
    carousel.scrollBy({ left: direction * ((card?.offsetWidth ?? 300) + 20), behavior: "smooth" });
  };

  return (
    <>
      <section className="relative flex min-h-[500px] items-center overflow-hidden bg-[#F6F2EA] sm:min-h-[540px]">
        <div className="absolute inset-0 bg-cover bg-center opacity-35 sm:opacity-70" style={{ backgroundImage: "url('/images/materials-hero-bg.png')" }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F2EA] via-[#F6F2EA]/90 to-[#F6F2EA]/20" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-10 lg:px-[70px]">
          <div className="max-w-[660px]">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.25em] text-[#B9965A]">Materials & finishes</span>
            <h1 className="font-display text-[36px] font-semibold leading-[1.08] text-[#073F3A] sm:text-[48px]">The foundation of beautiful spaces</h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#55716C] sm:text-base">
              A thoughtful finish shapes the way a room looks, feels, and lives. We help you choose surfaces that balance lasting quality with your own sense of style.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-[#073F3A]">
              <span><span className="mr-2 text-[#B9965A]">01</span>Carefully selected</span>
              <span><span className="mr-2 text-[#B9965A]">02</span>Made for everyday use</span>
              <span><span className="mr-2 text-[#B9965A]">03</span>Chosen with you</span>
            </div>
            <Link to="#material-library" className="mt-9 inline-flex h-12 items-center rounded bg-[#073F3A] px-6 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#0B554E]">Browse finishes <span aria-hidden="true" className="ml-3">↓</span></Link>
          </div>
        </div>
      </section>

      <section id="material-library" className="scroll-mt-20 bg-[#FBF9F5] py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-[70px]">
          <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B9965A]">The material library</span>
              <h2 className="mt-3 font-display text-[26px] font-medium text-[#073F3A] sm:text-[32px]">Find the finish that feels right</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#6F8580] sm:text-base">Compare the character, care, and best uses of each finish. Our design team can help you explore samples and find the right combination for your space.</p>
            </div>
            <div className="hidden shrink-0 gap-2 sm:flex">
              <button type="button" onClick={() => moveCarousel(-1)} aria-label="Show previous materials" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073F3A]/25 text-[#073F3A] transition hover:bg-[#073F3A] hover:text-white">←</button>
              <button type="button" onClick={() => moveCarousel(1)} aria-label="Show next materials" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073F3A]/25 text-[#073F3A] transition hover:bg-[#073F3A] hover:text-white">→</button>
            </div>
          </div>
          <div ref={carouselRef} role="region" aria-label="Materials and finishes" className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 scroll-smooth sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {materials.map((material, index) => (
              <div data-material-card key={material.slug} className="w-[84%] max-w-[340px] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] sm:max-w-none lg:w-[calc((100%-2.5rem)/3)]">
                <MaterialCard material={material} index={index + 1} />
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between sm:hidden">
            <span className="text-xs text-[#71807B]">Swipe to explore</span>
            <div className="flex gap-2">
              <button type="button" onClick={() => moveCarousel(-1)} aria-label="Show previous materials" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073F3A]/25 text-[#073F3A]">←</button>
              <button type="button" onClick={() => moveCarousel(1)} aria-label="Show next materials" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073F3A]/25 text-[#073F3A]">→</button>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-[#E4DED3] pt-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-xl font-medium text-[#073F3A]">Want to compare samples in person?</h3>
              <p className="mt-1 text-sm text-[#6F8580]">We’ll guide you through the right options for your project.</p>
            </div>
            <Link to="/contact" className="inline-flex h-12 items-center rounded border border-[#073F3A] px-6 text-xs font-medium uppercase tracking-[0.15em] text-[#073F3A] transition hover:bg-[#073F3A] hover:text-white">Talk to our team <span aria-hidden="true" className="ml-3">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
