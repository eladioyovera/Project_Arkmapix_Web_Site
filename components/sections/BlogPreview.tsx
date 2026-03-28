"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";

const POST_KEYS = ["post_1", "post_2", "post_3"] as const;

const POST_COLORS = [
  { bg: "#0F2040", accent: "#00C6FF" },
  { bg: "#1A0F2E", accent: "#7B2FF7" },
  { bg: "#0F1A30", accent: "#0072FF" },
];

export function BlogPreview() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16"
        >
          <div>
            <SectionLabel>{t("label")}</SectionLabel>
            <h2
              id="blog-heading"
              className="text-text-primary"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700 }}
            >
              {t("headline")}
            </h2>
          </div>
          <Link
            href={`/${locale}/blog`}
            className="flex items-center gap-2 text-cyan-DEFAULT text-sm font-semibold hover:underline group flex-shrink-0"
          >
            Ver todos
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POST_KEYS.map((key, i) => {
            const color = POST_COLORS[i];
            const category = t(`items.${key}.category`);
            const title = t(`items.${key}.title`);
            const excerpt = t(`items.${key}.excerpt`);
            const date = t(`items.${key}.date`);
            const href = `/${locale}/blog/${key.replace("_", "-")}`;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  href={href}
                  className="block h-full gradient-border glow-hover group transition-all duration-300 hover:-translate-y-1 rounded-card overflow-hidden focus-visible:ring-2 focus-visible:ring-cyan-DEFAULT focus-visible:outline-none"
                  aria-label={`Artículo: ${title}`}
                >
                  {/* Image placeholder */}
                  <div
                    className="h-40 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${color.bg} 0%, #0A0D14 100%)` }}
                    aria-hidden
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{ background: `radial-gradient(circle at 30% 50%, ${color.accent} 0%, transparent 60%)` }}
                    />
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="outline">{category}</Badge>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-text-primary font-semibold text-base mb-2 group-hover:gradient-text transition-all duration-300 line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                      {excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-text-muted text-xs">
                        <Calendar size={12} />
                        {date}
                      </div>
                      <div className="flex items-center gap-1 text-text-muted text-xs font-medium group-hover:text-cyan-DEFAULT transition-colors">
                        {t("read_more")}
                        <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                      </div>
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
