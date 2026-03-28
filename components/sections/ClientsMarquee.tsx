"use client";

import { useTranslations } from "next-intl";

// Placeholder clients — replace with real logos in /public/images/clients/
const CLIENTS = [
  "RetailCo",
  "BancoAndino",
  "IndusPacífico",
  "SaludPlus",
  "LogiData",
  "EnerData",
  "FinTech360",
  "CloudNova",
];

export function ClientsMarquee() {
  const t = useTranslations("clients");

  return (
    <section
      className="relative py-6 overflow-hidden border-t border-b border-bg-border"
      style={{ background: "var(--bg-card)" }}
      aria-label={t("title")}
    >
      <div className="flex items-center">
        {/* Label */}
        <div className="flex-shrink-0 px-6 lg:px-12 border-r border-bg-border mr-8 pr-8 hidden sm:block">
          <p className="caption text-text-muted whitespace-nowrap">{t("title")}</p>
        </div>

        {/* Marquee track */}
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Double the list for seamless loop */}
          <div className="flex items-center gap-12 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <ClientLogo key={`${client}-${i}`} name={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientLogo({ name }: { name: string }) {
  // Placeholder: rect with company name
  // Replace with: <Image src={`/images/clients/client-${name.toLowerCase()}.svg`} ... />
  return (
    <div
      className="flex items-center justify-center h-8 px-5 opacity-40 hover:opacity-70 transition-opacity duration-300 grayscale hover:grayscale-0 flex-shrink-0"
      aria-label={`Cliente: ${name}`}
    >
      <span className="font-bold text-sm text-text-secondary tracking-wider uppercase">
        {name}
      </span>
    </div>
  );
}
