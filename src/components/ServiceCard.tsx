import { Link } from "react-router-dom";
import type { Service } from "@/data/services";
import { serviceImages, heroFallbackImage } from "@/data/images";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col w-full bg-[#FFFDF9] rounded-[18px] border border-black overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-400 ease-out"
    >
      <div className="w-full aspect-[4/3] bg-[#E9E1D3] relative overflow-hidden border-b border-black">
        <img
          src={serviceImages[service.slug] || heroFallbackImage}
          alt={`${service.name} interior design`}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />
      </div>
      
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <h3 className="font-display font-medium text-[22px] text-[#073F3A] mb-2">
          {service.name}
        </h3>
        
        <p className="text-[#6F8580] text-[15px] leading-[1.5] mb-6 flex-grow">
          {service.shortDescription}
        </p>
        
        <div className="mt-auto flex items-center text-[#073F3A] font-medium text-[13px] tracking-wide uppercase transition-colors group-hover:text-[#C8A45D]">
          <span className="relative">
            Explore
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[1px] bg-[#C8A45D] transition-all duration-300"></span>
          </span>
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
