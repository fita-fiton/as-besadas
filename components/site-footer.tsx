import Link from "next/link";
import { navigation, siteConfig, supportedLocales } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:rgba(89,98,75,0.14)] bg-[var(--color-dark-surface)] text-[color:rgba(247,244,237,0.88)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr] md:px-10">
        <div className="space-y-4">
          <p className="font-serif text-2xl uppercase tracking-[0.18em] text-[var(--color-accent-contrast)]">
            {siteConfig.brand}
          </p>
          <p className="max-w-md text-sm leading-7 text-[color:rgba(192,199,184,0.86)]">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[color:rgba(192,199,184,0.68)]">
            Navegación
          </p>
          <ul className="space-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[var(--color-accent-contrast)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-[color:rgba(192,199,184,0.68)]">
            Preparado para crecer
          </p>
          <p className="text-sm leading-7 text-[color:rgba(192,199,184,0.86)]">
            Idioma activo: español. Estructura prevista para{" "}
            {supportedLocales.filter((locale) => locale !== "es").join(", ")} y
            futura tienda online.
          </p>
        </div>
      </div>
    </footer>
  );
}
