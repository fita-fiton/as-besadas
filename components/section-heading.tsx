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
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-[18ch] font-serif text-[2.15rem] leading-[1.12] text-[var(--color-foreground)] md:text-[2.8rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[44rem] text-[1rem] leading-[1.9] text-[var(--color-muted)] md:text-[1.06rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
