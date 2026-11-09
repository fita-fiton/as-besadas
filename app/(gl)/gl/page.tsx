import { HomePage } from "@/components/pages/home";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata("gl", "home");
export default function Page() { return <HomePage locale="gl" />; }
