type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-stone-200/80 bg-[#efe6d8]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16 md:px-10 md:py-24">
        <p className="text-xs uppercase tracking-[0.32em] text-stone-600">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-serif text-4xl leading-tight text-stone-950 md:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-8 text-stone-700 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
