import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Props = {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export default function Button({ to, children, variant = "primary", className }: Props) {
  const base =
    "inline-flex min-h-11 items-center justify-center font-button font-semibold text-[12px] tracking-[0.08em] uppercase px-5 py-3 sm:px-6 sm:py-3 rounded transition-all duration-200 ease-out hover:-translate-y-0.5";

  const variants = {
    primary: "bg-gold text-teal-900 hover:bg-gold-800 hover:text-warmwhite",
    secondary: "bg-transparent text-teal border-[1.5px] border-teal hover:bg-teal hover:text-warmwhite",
    dark: "bg-teal text-warmwhite hover:bg-teal-700",
  };

  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
