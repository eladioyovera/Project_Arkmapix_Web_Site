import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <div className="h-px w-8 bg-gradient-to-r from-cyan-DEFAULT to-blue-brand" />
      <span className="caption text-cyan-DEFAULT tracking-widest">{children}</span>
      <div className="h-px w-8 bg-gradient-to-r from-blue-brand to-transparent" />
    </div>
  );
}
