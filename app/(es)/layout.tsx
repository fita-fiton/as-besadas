import { SiteShell } from "@/components/site-shell";
import "@/app/globals.css";
export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="es">{children}</SiteShell>;
}
