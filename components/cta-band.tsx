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
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-18">
      <div className="rounded-[2rem] border border-[color:rgba(89,98,75,0.14)] bg-[var(--color-dark-surface)] px-7 py-9 text-[var(--color-accent-contrast)] md:px-11 md:py-11">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-[42rem] space-y-4">
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-dark-muted)]">
              Contacto
            </p>
            <h2 className="max-w-[16ch] font-serif text-[2rem] leading-[1.12] md:text-[2.45rem]">
              {title}
            </h2>
            <p className="max-w-[38rem] text-[1rem] leading-[1.85] text-[color:rgba(247,244,237,0.84)] md:text-[1.05rem]">
              {text}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-shrink-0">
            <Link
              href={primaryHref}
              className="rounded-full bg-[var(--color-accent-contrast)] px-5 py-3 text-center text-[0.95rem] font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface)]"
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="rounded-full border border-[color:rgba(192,199,184,0.26)] px-5 py-3 text-center text-[0.95rem] font-medium text-[var(--color-accent-contrast)] transition-colors hover:border-[color:rgba(247,244,237,0.44)] hover:bg-[color:rgba(247,244,237,0.05)]"
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
