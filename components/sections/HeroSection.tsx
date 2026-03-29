"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0A0D14" }}
      aria-label="Hero section"
    >
      {/* Background: grid + radial gradients */}
      <div className="absolute inset-0 grid-pattern" aria-hidden />
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,198,255,0.06) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(123,47,247,0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative w-full mx-auto px-6 pt-28 pb-20" style={{ maxWidth: "1280px" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase border"
                style={{
                  background: "rgba(0,198,255,0.08)",
                  borderColor: "rgba(0,198,255,0.2)",
                  color: "#00C6FF",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#00C6FF" }}
                />
                {t("badge")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-black leading-tight mb-6"
              style={{ fontSize: "clamp(42px, 5.5vw, 76px)", letterSpacing: "-2px" }}
            >
              <span className="block gradient-text">{t("headline_1")}</span>
              <span className="block" style={{ color: "#F0F4F8" }}>{t("headline_2")}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 leading-relaxed"
              style={{
                color: "#8090A8",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                maxWidth: "480px",
              }}
            >
              {t("subheadline")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href={`/${locale}/servicios`}
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-base"
              >
                {t("cta_primary")}
              </Link>
              <Link
                href={`/${locale}/nosotros`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-base border transition-all duration-200"
                style={{
                  borderColor: "#1A2840",
                  color: "#F0F4F8",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#00C6FF";
                  (e.currentTarget as HTMLElement).style.color = "#00C6FF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1A2840";
                  (e.currentTarget as HTMLElement).style.color = "#F0F4F8";
                }}
              >
                {t("cta_secondary")}
              </Link>
            </motion.div>
          </div>

          {/* Right: visual panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div
              className="relative rounded-2xl overflow-hidden border"
              style={{
                background: "linear-gradient(135deg, #0F1825 0%, #0A1428 100%)",
                borderColor: "#1A2840",
                height: "460px",
              }}
            >
              {/* Decorative SVG network animation */}
              <svg
                className="absolute inset-0 w-full h-full opacity-30"
                viewBox="0 0 600 460"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                {/* Nodes */}
                {[
                  [80, 80], [200, 50], [340, 120], [480, 60], [540, 200],
                  [420, 280], [280, 350], [100, 300], [180, 200], [380, 200],
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="5" fill={["#00C6FF", "#0072FF", "#7B2FF7"][i % 3]} opacity="0.8" />
                ))}
                {/* Lines */}
                {[
                  [80, 80, 200, 50], [200, 50, 340, 120], [340, 120, 480, 60],
                  [480, 60, 540, 200], [540, 200, 420, 280], [420, 280, 280, 350],
                  [280, 350, 100, 300], [100, 300, 80, 80], [200, 50, 180, 200],
                  [180, 200, 280, 350], [340, 120, 380, 200], [380, 200, 540, 200],
                  [180, 200, 420, 280],
                ].map(([x1, y1, x2, y2], i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00C6FF" strokeWidth="0.8" opacity="0.3" />
                ))}
              </svg>

              {/* Window chrome */}
              <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-5 py-3.5 border-b" style={{ borderBottomColor: "#1A2840" }}>
                <div className="flex gap-1.5">
                  {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
                    <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                  ))}
                </div>
              </div>

              {/* Floating stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 rounded-xl border p-4"
                style={{ background: "rgba(15,24,37,0.9)", borderColor: "#1A2840" }}
              >
                <div className="font-mono text-xs mb-1" style={{ color: "#4A6080" }}>records/sec</div>
                <div className="font-black text-2xl gradient-text">2.4M</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-16 right-8 rounded-xl border p-4"
                style={{ background: "rgba(15,24,37,0.9)", borderColor: "#1A2840" }}
              >
                <div className="font-mono text-xs mb-1" style={{ color: "#4A6080" }}>latency</div>
                <div className="font-black text-2xl gradient-text">12ms</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-8 rounded-xl border p-4"
                style={{ top: "50%", transform: "translateY(-50%)", background: "rgba(15,24,37,0.9)", borderColor: "rgba(0,198,255,0.3)" }}
              >
                <div className="font-mono text-xs mb-1" style={{ color: "#00C6FF" }}>status</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#28C840" }} />
                  <span className="font-semibold text-sm" style={{ color: "#F0F4F8" }}>LIVE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
        style={{ transform: "translateX(-50%)" }}
      >
        <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#4A6080" }}>
          {t("scroll_hint")}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} style={{ color: "#4A6080" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
