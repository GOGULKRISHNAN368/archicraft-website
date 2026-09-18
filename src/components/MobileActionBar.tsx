import { site } from "@/data/site";

// Thumb-reach action bar shown only on small/medium screens (replaces a
// single floating WhatsApp bubble per the Phase 3 UX rationale) â€” hidden
// on lg+ where the header CTA is already always visible.
export default function MobileActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-teal text-warmwhite grid grid-cols-3 divide-x divide-warmwhite/20">
      <a href={site.phoneHref} className="flex flex-col items-center justify-center py-2.5 text-[11px] font-button uppercase tracking-wide">
        Call
      </a>
      <a href={site.whatsappHref} target="_blank" className="flex flex-col items-center justify-center py-2.5 text-[11px] font-button uppercase tracking-wide">
        WhatsApp
      </a>
      <a href="/contact" className="flex flex-col items-center justify-center py-2.5 text-[11px] font-button uppercase tracking-wide bg-gold text-teal-900">
        Book
      </a>
    </div>
  );
}
