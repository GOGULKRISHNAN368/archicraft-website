import { Link } from "react-router-dom";
;
import type { Service } from "@/data/services";
import { serviceImages, heroFallbackImage } from "@/data/images";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex-shrink-0 w-[72vw] sm:w-full snap-start bg-white rounded-xl border border-softgrey overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="h-36 sm:h-40 bg-softgrey relative overflow-hidden">
        <img
          src={serviceImages[service.slug] || heroFallbackImage}
          alt={`${service.name} interior design in Coimbatore by Archicraft Interiors`}
          fill
          sizes="(min-width: 640px) 33vw, 72vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 sm:p-5">
        <p className="font-display font-semibold text-lg text-teal-900 group-hover:text-teal transition-colors">
          {service.name}
        </p>
        <p className="text-sm text-teal-900/60 mt-1 line-clamp-2">{service.overview}</p>
      </div>
    </Link>
  );
}
