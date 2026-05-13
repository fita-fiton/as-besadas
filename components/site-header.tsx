"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation, siteConfig } from "@/content/site";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[rgba(243,241,235,0.88)] backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-3.5 sm:px-6 md:px-10 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0 flex-1" onClick={() => setIsMenuOpen(false)}>
            <span className="block truncate font-serif text-[1.18rem] tracking-[0.12em] text-[var(--color-foreground)] uppercase sm:text-[1.32rem] md:text-[1.65rem] md:tracking-[0.15em]">
              {siteConfig.brand}
            </span>
            <span className="block truncate text-[0.58rem] uppercase tracking-[0.2em] text-[var(--color-muted)] sm:text-[0.62rem] md:text-[0.66rem] md:tracking-[0.24em]">
              Callobre · A Estrada
            </span>
          </Link>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-site-menu"
            aria-label="Abrir menú de navegación"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[rgba(248,246,240,0.94)] px-3.5 py-2 text-[0.78rem] font-medium text-[var(--color-foreground)] shadow-[0_10px_24px_rgba(55,60,45,0.04)] transition-colors hover:bg-[var(--color-surface)] md:hidden"
          >
            <span>Menú</span>
            <span className="flex w-3.5 flex-col gap-1">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-[rgba(248,246,240,0.9)] px-1.5 py-1.5 text-[0.9rem] font-medium text-[var(--color-muted)] shadow-[0_10px_30px_rgba(55,60,45,0.04)] md:gap-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-site-menu"
            aria-label="Principal"
            className="mt-4 rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(248,246,240,0.96)] p-2 shadow-[0_18px_40px_rgba(55,60,45,0.06)] md:hidden"
          >
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-[1.1rem] px-4 py-3 text-[0.98rem] font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
