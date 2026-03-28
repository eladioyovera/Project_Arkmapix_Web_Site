import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  variant?: "signature" | "aurora" | "deep" | "flow";
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export function GradientText({ children, variant = "signature", className, as: Tag = "span" }: GradientTextProps) {
  const variants = {
    signature: "gradient-text",
    aurora: "gradient-text-aurora",
    deep: "[background:var(--grad-deep)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]",
    flow: "[background:var(--grad-flow)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]",
  };
  return (
    <Tag className={cn(variants[variant], className)}>
      {children}
    </Tag>
  );
}
