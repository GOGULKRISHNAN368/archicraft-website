import { Link } from "react-router-dom";
;
import type { Material } from "@/data/materials";
import { materialImages, heroFallbackImage } from "@/data/images";

export default function MaterialCard({ material }: { material: Material }) {
  return (
    <Link
      to={`/materials/${material.slug}`}
      className="flex-shrink-0 w-40 sm:w-full snap-start bg-white rounded-xl border border-softgrey p-4 sm:p-5 hover:shadow-lg transition-shadow"
    >
      <div className="h-20 sm:h-24 bg-beige rounded-lg mb-3 relative overflow-hidden">
        <img
          src={materialImages[material.slug] || heroFallbackImage}
          alt={`${material.name} interior finish used by Archicraft Interiors, Coimbatore`}
          sizes="(min-width: 640px) 30vw, 160px"
          className="object-cover"
        />
      </div>
      <p className="font-display font-semibold text-base sm:text-lg text-teal-900">{material.name}</p>
      <p className="text-xs sm:text-sm text-teal-900/60 mt-1 line-clamp-2">{material.description}</p>
    </Link>
  );
}
