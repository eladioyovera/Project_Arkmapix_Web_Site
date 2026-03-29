"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

// Service icons inline SVG
function SvcIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    data_architecture: (
      <svg width="18" height="18" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="2" y="2" width="8" height="8" rx="2" stroke="url(#ni-a)" strokeWidth="1.5" fill="url(#ni-a)" fillOpacity="0.12"/>
        <rect x="10" y="2" width="8" height="8" rx="2" stroke="url(#ni-a)" strokeWidth="1.5" fill="url(#ni-a)" fillOpacity="0.12"/>
        <rect x="18" y="2" width="8" height="8" rx="2" stroke="url(#ni-a)" strokeWidth="1.5" fill="url(#ni-a)" fillOpacity="0.12"/>
        <rect x="6" y="18" width="16" height="8" rx="2" stroke="url(#ni-a)" strokeWidth="1.5" fill="url(#ni-a)" fillOpacity="0.2"/>
        <path d="M6 10v5h16v-5M14 15v3" stroke="url(#ni-a)" strokeWidth="1.5" strokeLinecap="round"/>
        <defs><linearGradient id="ni-a" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#00C6FF"/><stop offset="1" stopColor="#0072FF"/></linearGradient></defs>
      </svg>
    ),
    data_engineering: (
      <svg width="18" height="18" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="6" cy="14" r="3.5" stroke="url(#ni-b)" strokeWidth="1.5" fill="url(#ni-b)" fillOpacity="0.12"/>
        <circle cx="22" cy="14" r="3.5" stroke="url(#ni-b)" strokeWidth="1.5" fill="url(#ni-b)" fillOpacity="0.12"/>
        <path d="M9.5 14H18.5" stroke="url(#ni-b)" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="13" y="10" width="2" height="8" rx="1" fill="url(#ni-b)" fillOpacity="0.5"/>
        <defs><linearGradient id="ni-b" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#00C6FF"/><stop offset="1" stopColor="#7B2FF7"/></linearGradient></defs>
      </svg>
    ),
    advanced_analytics: (
      <svg width="18" height="18" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M4 22L10 14L15 18L21 10L25 13" stroke="url(#ni-c)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="14" r="2" fill="#00C6FF"/>
        <circle cx="15" cy="18" r="2" fill="#0072FF"/>
        <circle cx="21" cy="10" r="2" fill="#7B2FF7"/>
        <defs><linearGradient id="ni-c" x1="4" y1="22" x2="25" y2="10" gradientUnits="userSpaceOnUse"><stop stopColor="#00C6FF"/><stop offset="1" stopColor="#7B2FF7"/></linearGradient></defs>
      </svg>
    ),
    artificial_intelligence: (
      <svg width="18" height="18" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="5" stroke="url(#ni-d)" strokeWidth="1.5" fill="url(#ni-d)" fillOpacity="0.12"/>
        <circle cx="14" cy="5" r="2" fill="url(#ni-d)"/>
        <circle cx="14" cy="23" r="2" fill="url(#ni-d)"/>
        <circle cx="5" cy="14" r="2" fill="url(#ni-d)"/>
        <circle cx="23" cy="14" r="2" fill="url(#ni-d)"/>
        <defs><linearGradient id="ni-d" x1="5" y1="5" x2="23" y2="23" gradientUnits="userSpaceOnUse"><stop stopColor="#00FFD1"/><stop offset="1" stopColor="#7B2FF7"/></linearGradient></defs>
      </svg>
    ),
    cloud_devops: (
      <svg width="18" height="18" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M8 20C5.5 20 3 18 3 15.5C3 13 5 11.5 7 11.5C7.5 9.5 9.5 8 12 8C15 8 17 10 17.5 12.5H18C20.5 12.5 23 14.5 23 17C23 19.5 20.5 21 18 21H8" stroke="url(#ni-e)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M14 24v-6M12 21l2 3 2-3" stroke="url(#ni-e)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="ni-e" x1="3" y1="8" x2="23" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#00C6FF"/><stop offset="1" stopColor="#7B2FF7"/></linearGradient></defs>
      </svg>
    ),
    academy: (
      <svg width="18" height="18" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4L26 10L14 16L2 10L14 4Z" stroke="url(#ni-f)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="url(#ni-f)" fillOpacity="0.1"/>
        <path d="M6 13v8C6 21 9.5 24 14 24C18.5 24 22 21 22 21v-8" stroke="url(#ni-f)" strokeWidth="1.5" strokeLinecap="round"/>
        <defs><linearGradient id="ni-f" x1="2" y1="4" x2="26" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#00C6FF"/><stop offset="1" stopColor="#C026B0"/></linearGradient></defs>
      </svg>
    ),
  };
  return <>{icons[type] ?? icons.data_architecture}</>;
}

export function Navbar() {
  const t = useTranslations("nav");
  const ts = useTranslations("services");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Hover handlers with small delay to avoid accidental close
  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const serviceItems = [
    { key: "data_architecture",       slug: "arquitectura-datos" },
    { key: "data_engineering",        slug: "data-engineering" },
    { key: "advanced_analytics",      slug: "analitica-avanzada" },
    { key: "artificial_intelligence", slug: "inteligencia-artificial" },
    { key: "cloud_devops",            slug: "cloud-devops" },
    { key: "academy",                 slug: "academy" },
  ] as const;

  const navLinks = [
    { href: `/${locale}/casos`,    label: t("cases") },
    { href: `/${locale}/academia`, label: t("academy") },
    { href: `/${locale}/nosotros`, label: t("about") },
  ];

  const otherLocale = locale === "es" ? "en" : "es";
  const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const servicesActive = pathname.startsWith(`/${locale}/servicios`);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "navbar-glass border-b" : "bg-transparent"
        }`}
        style={{ height: "72px", borderBottomColor: scrolled ? "#1A2840" : "transparent" }}
      >
        <div className="mx-auto flex items-center justify-between h-full px-6" style={{ maxWidth: "1280px" }}>

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 flex-shrink-0" aria-label="ARKMAPIX — inicio">
            <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden>
              <path d="M16 4L28 28H4L16 4Z" fill="none" stroke="url(#nav-logo-g)" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M10 20H22" stroke="url(#nav-logo-g)" strokeWidth="2.5" strokeLinecap="round"/>
              <defs>
                <linearGradient id="nav-logo-g" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00C6FF"/><stop offset="0.5" stopColor="#0072FF"/><stop offset="1" stopColor="#7B2FF7"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="font-black tracking-tight text-lg gradient-text">ARKMAPIX</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">

            {/* Services dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                style={{ color: servicesActive ? "#00C6FF" : "#8090A8", background: "none", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#F0F4F8"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = servicesActive ? "#00C6FF" : "#8090A8"; }}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                {t("services")}
                <motion.span
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex" }}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              {/* Underline */}
              <span
                className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                style={{
                  width: servicesActive ? "100%" : "0",
                  background: "linear-gradient(90deg, #00C6FF, #0072FF)",
                }}
              />

              {/* Dropdown panel */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-1/2 pt-4"
                    style={{ transform: "translateX(-50%)", minWidth: "520px" }}
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <div
                      className="rounded-2xl overflow-hidden"
                      style={{
                        background: "rgba(10,13,20,0.97)",
                        border: "1px solid #1A2840",
                        backdropFilter: "blur(20px)",
                        boxShadow: "0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,198,255,0.06)",
                      }}
                    >
                      {/* Header */}
                      <div
                        className="flex items-center justify-between px-5 py-3 border-b"
                        style={{ borderBottomColor: "#1A2840" }}
                      >
                        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4A6080" }}>
                          {t("services")}
                        </span>
                        <Link
                          href={`/${locale}/servicios`}
                          className="text-xs font-semibold transition-colors"
                          style={{ color: "#00C6FF" }}
                          onClick={() => setServicesOpen(false)}
                        >
                          Ver todos →
                        </Link>
                      </div>

                      {/* Grid of services */}
                      <div className="grid grid-cols-2 gap-px p-1" style={{ background: "#1A2840" }}>
                        {serviceItems.map(({ key, slug }) => {
                          const href = `/${locale}/servicios/${slug}`;
                          const active = pathname === href || pathname.startsWith(href + "/");
                          return (
                            <Link
                              key={key}
                              href={href}
                              onClick={() => setServicesOpen(false)}
                              className="flex items-center gap-3 px-4 py-3.5 group transition-colors duration-150"
                              style={{
                                background: active ? "rgba(0,198,255,0.06)" : "#0A0D14",
                                borderRadius: "10px",
                              }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "rgba(0,198,255,0.06)";
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = active ? "rgba(0,198,255,0.06)" : "#0A0D14";
                              }}
                            >
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{
                                  background: active ? "rgba(0,198,255,0.12)" : "rgba(255,255,255,0.04)",
                                  border: "1px solid",
                                  borderColor: active ? "rgba(0,198,255,0.3)" : "#1A2840",
                                }}
                              >
                                <SvcIcon type={key} />
                              </div>
                              <span
                                className="text-sm font-medium"
                                style={{ color: active ? "#00C6FF" : "#F0F4F8" }}
                              >
                                {ts(`items.${key}.name`)}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other links */}
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium transition-colors duration-200"
                  style={{ color: active ? "#00C6FF" : "#8090A8" }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#F0F4F8"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = active ? "#00C6FF" : "#8090A8"; }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{ width: active ? "100%" : "0", background: "linear-gradient(90deg, #00C6FF, #0072FF)" }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: lang + CTA */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <div className="flex items-center gap-1 rounded-full p-0.5 border" style={{ background: "#0F1825", borderColor: "#1A2840" }}>
              {(["es", "en"] as const).map((l) => (
                <Link
                  key={l}
                  href={l === locale ? pathname : switchLocalePath}
                  className="px-3 py-1 rounded-full text-xs font-bold transition-all duration-200"
                  style={l === locale
                    ? { background: "linear-gradient(135deg, #00C6FF, #0072FF)", color: "#fff" }
                    : { color: "#4A6080" }}
                  aria-label={`Cambiar a ${l === "es" ? "Español" : "English"}`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
            <Link href={`/${locale}/contacto`} className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold">
              {t("cta")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            style={{ color: "#8090A8" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col pt-[72px] overflow-y-auto"
            style={{ background: "rgba(10,13,20,0.98)", backdropFilter: "blur(20px)" }}
          >
            <nav className="flex flex-col px-6 py-6 gap-1">

              {/* Services accordion */}
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0 }}>
                <button
                  className="w-full flex items-center justify-between py-4 text-xl font-semibold border-b"
                  style={{
                    color: servicesActive ? "#00C6FF" : "#F0F4F8",
                    borderBottomColor: "#1A2840",
                    background: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  {t("services")}
                  <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="py-3 pl-4 flex flex-col gap-1">
                        {serviceItems.map(({ key, slug }) => (
                          <Link
                            key={key}
                            href={`/${locale}/servicios/${slug}`}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-lg"
                            style={{ color: "#8090A8" }}
                          >
                            <SvcIcon type={key} />
                            <span className="text-base font-medium">{ts(`items.${key}.name`)}</span>
                          </Link>
                        ))}
                        <Link
                          href={`/${locale}/servicios`}
                          className="flex items-center gap-2 py-2.5 px-3 text-sm font-semibold mt-1"
                          style={{ color: "#00C6FF" }}
                        >
                          Ver todos los servicios →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Other nav links */}
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 1) * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block py-4 text-xl font-semibold border-b"
                    style={{
                      color: pathname.startsWith(link.href) ? "#00C6FF" : "#F0F4F8",
                      borderBottomColor: "#1A2840",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 mt-4 flex flex-col gap-4">
              <div className="flex gap-2">
                {(["es", "en"] as const).map((l) => (
                  <Link
                    key={l}
                    href={l === locale ? pathname : switchLocalePath}
                    className="px-4 py-2 rounded-full text-sm font-bold border transition-colors"
                    style={l === locale
                      ? { background: "linear-gradient(135deg, #00C6FF, #0072FF)", color: "#fff", borderColor: "transparent" }
                      : { color: "#8090A8", borderColor: "#1A2840", background: "transparent" }}
                  >
                    {l.toUpperCase()}
                  </Link>
                ))}
              </div>
              <Link href={`/${locale}/contacto`} className="btn-primary text-center py-4 rounded-lg font-semibold text-base">
                {t("cta")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
