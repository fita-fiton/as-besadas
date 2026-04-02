import { CtaBand } from "@/components/cta-band";
import { EditorialImageFrame } from "@/components/editorial-image-frame";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { storyContent } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Historia",
  description:
    "Historia e identidad de As Besadas como proyecto familiar, artesanal y de origen gallego.",
});

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Historia"
        title="Una historia familiar ligada al cultivo, al territorio y al tiempo de hacer bien las cosas."
        description="As Besadas se cuenta desde Galicia y desde una forma de trabajar donde importa la cercanía al producto, la elaboración artesanal y el valor de avanzar sin prisa."
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
            title="La historia empieza en Galicia y se sostiene en una manera de trabajar cercana."
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
        title="La historia queda abierta para seguir contándose con la misma calma."
        text="Más adelante podrán incorporarse imágenes, momentos del proceso o más contexto familiar, manteniendo una voz sobria y fiel al origen del proyecto."
        primaryHref="/contacto"
        primaryLabel="Hablar con As Besadas"
        secondaryHref="/"
        secondaryLabel="Volver al inicio"
      />
    </>
  );
}
