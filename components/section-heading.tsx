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
    <div className="space-y-4">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-stone-950 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-stone-700">
          {description}
        </p>
      ) : null}
    </div>
  );
}
