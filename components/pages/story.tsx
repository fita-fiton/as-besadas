import { copy, pagePaths, type Locale } from "@/content/site";
import { Action, PageIntro, Photo, Section, SectionTitle } from "./shared";

export function StoryPage({ locale }: { locale: Locale }) {
  const t = copy[locale]; const p = pagePaths[locale];
  return <>
    <Section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]"><PageIntro eyebrow={t.story.eyebrow} title={t.story.title} intro={t.story.intro} /></Section>
    <Section><div className="max-w-3xl"><SectionTitle eyebrow={t.story.startEyebrow} title={t.story.startTitle} text={t.story.startText} /></div></Section>
    <Section className="border-y border-[var(--color-line)] bg-[var(--color-surface)]"><div className="grid items-center gap-8 md:grid-cols-2 md:gap-12"><Photo src="/images/support-golden-grove.jpg" alt={t.story.imageAlt} className="aspect-[5/4]" /><SectionTitle eyebrow={t.story.plantingEyebrow} title={t.story.plantingTitle} text={t.story.plantingText} /></div></Section>
    <Section><div className="grid items-center gap-8 md:grid-cols-2 md:gap-12"><div><SectionTitle eyebrow={t.story.todayEyebrow} title={t.story.todayTitle} text={t.story.todayText} /><div className="action-row mt-8"><Action href={p.product}>{t.ui.learn}</Action><Action href={p.stores} secondary>{t.ui.buy}</Action></div></div><Photo src="/images/support-harvest-wide.jpeg" alt={t.story.harvestAlt} className="aspect-[5/4]" /></div></Section>
  </>;
}
