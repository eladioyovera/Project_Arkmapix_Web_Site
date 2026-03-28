"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { href: `/${locale}/servicios`, label: t("services") },
    { href: `/${locale}/casos`, label: t("cases") },
    { href: `/${locale}/academia`, label: t("academy") },
    { href: `/${locale}/labs`, label: t("labs") },
    { href: `/${locale}/blog`, label: t("blog") },
    { href: `/${locale}/nosotros`, label: t("about") },
  ];

  const otherLocale = locale === "es" ? "en" : "es";
  const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "navbar-glass" : "bg-transparent"
        }`}
        style={{ height: "72px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-cyan-DEFAULT rounded"
            aria-label="ARKMAPIX — ir al inicio"
          >
            {/* Logo placeholder — reemplazar con next/image cuando esté /public/brand/logo-dark.svg */}
            <LogoPlaceholder />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-DEFAULT relative group ${
                    isActive ? "text-cyan-DEFAULT" : "text-text-secondary"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-cyan-DEFAULT transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1 bg-bg-card border border-bg-border rounded-pill p-0.5">
              <span className={`px-3 py-1 text-xs font-semibold rounded-pill transition-all duration-200 ${
                locale === "es" ? "bg-grad-signature text-white" : "text-text-muted hover:text-text-secondary"
              }`}>
                {t("lang_es")}
              </span>
              <Link
                href={switchLocalePath}
                className={`px-3 py-1 text-xs font-semibold rounded-pill transition-all duration-200 ${
                  locale === "en"
                    ? "gradient-text"
                    : "text-text-muted hover:text-text-secondary"
                }`}
                aria-label={`Switch to ${otherLocale === "en" ? "English" : "Español"}`}
              >
                {t("lang_en")}
              </Link>
            </div>

            {/* CTA */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.location.href = `/${locale}/contacto`}
            >
              {t("cta")}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl flex flex-col pt-20 px-6 pb-8 lg:hidden"
          >
            <nav className="flex flex-col gap-1 flex-1" aria-label="Navegación móvil">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-4 text-xl font-semibold border-b border-bg-border transition-colors duration-200 ${
                      pathname.startsWith(link.href)
                        ? "gradient-text"
                        : "text-text-primary hover:text-cyan-DEFAULT"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-4">
              {/* Lang switcher mobile */}
              <div className="flex items-center gap-2">
                <span className="text-text-muted text-sm">Idioma:</span>
                <Link
                  href={switchLocalePath}
                  className="text-sm font-semibold text-cyan-DEFAULT border border-cyan-DEFAULT/30 px-3 py-1 rounded-pill"
                >
                  {locale === "es" ? "Switch to EN" : "Cambiar a ES"}
                </Link>
              </div>
              <Button variant="primary" size="lg" className="w-full" onClick={() => window.location.href = `/${locale}/contacto`}>
                {t("cta")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoPlaceholder() {
  return (
    <div className="flex items-center gap-2">
      {/* Icon "A" — placeholder hasta recibir /public/brand/logo-icon.svg */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M16 4L28 28H4L16 4Z" fill="none" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M10 20H22" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round"/>
        <defs>
          <linearGradient id="logo-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00C6FF"/>
            <stop offset="0.5" stopColor="#0072FF"/>
            <stop offset="1" stopColor="#7B2FF7"/>
          </linearGradient>
        </defs>
      </svg>
      {/* Wordmark — placeholder hasta recibir /public/brand/logo-dark.svg */}
      <span
        className="text-lg font-black tracking-tight gradient-text"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        ARKMAPIX
      </span>
    </div>
  );
}
