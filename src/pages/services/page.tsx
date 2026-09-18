import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <section className="bg-[#F6F2EA] min-h-screen py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-[70px]">
        <div className="mb-16 sm:mb-20">
          <h1 className="font-display text-[#073F3A] text-4xl sm:text-5xl lg:text-[54px] font-medium mb-6">
            One studio, every space that matters
          </h1>
          <p className="text-[#6F8580] text-lg sm:text-[20px] max-w-2xl">
            Thoughtfully designed spaces for the way you live, work, and grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 gap-x-8 lg:gap-x-12">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
