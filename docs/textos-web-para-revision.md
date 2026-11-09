# Castellano

## 1. Elementos compartidos

### ES-COMP-01 · Salto al contenido (`todas las páginas del idioma`)

**Origen:** `components/site-shell.tsx`.  
**Estado:** En todas las páginas; visible al recibir el foco del teclado.

- **Enlace:** Saltar al contenido — Destino: `#main-content`

**Mis cambios o comentarios:**



### ES-COMP-02 · Cabecera y navegación (`todas las páginas del idioma`)

**Origen:** `components/site-header.tsx`, `content/site.ts`.  
**Estado:** En todas las páginas. Navegación horizontal en escritorio; menú desplegable en móvil.

- **Marca:** As Besadas — Destino: `/`
- **Línea de origen:** Callobre · A Estrada
- **Nombre accesible de navegación:** Navegación principal
- **Enlace de navegación:** Inicio — Destino: `/`
- **Enlace de navegación:** El aceite — Destino: `/producto`
- **Enlace de navegación:** Nuestra historia — Destino: `/historia`
- **Enlace de navegación:** Dónde comprar — Destino: `/donde-comprar`
- **Enlace de navegación:** Contacto — Destino: `/contacto`
- **Botón móvil:** Menú — Abre o cierra el menú, que repite los cinco enlaces anteriores.
- **Nombre accesible del botón cerrado:** Abrir menú de navegación — Antes de abrir el menú.
- **Nombre accesible del botón abierto:** Cerrar menú de navegación — Con el menú abierto.

**Mis cambios o comentarios:**



### ES-COMP-03 · Selector de idioma (`todas las páginas del idioma`)

**Origen:** `components/site-header.tsx`, `content/site.ts`.  
**Estado:** En todas las páginas, tanto en escritorio como en móvil. El idioma activo está marcado.

- **Nombre accesible:** Idioma
- **Enlace:** ES — Destino correspondiente: `home` → `/`, `product` → `/producto`, `story` → `/historia`, `stores` → `/donde-comprar`, `contact` → `/contacto`
- **Enlace:** GL — Destino correspondiente: `home` → `/gl`, `product` → `/gl/aceite`, `story` → `/gl/historia`, `stores` → `/gl/onde-mercar`, `contact` → `/gl/contacto`

**Mis cambios o comentarios:**



### ES-COMP-04 · Pie de página (`todas las páginas del idioma`)

**Origen:** `components/site-footer.tsx`, `content/site.ts`.  
**Estado:** En todas las páginas.

- **Marca:** As Besadas
**Párrafo:**

Aceite de oliva virgen extra de Arbequina cultivada en Callobre, A Estrada.

- **Encabezado de navegación:** Navegación principal
- **Enlace de navegación:** Inicio — Destino: `/`
- **Enlace de navegación:** El aceite — Destino: `/producto`
- **Enlace de navegación:** Nuestra historia — Destino: `/historia`
- **Enlace de navegación:** Dónde comprar — Destino: `/donde-comprar`
- **Enlace de navegación:** Contacto — Destino: `/contacto`
- **Encabezado:** Contacto
- **Correo:** aoveasbesadas@gmail.com — Destino: `mailto:aoveasbesadas@gmail.com`
- **Derechos:** © 2026 As Besadas — El año se calcula al renderizar; se muestra el valor correspondiente a la fecha de esta extracción.

**Mis cambios o comentarios:**



## 2. Inicio

### ES-INICIO-01 · Hero (`/`)

**Origen:** `content/site.ts`, `components/pages/home.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Callobre · A Estrada
- **H1:** Aceite de oliva virgen extra de Galicia
**Párrafo:**

Cultivamos nuestras aceitunas Arbequina en una finca familiar de Callobre, A Estrada. De ese olivar nace As Besadas, un aceite suave y afrutado.

- **Botón:** Dónde comprar — Destino: `/donde-comprar`
- **Botón:** Conocer el aceite — Destino: `/producto`
- **Dato de campaña:** Campaña disponible: 2026–2027
- **Texto alternativo:** Botella de aceite de oliva virgen extra As Besadas de 500 ml

**Mis cambios o comentarios:**



### ES-INICIO-02 · El aceite y formatos (`/`)

**Origen:** `content/site.ts`, `components/pages/home.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas. En móvil, el texto precede a las tarjetas; en escritorio, las tarjetas aparecen a la izquierda.

- **Antetítulo:** El aceite
- **H2:** Arbequina para la mesa de cada día
**Párrafo:**

Un aceite de perfil suave y afrutado en botellas de 250 y 500 ml. La campaña 2026–2027 ya está disponible; cada tienda puede tener distintos formatos.

- **Botón:** Conocer el aceite — Destino: `/producto`
- **Tarjeta / formato:** 250 ml — Destino: `/producto`
- **Texto de tarjeta:** Para empezar a conocerlo
- **Texto alternativo:** Botella de aceite de oliva virgen extra As Besadas de 250 ml
- **Tarjeta / formato:** 500 ml — Destino: `/producto`
- **Texto de tarjeta:** Para tenerlo a mano
- **Texto alternativo:** Botella de aceite de oliva virgen extra As Besadas de 500 ml

**Mis cambios o comentarios:**



### ES-INICIO-03 · La finca (`/`)

**Origen:** `content/site.ts`, `components/pages/home.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** La finca
- **H2:** Antes de la botella, está Callobre
**Párrafo:**

As Besadas comenzó como un proyecto familiar en esta finca de A Estrada. Dos olivos centenarios nos inspiraron; el aceite actual procede de la plantación de Arbequina realizada en 2012.

- **Botón:** Leer nuestra historia — Destino: `/historia`
- **Texto alternativo:** Filas de olivos en la finca de Callobre

**Mis cambios o comentarios:**



### ES-INICIO-04 · En la mesa (`/`)

**Origen:** `content/site.ts`, `components/pages/home.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Texto alternativo:** Cajas con aceitunas recogidas en un olivar al atardecer
- **Antetítulo:** En la mesa
- **H2:** Empieza con un poco de pan
**Párrafo:**

Prueba unas gotas antes de añadir otros ingredientes. Después puedes llevarlo a una ensalada de tomate, unas verduras o una patata recién cocida.

- **Botón:** Conocer el aceite — Destino: `/producto`

**Mis cambios o comentarios:**



### ES-INICIO-05 · Preguntas frecuentes (`/`)

**Origen:** `content/site.ts`, `components/pages/home.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Preguntas frecuentes
- **H2:** Antes de elegir tu botella
- **Pregunta:** ¿Dónde se cultivan las aceitunas?
**Respuesta:**

En nuestra finca de Callobre, A Estrada, Pontevedra.

- **Pregunta:** ¿Qué variedad utilizáis?
**Respuesta:**

Exclusivamente Arbequina cultivada en la finca.

- **Pregunta:** ¿Qué formatos hay?
**Respuesta:**

Botellas de 250 y 500 ml. La disponibilidad de cada formato puede variar según la tienda.

- **Pregunta:** ¿Dónde puedo comprarlo?
**Respuesta:**

En los establecimientos que figuran en la página Dónde comprar.


**Mis cambios o comentarios:**



### ES-INICIO-06 · Puntos de venta (`/`)

**Origen:** `content/site.ts`, `components/pages/home.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Puntos de venta
- **H2:** Encuentra As Besadas cerca de ti
**Párrafo:**

Puedes encontrar el aceite en A Estrada y Santiago de Compostela. Consulta con el establecimiento si buscas un formato concreto.

- **Botón:** Dónde comprar — Destino: `/donde-comprar`
- **Localidad:** A Estrada
- **Listado breve:** Artesa · Amifrut
- **Separador de escritorio:** | — Oculto en móvil.
- **Localidad:** Santiago de Compostela
- **Listado breve:** Fame Neghra

**Mis cambios o comentarios:**



## 3. El aceite

### ES-PRODUCTO-01 · Presentación y selector de formato (`/producto`)

**Origen:** `content/site.ts`, `components/pages/product.tsx`, `components/pages/shared.tsx`, `components/product-format-carousel.tsx`.  
**Estado:** Visible. El selector inicia en 250 ml; al pulsar 500 ml cambian imagen, alt y formato mostrado. No hay compra.

- **Antetítulo:** El aceite
- **H1:** Aceite de oliva virgen extra Arbequina
**Párrafo:**

Aceitunas exclusivamente Arbequina cultivadas en Callobre, A Estrada. Un aceite de perfil suave y afrutado, en dos formatos.

- **Dato de campaña:** Campaña disponible · 2026–2027
- **Dato de formatos:** Formatos: 250 ml · 500 ml
- **Botón:** Dónde comprar — Destino: `/donde-comprar`
- **Botón:** Consultar un pedido por correo — Destino: `mailto:aoveasbesadas@gmail.com`
**Aviso:**

La disponibilidad de cada formato puede variar según el establecimiento.

- **Nombre accesible del grupo:** Ver formato de botella
- **Botón de formato:** 250 ml — Seleccionado al inicio.
- **Botón de formato:** 500 ml — Seleccionable.
- **Estado inicial:** Formato mostrado: 250 ml
- **Estado alternativo:** Formato mostrado: 500 ml
- **Alt inicial:** Botella de aceite de oliva virgen extra As Besadas de 250 ml
- **Alt alternativo:** Botella de aceite de oliva virgen extra As Besadas de 500 ml
**Nota:**

La elección de formato solo cambia la imagen; no realiza una compra.


**Mis cambios o comentarios:**



### ES-PRODUCTO-02 · Ficha del aceite (`/producto`)

**Origen:** `content/site.ts`, `components/pages/product.tsx`, `components/pages/shared.tsx`, `components/product-format-carousel.tsx`.  
**Estado:** Visible en ambas vistas.

- **H2:** El aceite, de un vistazo
- **Dato:** Categoría: Aceite de oliva virgen extra
- **Dato:** Variedad: Arbequina
- **Dato:** Cultivo: Callobre, A Estrada, Pontevedra
- **Dato:** Perfil: Suave y afrutado
- **Dato:** Campaña disponible: 2026–2027
- **Dato:** Formatos: 250 ml · 500 ml

**Mis cambios o comentarios:**



### ES-PRODUCTO-03 · Del olivar y uso (`/producto`)

**Origen:** `content/site.ts`, `components/pages/product.tsx`, `components/pages/shared.tsx`, `components/product-format-carousel.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Del olivar
- **H2:** Recogida temprana, elaboración cercana en el tiempo
**Párrafo:**

Recogemos las aceitunas a mano en octubre y elaboramos el aceite en frío antes de 24 horas desde la recogida.

- **H2:** Por dónde empezar a probarlo
**Párrafo:**

Sirve unas gotas con pan. También puedes usarlo en una ensalada de tomate, sobre verduras o con una patata cocida.

- **Enlace:** Conocer nuestra historia → — Destino: `/historia`

**Mis cambios o comentarios:**



### ES-PRODUCTO-04 · Cierre (`/producto`)

**Origen:** `content/site.ts`, `components/pages/product.tsx`, `components/pages/shared.tsx`, `components/product-format-carousel.tsx`.  
**Estado:** Visible en ambas vistas.

- **H2:** Encuentra tu botella
**Párrafo:**

Consulta los puntos de venta. Si buscas un formato concreto, confirma su disponibilidad con la tienda antes de ir.

- **Botón:** Dónde comprar — Destino: `/donde-comprar`

**Mis cambios o comentarios:**



## 4. Nuestra historia

### ES-HISTORIA-01 · Presentación (`/historia`)

**Origen:** `content/site.ts`, `components/pages/story.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Nuestra historia
- **H1:** Un olivar familiar en Callobre
**Párrafo:**

As Besadas nace de una finca familiar en A Estrada y de la decisión de cultivar allí aceitunas para elaborar nuestro propio aceite.


**Mis cambios o comentarios:**



### ES-HISTORIA-02 · El comienzo (`/historia`)

**Origen:** `content/site.ts`, `components/pages/story.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** El comienzo
- **H2:** Dos olivos que nos hicieron mirar la finca de otro modo
**Párrafo:**

En la finca hay dos olivos centenarios que inspiraron el proyecto. Hoy no producen. El aceite que comercializamos procede de otra plantación: la Arbequina que cultivamos en Callobre.


**Mis cambios o comentarios:**



### ES-HISTORIA-03 · La plantación (`/historia`)

**Origen:** `content/site.ts`, `components/pages/story.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Texto alternativo:** Olivos de la finca con luz de tarde
- **Antetítulo:** 2012
- **H2:** La plantación de Arbequina
**Párrafo:**

Plantamos el olivar en 2012 y participamos en CERNES. Según el relato familiar, en el contexto de aquel proyecto fue la primera plantación de olivos de A Estrada. Desde entonces hemos aprendido a observar la finca y a ajustar el trabajo a sus condiciones.


**Mis cambios o comentarios:**



### ES-HISTORIA-04 · Hoy (`/historia`)

**Origen:** `content/site.ts`, `components/pages/story.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Hoy
- **H2:** El aceite de esta finca
**Párrafo:**

Recogemos a mano la Arbequina en octubre. La campaña 2026–2027 recoge ese trabajo y puede encontrarse en botellas de 250 y 500 ml.

- **Botón:** Conocer el aceite — Destino: `/producto`
- **Botón:** Dónde comprar — Destino: `/donde-comprar`
- **Texto alternativo:** Cajas de aceitunas entre olivos al atardecer

**Mis cambios o comentarios:**



## 5. Dónde comprar

### ES-TIENDAS-01 · Presentación y aviso (`/donde-comprar`)

**Origen:** `content/site.ts`, `components/pages/stores.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Puntos de venta
- **H1:** Dónde comprar As Besadas
**Párrafo:**

Nuestro aceite se vende en estos establecimientos de A Estrada y Santiago de Compostela.

**Aviso:**

La disponibilidad puede variar según el establecimiento y el formato. Si buscas una botella concreta, consulta con la tienda antes de desplazarte.


**Mis cambios o comentarios:**



### ES-TIENDAS-02 · A Estrada (`/donde-comprar`)

**Origen:** `content/site.ts`, `components/pages/stores.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **H2:** A Estrada
- **H3:** Artesa
- **Dirección:** Rúa Irida, 19, 36680 A Estrada, Pontevedra
- **Enlace externo:** Cómo llegar ↗ — Destino: `https://www.google.com/maps/search/?api=1&query=Artesa%2C%20R%C3%BAa%20Irida%2C%2019%2C%2036680%20A%20Estrada%2C%20Pontevedra`. Abre Google Maps en nueva pestaña.
- **H3:** Amifrut
- **Dirección:** Porta do Sol, 27, bajo, 36680 A Estrada, Pontevedra
- **Enlace externo:** Cómo llegar ↗ — Destino: `https://www.google.com/maps/search/?api=1&query=Amifrut%2C%20Porta%20do%20Sol%2C%2027%2C%20bajo%2C%2036680%20A%20Estrada%2C%20Pontevedra`. Abre Google Maps en nueva pestaña.

**Mis cambios o comentarios:**



### ES-TIENDAS-03 · Santiago de Compostela (`/donde-comprar`)

**Origen:** `content/site.ts`, `components/pages/stores.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **H2:** Santiago de Compostela
- **H3:** Fame Neghra
- **Dirección:** Rúa da Acibechería, 17, 15704 Santiago de Compostela, A Coruña
- **Enlace externo:** Cómo llegar ↗ — Destino: `https://www.google.com/maps/search/?api=1&query=Fame%20Neghra%2C%20R%C3%BAa%20da%20Acibecher%C3%ADa%2C%2017%2C%2015704%20Santiago%20de%20Compostela%2C%20A%20Coru%C3%B1a`. Abre Google Maps en nueva pestaña.

**Mis cambios o comentarios:**



### ES-TIENDAS-04 · Consultas y producto (`/donde-comprar`)

**Origen:** `content/site.ts`, `components/pages/stores.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **H2:** ¿Quieres preguntar por un pedido?
**Párrafo:**

Puedes escribirnos por correo. Una consulta no confirma un pedido.

- **Botón:** Consultar un pedido por correo — Destino: `mailto:aoveasbesadas@gmail.com`
- **H2:** Encuentra tu botella
**Párrafo:**

Consulta los puntos de venta. Si buscas un formato concreto, confirma su disponibilidad con la tienda antes de ir.

- **Botón:** Ver el aceite y sus formatos — Destino: `/producto`

**Mis cambios o comentarios:**



## 6. Contacto

### ES-CONTACTO-01 · Presentación (`/contacto`)

**Origen:** `content/site.ts`, `components/pages/contact.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Contacto
- **H1:** Hablemos de As Besadas
**Párrafo:**

Para consultar un pedido o hacernos una pregunta sobre el aceite y el proyecto, escríbenos a este correo.

- **Correo:** aoveasbesadas@gmail.com — Destino: `mailto:aoveasbesadas@gmail.com`

**Mis cambios o comentarios:**



### ES-CONTACTO-02 · Pedidos y tiendas (`/contacto`)

**Origen:** `content/site.ts`, `components/pages/contact.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **H2:** Consultas sobre pedidos
**Párrafo:**

Cuéntanos qué necesitas por correo. Te responderemos desde ese canal; el mensaje no supone un pedido confirmado.

- **Botón:** Consultar un pedido por correo — Destino: `mailto:aoveasbesadas@gmail.com`
- **H2:** ¿Buscas una tienda?
**Párrafo:**

Consulta nuestros puntos de venta en A Estrada y Santiago de Compostela.

- **Botón:** Dónde comprar — Destino: `/donde-comprar`

**Mis cambios o comentarios:**



### ES-CONTACTO-03 · Nuevos puntos de venta y formulario (`/contacto`)

**Origen:** `content/site.ts`, `components/pages/contact.tsx`, `components/pages/shared.tsx`.  
**Estado:** La invitación por correo está activa. El formulario se muestra como vista previa, con campos y botón de envío desactivados.

- **H2:** Para nuevos puntos de venta
**Párrafo:**

Si te interesa ofrecer As Besadas en tu establecimiento, escríbenos con el nombre de la tienda y tu localidad.

- **Botón:** Escribir por correo — Destino: `mailto:aoveasbesadas@gmail.com?subject=Nuevo%20punto%20de%20venta%20As%20Besadas`
- **Asunto predefinido:** Nuevo punto de venta As Besadas
- **Cuerpo predefinido:** Ninguno
- **H3 y nombre accesible del formulario:** Formulario para establecimientos
**Aviso:**

Este formulario es una vista previa y todavía no admite envíos. Mientras tanto, puedes escribirnos por correo.

- **Etiqueta de campo desactivado:** Nombre del establecimiento
- **Etiqueta de campo desactivado:** Localidad
- **Etiqueta de campo desactivado:** Persona de contacto
- **Etiqueta de campo desactivado:** Correo electrónico
- **Etiqueta de campo desactivado:** Mensaje
- **Botón de envío desactivado:** Enviar consulta
- **Opciones, ayudas y placeholders:** No hay textos de este tipo en el formulario implementado.
- **Error o confirmación de envío:** No existen estados implementados; el formulario no admite envíos.

**Mis cambios o comentarios:**



## 7. Otras páginas y estados

### ES-OTROS-01 · Páginas y estados adicionales (`rutas del idioma`)

**Origen:** `app/`, `components/`, `content/site.ts`.  
**Estado:** No hay rutas propias de error, textos legales publicados ni páginas adicionales. Los errores de Next.js usan su comportamiento predeterminado y no hay texto de marca definido para ellos.

- **Disponibilidad de formatos:** La disponibilidad de cada formato puede variar según el establecimiento. — Visible en la página de producto.
- **Disponibilidad en tiendas:** La disponibilidad puede variar según el establecimiento y el formato. Si buscas una botella concreta, consulta con la tienda antes de desplazarte. — Visible en Dónde comprar.
- **Formulario sin servicio:** Este formulario es una vista previa y todavía no admite envíos. Mientras tanto, puedes escribirnos por correo. — Visible en Contacto.
- **Otros mensajes condicionales:** El menú móvil y el selector de formato son los únicos cambios de texto implementados; se documentan arriba.

**Mis cambios o comentarios:**



## 8. Metadatos SEO

### Metadatos compartidos

**Origen:** `lib/metadata.ts`, `components/site-shell.tsx`, `content/site.ts`.

- **Nombre del sitio en Open Graph:** As Besadas
- **Alt de imagen social en todas las páginas:** As Besadas · 500 ml
- **Organización en datos estructurados:** Nombre: As Besadas; URL: https://asbesadas.com; correo: aoveasbesadas@gmail.com.

**Mis cambios o comentarios:**



### ES-SEO-01 · Inicio (`/`)

**Origen:** `content/site.ts`, `lib/metadata.ts`.  
**Estado:** Metadatos activos. Open Graph y Twitter repiten título y descripción SEO; no hay textos distintos.

- **Título SEO:** Aceite de oliva virgen extra de Galicia | As Besadas
**Metadescripción:**

Aceite de Arbequina cultivada en Callobre, A Estrada. Conoce el proyecto familiar As Besadas, sus formatos y dónde encontrarlo.

- **Título Open Graph y Twitter:** Aceite de oliva virgen extra de Galicia | As Besadas
**Descripción Open Graph y Twitter:**

Aceite de Arbequina cultivada en Callobre, A Estrada. Conoce el proyecto familiar As Besadas, sus formatos y dónde encontrarlo.


**Mis cambios o comentarios:**



### ES-SEO-02 · El aceite (`/producto`)

**Origen:** `content/site.ts`, `lib/metadata.ts`, `components/pages/product.tsx`.  
**Estado:** Metadatos activos. Open Graph y Twitter repiten título y descripción SEO; no hay textos distintos.

- **Título SEO:** AOVE Arbequina de Galicia, 250 y 500 ml | As Besadas
**Metadescripción:**

Aceite de oliva virgen extra As Besadas: Arbequina de Callobre, campaña 2026–2027, botellas de 250 y 500 ml y puntos de venta.

- **Título Open Graph y Twitter:** AOVE Arbequina de Galicia, 250 y 500 ml | As Besadas
**Descripción Open Graph y Twitter:**

Aceite de oliva virgen extra As Besadas: Arbequina de Callobre, campaña 2026–2027, botellas de 250 y 500 ml y puntos de venta.

- **Nombre Product en datos estructurados:** As Besadas · Aceite de oliva virgen extra Arbequina
**Descripción Product en datos estructurados:**

Aceitunas exclusivamente Arbequina cultivadas en Callobre, A Estrada. Un aceite de perfil suave y afrutado, en dos formatos.

- **Categoría Product en datos estructurados:** Aceite de oliva virgen extra
- **Marca Product:** As Besadas

**Mis cambios o comentarios:**



### ES-SEO-03 · Nuestra historia (`/historia`)

**Origen:** `content/site.ts`, `lib/metadata.ts`.  
**Estado:** Metadatos activos. Open Graph y Twitter repiten título y descripción SEO; no hay textos distintos.

- **Título SEO:** Nuestra historia: el olivar de Callobre | As Besadas
**Metadescripción:**

Conoce el origen familiar de As Besadas, la plantación de Arbequina de 2012 en Callobre y los olivos que inspiraron el proyecto.

- **Título Open Graph y Twitter:** Nuestra historia: el olivar de Callobre | As Besadas
**Descripción Open Graph y Twitter:**

Conoce el origen familiar de As Besadas, la plantación de Arbequina de 2012 en Callobre y los olivos que inspiraron el proyecto.


**Mis cambios o comentarios:**



### ES-SEO-04 · Dónde comprar (`/donde-comprar`)

**Origen:** `content/site.ts`, `lib/metadata.ts`.  
**Estado:** Metadatos activos. Open Graph y Twitter repiten título y descripción SEO; no hay textos distintos.

- **Título SEO:** Dónde comprar en A Estrada y Santiago | As Besadas
**Metadescripción:**

Encuentra As Besadas en Artesa, Amifrut y Fame Neghra. Consulta sus direcciones y cómo llegar a cada establecimiento.

- **Título Open Graph y Twitter:** Dónde comprar en A Estrada y Santiago | As Besadas
**Descripción Open Graph y Twitter:**

Encuentra As Besadas en Artesa, Amifrut y Fame Neghra. Consulta sus direcciones y cómo llegar a cada establecimiento.


**Mis cambios o comentarios:**



### ES-SEO-05 · Contacto (`/contacto`)

**Origen:** `content/site.ts`, `lib/metadata.ts`.  
**Estado:** Metadatos activos. Open Graph y Twitter repiten título y descripción SEO; no hay textos distintos.

- **Título SEO:** Contacto y consultas | As Besadas
**Metadescripción:**

Escribe a As Besadas para consultar un pedido, preguntar por el aceite o proponer un nuevo punto de venta.

- **Título Open Graph y Twitter:** Contacto y consultas | As Besadas
**Descripción Open Graph y Twitter:**

Escribe a As Besadas para consultar un pedido, preguntar por el aceite o proponer un nuevo punto de venta.


**Mis cambios o comentarios:**



---

# Gallego

## 1. Elementos compartidos

### GL-COMP-01 · Salto al contenido (`todas las páginas del idioma`)

**Origen:** `components/site-shell.tsx`.  
**Estado:** En todas las páginas; visible al recibir el foco del teclado.

- **Enlace:** Saltar ao contido — Destino: `#main-content`

**Mis cambios o comentarios:**



### GL-COMP-02 · Cabecera y navegación (`todas las páginas del idioma`)

**Origen:** `components/site-header.tsx`, `content/site.ts`.  
**Estado:** En todas las páginas. Navegación horizontal en escritorio; menú desplegable en móvil.

- **Marca:** As Besadas — Destino: `/gl`
- **Línea de origen:** Callobre · A Estrada
- **Nombre accesible de navegación:** Navegación principal
- **Enlace de navegación:** Inicio — Destino: `/gl`
- **Enlace de navegación:** O aceite — Destino: `/gl/aceite`
- **Enlace de navegación:** A nosa historia — Destino: `/gl/historia`
- **Enlace de navegación:** Onde mercar — Destino: `/gl/onde-mercar`
- **Enlace de navegación:** Contacto — Destino: `/gl/contacto`
- **Botón móvil:** Menú — Abre o cierra el menú, que repite los cinco enlaces anteriores.
- **Nombre accesible del botón cerrado:** Abrir o menú de navegación — Antes de abrir el menú.
- **Nombre accesible del botón abierto:** Pechar o menú de navegación — Con el menú abierto.

**Mis cambios o comentarios:**



### GL-COMP-03 · Selector de idioma (`todas las páginas del idioma`)

**Origen:** `components/site-header.tsx`, `content/site.ts`.  
**Estado:** En todas las páginas, tanto en escritorio como en móvil. El idioma activo está marcado.

- **Nombre accesible:** Idioma
- **Enlace:** ES — Destino correspondiente: `home` → `/`, `product` → `/producto`, `story` → `/historia`, `stores` → `/donde-comprar`, `contact` → `/contacto`
- **Enlace:** GL — Destino correspondiente: `home` → `/gl`, `product` → `/gl/aceite`, `story` → `/gl/historia`, `stores` → `/gl/onde-mercar`, `contact` → `/gl/contacto`

**Mis cambios o comentarios:**



### GL-COMP-04 · Pie de página (`todas las páginas del idioma`)

**Origen:** `components/site-footer.tsx`, `content/site.ts`.  
**Estado:** En todas las páginas.

- **Marca:** As Besadas
**Párrafo:**

Aceite de oliva virxe extra de Arbequina cultivada en Callobre, A Estrada.

- **Encabezado de navegación:** Navegación principal
- **Enlace de navegación:** Inicio — Destino: `/gl`
- **Enlace de navegación:** O aceite — Destino: `/gl/aceite`
- **Enlace de navegación:** A nosa historia — Destino: `/gl/historia`
- **Enlace de navegación:** Onde mercar — Destino: `/gl/onde-mercar`
- **Enlace de navegación:** Contacto — Destino: `/gl/contacto`
- **Encabezado:** Contacto
- **Correo:** aoveasbesadas@gmail.com — Destino: `mailto:aoveasbesadas@gmail.com`
- **Derechos:** © 2026 As Besadas — El año se calcula al renderizar; se muestra el valor correspondiente a la fecha de esta extracción.

**Mis cambios o comentarios:**



## 2. Inicio

### GL-INICIO-01 · Hero (`/gl`)

**Origen:** `content/site.ts`, `components/pages/home.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Callobre · A Estrada
- **H1:** Aceite de oliva virxe extra de Galicia
**Párrafo:**

Cultivamos as nosas olivas Arbequina nunha finca familiar de Callobre, A Estrada. Dese oliveiral nace As Besadas, un aceite suave e afroitado.

- **Botón:** Onde mercar — Destino: `/gl/onde-mercar`
- **Botón:** Coñecer o aceite — Destino: `/gl/aceite`
- **Dato de campaña:** Campaña dispoñible: 2026–2027
- **Texto alternativo:** Botella de aceite de oliva virxe extra As Besadas de 500 ml

**Mis cambios o comentarios:**



### GL-INICIO-02 · El aceite y formatos (`/gl`)

**Origen:** `content/site.ts`, `components/pages/home.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas. En móvil, el texto precede a las tarjetas; en escritorio, las tarjetas aparecen a la izquierda.

- **Antetítulo:** O aceite
- **H2:** Arbequina para a mesa de cada día
**Párrafo:**

Un aceite de perfil suave e afroitado en botellas de 250 e 500 ml. A campaña 2026–2027 xa está dispoñible; cada tenda pode ter distintos formatos.

- **Botón:** Coñecer o aceite — Destino: `/gl/aceite`
- **Tarjeta / formato:** 250 ml — Destino: `/gl/aceite`
- **Texto de tarjeta:** Para empezar a coñecelo
- **Texto alternativo:** Botella de aceite de oliva virxe extra As Besadas de 250 ml
- **Tarjeta / formato:** 500 ml — Destino: `/gl/aceite`
- **Texto de tarjeta:** Para telo á man
- **Texto alternativo:** Botella de aceite de oliva virxe extra As Besadas de 500 ml

**Mis cambios o comentarios:**



### GL-INICIO-03 · La finca (`/gl`)

**Origen:** `content/site.ts`, `components/pages/home.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** A finca
- **H2:** Antes da botella, está Callobre
**Párrafo:**

As Besadas comezou como un proxecto familiar nesta finca da Estrada. Dúas oliveiras centenarias inspiráronnos; o aceite actual procede da plantación de Arbequina realizada en 2012.

- **Botón:** Ler a nosa historia — Destino: `/gl/historia`
- **Texto alternativo:** Ringleiras de oliveiras na finca de Callobre

**Mis cambios o comentarios:**



### GL-INICIO-04 · En la mesa (`/gl`)

**Origen:** `content/site.ts`, `components/pages/home.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Texto alternativo:** Caixas con olivas recollidas nun oliveiral ao solpor
- **Antetítulo:** Na mesa
- **H2:** Empeza cun pouco de pan
**Párrafo:**

Proba unhas gotas antes de engadir outros ingredientes. Despois podes levalo a unha ensalada de tomate, unhas verduras ou unha pataca acabada de cocer.

- **Botón:** Coñecer o aceite — Destino: `/gl/aceite`

**Mis cambios o comentarios:**



### GL-INICIO-05 · Preguntas frecuentes (`/gl`)

**Origen:** `content/site.ts`, `components/pages/home.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Preguntas frecuentes
- **H2:** Antes de escoller a túa botella
- **Pregunta:** Onde se cultivan as olivas?
**Respuesta:**

Na nosa finca de Callobre, A Estrada, Pontevedra.

- **Pregunta:** Que variedade utilizades?
**Respuesta:**

Exclusivamente Arbequina cultivada na finca.

- **Pregunta:** Que formatos hai?
**Respuesta:**

Botellas de 250 e 500 ml. A dispoñibilidade de cada formato pode variar segundo a tenda.

- **Pregunta:** Onde podo mercalo?
**Respuesta:**

Nos establecementos que figuran na páxina Onde mercar.


**Mis cambios o comentarios:**



### GL-INICIO-06 · Puntos de venta (`/gl`)

**Origen:** `content/site.ts`, `components/pages/home.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Puntos de venda
- **H2:** Atopa As Besadas preto de ti
**Párrafo:**

Podes atopar o aceite na Estrada e en Santiago de Compostela. Consulta co establecemento se buscas un formato concreto.

- **Botón:** Onde mercar — Destino: `/gl/onde-mercar`
- **Localidad:** A Estrada
- **Listado breve:** Artesa · Amifrut
- **Separador de escritorio:** | — Oculto en móvil.
- **Localidad:** Santiago de Compostela
- **Listado breve:** Fame Neghra

**Mis cambios o comentarios:**



## 3. El aceite

### GL-PRODUCTO-01 · Presentación y selector de formato (`/gl/aceite`)

**Origen:** `content/site.ts`, `components/pages/product.tsx`, `components/pages/shared.tsx`, `components/product-format-carousel.tsx`.  
**Estado:** Visible. El selector inicia en 250 ml; al pulsar 500 ml cambian imagen, alt y formato mostrado. No hay compra.

- **Antetítulo:** O aceite
- **H1:** Aceite de oliva virxe extra Arbequina
**Párrafo:**

Olivas exclusivamente Arbequina cultivadas en Callobre, A Estrada. Un aceite de perfil suave e afroitado, en dous formatos.

- **Dato de campaña:** Campaña dispoñible · 2026–2027
- **Dato de formatos:** Formatos: 250 ml · 500 ml
- **Botón:** Onde mercar — Destino: `/gl/onde-mercar`
- **Botón:** Consultar un pedido por correo — Destino: `mailto:aoveasbesadas@gmail.com`
**Aviso:**

A dispoñibilidade de cada formato pode variar segundo o establecemento.

- **Nombre accesible del grupo:** Ver formato de botella
- **Botón de formato:** 250 ml — Seleccionado al inicio.
- **Botón de formato:** 500 ml — Seleccionable.
- **Estado inicial:** Formato mostrado: 250 ml
- **Estado alternativo:** Formato mostrado: 500 ml
- **Alt inicial:** Botella de aceite de oliva virxe extra As Besadas de 250 ml
- **Alt alternativo:** Botella de aceite de oliva virxe extra As Besadas de 500 ml
**Nota:**

A elección do formato só cambia a imaxe; non realiza unha compra.


**Mis cambios o comentarios:**



### GL-PRODUCTO-02 · Ficha del aceite (`/gl/aceite`)

**Origen:** `content/site.ts`, `components/pages/product.tsx`, `components/pages/shared.tsx`, `components/product-format-carousel.tsx`.  
**Estado:** Visible en ambas vistas.

- **H2:** O aceite, dunha ollada
- **Dato:** Categoría: Aceite de oliva virxe extra
- **Dato:** Variedade: Arbequina
- **Dato:** Cultivo: Callobre, A Estrada, Pontevedra
- **Dato:** Perfil: Suave e afroitado
- **Dato:** Campaña dispoñible: 2026–2027
- **Dato:** Formatos: 250 ml · 500 ml

**Mis cambios o comentarios:**



### GL-PRODUCTO-03 · Del olivar y uso (`/gl/aceite`)

**Origen:** `content/site.ts`, `components/pages/product.tsx`, `components/pages/shared.tsx`, `components/product-format-carousel.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Do oliveiral
- **H2:** Recollida temperá, elaboración en pouco tempo
**Párrafo:**

Recollemos as olivas á man en outubro e elaboramos o aceite en frío antes de 24 horas desde a recollida.

- **H2:** Por onde empezar a probalo
**Párrafo:**

Sirve unhas gotas con pan. Tamén podes usalo nunha ensalada de tomate, sobre verduras ou cunha pataca cocida.

- **Enlace:** Coñecer a nosa historia → — Destino: `/gl/historia`

**Mis cambios o comentarios:**



### GL-PRODUCTO-04 · Cierre (`/gl/aceite`)

**Origen:** `content/site.ts`, `components/pages/product.tsx`, `components/pages/shared.tsx`, `components/product-format-carousel.tsx`.  
**Estado:** Visible en ambas vistas.

- **H2:** Atopa a túa botella
**Párrafo:**

Consulta os puntos de venda. Se buscas un formato concreto, confirma a súa dispoñibilidade coa tenda antes de ir.

- **Botón:** Onde mercar — Destino: `/gl/onde-mercar`

**Mis cambios o comentarios:**



## 4. Nuestra historia

### GL-HISTORIA-01 · Presentación (`/gl/historia`)

**Origen:** `content/site.ts`, `components/pages/story.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** A nosa historia
- **H1:** Un oliveiral familiar en Callobre
**Párrafo:**

As Besadas nace dunha finca familiar na Estrada e da decisión de cultivar alí olivas para elaborar o noso propio aceite.


**Mis cambios o comentarios:**



### GL-HISTORIA-02 · El comienzo (`/gl/historia`)

**Origen:** `content/site.ts`, `components/pages/story.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** O comezo
- **H2:** Dúas oliveiras que nos fixeron mirar a finca doutro xeito
**Párrafo:**

Na finca hai dúas oliveiras centenarias que inspiraron o proxecto. Hoxe non producen. O aceite que comercializamos procede doutra plantación: a Arbequina que cultivamos en Callobre.


**Mis cambios o comentarios:**



### GL-HISTORIA-03 · La plantación (`/gl/historia`)

**Origen:** `content/site.ts`, `components/pages/story.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Texto alternativo:** Oliveiras da finca coa luz da tarde
- **Antetítulo:** 2012
- **H2:** A plantación de Arbequina
**Párrafo:**

Plantamos o oliveiral en 2012 e participamos en CERNES. Segundo o relato familiar, no contexto daquel proxecto foi a primeira plantación de oliveiras da Estrada. Desde entón aprendemos a observar a finca e a adaptar o traballo ás súas condicións.


**Mis cambios o comentarios:**



### GL-HISTORIA-04 · Hoy (`/gl/historia`)

**Origen:** `content/site.ts`, `components/pages/story.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Hoxe
- **H2:** O aceite desta finca
**Párrafo:**

Recollemos á man a Arbequina en outubro. A campaña 2026–2027 recolle ese traballo e pode atoparse en botellas de 250 e 500 ml.

- **Botón:** Coñecer o aceite — Destino: `/gl/aceite`
- **Botón:** Onde mercar — Destino: `/gl/onde-mercar`
- **Texto alternativo:** Caixas de olivas entre oliveiras ao solpor

**Mis cambios o comentarios:**



## 5. Dónde comprar

### GL-TIENDAS-01 · Presentación y aviso (`/gl/onde-mercar`)

**Origen:** `content/site.ts`, `components/pages/stores.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Puntos de venda
- **H1:** Onde mercar As Besadas
**Párrafo:**

O noso aceite véndese nestes establecementos da Estrada e de Santiago de Compostela.

**Aviso:**

A dispoñibilidade pode variar segundo o establecemento e o formato. Se buscas unha botella concreta, consulta coa tenda antes de desprazarte.


**Mis cambios o comentarios:**



### GL-TIENDAS-02 · A Estrada (`/gl/onde-mercar`)

**Origen:** `content/site.ts`, `components/pages/stores.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **H2:** A Estrada
- **H3:** Artesa
- **Dirección:** Rúa Irida, 19, 36680 A Estrada, Pontevedra
- **Enlace externo:** Como chegar ↗ — Destino: `https://www.google.com/maps/search/?api=1&query=Artesa%2C%20R%C3%BAa%20Irida%2C%2019%2C%2036680%20A%20Estrada%2C%20Pontevedra`. Abre Google Maps en nueva pestaña.
- **H3:** Amifrut
- **Dirección:** Porta do Sol, 27, bajo, 36680 A Estrada, Pontevedra
- **Enlace externo:** Como chegar ↗ — Destino: `https://www.google.com/maps/search/?api=1&query=Amifrut%2C%20Porta%20do%20Sol%2C%2027%2C%20bajo%2C%2036680%20A%20Estrada%2C%20Pontevedra`. Abre Google Maps en nueva pestaña.

**Mis cambios o comentarios:**



### GL-TIENDAS-03 · Santiago de Compostela (`/gl/onde-mercar`)

**Origen:** `content/site.ts`, `components/pages/stores.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **H2:** Santiago de Compostela
- **H3:** Fame Neghra
- **Dirección:** Rúa da Acibechería, 17, 15704 Santiago de Compostela, A Coruña
- **Enlace externo:** Como chegar ↗ — Destino: `https://www.google.com/maps/search/?api=1&query=Fame%20Neghra%2C%20R%C3%BAa%20da%20Acibecher%C3%ADa%2C%2017%2C%2015704%20Santiago%20de%20Compostela%2C%20A%20Coru%C3%B1a`. Abre Google Maps en nueva pestaña.

**Mis cambios o comentarios:**



### GL-TIENDAS-04 · Consultas y producto (`/gl/onde-mercar`)

**Origen:** `content/site.ts`, `components/pages/stores.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **H2:** Queres preguntar por un pedido?
**Párrafo:**

Podes escribirnos por correo. Unha consulta non confirma un pedido.

- **Botón:** Consultar un pedido por correo — Destino: `mailto:aoveasbesadas@gmail.com`
- **H2:** Atopa a túa botella
**Párrafo:**

Consulta os puntos de venda. Se buscas un formato concreto, confirma a súa dispoñibilidade coa tenda antes de ir.

- **Botón:** Ver o aceite e os seus formatos — Destino: `/gl/aceite`

**Mis cambios o comentarios:**



## 6. Contacto

### GL-CONTACTO-01 · Presentación (`/gl/contacto`)

**Origen:** `content/site.ts`, `components/pages/contact.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **Antetítulo:** Contacto
- **H1:** Falemos de As Besadas
**Párrafo:**

Para consultar un pedido ou facernos unha pregunta sobre o aceite e o proxecto, escríbenos a este correo.

- **Correo:** aoveasbesadas@gmail.com — Destino: `mailto:aoveasbesadas@gmail.com`

**Mis cambios o comentarios:**



### GL-CONTACTO-02 · Pedidos y tiendas (`/gl/contacto`)

**Origen:** `content/site.ts`, `components/pages/contact.tsx`, `components/pages/shared.tsx`.  
**Estado:** Visible en ambas vistas.

- **H2:** Consultas sobre pedidos
**Párrafo:**

Cóntanos que precisas por correo. Responderémosche por esa vía; a mensaxe non supón un pedido confirmado.

- **Botón:** Consultar un pedido por correo — Destino: `mailto:aoveasbesadas@gmail.com`
- **H2:** Buscas unha tenda?
**Párrafo:**

Consulta os nosos puntos de venda na Estrada e en Santiago de Compostela.

- **Botón:** Onde mercar — Destino: `/gl/onde-mercar`

**Mis cambios o comentarios:**



### GL-CONTACTO-03 · Nuevos puntos de venta y formulario (`/gl/contacto`)

**Origen:** `content/site.ts`, `components/pages/contact.tsx`, `components/pages/shared.tsx`.  
**Estado:** La invitación por correo está activa. El formulario se muestra como vista previa, con campos y botón de envío desactivados.

- **H2:** Para novos puntos de venda
**Párrafo:**

Se che interesa ofrecer As Besadas no teu establecemento, escríbenos co nome da tenda e a túa localidade.

- **Botón:** Escribir por correo — Destino: `mailto:aoveasbesadas@gmail.com?subject=Novo%20punto%20de%20venda%20As%20Besadas`
- **Asunto predefinido:** Novo punto de venda As Besadas
- **Cuerpo predefinido:** Ninguno
- **H3 y nombre accesible del formulario:** Formulario para establecementos
**Aviso:**

Este formulario é unha vista previa e aínda non admite envíos. Mentres tanto, podes escribirnos por correo.

- **Etiqueta de campo desactivado:** Nome do establecemento
- **Etiqueta de campo desactivado:** Localidade
- **Etiqueta de campo desactivado:** Persoa de contacto
- **Etiqueta de campo desactivado:** Correo electrónico
- **Etiqueta de campo desactivado:** Mensaxe
- **Botón de envío desactivado:** Enviar consulta
- **Opciones, ayudas y placeholders:** No hay textos de este tipo en el formulario implementado.
- **Error o confirmación de envío:** No existen estados implementados; el formulario no admite envíos.

**Mis cambios o comentarios:**



## 7. Otras páginas y estados

### GL-OTROS-01 · Páginas y estados adicionales (`rutas del idioma`)

**Origen:** `app/`, `components/`, `content/site.ts`.  
**Estado:** No hay rutas propias de error, textos legales publicados ni páginas adicionales. Los errores de Next.js usan su comportamiento predeterminado y no hay texto de marca definido para ellos.

- **Disponibilidad de formatos:** A dispoñibilidade de cada formato pode variar segundo o establecemento. — Visible en la página de producto.
- **Disponibilidad en tiendas:** A dispoñibilidade pode variar segundo o establecemento e o formato. Se buscas unha botella concreta, consulta coa tenda antes de desprazarte. — Visible en Dónde comprar.
- **Formulario sin servicio:** Este formulario é unha vista previa e aínda non admite envíos. Mentres tanto, podes escribirnos por correo. — Visible en Contacto.
- **Otros mensajes condicionales:** El menú móvil y el selector de formato son los únicos cambios de texto implementados; se documentan arriba.

**Mis cambios o comentarios:**



## 8. Metadatos SEO

### Metadatos compartidos

**Origen:** `lib/metadata.ts`, `components/site-shell.tsx`, `content/site.ts`.

- **Nombre del sitio en Open Graph:** As Besadas
- **Alt de imagen social en todas las páginas:** As Besadas · 500 ml
- **Organización en datos estructurados:** Nombre: As Besadas; URL: https://asbesadas.com; correo: aoveasbesadas@gmail.com.

**Mis cambios o comentarios:**



### GL-SEO-01 · Inicio (`/gl`)

**Origen:** `content/site.ts`, `lib/metadata.ts`.  
**Estado:** Metadatos activos. Open Graph y Twitter repiten título y descripción SEO; no hay textos distintos.

- **Título SEO:** Aceite de oliva virxe extra de Galicia | As Besadas
**Metadescripción:**

Aceite de Arbequina cultivada en Callobre, A Estrada. Coñece o proxecto familiar As Besadas, os seus formatos e onde atopalo.

- **Título Open Graph y Twitter:** Aceite de oliva virxe extra de Galicia | As Besadas
**Descripción Open Graph y Twitter:**

Aceite de Arbequina cultivada en Callobre, A Estrada. Coñece o proxecto familiar As Besadas, os seus formatos e onde atopalo.


**Mis cambios o comentarios:**



### GL-SEO-02 · El aceite (`/gl/aceite`)

**Origen:** `content/site.ts`, `lib/metadata.ts`, `components/pages/product.tsx`.  
**Estado:** Metadatos activos. Open Graph y Twitter repiten título y descripción SEO; no hay textos distintos.

- **Título SEO:** AOVE Arbequina de Galicia, 250 e 500 ml | As Besadas
**Metadescripción:**

Aceite de oliva virxe extra As Besadas: Arbequina de Callobre, campaña 2026–2027, botellas de 250 e 500 ml e puntos de venda.

- **Título Open Graph y Twitter:** AOVE Arbequina de Galicia, 250 e 500 ml | As Besadas
**Descripción Open Graph y Twitter:**

Aceite de oliva virxe extra As Besadas: Arbequina de Callobre, campaña 2026–2027, botellas de 250 e 500 ml e puntos de venda.

- **Nombre Product en datos estructurados:** As Besadas · Aceite de oliva virxe extra Arbequina
**Descripción Product en datos estructurados:**

Olivas exclusivamente Arbequina cultivadas en Callobre, A Estrada. Un aceite de perfil suave e afroitado, en dous formatos.

- **Categoría Product en datos estructurados:** Aceite de oliva virxe extra
- **Marca Product:** As Besadas

**Mis cambios o comentarios:**



### GL-SEO-03 · Nuestra historia (`/gl/historia`)

**Origen:** `content/site.ts`, `lib/metadata.ts`.  
**Estado:** Metadatos activos. Open Graph y Twitter repiten título y descripción SEO; no hay textos distintos.

- **Título SEO:** A nosa historia: o oliveiral de Callobre | As Besadas
**Metadescripción:**

Coñece a orixe familiar de As Besadas, a plantación de Arbequina de 2012 en Callobre e as oliveiras que inspiraron o proxecto.

- **Título Open Graph y Twitter:** A nosa historia: o oliveiral de Callobre | As Besadas
**Descripción Open Graph y Twitter:**

Coñece a orixe familiar de As Besadas, a plantación de Arbequina de 2012 en Callobre e as oliveiras que inspiraron o proxecto.


**Mis cambios o comentarios:**



### GL-SEO-04 · Dónde comprar (`/gl/onde-mercar`)

**Origen:** `content/site.ts`, `lib/metadata.ts`.  
**Estado:** Metadatos activos. Open Graph y Twitter repiten título y descripción SEO; no hay textos distintos.

- **Título SEO:** Onde mercar na Estrada e Santiago | As Besadas
**Metadescripción:**

Atopa As Besadas en Artesa, Amifrut e Fame Neghra. Consulta os enderezos e como chegar a cada establecemento.

- **Título Open Graph y Twitter:** Onde mercar na Estrada e Santiago | As Besadas
**Descripción Open Graph y Twitter:**

Atopa As Besadas en Artesa, Amifrut e Fame Neghra. Consulta os enderezos e como chegar a cada establecemento.


**Mis cambios o comentarios:**



### GL-SEO-05 · Contacto (`/gl/contacto`)

**Origen:** `content/site.ts`, `lib/metadata.ts`.  
**Estado:** Metadatos activos. Open Graph y Twitter repiten título y descripción SEO; no hay textos distintos.

- **Título SEO:** Contacto e consultas | As Besadas
**Metadescripción:**

Escribe a As Besadas para consultar un pedido, preguntar polo aceite ou propoñer un novo punto de venda.

- **Título Open Graph y Twitter:** Contacto e consultas | As Besadas
**Descripción Open Graph y Twitter:**

Escribe a As Besadas para consultar un pedido, preguntar polo aceite ou propoñer un novo punto de venda.


**Mis cambios o comentarios:**



# Anexo · Textos encontrados pero no utilizados

Los componentes `components/cta-band.tsx`, `components/page-hero.tsx`, `components/editorial-image-frame.tsx` y `components/section-heading.tsx` no están importados por las rutas actuales. De ellos, solo `components/cta-band.tsx` contiene un texto público literal sin uso:

- **Antetítulo no utilizado:** Contacto
- **Texto guardado sin uso (castellano, `content/site.ts`):** Arbequina de nuestra finca · Campaña
- **Texto guardado sin uso (gallego, `content/site.ts`):** Arbequina da nosa finca · Campaña
- **Dato guardado sin uso (`content/site.ts`):** Callobre, A Estrada, Pontevedra

**Archivo editorial anterior:** `docs/texto-web.md` conserva un inventario previo, sin conexión con las rutas actuales; no se ha usado para establecer el texto vigente.

**Borradores legales:** no hay textos legales redactados en las rutas. `docs/antes-de-publicar.md` es una lista interna de pendientes, no un borrador legal publicado.

**Información solo en imágenes:** las fotografías de las botellas de 250 y 500 ml muestran en sus etiquetas una insignia asociativa y referencias a la cosecha y la extracción. Esos elementos no se transcriben como contenido HTML; conviene revisar la etiqueta original si se quiere editar o validar esa información.

**Enlaces de correo:** salvo el enlace para nuevos puntos de venta, los enlaces `mailto:` no incluyen asunto ni cuerpo predefinidos. El enlace para nuevos puntos de venta incluye el asunto indicado en cada idioma y tampoco incluye cuerpo.

**Elementos gráficos de enlaces:** los botones de acción muestran `→` o `↗` y el enlace de la historia muestra `→`; son caracteres decorativos ocultos al lector de pantalla. El texto de cada control y su destino figuran en su sección.

**Comprobación local:** se intentó iniciar Next.js, pero detectó otro servidor de desarrollo y la instancia indicada no respondió desde este entorno. Orden, estados y destinos se contrastaron con las rutas, los componentes y el contenido local.
