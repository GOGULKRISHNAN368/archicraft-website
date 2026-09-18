import { brandPartners } from "@/lib/utils";

export default function BrandPartners() {
  return (
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-12">
      {brandPartners.map((brand) => (
        <span key={brand} className="font-display text-base sm:text-lg text-teal-900/40">
          {brand}
        </span>
      ))}
    </div>
  );
}
