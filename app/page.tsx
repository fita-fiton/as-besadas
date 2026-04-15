import { EditorialImageFrame } from "@/components/editorial-image-frame";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { homeContent, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Inicio",
  description:
    "Web informativa de As Besadas, microedición atlántica de AOVE Arbequina cultivado en Callobre, A Estrada.",
});

export default function Home() {
  return (
    <>
      <section className="overflow-hidden border-b border-[var(--color-line)] bg-[radial-gradient(circle_at_top_left,_rgba(118,128,96,0.07),_transparent_32%),linear-gradient(180deg,_rgba(248,246,240,0.98)_0%,_rgba(243,241,235,1)_100%)]">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-8 px-6 py-12 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-16 lg:gap-10 lg:py-18">
          <div className="space-y-6 pt-2 md:max-w-[31rem] md:pr-5 md:pt-1 lg:pt-2">
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-muted)]">
              {homeContent.hero.eyebrow}
            </p>
            <div className="space-y-4.5 md:space-y-5">
              <h1 className="max-w-[11.5ch] text-balance font-serif text-[2.7rem] leading-[1.03] text-[var(--color-foreground)] md:text-[3.35rem] lg:text-[3.72rem]">
                {homeContent.hero.title}
              </h1>
              <p className="max-w-[31rem] text-[1rem] leading-[1.85] text-[var(--color-muted)] md:text-[1.04rem]">
                {homeContent.hero.text}
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                href={homeContent.hero.primaryCta.href}
                className="rounded-full bg-[var(--color-accent-strong)] px-5 py-3 text-center text-[0.94rem] font-medium text-[var(--color-accent-contrast)] transition-colors hover:bg-[var(--color-accent)]"
              >
                {homeContent.hero.primaryCta.label}
              </Link>
              <Link
                href={homeContent.hero.secondaryCta.href}
                className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-3 text-center text-[0.94rem] font-medium text-[var(--color-foreground)] transition-colors hover:border-[var(--color-muted)] hover:bg-[var(--color-surface)]"
              >
                {homeContent.hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="flex md:pt-6">
            <div className="w-full rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,_rgba(248,246,240,0.96),_rgba(244,242,236,0.96))] p-6 shadow-[0_30px_80px_rgba(55,60,45,0.08)] md:p-8">
              <div className="space-y-6">
                <EditorialImageFrame
                  src="/images/hero-harvest-sunset.jpeg"
                  alt="Aceitunas arbequinas en un olivar gallego al atardecer."
                  caption="Cosecha al atardecer en Callobre."
                  aspectClassName="aspect-[5/4] md:aspect-[4/5]"
                  imageClassName="object-cover object-[center_70%] md:object-[center_62%]"
                  priority
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 52vw, 560px"
                />
                <div className="flex flex-col gap-4 border-b border-[var(--color-line)] pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.26em] text-[var(--color-muted)]">
                      Microedición atlántica
                    </p>
                    <p className="mt-2 max-w-lg font-serif text-[1.65rem] leading-[1.18] text-[var(--color-foreground)] md:text-[2rem]">
                      {siteConfig.productName}
                    </p>
                  </div>
                  <span className="w-fit rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Producción limitada
                  </span>
                </div>

                <div className="grid gap-3.5">
                  {homeContent.highlights.map((item, index) => (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-5 md:px-6 md:py-5.5"
                    >
                      <div className="flex flex-col gap-3.5">
                        <div className="flex items-baseline gap-3">
                          <span className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-muted)]">
                            0{index + 1}
                          </span>
                          <h2 className="font-serif text-[1.38rem] leading-[1.18] text-[var(--color-foreground)] md:text-[1.55rem]">
                            {item.title}
                          </h2>
                        </div>
                        <p className="max-w-[34rem] text-[0.98rem] leading-[1.8] text-[var(--color-muted)]">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-18">
        <SectionHeading
          eyebrow="Esencia"
          title="Una primera presentación para contar el aceite desde su origen."
          description="As Besadas empieza con una web informativa y contenida, pensada para explicar con claridad qué hay detrás del proyecto: variedad Arbequina, cultivo en Galicia, trabajo familiar y elaboración artesanal."
        />

        <div className="mt-10 md:mt-12">
          <EditorialImageFrame
            src="/images/support-golden-grove.jpg"
            alt="Vista panorámica de nuestro olivar en Callobre, rodeado de paisaje atlántico."
            caption="Origen en Galicia"
            aspectClassName="aspect-[16/9] md:aspect-[21/9]"
            imageClassName="object-cover object-center"
            sizes="(max-width: 767px) 100vw, 1120px"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {homeContent.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-7 shadow-[0_20px_50px_rgba(55,60,45,0.04)] md:p-8"
            >
              <h3 className="max-w-[15ch] font-serif text-[1.75rem] leading-[1.18] text-[var(--color-foreground)] md:text-[1.9rem]">
                {section.title}
              </h3>
              <p className="mt-4 text-[1rem] leading-[1.85] text-[var(--color-muted)]">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Una base cuidada para presentar el proyecto con claridad."
        text="Esta primera versión pone el foco en lo esencial: producto, origen y manera de hacer. A partir de aquí, la web podrá crecer sin perder el tono sobrio y cercano con el que empieza."
        primaryHref="/contacto"
        primaryLabel="Ir a contacto"
        secondaryHref="/producto"
        secondaryLabel="Ver producto"
      />
    </>
  );
}
