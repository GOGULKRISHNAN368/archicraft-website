import { Link } from "react-router-dom";
import type { Material } from "@/data/materials";
import { catalogMaterialImages, heroFallbackImage } from "@/data/images";

export default function MaterialCard({ material, index }: { material: Material; index?: number }) {
  return (
    <Link
      to={`/materials/${material.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-[#D8D2C7] transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B9965A]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={catalogMaterialImages[material.slug] || heroFallbackImage}
          alt=""
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 36vw, 68vw"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/5" />
      </div>
      {index !== undefined && (
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-semibold tracking-[0.18em] text-[#073F3A] sm:left-5 sm:top-5">
          {String(index).padStart(2, "0")}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
        <h3 className="font-display text-xl font-medium leading-tight sm:text-2xl">{material.name}</h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/80 sm:text-sm">{material.description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:mt-5">
          Explore finish <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
