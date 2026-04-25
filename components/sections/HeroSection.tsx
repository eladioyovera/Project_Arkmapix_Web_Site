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
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/hero-app.mp4" type="video/mp4" />
            </video>

            <div
                className="absolute inset-0"
                style={{
                    background: "rgba(10, 13, 20, 0.75)",
                    backdropFilter: "blur(2px)",
                }}
            />
            <div className="absolute inset-0 grid-pattern" aria-hidden />
            <div
                className="absolute top-0 left-1/4 w-150 h-150 rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(0,198,255,0.06) 0%, transparent 70%)",
                }}
                aria-hidden
            />
            <div
                className="absolute bottom-0 right-1/4 w-125 h-125 rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(123,47,247,0.08) 0%, transparent 70%)",
                }}
                aria-hidden
            />

            {/* Content */}
            <div className="relative w-full mx-auto px-6 pt-28 pb-20 z-10" style={{ maxWidth: "1280px" }}>
                <div className="grid lg:grid-cols-1 gap-16 items-center justify-center">

                    {/* Left: copy */}
                    <div className="text-center flex flex-col items-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-2 flex justify-center"
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
                            className="font-black leading-14 md:leading-20 mb-6 text-center"
                            style={{
                                fontSize: "clamp(42px, 5.5vw, 76px)",
                                letterSpacing: "-2px"
                            }}
                        >
                            <span className="block gradient-text">{t("headline_1")}</span>
                            <span className="block text-white/90">{t("headline_2")}</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-1 leading-relaxed mx-auto text-center"
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
                            className="flex flex-wrap gap-4 justify-center my-10"
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
