"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: string; // e.g. "50+", "8", "6+"
  label: string;
  className?: string;
}

export function AnimatedCounter({ value, label, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState("0");

  // Extract numeric part and suffix
  const match = value.match(/^(\d+)(\+)?$/);
  const numericValue = match ? parseInt(match[1]) : 0;
  const suffix = match?.[2] || "";

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(eased * numericValue);
      setDisplayed(current.toString());
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplayed(numericValue.toString());
    }

    requestAnimationFrame(animate);
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="display gradient-text leading-none mb-1">
        {displayed}{suffix}
      </div>
      <div className="text-text-secondary text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
}
