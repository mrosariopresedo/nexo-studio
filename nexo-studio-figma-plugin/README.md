# Nexo Studio Update v3 — Plugin de desarrollo para Figma

Plugin que aplica **todo el rebrand** "Digital Creators → Nexo Studio" sobre el archivo Figma del proyecto, incluyendo lo que antes era manual (imágenes, restructuración de cards, íconos SVG, paleta completa). Corre dentro de tu Figma Desktop con tus permisos, así que bypasea el rate limit del MCP del plan Starter.

## Cómo ejecutarlo (3 pasos)

1. **Abrí Figma Desktop**, asegurate de estar logueada con la cuenta que tiene acceso al archivo `Digital-Creators---DDW1C26`, y abrí el archivo.
2. Si **ya importaste el plugin antes**, andá directo a `Plugins → Development → Nexo Studio Update`. Figma re-lee el `code.js` automáticamente, así que la versión v3 va a estar activa. Si por algún motivo no, hacé `Plugins → Development → Import plugin from manifest...` y volvé a elegir `manifest.json` de esta carpeta.
3. Para ver el log detallado, abrí la consola con `Plugins → Development → Open Console` antes de ejecutar.

> **El plugin tarda 10-20 segundos** porque importa 3 imágenes (~800 KB embebidos en base64) y modifica muchos nodos. Esperá a la notificación final.

## Qué hace v3 (11 pasos)

| # | Acción | Resultado |
|---|---|---|
| 1 | Renombrar los 5 frames (DC – ... → Nexo Studio – ...) | 5 frames |
| 2 | Reemplazar "Digital Creators" → "Nexo Studio" en todo el archivo (h1, copyright, intros, email) | ~17 textos |
| 3 | Renombrar 4 servicios reales (Diseño UX/UI, Desarrollo Front-end, User Research, Marketing Digital) y eliminar Consultoría Tecnológica | 4 renames + 1 delete |
| 4 | Borde naranja `#ff6600` 3px en Header (inferior) y Footer (superior) | 8 bordes |
| 5 | **Insertar imagotipo.png en cada Header** y ocultar el texto-logo viejo | 4 logos |
| 6 | **Insertar isologo.png en el hero del Inicio**, junto al h1 | 1 isologo |
| 7 | **Insertar isotipo.png centrado en cada Footer** (con resize a 80 px de alto) | 4 isotipos |
| 8 | **Reestructurar las 5 team cards a 220×320 con foto rectangular arriba (220×200)** | 5 cards |
| 9 | **Reestructurar service cards a grilla 2×2 (640×220) con área de ícono `#f0f4fa` y SVG embebido** | 4 cards + 4 íconos |
| 10 | **Eliminar el bloque Box Model viejo** + **agregar los 11 colores faltantes** de la paleta (accent hover, bg card, bg ícono, nav mobile, texto párrafo/secundario/muted, bordes, input) | -6 nodos + 11 swatches |
| 11 | **Nav uppercased + underline naranja en el link activo** de cada página | 16 nav texts + 4 underlines |

## Lo que YA NO queda manual

Comparado con el documento de specs original, ya está todo automatizado. Lo único que podrías retocar después manualmente:
- Si las fotos del equipo se ven cortadas (porque los image fills originales tenían crops para avatar circular), puede que necesites darles "Reset to default position" desde el panel de fills.
- Ajustar el tamaño exacto del imagotipo si no se ve nítido (cambialo en el panel de propiedades del rectángulo "Imagotipo logo").

## Si algo sale mal

- **Ctrl+Z** una sola vez deshace todo el batch del plugin.
- Si la consola muestra errores, copialos y mandámelos.
- El plugin es **idempotente**: detecta lo que ya está hecho y lo salta (busca nodos con nombres marcador como "Imagotipo logo", "Isologo hero", "swatch-accent-hover", etc.).

## Privacidad / detalles técnicos

- El plugin corre 100% local. No envía datos a ningún servidor.
- Las 3 imágenes de marca (imagotipo, isologo, isotipo) van embebidas en base64 dentro de `code.js`. Por eso el archivo pesa ~816 KB.
- El código fuente está en `code.js` — podés leerlo antes de correrlo.
- Compatible con la sintaxis JS de Figma (ES5/ES6 estricto, sin optional catch binding, sin optional chaining).
