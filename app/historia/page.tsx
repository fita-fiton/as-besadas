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
        title="Un proyecto familiar que quiere crecer sin perder su escala ni su origen."
        description="As Besadas se presenta desde la cercanía, el territorio y una forma de trabajar que prioriza el cuidado frente a la prisa."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-24">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Origen"
            title="La historia empieza en Galicia y se cuenta con una voz sobria."
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
        title="La historia de marca ya tiene una base coherente para seguir creciendo."
        text="Cuando quieras ampliar esta página, se pueden incorporar fotografías del proceso, hitos familiares o más contexto sobre la elaboración."
        primaryHref="/contacto"
        primaryLabel="Hablar con As Besadas"
        secondaryHref="/"
        secondaryLabel="Volver al inicio"
      />
    </>
  );
}
