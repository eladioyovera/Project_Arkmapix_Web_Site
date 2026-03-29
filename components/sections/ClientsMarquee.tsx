"use client";

import { useTranslations } from "next-intl";

const CLIENTS = ["RetailCo", "BancoAndino", "IndusPacífico", "SaludPlus", "LogiData", "EnerData", "FinTech360", "CloudNova"];

export function ClientsMarquee() {
  const t = useTranslations("clients");
  return (
    <section
      className="py-5 overflow-hidden"
      style={{ background: "#0F1825", borderTop: "1px solid #1A2840", borderBottom: "1px solid #1A2840" }}
      aria-label={t("title")}
    >
      <div className="flex items-center">
        {/* Label */}
        <div className="flex-shrink-0 px-8 hidden sm:block" style={{ borderRight: "1px solid #1A2840", marginRight: "32px", paddingRight: "32px" }}>
          <p className="text-xs font-medium uppercase tracking-widest whitespace-nowrap" style={{ color: "#4A6080" }}>
            {t("title")}
          </p>
        </div>

        {/* Marquee */}
        <div className="relative flex overflow-hidden flex-1 marquee-fade marquee-container">
          <div className="flex items-center gap-12 marquee-track" style={{ animation: "marquee 28s linear infinite", whiteSpace: "nowrap" }}>
            {[...CLIENTS, ...CLIENTS].map((name, i) => (
              <span
                key={i}
                className="font-bold text-sm uppercase tracking-widest transition-opacity duration-200"
                style={{ color: "#4A6080", opacity: 0.6, flexShrink: 0 }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
