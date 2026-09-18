import { Link } from "react-router-dom";
import type { Material } from "@/data/materials";
import { materialImages, heroFallbackImage } from "@/data/images";

export default function MaterialCard({ material, index }: { material: Material, index?: number }) {
  return (
    <Link
      to={`/materials/${material.slug}`}
      className="group flex flex-col items-start block"
    >
      <div className="w-full aspect-[4/3] rounded-[4px] overflow-hidden mb-5 sm:mb-6 bg-[#E9E1D3] border border-black/80">
        <img
          src={materialImages[material.slug] || heroFallbackImage}
          alt={`${material.name} interior finish`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>
      
      <div className="flex items-baseline gap-3 mb-2 w-full">
        {index !== undefined && (
          <span className="text-[#C8A45D] text-xs font-semibold tracking-widest shrink-0">
            {String(index).padStart(2, '0')}
          </span>
        )}
        <h3 className="font-display text-[#073F3A] text-xl sm:text-2xl font-medium">
          {material.name}
        </h3>
      </div>
      
      <p className="text-[#6F8580] text-[14px] leading-relaxed mb-4 max-w-sm">
        {material.description}
      </p>
      
      <div className="mt-auto flex items-center text-[#073F3A] font-medium text-sm transition-colors group-hover:text-[#C8A45D]">
        <span className="relative">
          Explore
          <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[1px] bg-[#C8A45D] transition-all duration-300"></span>
        </span>
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
          →
        </span>
      </div>
    </Link>
  );
}
