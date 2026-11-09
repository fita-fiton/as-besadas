import { copy, mailto, mapUrl, pagePaths, site, type Locale } from "@/content/site";
import { Action, PageIntro, Section, SectionTitle } from "./shared";

export function StoresPage({ locale }: { locale: Locale }) {
  const t = copy[locale]; const p = pagePaths[locale];
  const cities = [...new Set(site.stores.map(store => store.city))];
  return <>
    <Section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]"><PageIntro eyebrow={t.stores.eyebrow} title={t.stores.title} intro={t.stores.intro} /><p className="body-copy mt-6 max-w-3xl">{t.stores.availability}</p></Section>
    {cities.map(city => <Section key={city} className="border-b border-[var(--color-line)]"><h2 className="section-title">{city}</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{site.stores.filter(store => store.city === city).map(store => <article key={store.name} className="store-card"><h3 className="font-serif text-2xl">{store.name}</h3><address className="mt-4 max-w-sm not-italic leading-7 text-[var(--color-muted)]">{store.address}</address><a href={mapUrl(store.name, store.address)} target="_blank" rel="noopener noreferrer" className="text-link mt-6 inline-flex items-center gap-2">{t.ui.maps}<span aria-hidden="true">↗</span></a></article>)}</div></Section>)}
    <Section><div className="grid gap-8 md:grid-cols-2"><div><SectionTitle title={t.stores.helpTitle} text={t.stores.helpText} /><div className="action-row mt-6"><Action href={mailto()} secondary>{t.ui.emailOrder}</Action></div></div><div className="md:border-l md:border-[var(--color-line)] md:pl-10"><SectionTitle title={t.product.closeTitle} text={t.product.closeText} /><div className="action-row mt-6"><Action href={p.product}>{t.stores.productLink}</Action></div></div></div></Section>
  </>;
}
