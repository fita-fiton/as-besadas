type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-[var(--color-line)] bg-[linear-gradient(180deg,_rgba(248,246,240,0.96),_rgba(243,241,235,1)_100%)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16 md:px-10 md:py-24">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-serif text-4xl leading-tight text-[var(--color-foreground)] md:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
