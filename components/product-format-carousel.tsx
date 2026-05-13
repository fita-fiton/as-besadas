"use client";

import Image from "next/image";
import { useState } from "react";

const formats = [
  {
    id: "250",
    label: "250 ml",
    caption: "Botella 250 ml",
    src: "/images/product-bottle-250ml-v2.png",
    alt: "Botella de 250 ml de aceite de oliva virgen extra As Besadas",
  },
  {
    id: "500",
    label: "500 ml",
    caption: "Botella 500 ml",
    src: "/images/product-bottle-500ml-v2.png",
    alt: "Botella de 500 ml de aceite de oliva virgen extra As Besadas",
  },
] as const;

export function ProductFormatCarousel() {
  const [activeId, setActiveId] = useState<(typeof formats)[number]["id"]>("250");

  const activeFormat =
    formats.find((format) => format.id === activeId) ?? formats[0];

  return (
    <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,_rgba(248,246,240,0.98),_rgba(242,239,232,0.98))] p-5 md:p-6">
      <div
        role="tablist"
        aria-label="Seleccionar formato de botella"
        className="inline-flex rounded-full border border-[var(--color-line)] bg-[rgba(250,248,243,0.92)] p-1"
      >
        {formats.map((format) => {
          const isActive = format.id === activeId;

          return (
            <button
              key={format.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`product-format-panel-${format.id}`}
              id={`product-format-tab-${format.id}`}
              onClick={() => setActiveId(format.id)}
              className={`rounded-full px-4 py-2 text-[0.8rem] font-medium transition-colors ${
                isActive
                  ? "bg-[var(--color-accent-strong)] text-[var(--color-accent-contrast)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
              }`}
            >
              {format.label}
            </button>
          );
        })}
      </div>

      <div
        id={`product-format-panel-${activeFormat.id}`}
        role="tabpanel"
        aria-labelledby={`product-format-tab-${activeFormat.id}`}
        className="mt-5"
      >
        <div className="rounded-[1.35rem] bg-[rgba(250,248,243,0.9)] p-6 md:p-8">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[22rem]">
            <Image
              src={activeFormat.src}
              alt={activeFormat.alt}
              fill
              className="object-contain"
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 42vw, 420px"
              priority
            />
          </div>
        </div>
        <p className="mt-4 text-[0.72rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
          {activeFormat.caption}
        </p>
      </div>
    </div>
  );
}
