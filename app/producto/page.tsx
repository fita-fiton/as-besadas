import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { productContent } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Producto",
  description:
    "Información inicial sobre el AOVE variedad Arlequín de As Besadas y la estructura prevista para su futura ficha de producto.",
});

export default function ProductoPage() {
  return (
    <>
      <PageHero
        eyebrow="Producto"
        title="AOVE variedad Arlequín con una presentación clara y honesta."
        description={productContent.intro}
      />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-24">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_rgba(61,42,22,0.05)]">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Identidad base
          </p>
          <ul className="mt-6 space-y-4">
            {productContent.bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-[1.2rem] bg-stone-50 px-5 py-4 text-base text-stone-800"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="Primera ficha"
            title="Lo importante en esta fase es explicar bien el proyecto."
            description="La página de producto queda preparada para crecer sin rehacer la base. Ahora mismo muestra solo la información confirmada y deja claro dónde se incorporarán los siguientes detalles."
          />

          <div className="grid gap-6">
            {productContent.notes.map((note) => (
              <article
                key={note.title}
                className="rounded-[1.8rem] border border-stone-200/90 bg-[#efe6d8] p-7"
              >
                <h2 className="font-serif text-3xl text-stone-950">
                  {note.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-stone-700">
                  {note.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Cuando dispongas de más datos, la ficha puede ampliarse sin cambiar la arquitectura."
        text="La estructura actual permite añadir formatos, imágenes, notas de cata y futura compra online dentro del mismo proyecto."
        primaryHref="/contacto"
        primaryLabel="Solicitar información"
        secondaryHref="/historia"
        secondaryLabel="Conocer la historia"
      />
    </>
  );
}
