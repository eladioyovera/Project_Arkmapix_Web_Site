"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const POST_KEYS = ["post_1", "post_2", "post_3"] as const;
const POST_ACCENTS = ["#00C6FF", "#7B2FF7", "#0072FF"];
const POST_BG = ["#0F2040", "#1A0F2E", "#0F1A40"];

export function BlogPreview() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "#0F1825" }} aria-labelledby="blog-heading">
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #00C6FF, transparent)" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00C6FF" }}>{t("label")}</span>
            </div>
            <h2 id="blog-heading" className="font-bold" style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#F0F4F8" }}>
              {t("headline")}
            </h2>
          </div>
          <Link
            href={`/${locale}/blog`}
            className="flex items-center gap-1.5 text-sm font-semibold transition-colors flex-shrink-0"
            style={{ color: "#00C6FF" }}
          >
            Ver todos <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POST_KEYS.map((key, i) => {
            const category = t(`items.${key}.category`);
            const title = t(`items.${key}.title`);
            const excerpt = t(`items.${key}.excerpt`);
            const date = t(`items.${key}.date`);
            const href = `/${locale}/blog/${key.replace("_", "-")}`;
            const accent = POST_ACCENTS[i];
            const bg = POST_BG[i];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={href}
                  className="block h-full group card-hover gradient-border"
                  style={{ background: "#0A0D14", border: "1px solid #1A2840", borderRadius: "12px", overflow: "hidden" }}
                  aria-label={title}
                >
                  {/* Image area */}
                  <div
                    className="relative h-40"
                    style={{ background: `linear-gradient(135deg, ${bg} 0%, #0A0D14 100%)` }}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{ background: `radial-gradient(circle at 30% 50%, ${accent}, transparent 60%)` }}
                    />
                    <div className="absolute bottom-4 left-4">
                      <span
                        className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}
                      >
                        {category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-base mb-2 leading-snug line-clamp-2 group-hover:text-cyan transition-colors" style={{ color: "#F0F4F8" }}>
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "#4A6080" }}>{excerpt}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: "#4A6080" }}>{date}</span>
                      <span className="flex items-center gap-1 text-xs font-medium group-hover:text-cyan transition-colors" style={{ color: "#4A6080" }}>
                        {t("read_more")} <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
