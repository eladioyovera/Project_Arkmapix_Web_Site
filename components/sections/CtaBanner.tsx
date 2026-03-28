"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  const t = useTranslations("cta_banner");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  // Animate stat counter
  useEffect(() => {
    if (!isInView) return;
    const target = 50;
    const duration = 1500;
    const start = performance.now();
    function animate(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    }
    requestAnimationFrame(animate);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--grad-deep)" }}
        aria-hidden
      />
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="1"/>
        </svg>
      </div>
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" aria-hidden />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Stat */}
          <div className="mb-8 flex flex-col items-center">
            <div
              className="text-7xl lg:text-8xl font-black text-white leading-none mb-2"
              aria-live="polite"
            >
              {count}+
            </div>
            <p className="caption text-white/60 uppercase tracking-widest">
              {t("stat_label")}
            </p>
          </div>

          <h2
            id="cta-heading"
            className="text-white font-bold mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            {t("headline")}
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            {t("subheadline")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => window.location.href = `/${locale}/contacto`}
              className="px-8 py-4 bg-white text-bg-primary font-bold text-base rounded-btn hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t("cta_primary")}
            </button>
            <button
              onClick={() => window.location.href = `/${locale}/servicios`}
              className="px-8 py-4 border-2 border-white/40 text-white font-semibold text-base rounded-btn hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              {t("cta_secondary")}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
