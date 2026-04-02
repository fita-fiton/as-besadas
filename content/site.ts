export const defaultLocale = "es";

export const supportedLocales = ["es", "gl"] as const;

export type Locale = (typeof supportedLocales)[number];

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/producto", label: "Producto" },
  { href: "/historia", label: "Historia" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const siteConfig = {
  brand: "As Besadas",
  productName: "AOVE variedad Arbequina",
  description:
    "Aceite de oliva virgen extra de variedad Arbequina, cultivado en Galicia y elaborado desde un proyecto familiar con cuidado artesanal.",
  locale: "es_ES",
  audience: "Galicia y España",
  futureSections: ["tienda", "fichas de producto", "gallego"],
} as const;

export const homeContent = {
  hero: {
    eyebrow: "Cultivado en Galicia",
    title: "AOVE variedad Arbequina, cultivado en Galicia con mirada familiar.",
    text:
      "As Besadas nace de una forma de trabajar serena y cercana. Un proyecto familiar que cuida el cultivo, la elaboración artesanal y el valor de hacer las cosas con tiempo.",
    primaryCta: { href: "/producto", label: "Conocer el producto" },
    secondaryCta: { href: "/historia", label: "Conocer la historia" },
  },
  highlights: [
    {
      title: "Arbequina",
      text:
        "Un AOVE con identidad propia, presentado desde su origen y su variedad, sin artificios ni promesas innecesarias.",
    },
    {
      title: "Producción familiar",
      text:
        "Un proyecto llevado de cerca, donde cada decisión forma parte de una manera de trabajar más humana y más atenta.",
    },
    {
      title: "Elaboración artesanal",
      text:
        "Elaboración pausada, respeto por el producto y una relación clara entre territorio, trabajo y resultado final.",
    },
  ],
  sections: [
    {
      title: "AOVE variedad Arbequina",
      text:
        "As Besadas presenta su AOVE de variedad Arbequina desde una primera web informativa, pensada para explicar el producto con claridad y dejar una base sólida para el futuro.",
    },
    {
      title: "Cultivado en Galicia",
      text:
        "Galicia no aparece aquí como un reclamo, sino como el lugar real del cultivo y del proyecto. Esa raíz local marca el tono, el ritmo y la identidad de la marca.",
    },
    {
      title: "Producción familiar y artesanal",
      text:
        "La escala contenida forma parte de su carácter. Importa el cuidado en cada paso, la cercanía al proceso y una elaboración artesanal entendida con naturalidad.",
    },
  ],
} as const;

export const productContent = {
  intro:
    "El AOVE de variedad Arbequina es el centro de As Besadas. En esta primera etapa, la página de producto reúne lo esencial: el origen gallego del cultivo, el carácter familiar del proyecto y una elaboración artesanal contada con sencillez.",
  bullets: [
    "Aceite de oliva virgen extra",
    "Variedad Arbequina",
    "Cultivado en Galicia",
    "Proyecto familiar y elaboración artesanal",
  ],
  notes: [
    {
      title: "Lo importante ahora",
      text:
        "Hablar con claridad del producto, de su variedad y de su origen. En esta fase, As Besadas prefiere contar solo lo que ya forma parte real del proyecto.",
    },
    {
      title: "Lo que podrá crecer después",
      text:
        "Más adelante podrán incorporarse formatos, imágenes, información de campaña y la futura parte de tienda, sin cambiar la base de esta presentación.",
    },
  ],
} as const;

export const storyContent = {
  paragraphs: [
    "As Besadas es un proyecto familiar que entiende el AOVE desde el cuidado y la proximidad. La intención no es correr, sino construir algo bien hecho, con raíz y con continuidad.",
    "El cultivo en Galicia y la elección de la variedad Arbequina forman parte de una historia concreta, ligada al territorio y a una manera de trabajar donde importa tanto el producto como la forma de llegar a él.",
    "Por eso esta primera web habla con calma. Presenta el origen, la voz y la dirección del proyecto, y deja preparada una base coherente para todo lo que venga después.",
  ],
  values: [
    "Raíz gallega",
    "Trabajo familiar",
    "Elaboración artesanal",
    "Sobriedad y cuidado",
  ],
} as const;

export const contactContent = {
  intro:
    "Si quieres conocer mejor As Besadas o solicitar información sobre el proyecto y su AOVE variedad Arbequina, el contacto seguirá siendo directo, cercano y sin intermediarios.",
  placeholders: [
    { label: "Correo", value: "Correo disponible próximamente" },
    { label: "Teléfono", value: "Teléfono disponible próximamente" },
    { label: "Ubicación de referencia", value: "Galicia, España" },
  ],
  cta:
    "En cuanto se incorporen los datos definitivos, esta página quedará lista para ofrecer un punto de contacto completo, manteniendo el mismo tono sobrio y cercano del resto del sitio.",
} as const;
