import { ProductPage } from "@/components/pages/product";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata("es", "product");
export default function Page() { return <ProductPage locale="es" />; }
