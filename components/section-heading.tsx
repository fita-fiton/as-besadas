type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-5">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-3xl font-serif text-4xl leading-tight text-stone-950 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-lg leading-8 text-stone-700">
          {description}
        </p>
      ) : null}
    </div>
  );
}
