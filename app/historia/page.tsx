import { CtaBand } from "@/components/cta-band";
import { EditorialImageFrame } from "@/components/editorial-image-frame";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { storyContent } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Historia",
  description:
    "Historia de As Besadas: proyecto familiar nacido en Callobre para recuperar el cultivo del olivo en Galicia.",
});

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Historia"
        title="Un proyecto familiar nacido para recuperar el olivo en una tierra propia de Galicia."
        description="As Besadas empieza en Callobre, A Estrada, a partir del trabajo sobre una finca familiar y de la voluntad de dar continuidad al cultivo del olivo desde una escala real y cuidada."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-24">
        <div className="space-y-6">
          <EditorialImageFrame
            src="/images/support-daylight-grove.jpeg"
            alt="Paisaje diurno del olivar como apoyo visual al origen y al territorio"
            caption="Paisaje y territorio"
            aspectClassName="aspect-[16/10]"
            imageClassName="object-cover object-center"
            sizes="(max-width: 767px) 100vw, 62vw"
          />
          <SectionHeading
            eyebrow="Origen"
            title="La historia de As Besadas se entiende desde el lugar, la tierra y la escala del proyecto."
          />
          {storyContent.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-3xl text-lg leading-9 text-[var(--color-muted)]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 shadow-[0_20px_60px_rgba(55,60,45,0.05)]">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Valores
          </p>
          <ul className="mt-6 space-y-4">
            {storyContent.values.map((value) => (
              <li
                key={value}
                className="border-b border-[var(--color-line)] pb-4 font-serif text-2xl text-[var(--color-foreground)] last:border-b-0 last:pb-0"
              >
                {value}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <CtaBand
        title="La historia continúa en el trabajo de cada campaña."
        text="Lo importante ahora es dejar claro de dónde viene el proyecto y cómo se sostiene. Lo demás podrá incorporarse con el tiempo, sin forzar el relato."
        primaryHref="/contacto"
        primaryLabel="Hablar con As Besadas"
        secondaryHref="/"
        secondaryLabel="Volver al inicio"
      />
    </>
  );
}
