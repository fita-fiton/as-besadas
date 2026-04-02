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
  productName: "AOVE variedad Arlequín",
  description:
    "Aceite de oliva virgen extra de origen gallego, elaborado con una mirada familiar, artesanal y cuidadosa.",
  locale: "es_ES",
  audience: "Galicia y España",
  futureSections: ["tienda", "fichas de producto", "gallego"],
} as const;

export const homeContent = {
  hero: {
    eyebrow: "Cultivado en Galicia",
    title: "AOVE Arlequín con origen, calma y trabajo familiar.",
    text:
      "As Besadas nace con una idea sencilla: ofrecer un aceite de oliva virgen extra cuidado desde el campo hasta la botella, con una producción local, artesanal y honesta.",
    primaryCta: { href: "/producto", label: "Conocer el producto" },
    secondaryCta: { href: "/historia", label: "Leer la historia" },
  },
  highlights: [
    {
      title: "Variedad Arlequín",
      text:
        "Una propuesta singular para quienes valoran el origen, el equilibrio y el carácter propio de cada cosecha.",
    },
    {
      title: "Producción familiar",
      text:
        "Proyecto cercano, de escala cuidada, con atención directa a cada decisión del cultivo y la elaboración.",
    },
    {
      title: "Mirada artesanal",
      text:
        "Sin artificios ni promesas grandilocuentes: solo producto, territorio y una forma de hacer pausada.",
    },
  ],
  sections: [
    {
      title: "AOVE variedad Arlequín",
      text:
        "La primera versión de As Besadas se presenta como un aceite informativo y de origen, pensado para construir una marca sólida antes de abrir la venta online.",
    },
    {
      title: "Cultivado en Galicia",
      text:
        "El proyecto se apoya en el paisaje y el ritmo gallego, con una identidad local clara y una vocación de cercanía para el público de Galicia y del resto de España.",
    },
    {
      title: "Producción familiar y artesanal",
      text:
        "La escala pequeña forma parte de la propuesta. Importa más el cuidado en el proceso que el volumen, y eso define el tono de la marca desde el inicio.",
    },
  ],
} as const;

export const productContent = {
  intro:
    "As Besadas presenta un AOVE de variedad Arlequín orientado a una primera etapa informativa. La intención es explicar el origen del proyecto, su forma de trabajar y la identidad del producto con claridad.",
  bullets: [
    "Aceite de oliva virgen extra",
    "Variedad Arlequín",
    "Proyecto cultivado en Galicia",
    "Producción familiar y artesanal",
  ],
  notes: [
    {
      title: "Qué comunicar ahora",
      text:
        "Origen, variedad, enfoque artesanal y cercanía. En esta fase evitamos añadir datos técnicos o comerciales todavía no confirmados.",
    },
    {
      title: "Qué se podrá ampliar después",
      text:
        "Ficha completa, formatos disponibles, notas de cata, campaña, imágenes de producto y futura compra online.",
    },
  ],
} as const;

export const storyContent = {
  paragraphs: [
    "As Besadas es un proyecto familiar que quiere hacer las cosas con tiempo, sin atajos y con una relación clara entre producto y territorio.",
    "La elección de una identidad sobria responde a la misma lógica del cultivo: menos ruido, más atención al detalle, al origen y a la calidad percibida desde la honestidad.",
    "Esta primera web no busca contarlo todo. Busca abrir una puerta, situar el proyecto y dejar preparada una base sólida para crecer hacia catálogo, tienda y nuevos contenidos.",
  ],
  values: [
    "Origen local",
    "Trabajo familiar",
    "Producción cuidada",
    "Identidad premium sin exceso",
  ],
} as const;

export const contactContent = {
  intro:
    "Si quieres conocer mejor el proyecto, solicitar información o preparar futuras colaboraciones, As Besadas está abierta al contacto directo.",
  placeholders: [
    { label: "Correo", value: "[correo pendiente]" },
    { label: "Teléfono", value: "[teléfono pendiente]" },
    { label: "Ubicación de referencia", value: "Galicia, España" },
  ],
  cta:
    "Cuando confirmes los datos reales de contacto, esta página ya está preparada para sustituir los placeholders sin rehacer la estructura.",
} as const;
