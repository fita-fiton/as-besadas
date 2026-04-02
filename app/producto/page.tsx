import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { productContent } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Producto",
  description:
    "Información sobre el AOVE Arbequina de As Besadas: origen en Callobre, cosecha temprana, producción limitada y formatos disponibles.",
});

export default function ProductoPage() {
  return (
    <>
      <PageHero
        eyebrow="Producto"
        title="Un AOVE Arbequina de producción limitada, trabajado desde el olivar hasta la almazara."
        description={productContent.intro}
      />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-24">
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 shadow-[0_20px_60px_rgba(55,60,45,0.05)]">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Identidad base
          </p>
          <ul className="mt-6 space-y-4">
            {productContent.bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4 text-base text-[var(--color-foreground)]"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="Primera ficha"
            title="Lo esencial del producto, contado con claridad."
            description="As Besadas presenta aquí lo que hoy define su aceite: variedad Arbequina, cosecha temprana, trabajo directo sobre el olivar y una producción pequeña ligada a Callobre."
          />

          <div className="grid gap-6">
            {productContent.notes.map((note) => (
              <article
                key={note.title}
                className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-7"
              >
                <h2 className="font-serif text-3xl text-[var(--color-foreground)]">
                  {note.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                  {note.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Una ficha pensada para informar bien antes de crecer."
        text="Cuando el proyecto incorpore más datos de campaña o venta, esta base permitirá ampliarlos sin perder claridad ni sobriedad."
        primaryHref="/contacto"
        primaryLabel="Solicitar información"
        secondaryHref="/historia"
        secondaryLabel="Conocer la historia"
      />
    </>
  );
}
