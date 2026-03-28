"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";

const TESTIMONIAL_KEYS = ["t1", "t2", "t3"] as const;

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

const AVATAR_GRADIENTS = [
  "from-cyan-DEFAULT to-blue-brand",
  "from-blue-brand to-violet-brand",
  "from-violet-brand to-magenta-brand",
];

export function TestimonialsCarousel() {
  const t = useTranslations("testimonials");
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIAL_KEYS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIAL_KEYS.length) % TESTIMONIAL_KEYS.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, next]);

  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-card)" }}
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center">{t("label")}</SectionLabel>
          <h2
            id="testimonials-heading"
            className="text-text-primary"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700 }}
          >
            {t("headline")}
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {TESTIMONIAL_KEYS.map((key, i) =>
              i === current ? (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-bg-primary border border-bg-border rounded-[20px] p-8 lg:p-12"
                >
                  {/* Quote icon */}
                  <Quote
                    size={40}
                    className="mb-6 opacity-30"
                    style={{ color: "#00C6FF" }}
                    aria-hidden
                  />

                  {/* Quote text */}
                  <p className="text-text-primary text-lg lg:text-xl leading-relaxed mb-8 font-medium">
                    &ldquo;{t(`items.${key}.quote`)}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br ${AVATAR_GRADIENTS[i]} flex-shrink-0`}
                      aria-hidden
                    >
                      {getInitials(t(`items.${key}.name`))}
                    </div>
                    <div>
                      <div className="text-text-primary font-semibold">
                        {t(`items.${key}.name`)}
                      </div>
                      <div className="text-text-muted text-sm">
                        {t(`items.${key}.role`)} · {t(`items.${key}.company`)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2.5 rounded-full bg-bg-primary border border-bg-border text-text-muted hover:border-cyan-DEFAULT hover:text-cyan-DEFAULT transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-DEFAULT"
              aria-label="Testimonio anterior"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonios">
              {TESTIMONIAL_KEYS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonio ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-DEFAULT ${
                    i === current
                      ? "w-8 bg-cyan-DEFAULT"
                      : "w-2 bg-bg-border hover:bg-text-muted"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2.5 rounded-full bg-bg-primary border border-bg-border text-text-muted hover:border-cyan-DEFAULT hover:text-cyan-DEFAULT transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-DEFAULT"
              aria-label="Testimonio siguiente"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
