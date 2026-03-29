"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { LinkedinIcon, GithubIcon, YoutubeIcon, InstagramIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const serviceLinks = [
    { label: "Arquitectura de Datos", href: `/${locale}/servicios/arquitectura-datos` },
    { label: "Data Engineering",      href: `/${locale}/servicios/data-engineering` },
    { label: "Analítica Avanzada",    href: `/${locale}/servicios/analitica-avanzada` },
    { label: "Inteligencia Artificial", href: `/${locale}/servicios/inteligencia-artificial` },
    { label: "Cloud & DevOps",        href: `/${locale}/servicios/cloud-devops` },
    { label: "ARKMAPIX Academy",      href: `/${locale}/academia` },
  ];

  const companyLinks = [
    { label: t("links.about"),   href: `/${locale}/nosotros` },
    { label: t("links.cases"),   href: `/${locale}/casos` },
    { label: t("links.academy"), href: `/${locale}/academia` },
    { label: t("links.contact"), href: `/${locale}/contacto` },
  ];

  const socials = [
    { icon: LinkedinIcon, href: "https://linkedin.com/company/arkmapix", label: "LinkedIn de ARKMAPIX" },
    { icon: GithubIcon,   href: "https://github.com/arkmapix",           label: "GitHub de ARKMAPIX" },
    { icon: YoutubeIcon,  href: "https://youtube.com/@arkmapix",         label: "YouTube de ARKMAPIX" },
    { icon: InstagramIcon,href: "https://instagram.com/arkmapix",        label: "Instagram de ARKMAPIX" },
  ];

  return (
    <footer
      role="contentinfo"
      style={{ background: "#0A0D14", borderTop: "1px solid #1A2840" }}
    >
      <div className="mx-auto px-6 py-16" style={{ maxWidth: "1280px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 mb-4"
              aria-label="ARKMAPIX"
            >
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
                <path d="M16 4L28 28H4L16 4Z" fill="none" stroke="url(#footer-logo-g)" strokeWidth="2.5" strokeLinejoin="round"/>
                <path d="M10 20H22" stroke="url(#footer-logo-g)" strokeWidth="2.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="footer-logo-g" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00C6FF"/><stop offset="0.5" stopColor="#0072FF"/><stop offset="1" stopColor="#7B2FF7"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-black tracking-tight text-base gradient-text">ARKMAPIX</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#4A6080", maxWidth: "260px" }}>
              {t("tagline")}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg border transition-all duration-200"
                  style={{ background: "#0F1825", borderColor: "#1A2840", color: "#4A6080" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#00C6FF";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,198,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#4A6080";
                    (e.currentTarget as HTMLElement).style.borderColor = "#1A2840";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-semibold text-sm mb-5 uppercase tracking-widest" style={{ color: "#F0F4F8" }}>
              {t("services_title")}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm transition-colors duration-200"
                    style={{ color: "#4A6080" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00C6FF"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#4A6080"; }}
                  >
                    <ArrowRight size={12} style={{ opacity: 0.6 }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="font-semibold text-sm mb-5 uppercase tracking-widest" style={{ color: "#F0F4F8" }}>
              {t("company_title")}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm transition-colors duration-200"
                    style={{ color: "#4A6080" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00C6FF"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#4A6080"; }}
                  >
                    <ArrowRight size={12} style={{ opacity: 0.6 }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact + Newsletter */}
          <div>
            <h3 className="font-semibold text-sm mb-5 uppercase tracking-widest" style={{ color: "#F0F4F8" }}>
              {t("contact_title")}
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm" style={{ color: "#4A6080" }}>
                <Mail size={14} style={{ color: "#00C6FF", flexShrink: 0 }} />
                <a
                  href="mailto:hola@arkmapix.com"
                  className="transition-colors"
                  style={{ color: "#4A6080" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00C6FF"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#4A6080"; }}
                >
                  hola@arkmapix.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: "#4A6080" }}>
                <MapPin size={14} style={{ color: "#00C6FF", flexShrink: 0 }} />
                <span>{t("location")} 🇨🇴</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-xs mb-3 uppercase tracking-widest font-medium" style={{ color: "#8090A8" }}>
                {t("newsletter_label")}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t("newsletter_placeholder")}
                  className="flex-1 text-sm focus:outline-none min-w-0 rounded-lg px-3 py-2 transition-colors"
                  style={{
                    background: "#0F1825",
                    border: "1px solid #1A2840",
                    color: "#F0F4F8",
                  }}
                  aria-label={t("newsletter_label")}
                />
                <button
                  type="submit"
                  className="btn-primary text-sm font-semibold px-4 py-2 rounded-lg whitespace-nowrap"
                  aria-label={t("newsletter_cta")}
                >
                  {t("newsletter_cta")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #1A2840" }}>
        <div className="mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ maxWidth: "1280px" }}>
          <p className="text-xs" style={{ color: "#4A6080" }}>
            {t("copyright")} · {t("location")} 🇨🇴
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/privacidad`}
              className="text-xs transition-colors"
              style={{ color: "#4A6080" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#8090A8"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#4A6080"; }}
            >
              {t("privacy")}
            </Link>
            <Link
              href={`/${locale}/terminos`}
              className="text-xs transition-colors"
              style={{ color: "#4A6080" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#8090A8"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#4A6080"; }}
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
