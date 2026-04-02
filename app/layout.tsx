import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brand} | AOVE variedad Arbequina`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.brand,
  keywords: [
    "AOVE",
    "aceite de oliva virgen extra",
    "Arbequina",
    "Galicia",
    "producción artesanal",
    "proyecto familiar",
  ],
  category: "food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-foreground)]">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
