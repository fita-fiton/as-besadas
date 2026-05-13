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
  productName: "AOVE atlántico Arbequina",
  description:
    "As Besadas es un proyecto familiar de AOVE atlántico Arbequina en Callobre, A Estrada, con producción limitada, olivos centenarios y vocación de recuperar el olivar gallego.",
  footerDescription:
    "Proyecto familiar de AOVE atlántico Arbequina en Callobre, A Estrada, con producción limitada y raíces en dos olivos centenarios.",
  locale: "es_ES",
  audience: "Galicia y España",
  futureSections: ["tienda", "fichas de producto", "gallego"],
} as const;

export const homeContent = {
  hero: {
    eyebrow: "Callobre · A Estrada",
    title: "AOVE atlántico con raíces centenarias",
    text:
      "A la sombra de dos olivos centenarios que siguen en pie en Callobre, A Estrada, nace As Besadas: un proyecto familiar para recuperar la producción de aceite en Galicia. Trabajamos una plantación pequeña y cuidada, con una producción limitada. Preferimos calidad a cantidad y un contacto directo con las personas que valoran un aceite honesto, cercano y de proximidad.",
    primaryCta: { href: "/producto", label: "Conocer el aceite" },
    secondaryCta: { href: "/historia", label: "Ver la historia" },
  },
  highlights: [
    {
      title: "Proyecto familiar",
      text:
        "Gestionamos personalmente cada parcela. Las decisiones se toman desde la propia finca, con atención al suelo, a los árboles y al paisaje.",
    },
    {
      title: "Microedición atlántica",
      text:
        "Nuestro AOVE nace en Callobre, en un entorno húmedo y templado que imprime carácter a la Arbequina. La recolección temprana y la molturación en frío ayudan a conseguir un aceite equilibrado y afrutado.",
    },
    {
      title: "Raíces y futuro",
      text:
        "Conservamos los olivos centenarios que inspiraron el proyecto y planeamos incorporar, en pequeñas parcelas, algunas de las variedades autóctonas que el CSIC está recuperando y multiplicando.",
    },
  ],
  sections: [
    {
      title: "Raíces centenarias",
      text:
        "As Besadas nace junto a dos olivos centenarios de Callobre que siguen marcando el carácter del proyecto. Son el punto de partida de una nueva campaña de aceite ligada a la memoria del lugar.",
    },
    {
      title: "Origen en Callobre",
      text:
        "Callobre, A Estrada, no es un recurso narrativo. Es el lugar real del cultivo, del trabajo diario y de una finca familiar que quiere contribuir a la recuperación del olivar gallego.",
    },
    {
      title: "Del árbol al aceite",
      text:
        "La cosecha se recoge a mano en octubre, cuando la aceituna aún está verde, y se lleva a molturación en frío antes de 24 horas para preservar el perfil natural del fruto.",
    },
  ],
} as const;

export const productContent = {
  intro:
    "Nuestro aceite se elabora exclusivamente con aceitunas Arbequina cultivadas en Callobre, A Estrada. La Arbequina, adaptada al clima atlántico, ofrece un perfil suave y afrutado.",
  bullets: [
    "Variedad: Arbequina 100 %.",
    "Origen: Callobre, A Estrada, Galicia.",
    "Cosecha: manual y temprana, en octubre.",
    "Molturación: en frío, antes de 24 horas.",
    "Formato: botellas de 250 ml y 500 ml.",
  ],
  notes: [
    {
      title: "Elaboración",
      text:
        "Las aceitunas se recogen a mano a principios de otoño, cuando aún están verdes, y se trasladan a una almazara para su molturación en frío. Este procedimiento mecánico permite preservar los aromas y las cualidades naturales del fruto.",
    },
    {
      title: "Producción limitada",
      text:
        "El resultado es un aceite equilibrado, de producción limitada y ligado a su lugar de origen. Este AOVE de cercanía no es un producto masivo. Cada campaña ofrece una cantidad limitada de botellas. Para consultar disponibilidad o reservar, puedes ponerte en contacto con nosotros.",
    },
  ],
} as const;

export const storyContent = {
  paragraphs: [
    "La historia de As Besadas comienza en una finca familiar de Callobre, donde sobreviven dos olivos centenarios. Antiguamente eran más, pero las talas y el abandono de la olivicultura los redujeron a dos supervivientes. En 2012 decidimos acompañarlos con una plantación de Arbequina.",
    "Hoy sabemos, gracias a las investigaciones del CSIC y de la Fundación Juana de Vega, que Galicia cuenta con al menos 20 variedades autóctonas de olivo. En aquel momento, sin embargo, esa información todavía no estaba disponible para pequeños proyectos como el nuestro.",
    "As Besadas formó parte del plan CERNES, una iniciativa pionera para introducir el cultivo del olivo en Galicia. La realidad obligó a realizar numerosos ajustes: rediseñamos marcos de plantación, mejoramos el drenaje y adaptamos la poda para que los árboles prosperasen.",
    "Aunque muchas de las plantaciones de CERNES desaparecieron, As Besadas se mantuvo. Hoy somos una marca de aceite gallego nacida en A Estrada, con olivar propio y con un AOVE elaborado a partir de aceituna cultivada en nuestra finca.",
  ],
  values: [
    {
      title: "Origen en Callobre",
      text: "No buscamos un eslogan: Galicia y A Estrada son, literalmente, nuestro lugar de cultivo.",
    },
    {
      title: "Escala familiar",
      text: "La finca la trabajan las mismas personas que la sueñan. No hay intermediarios ni grandes inversiones externas.",
    },
    {
      title: "Cuidado y coherencia",
      text: "Preferimos avanzar despacio, respetando el ritmo del árbol y de la tierra.",
    },
    {
      title: "Innovación y tradición",
      text: "Formamos parte del movimiento de recuperación del olivar gallego. Seguimos atentos a la investigación de variedades autóctonas y mantenemos el compromiso de conservar nuestros olivos centenarios.",
    },
  ],
} as const;

export const contactContent = {
  intro:
    "Si quieres saber más sobre As Besadas, consultar la disponibilidad de la cosecha o conversar sobre olivos autóctonos y proyectos en Galicia, estaremos encantados de hablar contigo.",
  placeholders: [
    { label: "Correo", value: "Bajo solicitud" },
    { label: "Teléfono", value: "Bajo solicitud" },
    { label: "Ubicación", value: "Callobre, A Estrada · Galicia" },
  ],
  cta:
    "La transparencia y la cercanía forman parte de nuestra manera de trabajar, así que respondemos personalmente a cada consulta. En esta versión inicial, los datos de contacto se proporcionarán bajo solicitud para cumplir con la normativa de protección de datos y evitar usos indebidos.",
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
