export const locales = ["es", "gl"] as const;
export type Locale = (typeof locales)[number];
export type PageKey = "home" | "product" | "stores" | "contact";

export const site = {
  name: "As Besadas",
  origin: "Callobre, A Estrada, Pontevedra",
  campaign: "2026–2027",
  email: "aoveasbesadas@gmail.com",
  url: "https://asbesadas.com",
  formats: [
    { id: "250", label: "250 ml", image: "/images/product-bottle-250ml-v2.png" },
    { id: "500", label: "500 ml", image: "/images/product-bottle-500ml-v2.png" },
  ],
  stores: [
    { name: "Artesa", city: "A Estrada", address: "Rúa Irida, 19, 36680 A Estrada, Pontevedra" },
    { name: "Amifrut", city: "A Estrada", address: "Porta do Sol, 27, bajo, 36680 A Estrada, Pontevedra" },
    { name: "Frutería Castelao", city: "A Estrada", address: "Rúa Peregrina, 4, 36680 A Estrada, Pontevedra" },
    { name: "Fame Neghra", city: "Santiago de Compostela", address: "Rúa da Acibechería, 17, 15704 Santiago de Compostela, A Coruña" },
  ],
} as const;

export const pagePaths: Record<Locale, Record<PageKey, string>> = {
  es: { home: "/", product: "/producto", stores: "/donde-comprar", contact: "/contacto" },
  gl: { home: "/gl", product: "/gl/aceite", stores: "/gl/onde-mercar", contact: "/gl/contacto" },
};
export const fincaAnchor: Record<Locale, string> = { es: "la-finca", gl: "a-finca" };
export const absoluteUrl = (path: string) => path === "/" ? site.url : `${site.url}${path}`;
export const mailto = (subject?: string) => `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
export const mapUrl = (name: string, address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${address}`)}`;

export const copy = {
  es: {
    nav: { home: "Inicio", product: "El aceite", stores: "Dónde comprar", contact: "Contacto" },
    ui: { menu: "Menú", openMenu: "Abrir menú de navegación", closeMenu: "Cerrar menú de navegación", mainNav: "Navegación principal", language: "Idioma", maps: "Cómo llegar", learn: "Conocer el aceite", buy: "Dónde comprar", story: "Leer nuestra historia", emailOrder: "Consultar un pedido por correo", email: "Escribir por correo", campaign: "Campaña disponible", formats: "Formatos", stores: "Puntos de venta", contact: "Contacto" },
    meta: {
      home: ["Aceite de oliva virgen extra de Galicia", "Aceite de Arbequina cultivada en Callobre, A Estrada. Conoce el proyecto familiar As Besadas, el aceite y dónde encontrarlo."],
      product: ["AOVE Arbequina de Galicia, 250 y 500 ml", "Aceite de oliva virgen extra As Besadas: Arbequina de Callobre, campaña 2026–2027, botellas de 250 y 500 ml y puntos de venta."],
      stores: ["Dónde comprar en A Estrada y Santiago", "Encuentra As Besadas en Artesa, Amifrut, Frutería Castelao y Fame Neghra. Consulta sus direcciones y cómo llegar a cada establecimiento."],
      contact: ["Contacto y consultas", "Escribe a As Besadas para consultar un pedido, preguntar por el aceite o proponer un nuevo punto de venta."],
    },
    home: {
      eyebrow: "Callobre · A Estrada", title: "Aceite de Oliva Virgen Extra de Galicia", intro: "Cultivamos nuestras aceitunas en una finca familiar de Callobre, A Estrada. De ese olivar nace As Besadas, un aceite suave y afrutado.", heroNote: "Arbequina de nuestra finca · Campaña", productEyebrow: "El aceite", productTitle: "Arbequina para la mesa de cada día", productText: "Un aceite de perfil suave y afrutado en botellas de 250 y 500 ml. La campaña 2026–2027 ya está disponible; cada tienda puede tener distintos formatos.", productSmall: "Para empezar a conocerlo", productLarge: "Para tenerlo a mano", originEyebrow: "La finca", originTitle: "Antes de la botella, está Callobre", originText: "As Besadas comenzó como un proyecto familiar en esta finca de A Estrada. Dos olivos centenarios nos inspiraron; el aceite actual procede de la plantación realizada en 2012.", useEyebrow: "En la mesa", useTitle: "Empieza con un poco de pan", useText: "Prueba unas gotas antes de añadir otros ingredientes. Después puedes llevarlo a una ensalada de tomate, unas verduras o una patata recién cocida.", faqEyebrow: "Preguntas frecuentes", faqTitle: "Antes de elegir tu botella", faqs: [
        ["¿Dónde se cultivan las aceitunas?", "En nuestra finca de Callobre, A Estrada, Pontevedra."],
        ["¿Qué variedad utilizáis?", "Exclusivamente Arbequina cultivada en la finca."],
        ["¿Qué formatos hay?", "Botellas de 250 y 500 ml. La disponibilidad de cada formato puede variar según la tienda."],
        ["¿Dónde puedo comprarlo?", "En los establecimientos que figuran en la página Dónde comprar."],
      ], storesEyebrow: "Puntos de venta", storesTitle: "Encuentra As Besadas cerca de ti", storesText: "Puedes encontrar el aceite en A Estrada y Santiago de Compostela. Consulta con el establecimiento si buscas un formato concreto.", harvestAlt: "Cajas con aceitunas recogidas en un olivar al atardecer", groveAlt: "Filas de olivos en la finca de Callobre",
    },
    product: {
      eyebrow: "El aceite", title: "Aceite de Oliva Virgen Extra", intro: "Aceitunas exclusivamente cultivadas en Callobre, A Estrada. Un aceite de perfil suave y afrutado, en dos formatos.", selector: "Ver formato de botella", bottle: "Botella de aceite de oliva virgen extra As Besadas de", selected: "Formato mostrado", note: "La elección de formato solo cambia la imagen; no realiza una compra.", availability: "La disponibilidad de cada formato puede variar según el establecimiento.", factsTitle: "El aceite, de un vistazo", facts: [["Categoría", "Aceite de oliva virgen extra"], ["Variedad", "Arbequina"], ["Cultivo", "Callobre, A Estrada, Pontevedra"], ["Perfil", "Suave y afrutado"]], processEyebrow: "Del olivar", processTitle: "Recogida temprana, elaboración cercana en el tiempo", processText: "Recogemos las aceitunas a mano en octubre y elaboramos el aceite en frío antes de 24 horas desde la recogida.", useTitle: "Por dónde empezar a probarlo", useText: "Sirve unas gotas con pan. También puedes usarlo en una ensalada de tomate, sobre verduras o con una patata cocida.", closeTitle: "Encuentra tu botella", closeText: "Consulta los puntos de venta. Si buscas un formato concreto, confirma su disponibilidad con la tienda antes de ir.", storyLink: "Conocer nuestra historia",
    },
    story: {
      eyebrow: "Nuestra historia", title: "Un olivar familiar en Callobre", intro: "As Besadas nace de una finca familiar en A Estrada y de la decisión de cultivar allí aceitunas para elaborar nuestro propio aceite.", startEyebrow: "El comienzo", startTitle: "Dos olivos que nos hicieron mirar la finca de otro modo", startText: "En la finca hay dos olivos centenarios que inspiraron el proyecto. Hoy no producen. El aceite que comercializamos procede de otra plantación: la Arbequina que cultivamos en Callobre.", plantingEyebrow: "2012", plantingTitle: "La plantación de Arbequina", plantingText: "Plantamos el olivar en 2012 y participamos en CERNES. Según el relato familiar, en el contexto de aquel proyecto fue la primera plantación de olivos de A Estrada. Desde entonces hemos aprendido a observar la finca y a ajustar el trabajo a sus condiciones.", todayEyebrow: "Hoy", todayTitle: "El aceite de esta finca", todayText: "Recogemos a mano la Arbequina en octubre. La campaña 2026–2027 recoge ese trabajo y puede encontrarse en botellas de 250 y 500 ml.", imageAlt: "Olivos de la finca con luz de tarde", harvestAlt: "Cajas de aceitunas entre olivos al atardecer",
    },
    stores: {
      eyebrow: "Puntos de venta", title: "Dónde comprar As Besadas", intro: "Nuestro aceite se vende en estos establecimientos de A Estrada y Santiago de Compostela.", availability: "La disponibilidad puede variar según el establecimiento y el formato. Si buscas una botella concreta, consulta con la tienda antes de desplazarte.", helpTitle: "¿Quieres preguntar por un pedido?", helpText: "Puedes escribirnos por correo. Una consulta no confirma un pedido.", productLink: "Ver el aceite y sus formatos",
    },
    contact: {
      eyebrow: "Contacto", title: "Hablemos de As Besadas", intro: "Para consultar un pedido o hacernos una pregunta sobre el aceite y el proyecto, escríbenos a este correo.", orderTitle: "Consultas sobre pedidos", orderText: "Cuéntanos qué necesitas por correo. Te responderemos desde ese canal; el mensaje no supone un pedido confirmado.", storesTitle: "¿Buscas una tienda?", storesText: "Consulta nuestros puntos de venta en A Estrada y Santiago de Compostela.", tradeTitle: "Para nuevos puntos de venta", tradeText: "Si te interesa ofrecer As Besadas en tu establecimiento, escríbenos con el nombre de la tienda y tu localidad.", previewTitle: "Formulario para establecimientos", previewText: "Este formulario es una vista previa y todavía no admite envíos. Mientras tanto, puedes escribirnos por correo.", fields: ["Nombre del establecimiento", "Localidad", "Persona de contacto", "Correo electrónico", "Mensaje"], send: "Enviar consulta", tradeSubject: "Nuevo punto de venta As Besadas",
    },
    footer: "Aceite de oliva virgen extra de Arbequina cultivada en Callobre, A Estrada.",
  },
  gl: {
    nav: { home: "Inicio", product: "O aceite", stores: "Onde mercar", contact: "Contacto" },
    ui: { menu: "Menú", openMenu: "Abrir o menú de navegación", closeMenu: "Pechar o menú de navegación", mainNav: "Navegación principal", language: "Idioma", maps: "Como chegar", learn: "Coñecer o aceite", buy: "Onde mercar", story: "Ler a nosa historia", emailOrder: "Consultar un pedido por correo", email: "Escribir por correo", campaign: "Campaña dispoñible", formats: "Formatos", stores: "Puntos de venda", contact: "Contacto" },
    meta: {
      home: ["Aceite de oliva virxe extra de Galicia", "Aceite de Arbequina cultivada en Callobre, A Estrada. Coñece o proxecto familiar As Besadas, o aceite e onde atopalo."],
      product: ["AOVE Arbequina de Galicia, 250 e 500 ml", "Aceite de oliva virxe extra As Besadas: Arbequina de Callobre, campaña 2026–2027, botellas de 250 e 500 ml e puntos de venda."],
      stores: ["Onde mercar na Estrada e Santiago", "Atopa As Besadas en Artesa, Amifrut, Frutería Castelao e Fame Neghra. Consulta os enderezos e como chegar a cada establecemento."],
      contact: ["Contacto e consultas", "Escribe a As Besadas para consultar un pedido, preguntar polo aceite ou propoñer un novo punto de venda."],
    },
    home: {
      eyebrow: "Callobre · A Estrada", title: "Aceite de Oliva Virxe Extra de Galicia", intro: "Cultivamos as nosas olivas nunha finca familiar de Callobre, A Estrada. Dese oliveiral nace As Besadas, un aceite suave e afroitado.", heroNote: "Arbequina da nosa finca · Campaña", productEyebrow: "O aceite", productTitle: "Arbequina para a mesa de cada día", productText: "Un aceite de perfil suave e afroitado en botellas de 250 e 500 ml. A campaña 2026–2027 xa está dispoñible; cada tenda pode ter distintos formatos.", productSmall: "Para empezar a coñecelo", productLarge: "Para telo á man", originEyebrow: "A finca", originTitle: "Antes da botella, está Callobre", originText: "As Besadas comezou como un proxecto familiar nesta finca da Estrada. Dúas oliveiras centenarias inspiráronnos; o aceite actual procede da plantación realizada en 2012.", useEyebrow: "Na mesa", useTitle: "Empeza cun pouco de pan", useText: "Proba unhas gotas antes de engadir outros ingredientes. Despois podes levalo a unha ensalada de tomate, unhas verduras ou unha pataca acabada de cocer.", faqEyebrow: "Preguntas frecuentes", faqTitle: "Antes de escoller a túa botella", faqs: [
        ["Onde se cultivan as olivas?", "Na nosa finca de Callobre, A Estrada, Pontevedra."],
        ["Que variedade utilizades?", "Exclusivamente Arbequina cultivada na finca."],
        ["Que formatos hai?", "Botellas de 250 e 500 ml. A dispoñibilidade de cada formato pode variar segundo a tenda."],
        ["Onde podo mercalo?", "Nos establecementos que figuran na páxina Onde mercar."],
      ], storesEyebrow: "Puntos de venda", storesTitle: "Atopa As Besadas preto de ti", storesText: "Podes atopar o aceite na Estrada e en Santiago de Compostela. Consulta co establecemento se buscas un formato concreto.", harvestAlt: "Caixas con olivas recollidas nun oliveiral ao solpor", groveAlt: "Ringleiras de oliveiras na finca de Callobre",
    },
    product: {
      eyebrow: "O aceite", title: "Aceite de Oliva Virxe Extra", intro: "Olivas cultivadas exclusivamente en Callobre, A Estrada. Un aceite de perfil suave e afroitado, en dous formatos.", selector: "Ver formato de botella", bottle: "Botella de aceite de oliva virxe extra As Besadas de", selected: "Formato mostrado", note: "A elección do formato só cambia a imaxe; non realiza unha compra.", availability: "A dispoñibilidade de cada formato pode variar segundo o establecemento.", factsTitle: "O aceite, dunha ollada", facts: [["Categoría", "Aceite de oliva virxe extra"], ["Variedade", "Arbequina"], ["Cultivo", "Callobre, A Estrada, Pontevedra"], ["Perfil", "Suave e afroitado"]], processEyebrow: "Do oliveiral", processTitle: "Recollida temperá, elaboración en pouco tempo", processText: "Recollemos as olivas á man en outubro e elaboramos o aceite en frío antes de 24 horas desde a recollida.", useTitle: "Por onde empezar a probalo", useText: "Sirve unhas gotas con pan. Tamén podes usalo nunha ensalada de tomate, sobre verduras ou cunha pataca cocida.", closeTitle: "Atopa a túa botella", closeText: "Consulta os puntos de venda. Se buscas un formato concreto, confirma a súa dispoñibilidade coa tenda antes de ir.", storyLink: "Coñecer a nosa historia",
    },
    story: {
      eyebrow: "A nosa historia", title: "Un oliveiral familiar en Callobre", intro: "As Besadas nace dunha finca familiar na Estrada e da decisión de cultivar alí olivas para elaborar o noso propio aceite.", startEyebrow: "O comezo", startTitle: "Dúas oliveiras que nos fixeron mirar a finca doutro xeito", startText: "Na finca hai dúas oliveiras centenarias que inspiraron o proxecto. Hoxe non producen. O aceite que comercializamos procede doutra plantación: a Arbequina que cultivamos en Callobre.", plantingEyebrow: "2012", plantingTitle: "A plantación de Arbequina", plantingText: "Plantamos o oliveiral en 2012 e participamos en CERNES. Segundo o relato familiar, no contexto daquel proxecto foi a primeira plantación de oliveiras da Estrada. Desde entón aprendemos a observar a finca e a adaptar o traballo ás súas condicións.", todayEyebrow: "Hoxe", todayTitle: "O aceite desta finca", todayText: "Recollemos á man a Arbequina en outubro. A campaña 2026–2027 recolle ese traballo e pode atoparse en botellas de 250 e 500 ml.", imageAlt: "Oliveiras da finca coa luz da tarde", harvestAlt: "Caixas de olivas entre oliveiras ao solpor",
    },
    stores: {
      eyebrow: "Puntos de venda", title: "Onde mercar As Besadas", intro: "O noso aceite véndese nestes establecementos da Estrada e de Santiago de Compostela.", availability: "A dispoñibilidade pode variar segundo o establecemento e o formato. Se buscas unha botella concreta, consulta coa tenda antes de desprazarte.", helpTitle: "Queres preguntar por un pedido?", helpText: "Podes escribirnos por correo. Unha consulta non confirma un pedido.", productLink: "Ver o aceite e os seus formatos",
    },
    contact: {
      eyebrow: "Contacto", title: "Falemos de As Besadas", intro: "Para consultar un pedido ou facernos unha pregunta sobre o aceite e o proxecto, escríbenos a este correo.", orderTitle: "Consultas sobre pedidos", orderText: "Cóntanos que precisas por correo. Responderémosche por esa vía; a mensaxe non supón un pedido confirmado.", storesTitle: "Buscas unha tenda?", storesText: "Consulta os nosos puntos de venda na Estrada e en Santiago de Compostela.", tradeTitle: "Para novos puntos de venda", tradeText: "Se che interesa ofrecer As Besadas no teu establecemento, escríbenos co nome da tenda e a túa localidade.", previewTitle: "Formulario para establecementos", previewText: "Este formulario é unha vista previa e aínda non admite envíos. Mentres tanto, podes escribirnos por correo.", fields: ["Nome do establecemento", "Localidade", "Persoa de contacto", "Correo electrónico", "Mensaxe"], send: "Enviar consulta", tradeSubject: "Novo punto de venda As Besadas",
    },
    footer: "Aceite de oliva virxe extra de Arbequina cultivada en Callobre, A Estrada.",
  },
} as const;
