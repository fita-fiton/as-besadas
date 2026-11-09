import { ProductPage } from "@/components/pages/product";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata("gl", "product");
export default function Page() { return <ProductPage locale="gl" />; }
