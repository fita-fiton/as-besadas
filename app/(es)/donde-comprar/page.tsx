import { StoresPage } from "@/components/pages/stores";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata("es", "stores");
export default function Page() { return <StoresPage locale="es" />; }
