import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { LinkedinIcon, GithubIcon, YoutubeIcon, InstagramIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const serviceLinks = [
    { label: "Arquitectura de Datos", href: `/${locale}/servicios/arquitectura-datos` },
    { label: "Data Engineering", href: `/${locale}/servicios/data-engineering` },
    { label: "Analítica Avanzada", href: `/${locale}/servicios/analitica-avanzada` },
    { label: "Inteligencia Artificial", href: `/${locale}/servicios/inteligencia-artificial` },
    { label: "Cloud & DevOps", href: `/${locale}/servicios/cloud-devops` },
    { label: "ARKMAPIX Academy", href: `/${locale}/academia` },
  ];

  const companyLinks = [
    { label: t("links.about"), href: `/${locale}/nosotros` },
    { label: t("links.cases"), href: `/${locale}/casos` },
    { label: t("links.academy"), href: `/${locale}/academia` },
    { label: t("links.labs"), href: `/${locale}/labs` },
    { label: t("links.blog"), href: `/${locale}/blog` },
    { label: t("links.contact"), href: `/${locale}/contacto` },
  ];

  const socials = [
    { icon: LinkedinIcon, href: "https://linkedin.com/company/arkmapix", label: "LinkedIn de ARKMAPIX" },
    { icon: GithubIcon, href: "https://github.com/arkmapix", label: "GitHub de ARKMAPIX" },
    { icon: YoutubeIcon, href: "https://youtube.com/@arkmapix", label: "YouTube de ARKMAPIX" },
    { icon: InstagramIcon, href: "https://instagram.com/arkmapix", label: "Instagram de ARKMAPIX" },
  ];

  return (
    <footer className="bg-bg-primary border-t border-bg-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4 group" aria-label="ARKMAPIX">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M16 4L28 28H4L16 4Z" fill="none" stroke="url(#footer-logo-grad)" strokeWidth="2.5" strokeLinejoin="round"/>
                <path d="M10 20H22" stroke="url(#footer-logo-grad)" strokeWidth="2.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="footer-logo-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00C6FF"/>
                    <stop offset="0.5" stopColor="#0072FF"/>
                    <stop offset="1" stopColor="#7B2FF7"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-base font-black tracking-tight gradient-text">ARKMAPIX</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-xs">
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
                  className="p-2 rounded-btn bg-bg-card border border-bg-border text-text-muted hover:text-cyan-DEFAULT hover:border-cyan-DEFAULT/30 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-5 uppercase tracking-widest">
              {t("services_title")}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-cyan-DEFAULT transition-colors duration-200 group flex items-center gap-1"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-5 uppercase tracking-widest">
              {t("company_title")}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-cyan-DEFAULT transition-colors duration-200 group flex items-center gap-1"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact + Newsletter */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-5 uppercase tracking-widest">
              {t("contact_title")}
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-text-muted text-sm">
                <Mail size={14} className="text-cyan-DEFAULT flex-shrink-0" />
                <a href="mailto:hola@arkmapix.com" className="hover:text-cyan-DEFAULT transition-colors">
                  hola@arkmapix.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-text-muted text-sm">
                <MapPin size={14} className="text-cyan-DEFAULT flex-shrink-0" />
                <span>{t("location")} 🇨🇴</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-text-secondary text-xs mb-3 uppercase tracking-widest font-medium">
                {t("newsletter_label")}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t("newsletter_placeholder")}
                  className="flex-1 bg-bg-card border border-bg-border rounded-btn px-3 py-2 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-cyan-DEFAULT transition-colors min-w-0"
                  aria-label={t("newsletter_label")}
                />
                <button
                  type="submit"
                  className="btn-shimmer text-white text-sm font-semibold px-4 py-2 rounded-btn whitespace-nowrap"
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
      <div className="border-t border-bg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            {t("copyright")} · {t("location")} 🇨🇴
          </p>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/privacidad`} className="text-text-muted text-xs hover:text-text-secondary transition-colors">
              {t("privacy")}
            </Link>
            <Link href={`/${locale}/terminos`} className="text-text-muted text-xs hover:text-text-secondary transition-colors">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
