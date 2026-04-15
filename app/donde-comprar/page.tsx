import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { whereToBuyContent } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Dónde comprar",
  description:
    "Puntos de venta locales donde encontrar As Besadas, AOVE Arbequina cultivado en Callobre, A Estrada.",
});

export default function DondeComprarPage() {
  return (
    <>
      <PageHero
        eyebrow="Dónde comprar"
        title="Dónde encontrar As Besadas"
        description={whereToBuyContent.intro}
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <SectionHeading
          eyebrow="Puntos de venta"
          title="Tiendas locales donde encontrar el aceite."
          description="La disponibilidad puede variar según campaña y formato. Para cualquier duda concreta, puedes contactar directamente con As Besadas."
        />

        <div className="mt-10 space-y-12 md:mt-14">
          {whereToBuyContent.locations.map((group) => (
            <section key={group.city} className="space-y-5">
              <h2 className="border-b border-[var(--color-line)] pb-4 text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                {group.city}
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                {group.stores.map((store) => (
                  <article
                    key={store.name}
                    className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-7 shadow-[0_20px_50px_rgba(55,60,45,0.04)] md:p-8"
                  >
                    <h3 className="font-serif text-[1.75rem] leading-[1.18] text-[var(--color-foreground)] md:text-[1.95rem]">
                      {store.name}
                    </h3>
                    <p className="mt-4 max-w-md text-[1rem] leading-8 text-[var(--color-muted)]">
                      {store.address}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
