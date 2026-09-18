

import { useState } from "react";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-softgrey border-t border-b border-softgrey">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              className="w-full flex items-center justify-between gap-4 py-4 sm:py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display font-semibold text-base sm:text-lg text-teal-900">{item.q}</span>
              <span className="text-teal text-xl flex-shrink-0">{isOpen ? "âˆ’" : "+"}</span>
            </button>
            {isOpen && <p className="pb-4 sm:pb-5 text-sm sm:text-base text-teal-900/70">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
