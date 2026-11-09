"use client";

import Image from "next/image";
import { useState } from "react";
import { copy, site, type Locale } from "@/content/site";

export function ProductFormatCarousel({ locale }: { locale: Locale }) {
  const [activeId, setActiveId] = useState<string>(site.formats[0].id);
  const format = site.formats.find(item => item.id === activeId) ?? site.formats[0];
  const t = copy[locale].product;
  return <div className="product-viewer">
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#ead8c7]">
      <Image key={format.id} src={format.image} alt={`${t.bottle} ${format.label}`} fill priority sizes="(max-width: 768px) 100vw, 520px" className="object-contain" />
    </div>
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
      <div className="flex gap-2" role="group" aria-label={t.selector}>
        {site.formats.map(item => <button key={item.id} type="button" aria-pressed={activeId === item.id} onClick={() => setActiveId(item.id)} className={`format-button ${activeId === item.id ? "format-active" : ""}`}>{item.label}</button>)}
      </div>
      <p className="text-sm text-[var(--color-muted)]" aria-live="polite">{t.selected}: <strong className="text-[var(--color-foreground)]">{format.label}</strong></p>
    </div>
    <p className="mt-3 text-xs text-[var(--color-muted)]">{t.note}</p>
  </div>;
}
