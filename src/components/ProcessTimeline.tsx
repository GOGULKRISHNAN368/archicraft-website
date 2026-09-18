import { designProcess } from "@/lib/utils";
import RevealOnScroll from "./RevealOnScroll";

export default function ProcessTimeline() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-3">
      {designProcess.map((item, i) => (
        <RevealOnScroll key={item.step} delay={i * 0.08}>
          <div className="bg-teal rounded-xl p-5 sm:p-6 h-full">
            <p className="font-display font-semibold text-gold text-lg">{item.step}</p>
            <p className="font-display font-semibold text-warmwhite text-lg sm:text-xl mt-1">{item.title}</p>
            <p className="text-warmwhite/75 text-sm mt-2">{item.body}</p>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
