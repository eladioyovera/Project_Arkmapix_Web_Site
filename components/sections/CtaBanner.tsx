"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export function CtaBanner() {
  const t = useTranslations("cta_banner");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0072FF 0%, #7B2FF7 55%, #C026B0 100%)" }}
      aria-labelledby="cta-heading"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" aria-hidden />

      <div className="relative mx-auto px-6 text-center" style={{ maxWidth: "900px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="cta-heading"
            className="font-bold mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "#fff" }}
          >
            {t("headline")}
          </h2>
          <p className="mb-10 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "560px", margin: "0 auto 40px" }}>
            {t("subheadline")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/${locale}/contacto`}
              className="inline-flex items-center px-8 py-4 rounded-lg font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#fff", color: "#0A0D14", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
            >
              {t("cta_primary")}
            </Link>
            <Link
              href={`/${locale}/servicios`}
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-base border-2 transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff", background: "transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#fff"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.5)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              {t("cta_secondary")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
