import { stats } from "@/data/testimonials";

const items = [
  { label: "Years of Experience", value: stats.yearsInBusiness },
  { label: "Spaces Delivered", value: stats.projectsCompleted },
  { label: "Cities Served", value: stats.citiesServed },
  { label: "Google Rating", value: stats.googleRating },
];

export default function StatsBar() {
  return (
    <section className="bg-beige border-y border-softgrey">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
        {items.map((item) => (
          <div key={item.label}>
            <p className="font-display font-semibold text-2xl sm:text-3xl text-teal">{item.value}</p>
            <p className="text-xs sm:text-sm text-teal-900/70 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
