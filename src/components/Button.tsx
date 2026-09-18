import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className }: Props) {
  const base =
    "inline-flex items-center justify-center font-button font-semibold text-[13px] tracking-wide uppercase px-6 py-3.5 sm:px-7 sm:py-4 rounded transition-all duration-200 ease-out hover:-translate-y-0.5";

  const variants = {
    primary: "bg-gold text-teal-900 hover:bg-gold-800 hover:text-warmwhite",
    secondary: "bg-transparent text-teal border-[1.5px] border-teal hover:bg-teal hover:text-warmwhite",
    dark: "bg-teal text-warmwhite hover:bg-teal-700",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
