import { permanentRedirect } from "next/navigation";
import { fincaAnchor, pagePaths } from "@/content/site";

export default function Page() {
  permanentRedirect(`${pagePaths.gl.home}#${fincaAnchor.gl}`);
}
