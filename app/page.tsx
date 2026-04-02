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
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-28">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.34em] text-stone-600">
              {homeContent.hero.eyebrow}
            </p>
            <div className="space-y-6">
              <h1 className="max-w-4xl font-serif text-5xl leading-none text-stone-950 md:text-7xl">
                {homeContent.hero.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-700">
                {homeContent.hero.text}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={homeContent.hero.primaryCta.href}
                className="rounded-full bg-stone-950 px-6 py-3 text-center text-sm font-medium text-stone-50 transition-transform hover:-translate-y-0.5"
              >
                {homeContent.hero.primaryCta.label}
              </Link>
              <Link
                href={homeContent.hero.secondaryCta.href}
                className="rounded-full border border-stone-300 px-6 py-3 text-center text-sm font-medium text-stone-800 transition-colors hover:border-stone-500"
              >
                {homeContent.hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="flex items-end">
            <div className="w-full rounded-[2rem] border border-stone-200/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.72),_rgba(243,234,222,0.92))] p-8 shadow-[0_30px_80px_rgba(61,42,22,0.08)]">
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-stone-200 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                      Primera edición
                    </p>
                    <p className="mt-2 font-serif text-3xl text-stone-950">
                      {siteConfig.productName}
                    </p>
                  </div>
                  <span className="rounded-full border border-stone-300 px-3 py-1 text-xs uppercase tracking-[0.24em] text-stone-600">
                    Informacional
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {homeContent.highlights.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.4rem] bg-white/70 p-5"
                    >
                      <h2 className="font-serif text-2xl text-stone-950">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-stone-700">
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

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <SectionHeading
          eyebrow="Esencia"
          title="Una presentación sobria para un producto con identidad local."
          description="La web se construye para explicar bien el proyecto desde el principio: qué es As Besadas, qué producto presenta y qué tipo de relación quiere tener con su territorio y con sus futuros clientes."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {homeContent.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.8rem] border border-stone-200 bg-white p-7 shadow-[0_20px_50px_rgba(61,42,22,0.04)]"
            >
              <h3 className="font-serif text-3xl text-stone-950">
                {section.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-stone-700">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Preparado para presentar el producto y abrir futuras conversaciones."
        text="La primera versión prioriza claridad, origen y tono de marca. La estructura queda lista para ampliar catálogo, idiomas y venta online más adelante."
        primaryHref="/contacto"
        primaryLabel="Ir a contacto"
        secondaryHref="/producto"
        secondaryLabel="Ver producto"
      />
    </>
  );
}
