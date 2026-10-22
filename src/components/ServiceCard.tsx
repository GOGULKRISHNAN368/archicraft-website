import { Link } from "react-router-dom";
import type { Service } from "@/data/services";
import { serviceImages, heroFallbackImage } from "@/data/images";

export default function ServiceCard({ service, variant = "grid" }: { service: Service; variant?: "grid" | "list" }) {
  const image = serviceImages[service.slug] || heroFallbackImage;

  if (variant === "list") {
    return (
      <Link to={`/services/${service.slug}`} className="group flex min-w-0 items-center gap-3 rounded-xl border border-[#073F3A]/10 bg-[#FFFDF9] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#073F3A]/25 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] sm:gap-6 sm:rounded-2xl sm:p-4">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-[#E9E1D3] sm:h-32 sm:w-36 sm:rounded-xl">
          <img src={image} alt={`${service.name} interior design`} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="min-w-0 flex-1 py-1">
          <h2 className="font-display text-[15px] font-medium leading-snug text-[#073F3A] sm:text-xl">{service.name}</h2>
          <p className="mt-1 line-clamp-2 text-[13px] leading-[1.55] text-[#6F8580] sm:mt-2 sm:text-sm">{service.shortDescription}</p>
        </div>
        <span aria-hidden="true" className="shrink-0 pr-1 text-base text-[#073F3A] transition-transform group-hover:translate-x-1 group-hover:text-[#C8A45D] sm:text-lg">→</span>
      </Link>
    );
  }

  return (
    <Link to={`/services/${service.slug}`} className="group flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl border border-[#073F3A]/10 bg-[#FFFDF9] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] sm:rounded-[18px]">
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#073F3A]/10 bg-[#E9E1D3]">
        <img src={image} alt={`${service.name} interior design`} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-6">
        <h3 className="mb-2 font-display text-[15px] font-medium leading-snug text-[#073F3A] sm:mb-2 sm:text-xl">{service.name}</h3>
        <p className="mb-3 flex-grow text-[13px] leading-[1.55] text-[#6F8580] sm:mb-5 sm:text-sm sm:leading-relaxed">{service.shortDescription}</p>
        <span className="mt-auto flex min-h-8 items-center text-[11px] font-semibold uppercase tracking-[0.08em] text-[#073F3A] transition-colors group-hover:text-[#C8A45D] sm:text-xs">Explore <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">→</span></span>
      </div>
    </Link>
  );
}
