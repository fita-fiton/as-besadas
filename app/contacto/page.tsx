import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { contactContent } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contacto",
  description:
    "Página de contacto inicial de As Besadas, preparada para incorporar los datos reales del proyecto cuando estén disponibles.",
});

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Un espacio de contacto directo para conocer mejor el proyecto."
        description={contactContent.intro}
      />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-24">
        <div className="rounded-[2rem] bg-stone-950 p-8 text-stone-100">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
            Datos
          </p>
          <div className="mt-8 space-y-6">
            {contactContent.placeholders.map((item) => (
              <div key={item.label} className="border-b border-stone-800 pb-5 last:border-b-0">
                <p className="text-sm text-stone-400">{item.label}</p>
                <p className="mt-2 font-serif text-3xl text-stone-50">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="Siguiente paso"
            title="La página queda preparada para incorporar los datos definitivos cuando estén disponibles."
            description={contactContent.cta}
          />

          <div className="rounded-[1.8rem] border border-stone-200 bg-white p-7">
            <p className="text-base leading-8 text-stone-700">
              Mientras tanto, este espacio mantiene algo importante: una forma
              de contacto sencilla, directa y coherente con el tono del
              proyecto, sin añadir recursos innecesarios en esta primera etapa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
