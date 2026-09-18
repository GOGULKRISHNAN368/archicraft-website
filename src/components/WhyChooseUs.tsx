import { whyChooseUs } from "@/lib/utils";
import RevealOnScroll from "./RevealOnScroll";

export default function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {whyChooseUs.map((item, i) => (
        <RevealOnScroll key={item.title} delay={i * 0.06}>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-teal" />
            </div>
            <div>
              <p className="font-display font-semibold text-lg text-teal-900">{item.title}</p>
              <p className="text-sm text-teal-900/70 mt-1">{item.body}</p>
            </div>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
