import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { productContent } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Producto",
  description:
    "Aceite de oliva virgen extra Arbequina de As Besadas, cultivado en Callobre, A Estrada, con cosecha manual en octubre, molturación en frío y producción limitada.",
});

export default function ProductoPage() {
  return (
    <>
      <PageHero
        eyebrow="Producto"
        title="Aceite de oliva virgen extra Arbequina"
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
            eyebrow="El aceite"
            title="Lo esencial del producto, contado desde el origen y el proceso."
            description="As Besadas presenta un AOVE Arbequina cultivado en Callobre, A Estrada, con cosecha temprana en octubre, recogida manual y molturación en frío antes de 24 horas."
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
        title="Una producción corta que se ofrece con información clara."
        text="Cada campaña ofrece una cantidad limitada de botellas. Si quieres consultar disponibilidad o reservar, el siguiente paso es hablar directamente con nosotros."
        primaryHref="/contacto"
        primaryLabel="Solicitar información"
        secondaryHref="/historia"
        secondaryLabel="Conocer la historia"
      />
    </>
  );
}
