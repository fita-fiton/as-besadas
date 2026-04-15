import Image from "next/image";

type EditorialImageFrameProps = {
  src: string;
  alt: string;
  caption?: string;
  aspectClassName?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
};

export function EditorialImageFrame({
  src,
  alt,
  caption,
  aspectClassName = "aspect-[4/5]",
  imageClassName = "object-cover object-center",
  priority = false,
  sizes,
}: EditorialImageFrameProps) {
  return (
    <figure className="space-y-3">
      <div
        className={`relative overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_20px_50px_rgba(55,60,45,0.05)] ${aspectClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClassName}
        />
      </div>
      {caption ? (
        <figcaption className="text-[0.8rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
