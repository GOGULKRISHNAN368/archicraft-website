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
        <p className={cn("font-accent italic text-lg sm:text-xl mb-2", dark ? "text-gold" : "text-teal")}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn("font-display font-semibold text-[28px] leading-[1.15] sm:text-4xl sm:leading-tight", dark ? "text-warmwhite" : "text-teal-900")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base sm:text-lg", dark ? "text-warmwhite/75" : "text-teal-900/70")}>{subtitle}</p>
      )}
    </div>
  );
}
