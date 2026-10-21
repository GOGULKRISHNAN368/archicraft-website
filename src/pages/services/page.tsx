import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <section className="bg-[#F6F2EA] min-h-screen py-10 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-[70px]">
        <div className="mb-8 max-w-2xl sm:mb-12">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A7A3E]">Thoughtful spaces, considered details</p>
          <h1 className="font-display text-[#073F3A] text-[36px] leading-tight sm:text-5xl lg:text-[54px] font-medium mb-3 sm:mb-4">Our Services</h1>
          <p className="text-sm leading-relaxed text-[#6F8580] sm:text-base">
            From homes and workplaces to the details that bring them together, explore design solutions shaped around your space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} variant="list" />
          ))}
        </div>
      </div>
    </section>
  );
}
