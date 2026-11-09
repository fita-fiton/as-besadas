import { SiteShell } from "@/components/site-shell";
import "@/app/globals.css";
export default function GalicianLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="gl">{children}</SiteShell>;
}
