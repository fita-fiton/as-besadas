import { CtaBand } from "@/components/cta-band";
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
          <SectionHeading
            eyebrow="Origen"
            title="La historia empieza en Galicia y se sostiene en una manera de trabajar cercana."
          />
          {storyContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-3xl text-lg leading-9 text-stone-700">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_rgba(61,42,22,0.05)]">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Valores
          </p>
          <ul className="mt-6 space-y-4">
            {storyContent.values.map((value) => (
              <li
                key={value}
                className="border-b border-stone-200 pb-4 font-serif text-2xl text-stone-900 last:border-b-0 last:pb-0"
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
