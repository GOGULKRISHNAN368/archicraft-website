import MaterialCard from "@/components/MaterialCard";
import { materials } from "@/data/materials";

export default function MaterialsPage() {
  return (
    <>
      <section className="relative w-full h-[520px] md:h-[480px] bg-[#F6F2EA] flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-[center_right] sm:bg-[center_right] opacity-40 sm:opacity-100"
          style={{ backgroundImage: "url('/images/materials-hero-bg.png')" }}
          aria-hidden="true"
        ></div>
        
        {/* Subtle overlay on mobile to ensure text readability */}
        <div className="absolute inset-0 z-0 bg-white/70 sm:hidden"></div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-[70px] pt-8">
          <div className="w-full sm:w-[65%] lg:w-[50%] md:pl-12 lg:pl-[100px]">
            <span className="block text-[#C8A45D] text-xs sm:text-[12px] font-medium tracking-[0.25em] uppercase mb-4 sm:mb-6">
              Materials
            </span>
            <h1 className="font-display text-[#073F3A] text-[42px] sm:text-[52px] md:text-[60px] leading-[1.05] font-semibold mb-6 max-w-[500px]">
              The foundation<br/>of beautiful spaces
            </h1>
            <p className="text-[#073F3A]/85 text-[17px] leading-[1.6] mb-10 max-w-[480px]">
              We work with carefully selected materials that combine aesthetic appeal, durability, and everyday functionality — so your space looks beautiful today and lasts for years to come.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-[#C8A45D] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#C8A45D] text-[9px] font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-[#073F3A] text-[13px] font-bold uppercase tracking-wider mb-1">Premium Quality</h4>
                  <p className="text-[#073F3A]/70 text-[11px] uppercase tracking-wider">Trusted brands</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-[#C8A45D] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#C8A45D] text-[9px] font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-[#073F3A] text-[13px] font-bold uppercase tracking-wider mb-1">Durable & Long-lasting</h4>
                  <p className="text-[#073F3A]/70 text-[11px] uppercase tracking-wider">Built for everyday</p>
                </div>
              </div>

              <div className="hidden lg:flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-[#C8A45D] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#C8A45D] text-[9px] font-bold">03</span>
                </div>
                <div>
                  <h4 className="text-[#073F3A] text-[13px] font-bold uppercase tracking-wider mb-1">Aesthetic & Functional</h4>
                  <p className="text-[#073F3A]/70 text-[11px] uppercase tracking-wider">Designed for real spaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F2EA] py-16 sm:py-24 pb-24 sm:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-[70px]">
          <div className="mb-16">
            <h2 className="font-display text-[#073F3A] text-3xl sm:text-4xl font-medium mb-4">
              Materials, thoughtfully selected.
            </h2>
            <p className="text-[#6F8580] text-base max-w-2xl">
              Every finish is chosen for its beauty, performance, and ability to become part of a well-designed space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 lg:gap-x-12">
            {materials.map((m, idx) => (
              <MaterialCard key={m.slug} material={m} index={idx + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
