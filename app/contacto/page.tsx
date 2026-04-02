import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { contactContent } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contacto",
  description:
    "Página de contacto de As Besadas para consultas sobre el proyecto, el aceite y sus formatos.",
});

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Un contacto directo para consultas sobre As Besadas y su aceite."
        description={contactContent.intro}
      />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-24">
        <div className="rounded-[2rem] border border-[color:rgba(89,98,75,0.14)] bg-[var(--color-dark-surface)] p-8 text-[var(--color-accent-contrast)]">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-dark-muted)]">
            Datos
          </p>
          <div className="mt-8 space-y-6">
            {contactContent.placeholders.map((item) => (
              <div
                key={item.label}
                className="border-b border-[var(--color-dark-surface-2)] pb-5 last:border-b-0"
              >
                <p className="text-sm text-[var(--color-dark-muted)]">{item.label}</p>
                <p className="mt-2 font-serif text-3xl text-[var(--color-accent-contrast)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="Siguiente paso"
            title="Un punto de contacto claro para responder con cercanía y sin intermediarios."
            description={contactContent.cta}
          />

          <div className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
            <p className="text-base leading-8 text-[var(--color-muted)]">
              Si necesitas información sobre disponibilidad, formatos o el
              proyecto en Callobre, este será el canal para hacerlo de forma
              sencilla y directa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
