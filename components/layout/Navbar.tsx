"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { AcademyIcon, AiIcon, BusinessIcon, CloudIcon, DataIcon, SoftwareIcon } from "../icons/ServicesIcons";

// Service icons inline SVG
function SvcIcon({ type }: { type: string }) {
    const icons: Record<string, React.ReactNode> = {
        software_engineering: (
            <SoftwareIcon />
        ),
        ai_ml: (
            <AiIcon />
        ),
        data_analytics: (
            <DataIcon />
        ),
        business_transformation: (
            <BusinessIcon />
        ),
        cloud_devops: (
            <CloudIcon />
        ),
        academy: (
            <AcademyIcon />
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
        { key: "software_engineering", slug: "software-engineering" },
        { key: "ai_ml", slug: "ai-ml" },
        { key: "data_analytics", slug: "data-analytics" },
        { key: "business_transformation", slug: "business-transformation" },
        { key: "cloud_devops", slug: "cloud-devops" },
        { key: "academy", slug: "academy" },
    ] as const;

    const navLinks = [
        { href: `/${locale}/casos`, label: t("cases") },
        { href: `/${locale}/academia`, label: t("academy") },
        { href: `/${locale}/nosotros`, label: t("about") },
    ];

    const otherLocale = locale === "es" ? "en" : "es";
    const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

    const servicesActive = pathname.startsWith(`/${locale}/servicios`);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "navbar-glass border-b" : "bg-transparent"
                    }`}
                style={{ height: "72px", borderBottomColor: scrolled ? "#1A2840" : "transparent" }}
            >
                <div className="mx-auto flex items-center justify-between h-full px-6" style={{ maxWidth: "1280px" }}>

                    {/* Logo */}
                    <Link href={`/${locale}`} className="flex items-center gap-1 shrink-0" aria-label="ARKMAPIX — inicio">

                        <img src="/logo-app.png" className="w-7 h-7" alt="logo de la app" />
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
                                                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
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
                    <div className="hidden lg:flex items-center gap-4 shrink-0">
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
