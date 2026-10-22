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
      <h2 className={cn("font-display font-semibold text-[26px] leading-[1.2] sm:text-[34px] sm:leading-tight", dark ? "text-warmwhite" : "text-teal-900")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-[15px] leading-relaxed sm:text-base", dark ? "text-warmwhite/75" : "text-teal-900/70")}>{subtitle}</p>
      )}
    </div>
  );
}
