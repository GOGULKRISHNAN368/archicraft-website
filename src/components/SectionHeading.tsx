import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "text-left max-w-2xl"}>
      {eyebrow && (
        <p className={cn("font-accent italic text-base sm:text-lg mb-2", dark ? "text-gold" : "text-teal")}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn("font-display text-[clamp(1.75rem,7vw,2.125rem)] font-semibold leading-[1.14] tracking-[-0.02em] sm:text-[34px] sm:leading-tight sm:tracking-normal", dark ? "text-warmwhite" : "text-teal-900")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-[15px] leading-[1.65] sm:text-base sm:leading-relaxed", dark ? "text-warmwhite/80" : "text-teal-900/75")}>{subtitle}</p>
      )}
    </div>
  );
}
