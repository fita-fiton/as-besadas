import { ContactPage } from "@/components/pages/contact";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata("es", "contact");
export default function Page() { return <ContactPage locale="es" />; }
