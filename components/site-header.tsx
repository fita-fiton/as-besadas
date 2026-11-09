"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { copy, pagePaths, site, type Locale, type PageKey } from "@/content/site";

const keys: PageKey[] = ["home", "product", "stores", "contact"];

export function SiteHeader({ locale }: { locale: Locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = copy[locale];
  const current = keys.find((key) => pagePaths[locale][key] === pathname) ?? "home";
  const navItems = keys.map((key) => ({ key, href: pagePaths[locale][key], label: t.nav[key] }));
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[rgba(243,241,235,0.96)] backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 py-3 sm:px-7 lg:px-10">
        <div className="flex items-center justify-between gap-3">
          <Link href={pagePaths[locale].home} className="shrink-0 leading-none" onClick={() => setIsMenuOpen(false)}>
            <span className="block font-serif text-xl uppercase tracking-[0.1em] sm:text-2xl">{site.name}</span>
            <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">Callobre · A Estrada</span>
          </Link>
          <nav aria-label={t.ui.mainNav} className="hidden lg:block">
            <ul className="flex items-center gap-1 text-sm">
              {navItems.map(({ key, href, label }) => (
                <li key={key}><Link href={href} aria-current={current === key ? "page" : undefined} className={`nav-link ${current === key ? "nav-link-active" : ""}`}>{label}</Link></li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <nav aria-label={t.ui.language} className="flex items-center rounded-full border border-[var(--color-line)] p-0.5 text-xs font-semibold">
              <Link href={pagePaths.es[current]} hrefLang="es" lang="es" aria-current={locale === "es" ? "page" : undefined} className={`language-link ${locale === "es" ? "language-active" : ""}`}>ES</Link>
              <Link href={pagePaths.gl[current]} hrefLang="gl" lang="gl" aria-current={locale === "gl" ? "page" : undefined} className={`language-link ${locale === "gl" ? "language-active" : ""}`}>GL</Link>
            </nav>
            <button type="button" aria-expanded={isMenuOpen} aria-controls="mobile-site-menu" aria-label={isMenuOpen ? t.ui.closeMenu : t.ui.openMenu} onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-full border border-[var(--color-line)] px-3 py-2 text-sm font-medium lg:hidden">{t.ui.menu}</button>
          </div>
        </div>
        {isMenuOpen && <nav id="mobile-site-menu" aria-label={t.ui.mainNav} className="mt-3 border-t border-[var(--color-line)] pt-2 lg:hidden"><ul className="grid gap-0.5">{navItems.map(({ key, href, label }) => <li key={key}><Link href={href} aria-current={current === key ? "page" : undefined} onClick={() => setIsMenuOpen(false)} className={`block rounded-lg px-3 py-2.5 text-sm ${current === key ? "bg-[var(--color-surface-soft)] font-semibold" : ""}`}>{label}</Link></li>)}</ul></nav>}
      </div>
    </header>
  );
}
