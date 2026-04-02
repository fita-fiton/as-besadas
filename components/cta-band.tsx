import Link from "next/link";

type CtaBandProps = {
  title: string;
  text: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="rounded-[2rem] bg-stone-900 px-8 py-10 text-stone-100 md:px-12 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.32em] text-stone-400">
              Contacto
            </p>
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              {title}
            </h2>
            <p className="text-base leading-8 text-stone-300">{text}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="rounded-full bg-[#d3b48a] px-6 py-3 text-center text-sm font-medium text-stone-950 transition-transform hover:-translate-y-0.5"
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="rounded-full border border-stone-600 px-6 py-3 text-center text-sm font-medium text-stone-100 transition-colors hover:border-stone-300 hover:text-white"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
