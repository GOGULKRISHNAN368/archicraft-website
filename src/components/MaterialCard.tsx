import { Link } from "react-router-dom";
import type { Material } from "@/data/materials";
import { materialImages, heroFallbackImage } from "@/data/images";

export default function MaterialCard({ material, index }: { material: Material; index?: number }) {
  return (
    <Link
      to={`/materials/${material.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E4DED3] bg-[#FFFDF9] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B9965A]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E9E1D3]">
        <img
          src={materialImages[material.slug] || heroFallbackImage}
          alt={`${material.name} finish`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {index !== undefined && (
          <span className="absolute left-4 top-4 rounded-full bg-[#FFFDF9]/90 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#073F3A]">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-lg font-semibold text-[#073F3A] sm:text-xl">{material.name}</h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#71807B] sm:text-sm">{material.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#073F3A] transition group-hover:text-[#B9965A]">
          Explore finish <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
