import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}</p>; }
export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) { return <section id={id} className={`section-wrap ${className}`}>{children}</section>; }
export function PageIntro({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) { return <div className="max-w-3xl"><Eyebrow>{eyebrow}</Eyebrow><h1 className="page-title">{title}</h1><p className="lead mt-5">{intro}</p></div>; }
export function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) { return <div className="max-w-2xl">{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2 className="section-title">{title}</h2>{text && <p className="body-copy mt-5">{text}</p>}</div>; }
export function Action({ href, children, secondary = false, external = false }: { href: string; children: ReactNode; secondary?: boolean; external?: boolean }) {
  const className = secondary ? "button button-secondary" : "button button-primary";
  return external || href.startsWith("mailto:") ? <a className={className} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{children}<span aria-hidden="true">↗</span></a> : <Link className={className} href={href}>{children}<span aria-hidden="true">{href.startsWith("mailto:") ? "↗" : "→"}</span></Link>;
}
export function Photo({ src, alt, className = "", sizes = "(max-width: 768px) 100vw, 50vw", priority = false }: { src: string; alt: string; className?: string; sizes?: string; priority?: boolean }) {
  return <div className={`photo ${className}`}><Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" /></div>;
}
