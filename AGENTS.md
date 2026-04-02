# AGENTS.md

## Project Overview

As Besadas es una marca de AOVE centrada en la variedad Arbequina.
El proyecto está cultivado en Galicia y se presenta desde una producción familiar, artesanal y local.
La versión actual de la web es informativa.
La arquitectura debe dejar preparado el terreno para una futura evolución hacia e-commerce, sin convertir todavía el sitio en una tienda.

## Brand Principles

- Premium, pero no lujoso ni artificial.
- Tono calmado, natural y honesto.
- Evitar afirmaciones exageradas o grandilocuentes.
- La identidad debe estar enraizada en el territorio, el cultivo y el proceso.
- Evitar clichés de marketing y lenguaje genérico de marca.

## Design Direction

- Lenguaje visual minimalista, elegante y con cierta sensibilidad editorial.
- Jerarquía tipográfica clara y cuidada.
- Espacio en blanco generoso.
- Evitar ruido visual y recursos decorativos innecesarios.
- Evitar layouts densos o con bloques demasiado comprimidos.
- Priorizar ritmo vertical frente a rejillas complejas.
- El hero debe sentirse equilibrado como composición; ninguna columna debe dominar de forma excesiva.

## UX Guidelines

- Priorizar legibilidad sobre decoración.
- Evitar bloques de texto estrechos o apretados.
- Mantener los componentes con aire y respiración.
- Pensar mobile-first, aunque la composición desktop siga siendo importante.
- La navegación debe ser clara, simple y fácil de escanear.

## Technical Constraints

- Next.js con App Router.
- TypeScript.
- Tailwind CSS.
- Sin CMS.
- Sin dependencias innecesarias.
- Enfoque static-first.
- Componentes reutilizables antes que duplicación de UI.

## Content Guidelines

- Español como idioma principal por ahora.
- Gallego previsto para una fase posterior.
- El copy debe sonar natural, local y creíble.
- Evitar lenguaje de placeholder genérico cuando se pueda redactar algo mejor.
- No inventar certificaciones, premios, reseñas ni claims técnicos no confirmados.

## File Structure Awareness

- `app/`: páginas, layout global y rutas de metadatos.
- `components/`: piezas reutilizables de interfaz.
- `content/`: contenido local del sitio y textos centralizados.
- `lib/`: utilidades compartidas, como helpers de metadata.

## Working Style For Codex

- Inspeccionar siempre antes de cambiar.
- Proponer un plan antes de cambios grandes.
- Preferir mejoras pequeñas, claras y de alta confianza.
- No refactorizar código no relacionado sin motivo explícito.
- Después de cambiar:
  - ejecutar `lint` si está disponible
  - resumir exactamente qué cambió
- Preservar la arquitectura existente salvo instrucción explícita en contra.

## Current Known Decisions

- La feature card del hero usa layout vertical apilado, no tres columnas estrechas.
- La variedad correcta de aceituna es Arbequina; no usar Arlequín ni variantes incorrectas.
- El tono del copy ya fue refinado para ser menos genérico y más enraizado en Galicia.

## Open Areas For Future Work

- Añadir datos reales de contacto.
- Incorporar fotografía real del producto y del entorno.
- Añadir versión en gallego.
- Preparar la evolución hacia e-commerce cuando corresponda.
