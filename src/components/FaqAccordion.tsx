

import { useState, useRef, useEffect } from "react";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full flex flex-col border-t border-[rgba(7,63,58,0.12)]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const numStr = (i + 1).toString().padStart(2, "0");

        return (
          <div key={item.q} className="border-b border-[rgba(7,63,58,0.12)]">
            <button
              className="w-full text-left py-5 sm:py-6 group flex flex-col sm:flex-row sm:items-start"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {/* Mobile Layout: Number and Question */}
              <div className="flex w-full sm:hidden items-start gap-4">
                <span className="text-[#C9A45C] font-sans font-medium text-[15px] sm:text-[16px] leading-snug shrink-0 mt-[1px]">
                  {numStr}
                </span>
                <span className="font-display font-medium text-[17px] sm:text-[18px] text-[#073F3A] leading-snug grow pr-2">
                  {item.q}
                </span>
                <div 
                  className={`w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] shrink-0 rounded-full border border-[#C9A45C] flex items-center justify-center transition-colors duration-250 mt-[-2px] ${
                    isOpen ? "bg-[#C9A45C] text-[#073F3A]" : "text-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#073F3A]"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </div>
              </div>

              {/* Desktop Layout: 3 Columns */}
              <div className="hidden sm:grid sm:grid-cols-[auto_1fr_auto] items-start w-full">
                <div className="flex items-start h-full">
                  <span className="text-[#C9A45C] font-sans font-medium text-[15px] lg:text-[16px] leading-[1.3] mr-5 lg:mr-6 mt-[2px]">
                    {numStr}
                  </span>
                  <div className="w-[1px] h-full min-h-[30px] bg-[rgba(7,63,58,0.12)] mr-5 lg:mr-6"></div>
                </div>
                
                <span className="font-display font-normal text-[18px] lg:text-[21px] text-[#073F3A] leading-snug pr-6 pt-0">
                  {item.q}
                </span>
                
                <div 
                  className={`w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] shrink-0 rounded-full border border-[#C9A45C] flex items-center justify-center transition-colors duration-250 ${
                    isOpen ? "bg-[#C9A45C] text-[#073F3A]" : "text-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#073F3A]"
                  }`}
                >
                  <span className="text-base font-light leading-none relative top-[-1px]">{isOpen ? "−" : "+"}</span>
                </div>
              </div>
            </button>

            {/* Expandable Answer */}
            <div
              className={`grid transition-all duration-400 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-6 sm:pb-7 pt-0 sm:pl-[75px] lg:pl-[95px]">
                  <p className="text-[#697873] text-[14px] lg:text-[15px] leading-[1.6] max-w-[650px]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
