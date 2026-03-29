"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

const STEPS = [
  { key: "diagnosis",       num: "01", color: "#00C6FF" },
  { key: "architecture",    num: "02", color: "#0072FF" },
  { key: "implementation",  num: "03", color: "#3A8EFF" },
  { key: "validation",      num: "04", color: "#7B2FF7" },
  { key: "scaling",         num: "05", color: "#C026B0" },
] as const;

export function ProcessStepper() {
  const t = useTranslations("process");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "#0A0D14" }}
      aria-labelledby="process-heading"
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #00C6FF)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00C6FF" }}>
              {t("label")}
            </span>
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #00C6FF, transparent)" }} />
          </div>
          <h2
            id="process-heading"
            className="font-bold"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", color: "#F0F4F8" }}
          >
            {t("headline")}
          </h2>
        </motion.div>

        {/* Desktop stepper */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative mb-8">
            <div className="absolute top-8 left-[10%] right-[10%] h-px" style={{ background: "#1A2840" }} aria-hidden />
            <motion.div
              className="absolute top-8 left-[10%] h-px"
              style={{ background: "linear-gradient(90deg, #00C6FF, #0072FF, #7B2FF7, #C026B0)" }}
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
                <div className="relative flex justify-center mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center z-10 relative"
                    style={{ border: `2px solid ${step.color}`, background: "#0F1825" }}
                  >
                    <span className="font-black text-lg" style={{ color: step.color }}>
                      {step.num}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "#F0F4F8" }}>
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>
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
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ border: `2px solid ${step.color}`, background: "#0F1825" }}
                >
                  <span className="font-black text-sm" style={{ color: step.color }}>
                    {step.num}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: step.color, opacity: 0.3, minHeight: "32px" }} />
                )}
              </div>
              <div className="pb-8 flex-1">
                <h3 className="font-semibold text-base mb-2 mt-2.5" style={{ color: "#F0F4F8" }}>
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>
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
