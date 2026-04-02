import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { homeContent, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Inicio",
  description:
    "Web informativa de As Besadas, proyecto familiar de AOVE variedad Arlequín cultivado en Galicia.",
});

export default function Home() {
  return (
    <>
      <section className="overflow-hidden border-b border-stone-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(216,193,165,0.45),_transparent_35%),linear-gradient(180deg,_#f7f3ed_0%,_#f3ece2_100%)]">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-[1.02fr_0.98fr] md:px-10 md:py-20">
          <div className="space-y-7 md:pr-4">
            <p className="text-xs uppercase tracking-[0.34em] text-stone-600">
              {homeContent.hero.eyebrow}
            </p>
            <div className="space-y-5">
              <h1 className="max-w-3xl font-serif text-[3.2rem] leading-[0.95] text-stone-950 md:text-[5.35rem]">
                {homeContent.hero.title}
              </h1>
              <p className="max-w-xl text-[1.05rem] leading-8 text-stone-700 md:text-[1.15rem]">
                {homeContent.hero.text}
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <Link
                href={homeContent.hero.primaryCta.href}
                className="rounded-full bg-stone-950 px-6 py-3.5 text-center text-sm font-medium text-stone-50 transition-transform hover:-translate-y-0.5"
              >
                {homeContent.hero.primaryCta.label}
              </Link>
              <Link
                href={homeContent.hero.secondaryCta.href}
                className="rounded-full border border-stone-300 px-6 py-3.5 text-center text-sm font-medium text-stone-800 transition-colors hover:border-stone-500"
              >
                {homeContent.hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="flex">
            <div className="w-full rounded-[2rem] border border-stone-200/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.72),_rgba(243,234,222,0.92))] p-7 shadow-[0_30px_80px_rgba(61,42,22,0.08)] md:p-9">
              <div className="space-y-7">
                <div className="flex flex-col gap-4 border-b border-stone-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                      Primera edición
                    </p>
                    <p className="mt-2 max-w-md font-serif text-[2rem] leading-tight text-stone-950 md:text-[2.35rem]">
                      {siteConfig.productName}
                    </p>
                  </div>
                  <span className="w-fit rounded-full border border-stone-300 px-3 py-1 text-xs uppercase tracking-[0.24em] text-stone-600">
                    Informacional
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {homeContent.highlights.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.4rem] bg-white/70 p-6"
                    >
                      <h2 className="font-serif text-[1.8rem] leading-tight text-stone-950">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-[0.98rem] leading-7 text-stone-700">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <SectionHeading
          eyebrow="Esencia"
          title="Una primera presentación para contar el producto desde su origen."
          description="As Besadas empieza con una web informativa y contenida, pensada para explicar con claridad qué hay detrás del proyecto: variedad, cultivo en Galicia, trabajo familiar y elaboración artesanal."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {homeContent.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.8rem] border border-stone-200 bg-white p-8 shadow-[0_20px_50px_rgba(61,42,22,0.04)]"
            >
              <h3 className="max-w-[14ch] font-serif text-[2rem] leading-tight text-stone-950">
                {section.title}
              </h3>
              <p className="mt-5 text-[1.02rem] leading-8 text-stone-700">
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
