import { ProductFormatCarousel } from "@/components/product-format-carousel";
import { copy, mailto, pagePaths, site, type Locale } from "@/content/site";
import { Action, Eyebrow, Section, SectionTitle } from "./shared";

export function ProductPage({ locale }: { locale: Locale }) {
  const t = copy[locale]; const p = pagePaths[locale];
  const productJson = { "@context": "https://schema.org", "@type": "Product", name: `${site.name} · ${t.product.title}`, description: t.product.intro, image: site.formats.map(format => `${site.url}${format.image}`), brand: { "@type": "Brand", name: site.name }, category: t.product.facts[0][1] };
  return <>
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]"><div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-9 sm:px-7 md:grid-cols-[1fr_1fr] md:gap-12 md:py-14 lg:px-10">
      <div className="md:sticky md:top-28"><Eyebrow>{t.product.eyebrow}</Eyebrow><h1 className="page-title">{t.product.title}</h1><p className="lead mt-5">{t.product.intro}</p><p className="mt-5 text-sm font-semibold text-[var(--color-accent-strong)]">{t.ui.campaign} · {site.campaign}</p><p className="mt-2 text-sm text-[var(--color-muted)]">{t.ui.formats}: {site.formats.map(item => item.label).join(" · ")}</p><div className="action-row mt-7"><Action href={p.stores}>{t.ui.buy}</Action><Action href={mailto()} secondary>{t.ui.emailOrder}</Action></div><p className="mt-5 text-sm leading-6 text-[var(--color-muted)]">{t.product.availability}</p></div>
      <ProductFormatCarousel locale={locale} />
    </div></section>
    <Section><div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]"><SectionTitle title={t.product.factsTitle} /><dl className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">{t.product.facts.map(([label, value]) => <div key={label} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr]"><dt className="text-sm text-[var(--color-muted)]">{label}</dt><dd className="font-medium">{value}</dd></div>)}<div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr]"><dt className="text-sm text-[var(--color-muted)]">{t.ui.campaign}</dt><dd className="font-medium">{site.campaign}</dd></div><div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr]"><dt className="text-sm text-[var(--color-muted)]">{t.ui.formats}</dt><dd className="font-medium">{site.formats.map(f => f.label).join(" · ")}</dd></div></dl></div></Section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJson) }} />
  </>;
}
