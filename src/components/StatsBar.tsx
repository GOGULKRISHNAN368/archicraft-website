import { stats } from "@/data/testimonials";

const items = [
  { label: "Years of Experience", value: stats.yearsInBusiness },
  { label: "Spaces Delivered", value: stats.projectsCompleted },
  { label: "Cities Served", value: stats.citiesServed },
  { label: "Google Rating", value: stats.googleRating },
];

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#103e37] text-[#fbf8f2]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,164,92,0.12),transparent_68%)]" />
      <div className="relative mx-auto grid max-w-content grid-cols-2 px-4 py-7 sm:px-6 sm:py-9 lg:grid-cols-4 lg:px-10 lg:py-10">
        {items.map((item, index) => (
          <div key={item.label} className={`relative flex min-h-[88px] flex-col items-center justify-center px-2 text-center sm:min-h-[100px] sm:px-4 ${index % 2 === 1 ? "border-l border-white/15" : ""} ${index >= 2 ? "border-t border-white/15 pt-4 sm:pt-5 lg:border-t-0 lg:pt-0" : "pb-4 sm:pb-5 lg:pb-0"} ${index === 2 ? "lg:border-l" : ""}`}>
            <p className="font-display text-3xl font-medium leading-none tracking-tight text-[#e4ca99] tabular-nums sm:text-4xl lg:text-[2.65rem]">{item.value}</p>
            <p className="mt-2 text-[10px] font-medium uppercase leading-tight tracking-[.12em] text-white/80 sm:mt-3 sm:text-xs sm:tracking-[.18em]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
