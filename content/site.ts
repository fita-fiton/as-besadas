export const defaultLocale = "es";

export const supportedLocales = ["es", "gl"] as const;

export type Locale = (typeof supportedLocales)[number];

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/producto", label: "Producto" },
  { href: "/historia", label: "Historia" },
  { href: "/donde-comprar", label: "Dónde comprar" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const siteConfig = {
  brand: "As Besadas",
  productName: "AOVE Arbequina de microedición atlántica",
  description:
    "Aceite de oliva virgen extra de variedad Arbequina, cultivado en Callobre, A Estrada, y elaborado desde un proyecto familiar de producción limitada.",
  footerDescription:
    "Aceite de oliva virgen extra de variedad Arbequina, cultivado en Callobre, A Estrada, y elaborado desde un proyecto familiar de producción limitada.",
  locale: "es_ES",
  audience: "Galicia y España",
  futureSections: ["tienda", "fichas de producto", "gallego"],
} as const;

export const homeContent = {
  hero: {
    eyebrow: "Callobre, A Estrada",
    title: "AOVE Arbequina de microedición atlántica, cultivado en Galicia por un proyecto familiar.",
    text:
      "As Besadas nace en Callobre a partir de una idea sencilla: recuperar el cultivo del olivo en tierra familiar y dar continuidad a una finca trabajada de cerca desde hace alrededor de diez años. El resultado es un AOVE de variedad Arbequina, de cosecha temprana y escala pequeña, cuidado en cada paso.",
    primaryCta: { href: "/producto", label: "Conocer el aceite" },
    secondaryCta: { href: "/historia", label: "Ver la historia" },
  },
  highlights: [
    {
      title: "Microedición atlántica",
      text:
        "Trabajamos con variedad Arbequina en una escala pequeña, ligada al clima y al ritmo de Callobre. No se trata de producir mucho, sino de cuidar bien cada campaña.",
    },
    {
      title: "Proyecto familiar",
      text:
        "As Besadas se lleva desde cerca, con decisiones tomadas sobre la propia finca y una producción limitada que permite prestar atención real al cultivo y a la recogida.",
    },
    {
      title: "Proceso cuidado",
      text:
        "Las aceitunas se recogen a mano y se molturan en menos de 24 horas en una almazara de Quiroga. El proceso busca ser claro, ágil y respetuoso con el fruto.",
    },
  ],
  sections: [
    {
      title: "Un aceite situado",
      text:
        "As Besadas presenta un AOVE Arbequina que se entiende desde su lugar y su escala. La microedición atlántica no funciona aquí como reclamo, sino como una forma concreta de nombrar una producción corta, local y reconocible.",
    },
    {
      title: "Origen en Callobre",
      text:
        "El proyecto está en Callobre, A Estrada. Galicia no funciona aquí como recurso de imagen, sino como el lugar real del cultivo, del trabajo y de la historia familiar.",
    },
    {
      title: "Del olivar a la almazara",
      text:
        "El trabajo empieza en el cuidado del olivar propio, sigue con recogida manual y termina con la molienda en Quiroga dentro de las 24 horas posteriores a la cosecha.",
    },
  ],
} as const;

export const productContent = {
  intro:
    "El aceite de As Besadas es un AOVE de variedad Arbequina, de cosecha temprana y producción limitada. Se cultiva en Callobre, se recoge a mano en campaña y se lleva a almazara en Quiroga en menos de 24 horas, para trabajar el fruto con agilidad y cuidado.",
  bullets: [
    "Aceite de oliva virgen extra",
    "Variedad Arbequina",
    "Cosecha temprana",
    "Cultivado en Callobre, A Estrada",
    "Recogida manual y molienda en menos de 24 horas",
    "Formatos de 250 ml y 500 ml",
  ],
  notes: [
    {
      title: "Qué se presenta aquí",
      text:
        "Esta página reúne lo esencial del aceite tal y como hoy se produce: variedad Arbequina, origen gallego, producción pequeña y un proceso cuidado desde el olivar hasta la almazara.",
    },
    {
      title: "Formatos y siguiente paso",
      text:
        "As Besadas trabaja en botellas de 250 ml y 500 ml. Más adelante podrán incorporarse datos de campaña y venta directa, manteniendo esta misma base sobria y clara.",
    },
  ],
} as const;

export const storyContent = {
  paragraphs: [
    "As Besadas es un proyecto familiar que empezó hace alrededor de diez años con una intención concreta: recuperar el cultivo del olivo en Galicia y dar uso a una tierra familiar en Callobre, A Estrada.",
    "Desde entonces, el trabajo se ha construido a pequeña escala, con olivar propio, atención directa sobre la finca y una producción limitada que permite seguir cada parte del proceso sin separarla de su origen.",
    "La elección de Arbequina responde a esa misma forma de trabajar. Importa que el proyecto sea viable, cercano y coherente con el lugar en el que está, sin convertirlo en un relato más grande de lo que realmente es.",
  ],
  values: [
    "Origen en Callobre",
    "Escala familiar",
    "Microedición atlántica",
    "Trabajo cuidado",
  ],
} as const;

export const contactContent = {
  intro:
    "Si quieres consultar disponibilidad, formatos o cualquier aspecto del proyecto, el contacto con As Besadas se plantea de forma directa y sencilla, igual que el resto de la marca.",
  placeholders: [
    { label: "Correo", value: "Disponible próximamente" },
    { label: "Teléfono", value: "Disponible próximamente" },
    { label: "Ubicación", value: "Callobre, A Estrada · Galicia" },
  ],
  cta:
    "Mientras se incorporan los datos definitivos, esta página deja preparado un punto de contacto claro para consultas sobre el aceite, la producción y los formatos.",
} as const;

export const whereToBuyContent = {
  intro:
    "As Besadas está disponible en un número reducido de tiendas locales seleccionadas. Son puntos de venta cercanos al proyecto, pensados para mantener una distribución clara y cuidada.",
  locations: [
    {
      city: "A Estrada",
      stores: [
        {
          name: "ARTESA",
          address: "Rua Irida, 19, 36680, A Estrada (Pontevedra)",
        },
        {
          name: "AMIFRUT",
          address: "Porta do Sol, 27, bajo, 36680 A Estrada, Pontevedra",
        },
      ],
    },
    {
      city: "Santiago de Compostela",
      stores: [
        {
          name: "FAME NEGHRA",
          address:
            "Rúa da Acibechería, 17, 15704 Santiago de Compostela, A Coruña",
        },
      ],
    },
  ],
} as const;
