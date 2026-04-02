import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[rgba(247,243,237,0.82)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-3.5 md:px-10 md:py-4">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-[1.45rem] tracking-[0.15em] text-stone-900 uppercase md:text-[1.65rem]">
            {siteConfig.brand}
          </span>
          <span className="text-[0.66rem] uppercase tracking-[0.24em] text-stone-500">
            Galicia · AOVE Arbequina
          </span>
        </Link>

        <nav aria-label="Principal">
          <ul className="flex items-center gap-1.5 rounded-full border border-stone-200/80 bg-white/75 px-1.5 py-1.5 text-[0.9rem] font-medium text-stone-700 shadow-[0_10px_30px_rgba(61,42,22,0.04)] md:gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-stone-100 hover:text-stone-950"
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
