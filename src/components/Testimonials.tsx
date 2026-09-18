import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <div className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-[85vw] sm:w-auto snap-start bg-white border border-softgrey rounded-xl p-6"
        >
          {t.isPlaceholder && (
            <span className="inline-block text-[11px] font-button uppercase tracking-wide text-gold-800 bg-beige px-2 py-1 rounded mb-3">
              Awaiting real client data
            </span>
          )}
          <p className="font-accent italic text-lg text-teal-900">&ldquo;{t.quote}&rdquo;</p>
          <p className="text-sm text-teal-900/60 mt-4">
            {t.name}
            {t.project ? ` â€” ${t.project}` : ""}
          </p>
        </div>
      ))}
    </div>
  );
}
