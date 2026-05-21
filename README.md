# Nexo Studio - Actividad 1

Sitio web grupal de la consultora **Nexo Studio**, desarrollado para la materia Diseño y Desarrollo Web 1 - Comisión 26 (2026).

---

## 1. Datos del grupo

**Grupo:** 02  
**Consultora:** Nexo Studio  
**Comisión:** DDW1C26

| Apellido y nombre | Rol en el equipo |
|---|---|
| GAVILANES, Lucía | Diseñadora UI |
| MARTINS, Valentina | Diseñadora UX |
| PRESEDO VALENZUELA, María del Rosario | Desarrolladora Front-end |
| RAIMONDO, Mora | Marketing |
| SAMA, Martina Sol | Research / Investigación |

---

## 2. Enlaces a páginas personales

| Integrante | Portfolio personal |
|---|---|
| Lucía Gavilanes | https://luligavilanes.github.io/proyecto1jueves/ |
| Valentina Martins | https://valmartins222.github.io/PROYECTO.P2/ |
| Rosario Presedo | https://mrosariopresedo.github.io/portfolio-presedo-nexo-studio/ |
| Mora Raimondo | https://moraraimondo-cyber.github.io/proyecto1jueves/ |
| Martina Sama | https://martinasama2005.github.io/proyecto1jueves/ |

---

## 3. Sitio web de la consultora

| | Enlace |
|---|---|
| **Sitio publicado (GitHub Pages)** | https://mrosariopresedo.github.io/nexo-studio/ |

---

## 4. Mapa del sitio

![Mapa del sitio](img/mapa-sitio.svg)

---

## 5. Descripción de páginas

### Inicio (`index.html`)
Página principal de Nexo Studio. Presenta la propuesta de valor de la consultora y un acceso directo al formulario de contacto mediante un botón CTA. Incluye la sección **Portfolio del Equipo**, con una card por integrante que muestra foto, nombre, rol y enlace al portfolio personal publicado en GitHub Pages.

### Servicios (`servicios.html`)
Describe los cuatro servicios que ofrece la consultora: **Diseño UX/UI**, **Desarrollo Front-end**, **User Research** y **Marketing Digital**. Cada servicio se presenta en una card con ícono SVG ilustrativo, título y descripción. Al pie de la sección aparece un botón CTA que redirige al formulario de contacto.

### Proyectos (`proyectos.html`)
Sección reservada para mostrar los proyectos realizados por el equipo. Actualmente muestra un mensaje de "próximamente" mientras se prepara el contenido.

### Contacto (`contacto.html`)
Formulario de contacto con campos de nombre, email y mensaje, todos con validación HTML5 (`required`) y atributos de autocompletado. Incluye también la dirección de correo electrónico directa del estudio.

---

## 6. Contenido de la materia aplicado

Esta sección documenta cómo el sitio de Nexo Studio pone en práctica los conceptos enseñados en Diseño y Desarrollo Web 1 (DDW1C26 - UADE, 2026).

---

### 6.1 Leyes de Gestalt

Las Leyes de Gestalt describen cómo el cerebro humano organiza e interpreta los elementos visuales. El sitio las aplica de la siguiente manera:

**Proximidad**
Los elementos relacionados se ubican físicamente cerca. En la sección Equipo, cada card agrupa foto, número de orden, nombre, rol y enlace al portfolio como una unidad perceptual. En el footer, los ítems de navegación, servicios y contacto se organizan en columnas separadas para que cada grupo se lea como un bloque independiente.

**Similitud**
Elementos con la misma función comparten la misma forma visual. Las cinco cards del equipo son estructuralmente idénticas (mismo aspect-ratio `3/4`, mismo radio `rounded-[10px]`, mismo orden tipográfico). Las cuatro filas de servicios repiten la misma grilla de cuatro columnas (número → título → descripción → etiqueta de tecnologías), señalando al usuario que pertenecen a la misma categoría.

**Continuidad**
El layout usa líneas divisoras horizontales (`border-b border-line-soft`) que guían la lectura de arriba a abajo de forma ininterrumpida. En Servicios, la barra superior negra sobre la lista y las líneas entre filas crean un flujo visual continuo. Los botones CTA al final de cada sección funcionan como "puente" hacia la siguiente acción.

**Figura-Fondo**
El isotipo (la X) aprovecha el fondo crema del sitio como tercer elemento activo: el círculo central recibe el color `#F2EDE3` del fondo, haciendo que el punto naranja interior "flote" sobre la intersección. El header sticky usa `backdrop-blur-md` y opacidad `bg-cream/85` para mantener legibilidad sin romper la relación figura-fondo con el contenido de atrás.

**Cierre**
El logotipo forma una X cerrada y reconocible aunque sus dos trazos sean de colores distintos. El cerebro completa la forma y la identifica como una unidad. La animación de entrada (`x-draw`) refuerza este cierre construyendo cada trazo desde el centro.

**Pregnancia (Ley de la Buena Forma)**
El sistema de diseño prioriza formas simples y regulares: el isotipo es dos líneas y un círculo; los botones son píldoras uniformes (`rounded-full`); las cards tienen bordes redondeados consistentes. La paleta de tres colores (crema, tinta, acento) reduce la carga cognitiva y hace que cada elemento sea fácilmente memorizable.

**Región Común**
Cada sección del sitio está delimitada por bordes o cambios de fondo que la convierten en una región visualmente unificada. El header sticky con borde inferior, el footer con borde superior y el bloque de métricas con borde superior e inferior son ejemplos de regiones comunes claramente definidas.

---

### 6.2 Tipografía

El sitio aplica principios de jerarquía tipográfica con una escala de tres familias de fuente con funciones claramente diferenciadas:

| Familia | Uso | Justificación |
|---|---|---|
| **Geist** (sans-serif) | Cuerpo, títulos, botones | Máxima legibilidad en pantalla; trazos abiertos y espaciado optimizado para digital |
| **Geist Mono** (monoespaciada) | Etiquetas, numeración, metadatos | Contraste textural con el sans; asocia visualmente el contenido con datos técnicos o de sistema |
| **Instrument Serif** (serif itálica) | Inicial "e" del wordmark del footer | Detalle editorial puntual; rompe la uniformidad geométrica con un trazo humanista |

La jerarquía de tamaños usa `clamp()` para escala fluida (sin saltos abruptos entre dispositivos):

- `h1` → `clamp(56px, 11vw, 160px)` - titular dominante
- `h2` → `clamp(40px, 6vw, 88px)` - secciones
- Párrafo lead → `clamp(20px, 2.4vw, 28px)` - lectura cómoda en cualquier viewport
- Botones → `15px` fijo - acción clara y consistente
- Etiquetas mono → `10–11px` uppercase con `letter-spacing: 0.1em` - metadatos subordinados

El tracking negativo en los títulos grandes (`tracking-[-0.04em]`) y el `leading` ajustado (`leading-[0.96]` en h1) son decisiones tipográficas deliberadas para lograr bloques de texto compactos y expresivos.

---

### 6.3 Teoría del color

La paleta es intencionalmente mínima: tres colores base con variantes tonal, sin mezcla arbitraria.

| Token | HEX | Rol |
|---|---|---|
| `cream` | `#F2EDE3` | Fondo global; cálido, no blanco puro para reducir fatiga visual |
| `ink` | `#15233F` | Texto y elementos de UI primarios; azul muy oscuro (en lugar de negro puro) |
| `accent` | `#E85F25` | Color de acción único: CTAs, énfasis, detalles del logotipo |

**Decisiones de contraste:** la combinación `ink` sobre `cream` cumple con relación de contraste AA del estándar WCAG. `cream` sobre `ink` (botón oscuro) y `white` sobre `accent` (botón naranja) también superan el umbral de legibilidad mínimo.

**Uso del color como señal:** el naranja `accent` aparece exclusivamente en elementos interactivos o de alta jerarquía (botón principal, subrayado del hero, punto del logotipo, hover de links). Esta restricción de uso convierte al color en un sistema de señales, no en decoración.

**Textura sutil:** se agrega una capa de grano SVG con `mix-blend-mode: multiply` sobre todo el fondo, suavizando el blanco digital y dotando al sitio de una calidad impresa/editorial sin romper ningún contraste.

---

### 6.4 HTML semántico

El código usa etiquetas de significado estructural en lugar de `<div>` genéricos cuando el contenido lo justifica:

```
<header>    → cabecera del sitio con navegación
<nav>       → menú de navegación principal
<main>      → contenido principal de cada página
<section>   → bloques temáticos (Hero, Equipo, Servicios, Proceso, etc.)
<article>   → unidad de contenido independiente (cards de servicios, cards del equipo)
<footer>    → pie de página con links y datos del estudio
<h1>–<h3>   → jerarquía de encabezados sin saltos de nivel
<a>         → todos los enlaces con href real y texto descriptivo
```

**Accesibilidad:**
- `lang="es"` en `<html>` para lectores de pantalla.
- `alt` descriptivo en todas las imágenes de personas (e.g. `"Foto de Rosario Presedo"`); `alt=""` en imágenes puramente decorativas.
- `aria-label="Abrir menú"` en el botón hamburger (sin texto visible).
- `aria-hidden="true"` en los SVG decorativos del isotipo que no aportan información.
- `rel="noopener noreferrer"` en todos los links externos (`target="_blank"`).
- `<meta name="description">` con descripción única en cada página para SEO.

**Formulario (`contacto.html`):**
- Tipo semántico correcto en cada campo (`type="email"`, `type="text"`, `<textarea>`).
- Atributo `required` en todos los campos obligatorios.
- Atributos `autocomplete` para mejorar la experiencia en móviles.
- Validación nativa HTML5 antes de cualquier submit.

---

### 6.5 CSS y diseño responsive

**Framework y arquitectura:**
El sitio combina **Tailwind CSS** (CDN con configuración personalizada de tokens) con un archivo `estilos/style.css` complementario. Las clases utility de Tailwind manejan layout, espaciado y tipografía; el CSS custom solo cubre lo que Tailwind no puede expresar: animaciones con `@keyframes`, el hover complejo de la lista de servicios, y la textura de grano.

**Responsive design:**
- Enfoque *mobile-first*: los breakpoints se definen con los prefijos `sm:` y `md:` de Tailwind.
- El menú de navegación colapsa a un botón hamburger en viewports menores a `640px`, controlado por JavaScript (`menu.js`) sin ninguna dependencia externa.
- Las grillas se adaptan progresivamente: por ejemplo, el equipo pasa de `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-5`.
- Las imágenes flotantes de hover en la lista de servicios se ocultan con `display: none` en viewports menores a `960px` para evitar solapamientos.

**Layout:**
- **CSS Grid** para la estructura de páginas (secciones en dos o tres columnas con proporciones `[200px_1fr]`, `[1.2fr_1fr]`, etc.).
- **Flexbox** para componentes internos (header, cards, botones, filas de navegación).
- `max-w-[1280px] mx-auto` como contenedor máximo centrado en todas las secciones.

**Tipografía fluida:**
El uso de `clamp(min, val, max)` en tamaños y padding elimina la necesidad de breakpoints tipográficos explícitos. El padding horizontal también es fluido: `px-[clamp(20px,5vw,56px)]`.

**Animaciones e interacciones:**
- `IntersectionObserver` (`interactions.js`) dispara la clase `.in` sobre los elementos `.reveal` al entrar al viewport, produciendo una entrada con `opacity` + `translateY`.
- La animación del logo (`x-draw`, `dot-in`) usa `animation-fill-mode: both` para que el estado inicial no haga flash.
- El hover de la lista de servicios invierte los colores de la fila mediante un `::before` pseudo-elemento con `transform: scaleY(0→1)`, sin necesidad de cambiar clases con JS.
- El header sticky aplica `backdrop-filter: blur` con fallback transparente para navegadores sin soporte.

---

### 6.6 Principios de UX aplicados

- **Jerarquía visual clara:** en cada página existe un único `h1` dominante que comunica el valor principal; el resto de los elementos se subordinan en tamaño y peso.
- **CTA único y repetido:** cada página termina con un único llamado a la acción (contacto o siguiente paso), evitando la parálisis por elección.
- **Feedback inmediato:** el formulario de contacto muestra un estado de éxito visual (`fade-up`) tras el envío, sin recargar la página.
- **Estado activo en navegación:** el link de la página actual recibe clases `bg-ink text-cream` automáticamente mediante JS, orientando al usuario dentro del sitio.
- **Consistencia:** header, footer y sistema de colores son idénticos en todas las páginas, reduciendo la carga cognitiva de navegación.
- **Legibilidad en movimiento:** las transiciones usan `cubic-bezier(.2,.8,.2,1)` (ease-out suave) en lugar de `ease` estándar, para que los elementos desaceleren de forma orgánica y no parezcan cortarse.
