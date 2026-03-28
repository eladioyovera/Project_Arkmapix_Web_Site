"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";

const STEPS = [
  { key: "diagnosis", num: "01", color: "#00C6FF" },
  { key: "architecture", num: "02", color: "#0072FF" },
  { key: "implementation", num: "03", color: "#3A8EFF" },
  { key: "validation", num: "04", color: "#7B2FF7" },
  { key: "scaling", num: "05", color: "#C026B0" },
] as const;

export function ProcessStepper() {
  const t = useTranslations("process");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel className="justify-center">{t("label")}</SectionLabel>
          <h2
            id="process-heading"
            className="text-text-primary"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700 }}
          >
            {t("headline")}
          </h2>
        </motion.div>

        {/* Desktop stepper */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative mb-8">
            <div className="absolute top-8 left-[10%] right-[10%] h-px bg-bg-border" aria-hidden />
            <motion.div
              className="absolute top-8 left-[10%] h-px"
              style={{ background: "var(--grad-signature)" }}
              initial={{ width: "0%" }}
              animate={isInView ? { width: "80%" } : { width: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              aria-hidden
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" }}
                className="text-center"
              >
                {/* Number circle */}
                <div className="relative flex justify-center mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center border-2 bg-bg-card z-10 relative"
                    style={{ borderColor: step.color }}
                  >
                    <span
                      className="font-black text-lg"
                      style={{ color: step.color }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>
                <h3 className="text-text-primary font-semibold text-base mb-2">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {t(`steps.${step.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stepper */}
        <div className="lg:hidden flex flex-col gap-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-6"
            >
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border-2 bg-bg-card flex-shrink-0"
                  style={{ borderColor: step.color }}
                >
                  <span className="font-black text-sm" style={{ color: step.color }}>
                    {step.num}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 mt-2 mb-0" style={{ background: step.color, opacity: 0.3, minHeight: "32px" }} />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-8 flex-1">
                <h3 className="text-text-primary font-semibold text-base mb-2 mt-2.5">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {t(`steps.${step.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
