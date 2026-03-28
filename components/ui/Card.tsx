import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({ children, className, hover = true, gradient = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-bg-card rounded-card p-6 border border-bg-border",
        gradient && "gradient-border",
        hover && "glow-hover transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
