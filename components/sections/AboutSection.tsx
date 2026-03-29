"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

// Animated number counter
function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const match = value.match(/^(\d+)(\+)?$/);
  const suffix = match?.[2] || "";

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-black leading-none mb-1"
        style={{
          fontSize: "clamp(36px, 4vw, 56px)",
          background: "linear-gradient(135deg, #00C6FF, #0072FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {isInView ? value : `0${suffix}`}
      </div>
      <div className="text-xs font-medium uppercase tracking-widest" style={{ color: "#4A6080" }}>
        {label}
      </div>
    </div>
  );
}

export function AboutSection() {
  const t = useTranslations("about");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: t("stat_projects_num"), label: t("stat_projects") },
    { value: t("stat_countries_num"), label: t("stat_countries") },
    { value: t("stat_years_num"), label: t("stat_years") },
  ];

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "#0A0D14" }}
      aria-labelledby="about-heading"
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #00C6FF, #0072FF)" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00C6FF" }}>
            {t("label")}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2
              id="about-heading"
              className="font-bold mb-6"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F0F4F8", lineHeight: 1.2 }}
            >
              {t("headline")}
            </h2>
            <p className="leading-relaxed mb-10 text-base" style={{ color: "#8090A8", maxWidth: "520px" }}>
              {t("body")}
            </p>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 py-8 mb-10 border-t border-b"
              style={{ borderColor: "#1A2840" }}
            >
              {stats.map((s) => (
                <Counter key={s.label} value={s.value} label={s.label} />
              ))}
            </div>

            <Link
              href={`/${locale}/nosotros`}
              className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg border transition-all duration-200"
              style={{ borderColor: "#1A2840", color: "#F0F4F8" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#00C6FF";
                (e.currentTarget as HTMLElement).style.color = "#00C6FF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#1A2840";
                (e.currentTarget as HTMLElement).style.color = "#F0F4F8";
              }}
            >
              {t("cta")}
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Image placeholder — replace with: <Image src="/images/about/machu-picchu-abstract.jpg" alt={t("image_alt")} fill className="object-cover" /> */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg, #0F2A3D 0%, #0A1428 40%, #1A0F2E 100%)",
                height: "400px",
              }}
              role="img"
              aria-label={t("image_alt")}
            >
              {/* Geometric Inca pattern decoration */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 600 400" fill="none" aria-hidden>
                {Array.from({ length: 8 }, (_, r) =>
                  Array.from({ length: 12 }, (_, c) => (
                    <rect
                      key={`${r}-${c}`}
                      x={c * 52 + (r % 2 === 0 ? 0 : 26)}
                      y={r * 52}
                      width="44"
                      height="44"
                      rx="4"
                      stroke="#00C6FF"
                      strokeWidth="0.8"
                      fill="none"
                    />
                  ))
                )}
              </svg>

              {/* Center ARKMAPIX mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden>
                    <path d="M36 8L64 64H8L36 8Z" fill="none" stroke="url(#about-mark)" strokeWidth="2.5" strokeLinejoin="round"/>
                    <path d="M22 46H50" stroke="url(#about-mark)" strokeWidth="2.5" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="about-mark" x1="8" y1="8" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C6FF"/><stop offset="0.5" stopColor="#0072FF"/><stop offset="1" stopColor="#7B2FF7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="mt-3 text-xs uppercase tracking-widest font-semibold" style={{ color: "#4A6080" }}>
                    Built at the summit
                  </p>
                </div>
              </div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(0,198,255,0.04), rgba(123,47,247,0.06))" }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -left-6 rounded-xl border px-5 py-4 hidden sm:block"
              style={{ background: "#0F1825", borderColor: "#1A2840" }}
            >
              <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "#4A6080" }}>Fundados</div>
              <div
                className="font-black text-2xl"
                style={{
                  background: "linear-gradient(135deg, #00C6FF, #7B2FF7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                2019
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
