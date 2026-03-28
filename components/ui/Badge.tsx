import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "gradient" | "pill";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const base = "inline-flex items-center font-medium caption tracking-widest";
  const variants = {
    default: "bg-bg-card border border-bg-border text-text-secondary px-3 py-1 rounded-badge",
    outline: "border border-cyan-DEFAULT/30 text-cyan-DEFAULT px-3 py-1 rounded-badge",
    gradient: "bg-gradient-to-r from-cyan-DEFAULT/10 to-blue-brand/10 border border-cyan-DEFAULT/20 text-cyan-DEFAULT px-4 py-1.5 rounded-pill",
    pill: "bg-bg-card border border-bg-border text-text-secondary px-4 py-1.5 rounded-pill",
  };
  return (
    <span className={cn(base, variants[variant], className)}>
      {children}
    </span>
  );
}
