import Image from "next/image";
import { copy, fincaAnchor, pagePaths, site, type Locale } from "@/content/site";
import { Action, Eyebrow, Photo, Section, SectionTitle } from "./shared";

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale]; const p = pagePaths[locale];
  return <>
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:px-7 md:grid-cols-2 md:gap-10 md:py-14 lg:px-10">
        <div><Eyebrow>{t.home.eyebrow}</Eyebrow><h1 className="page-title max-w-[13ch]">{t.home.title}</h1><p className="lead mt-6 max-w-xl">{t.home.intro}</p><div className="action-row mt-7"><Action href={p.stores}>{t.ui.buy}</Action><Action href={p.product} secondary>{t.ui.learn}</Action></div><p className="mt-7 text-sm text-[var(--color-muted)]">{t.ui.campaign}: <strong className="text-[var(--color-foreground)]">{site.campaign}</strong></p></div>
        <div className="relative aspect-[4/5] max-h-[590px] overflow-hidden rounded-2xl bg-[#e9d7c5]"><Image src={site.formats[1].image} alt={`${t.product.bottle} ${site.formats[1].label}`} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" /></div>
      </div>
    </section>
    <Section id={fincaAnchor[locale]} className="scroll-mt-24 border-y border-[var(--color-line)] bg-[var(--color-surface)]"><div className="grid items-center gap-8 md:grid-cols-[1fr_1fr] md:gap-12"><div><SectionTitle eyebrow={t.home.originEyebrow} title={t.home.originTitle} text={t.home.originText} /></div><Photo src="/images/support-daylight-grove.jpeg" alt={t.home.groveAlt} className="aspect-[5/4]" /></div></Section>
    <Section><div className="grid items-end gap-6 md:grid-cols-[1fr_auto]"><SectionTitle eyebrow={t.home.storesEyebrow} title={t.home.storesTitle} text={t.home.storesText} /><div className="action-row"><Action href={p.stores}>{t.ui.buy}</Action></div></div><div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--color-line)] pt-5 text-sm"><span className="font-semibold">A Estrada</span><span className="text-[var(--color-muted)]">Artesa · Amifrut · Frutería Castelao</span><span className="mx-2 hidden text-[var(--color-line)] md:inline">|</span><span className="font-semibold">Santiago de Compostela</span><span className="text-[var(--color-muted)]">Fame Neghra</span></div></Section>
  </>;
}
