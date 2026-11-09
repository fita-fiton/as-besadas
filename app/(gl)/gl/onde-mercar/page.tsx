import { StoresPage } from "@/components/pages/stores";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata("gl", "stores");
export default function Page() { return <StoresPage locale="gl" />; }
