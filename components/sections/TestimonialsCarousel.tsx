"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const KEYS = ["t1", "t2", "t3"] as const;
const AVATAR_COLORS = [
  ["#00C6FF", "#0072FF"],
  ["#0072FF", "#7B2FF7"],
  ["#7B2FF7", "#C026B0"],
];

function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

export function TestimonialsCarousel() {
  const t = useTranslations("testimonials");
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % KEYS.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + KEYS.length) % KEYS.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "#0A0D14" }}
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto px-6" style={{ maxWidth: "900px" }}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #00C6FF)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00C6FF" }}>{t("label")}</span>
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #00C6FF, transparent)" }} />
          </div>
          <h2 id="testimonials-heading" className="font-bold" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F0F4F8" }}>
            {t("headline")}
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {KEYS.map((key, i) =>
              i === current ? (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl p-8 lg:p-10 border"
                  style={{ background: "#0F1825", borderColor: "#1A2840" }}
                >
                  {/* Quote mark */}
                  <div className="text-6xl font-black leading-none mb-4" style={{ color: "#1A2840", fontFamily: "Georgia, serif" }}>
                    "
                  </div>

                  <p className="text-lg lg:text-xl leading-relaxed mb-8 font-medium" style={{ color: "#F0F4F8" }}>
                    {t(`items.${key}.quote`)}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${AVATAR_COLORS[i][0]}, ${AVATAR_COLORS[i][1]})` }}
                    >
                      {getInitials(t(`items.${key}.name`))}
                    </div>
                    <div>
                      <div className="font-semibold" style={{ color: "#F0F4F8" }}>{t(`items.${key}.name`)}</div>
                      <div className="text-sm" style={{ color: "#4A6080" }}>
                        {t(`items.${key}.role`)} · {t(`items.${key}.company`)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200"
              style={{ background: "#0F1825", borderColor: "#1A2840", color: "#8090A8" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#00C6FF"; (e.currentTarget as HTMLElement).style.color = "#00C6FF"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1A2840"; (e.currentTarget as HTMLElement).style.color = "#8090A8"; }}
              aria-label="Anterior"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            {KEYS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Testimonio ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{ height: "8px", width: i === current ? "28px" : "8px", background: i === current ? "#00C6FF" : "#1A2840" }}
              />
            ))}

            <button
              onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200"
              style={{ background: "#0F1825", borderColor: "#1A2840", color: "#8090A8" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#00C6FF"; (e.currentTarget as HTMLElement).style.color = "#00C6FF"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1A2840"; (e.currentTarget as HTMLElement).style.color = "#8090A8"; }}
              aria-label="Siguiente"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
