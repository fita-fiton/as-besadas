import { HomePage } from "@/components/pages/home";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata("es", "home");
export default function Page() { return <HomePage locale="es" />; }
