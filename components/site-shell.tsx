import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site, type Locale } from "@/content/site";

export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, email: site.email };
  return (
    <html lang={locale} className="scroll-smooth antialiased">
      <body className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
        <a href="#main-content" className="skip-link">{locale === "es" ? "Saltar al contenido" : "Saltar ao contido"}</a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader locale={locale} />
          <main id="main-content" className="flex-1">{children}</main>
          <SiteFooter locale={locale} />
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <Analytics />
      </body>
    </html>
  );
}
