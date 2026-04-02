import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[rgba(247,243,237,0.82)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl tracking-[0.18em] text-stone-900 uppercase">
            {siteConfig.brand}
          </span>
          <span className="text-[0.7rem] uppercase tracking-[0.28em] text-stone-500">
            Galicia · AOVE Arlequín
          </span>
        </Link>

        <nav aria-label="Principal">
          <ul className="flex items-center gap-5 text-sm text-stone-700 md:gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-stone-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
