"use client";

import Link from "next/link";
import { useState } from "react";
import { type Lang } from "@/lib/legal-translations";
import { useTranslations } from "next-intl";

interface Section {
    id: string;
    title: string;
    content: string[];
}

interface LegalLayoutProps {
    page: "privacy" | "terms";
}

function HeroSection({
    badge,
    title,
    subtitle,
    lastUpdated,
}: {
    badge: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
}) {
    return (
        <section className="relative overflow-hidden border-b border-bg-border">
            {/* Background effects */}
            <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
            <div
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full opacity-10 blur-3xl"
                style={{ background: "var(--grad-signature)" }}
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-pill border border-bg-border] bg-bg-card px-4 py-1.5">
                    <span
                        className="h-1.5 w-1.5 rounded-full animate-pulse"
                        style={{ background: "var(--grad-aurora)" }}
                        aria-hidden="true"
                    />
                    <span className="font-mono text-xs font-medium tracking-widest text-text-secondary">
                        {badge}
                    </span>
                </div>

                {/* Title */}
                <h1 className="gradient-text mb-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                    {title}
                </h1>

                {/* Subtitle */}
                <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                    {subtitle}
                </p>

                {/* Last updated */}
                <span className="font-mono text-xs text-text-muted">{lastUpdated}</span>
            </div>
        </section>
    );
}

function TableOfContents({
    sections,
    activeId,
}: {
    sections: Section[];
    activeId: string;
}) {
    return (
        <nav aria-label="Table of contents" className="sticky top-24">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-text-muted">
                Contents
            </p>
            <ul className="space-y-1">
                {sections.map((s) => (
                    <li key={s.id}>
                        <a
                            href={`#${s.id}`}
                            className={`block rounded-[6px] px-3 py-1.5 text-sm transition-all duration-200
                ${activeId === s.id
                                    ? "bg-[#0F1825] text-[#00C6FF] border-l-2 border-[#00C6FF]"
                                    : "text-[#8090A8] hover:text-[#F0F4F8] hover:bg-[#0F1825]/60"
                                }`}
                        >
                            {s.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function SectionBlock({ section }: { section: Section }) {
    return (
        <article
            id={section.id}
            className="scroll-mt-24 rounded-card border border-[#1A2840] bg-[#0F1825] p-8 card-hover"
        >
            <h2 className="mb-5 text-lg font-bold text-[#F0F4F8] leading-snug">
                {section.title}
            </h2>
            <div className="space-y-3">
                {section.content.map((paragraph, idx) => (
                    <p
                        key={idx}
                        className={`text-sm leading-relaxed ${paragraph.startsWith("•")
                                ? "ml-4 text-[#8090A8]"
                                : paragraph.includes("@arkmapix.com")
                                    ? "text-[#8090A8]"
                                    : "text-[#8090A8]"
                            }`}
                    >
                        {paragraph.includes("contacto@arkmapix.com") ? (
                            <>
                                {paragraph.split("contacto@arkmapix.com").map((part, i, arr) => (
                                    <span key={i}>
                                        {part}
                                        {i < arr.length - 1 && (
                                            <a
                                                href="mailto:contacto@arkmapix.com"
                                                className="text-[#00C6FF] hover:text-[#00FFD1] transition-colors duration-200
                                   underline underline-offset-2"
                                            >
                                                contacto@arkmapix.com
                                            </a>
                                        )}
                                    </span>
                                ))}
                            </>
                        ) : (
                            paragraph
                        )}
                    </p>
                ))}
            </div>
        </article>
    );
}

function ContactBlock({
    title,
    description,
    emailLabel,
    backCta,
}: {
    title: string;
    description: string;
    emailLabel: string;
    backCta: string;
}) {
    return (
        <section className="relative overflow-hidden rounded-card border border-bg-border">
            
            <div
                className="absolute inset-0 opacity-5"
                style={{ background: "var(--grad-signature)" }}
                aria-hidden="true"
            />
            <div className="relative px-8 py-12 text-center">
                <h2 className="mb-3 text-2xl font-bold text-text-primary">{title}</h2>
                <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-text-secondary">
                    {description}
                </p>
                <a
                    href={`mailto:${emailLabel}`}
                    className="btn-primary rounded-btn px-6 py-3 text-sm font-semibold"
                >
                    {emailLabel}
                </a>
            </div>
        </section>
    );
}



// ── Main Layout ───────────────────────────────────────────────────────────────

export default function LegalLayout({ page}: LegalLayoutProps) {
    
    const [activeId, setActiveId] = useState("");

    const t = useTranslations(page);

    const observeSection = (node: HTMLElement | null) => {
        if (!node) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: "-20% 0% -70% 0%" }
        );
        node.querySelectorAll("article[id]").forEach((el) => observer.observe(el));
    };

    return (
        <div className="min-h-screen bg-bg-primary text-text-primary">
           
            <HeroSection
                badge={t('badge')}
                title={t('title')}
                subtitle={t('subtitle')}
                lastUpdated={t('last_updated')}
            />

            <main className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">

                    {/* Sidebar TOC — hidden on mobile */}
                    <aside className="hidden lg:block">
                        <TableOfContents sections={t.raw('sections')} activeId={activeId} />
                    </aside>

                    {/* Sections */}
                    <div ref={observeSection} className="space-y-4">
                        {t.raw('sections').map((section: Section) => (
                            <SectionBlock key={section.id} section={section} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
