import Link from "next/link";
import { copy, pagePaths, site, type Locale, type PageKey } from "@/content/site";

const keys: PageKey[] = ["home", "product", "stores", "contact"];
export function SiteFooter({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <footer className="mt-12 border-t border-[var(--color-line)] bg-[var(--color-dark-surface)] text-[var(--color-accent-contrast)]">
    <div className="mx-auto grid max-w-6xl gap-9 px-5 py-10 sm:px-7 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
      <div><p className="font-serif text-2xl uppercase tracking-[0.12em]">{site.name}</p><p className="mt-3 max-w-xs text-sm leading-7 text-[var(--color-dark-muted)]">{t.footer}</p></div>
      <nav aria-label={t.ui.mainNav}><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--color-dark-muted)]">{t.ui.mainNav}</p><ul className="grid gap-2 text-sm">{keys.map(key => <li key={key}><Link href={pagePaths[locale][key]}>{t.nav[key]}</Link></li>)}</ul></nav>
      <div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--color-dark-muted)]">{t.ui.contact}</p><a className="break-all text-sm underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a><p className="mt-5 text-xs text-[var(--color-dark-muted)]">© {new Date().getFullYear()} {site.name}</p></div>
    </div>
  </footer>;
}
