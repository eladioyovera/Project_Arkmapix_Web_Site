"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";

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
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[20px] overflow-hidden aspect-[4/3]">
              {/*
                IMAGE PLACEHOLDER — reemplazar con:
                <Image
                  src="/images/about/machu-picchu-abstract.jpg"
                  alt={t("image_alt")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                Imagen esperada: /public/images/about/machu-picchu-abstract.jpg
                Resolución: 1200x800px. Machu Picchu o textura de piedra inca geométrica.
              */}
              <div
                className="w-full h-full"
                style={{
                  background: "linear-gradient(135deg, #0F1825 0%, #1A2840 40%, #0F2A3D 70%, #0A1828 100%)",
                }}
                aria-label={t("image_alt")}
                role="img"
              >
                {/* Decorative geometric pattern representing Inca stonework */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  {Array.from({ length: 6 }, (_, row) =>
                    Array.from({ length: 8 }, (_, col) => (
                      <rect
                        key={`${row}-${col}`}
                        x={col * 52 + (row % 2 === 0 ? 0 : 26)}
                        y={row * 52}
                        width="44"
                        height="44"
                        rx="4"
                        stroke="#00C6FF"
                        strokeWidth="0.5"
                        fill="none"
                      />
                    ))
                  )}
                </svg>

                {/* Center graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M40 10L70 70H10L40 10Z" fill="none" stroke="url(#about-icon)" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M25 50H55" stroke="url(#about-icon)" strokeWidth="2" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="about-icon" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00C6FF"/>
                          <stop offset="0.5" stopColor="#0072FF"/>
                          <stop offset="1" stopColor="#7B2FF7"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <p className="mt-3 caption text-text-muted">ARKMAPIX</p>
                  </div>
                </div>
              </div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(0,198,255,0.05) 0%, rgba(0,114,255,0.1) 50%, rgba(123,47,247,0.08) 100%)" }}
              />
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-bg-card border border-bg-border rounded-card p-4 shadow-xl hidden sm:block"
            >
              <div className="text-xs text-text-muted mb-1 caption">Desde</div>
              <div className="text-2xl font-black gradient-text">2019</div>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <SectionLabel>{t("label")}</SectionLabel>

            <h2
              id="about-heading"
              className="h2 text-text-primary mb-6"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700 }}
            >
              {t("headline")}
            </h2>

            <p className="text-text-secondary leading-relaxed mb-10 text-base">
              {t("body")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 py-8 border-t border-b border-bg-border">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <AnimatedCounter value={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </div>

            <Button
              variant="secondary"
              size="md"
              onClick={() => window.location.href = `/${locale}/nosotros`}
              className="group"
            >
              {t("cta")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
