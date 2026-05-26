# Nexo Studio

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
| RAIMONDO, Mora | Marketing Digital |
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
Describe los cuatro servicios que ofrece la consultora: **Diseño UX/UI**, **Desarrollo Front-end**, **User Research** y **Marketing Digital**. Cada servicio se presenta como una fila interactiva con número, título, descripción y stack de herramientas. Al hacer hover, la fila invierte sus colores y revela una fotografía ilustrativa. Al pie de la sección aparece un botón CTA que redirige al formulario de contacto.

### Proyectos (`proyectos.html`)
Presenta el primer caso de estudio del equipo: **Terminal Inteligente de Mendoza (TIM)**, el centro de transporte digital de Mendoza. Incluye una descripción del proyecto, grilla de metadatos (cliente, tipo, año, equipo), tags de disciplinas aplicadas, botones para ver el prototipo en Figma y descargar el Documento de Proyecto, y un mock-up interactivo del sitio diseñado. Debajo se documentan las tres decisiones de diseño principales y la sub-sección **Líneas · 5 servicios**, una grilla con las cinco líneas del centro de transporte (Larga Distancia, Alta Montaña, Ruta del Vino, Aeropuerto, Universitario) y un enlace a la página individual que desarrolla cada integrante en GitHub Pages. La hoja de ruta del caso TIM muestra las etapas del proyecto: documento + UI Kit + prototipo publicados, cuatro líneas desplegadas, próxima implementación de la home en código y cierre con la integración final. La sección termina con los portfolios individuales de los cinco integrantes del equipo.

### Contacto (`contacto.html`)
Formulario de contacto con cinco campos: nombre, email, empresa/proyecto (opcional), servicio de interés y mensaje. Los campos obligatorios tienen validación HTML5 (`required`) y atributos de autocompletado. Incluye también la dirección de correo electrónico directa del estudio.

---

## 6. Contenido de la materia aplicado

Esta sección documenta cómo el sitio de Nexo Studio aplica los conceptos enseñados en Diseño y Desarrollo Web 1 (DDW1C26 - UADE, 2026).

---

### 6.1 Leyes de Gestalt y principios de diseño visual

Las Leyes de Gestalt explican cómo el cerebro humano percibe y organiza los elementos visuales en una composición. Junto con los principios de diseño CRAP (Contraste, Repetición, Alineación y Proximidad), son la base de las decisiones visuales del sitio.

**Proximidad**
Los elementos relacionados se ubican físicamente cerca para que se perciban como una unidad. En la sección Equipo, cada card agrupa foto, nombre, rol y enlace al portfolio. En el footer, los ítems de navegación, servicios y contacto se organizan en columnas separadas para que cada grupo se lea de forma independiente.

**Similitud**
Los elementos con la misma función tienen la misma forma visual. Las cinco cards del equipo son estructuralmente idénticas (mismas proporciones, mismo orden tipográfico, mismo estilo de imagen). Las cuatro filas de servicios repiten la misma estructura, indicando visualmente que pertenecen a una misma categoría.

**Figura y fondo**
El isotipo (la X) aprovecha el color de fondo del sitio como tercer elemento activo: el círculo central toma el color crema del fondo, haciendo que el punto naranja "flote" sobre la intersección de los dos trazos. Esto aplica la relación figura-fondo para que el logotipo sea reconocible con una forma muy simple.

**Cierre**
El logotipo forma una X reconocible aunque sus dos trazos sean de colores distintos. El cerebro completa la forma y la identifica como una unidad cerrada, lo que lo hace memorable.

**Pregnancia (buena forma)**
El sistema de diseño prioriza formas simples y regulares: el isotipo es solo dos líneas y un círculo; los botones son rectángulos con bordes redondeados uniformes; las cards siguen el mismo patrón en todo el sitio. La paleta reducida de tres colores refuerza esta simplicidad.

**Contraste (CRAP)**
Se usó contraste entre el color oscuro (`#15233F`) y el fondo crema (`#F2EDE3`) para garantizar la legibilidad del texto. El naranja (`#E85F25`) se reserva exclusivamente para las llamadas a la acción y detalles de énfasis, creando un contraste que guía la mirada del usuario hacia las acciones importantes.

**Repetición (CRAP)**
Los mismos colores, tipografías, tamaños de fuente y estilos de botón se repiten en las cuatro páginas del sitio. Esto genera coherencia visual y le da al usuario la sensación de estar dentro del mismo sitio al navegar.

**Alineación (CRAP)**
Todos los bloques de contenido están alineados a una grilla. Los textos dentro de cada sección comparten ejes comunes, lo que da orden y prolijidad al diseño general.

**Jerarquía visual**
Cada página tiene un único título principal (`<h1>`) de gran tamaño que comunica el mensaje más importante. Las secciones usan `<h2>` y los subtítulos internos `<h3>`, siguiendo la jerarquía de encabezados sin saltear niveles.

---

### 6.2 Tipografía

Aplicamos una combinación de dos familias tipográficas con roles diferenciados, importadas desde Google Fonts.

| Familia | Tipo | Uso en el sitio |
|---|---|---|
| **Geist** | Sans-serif | Títulos, párrafos, botones |
| **Geist Mono** | Monoespaciada | Etiquetas de categoría, numeración, metadatos |

**Decisiones tipográficas:**

- Se eligieron fuentes **sans-serif** para el cuerpo del texto por su mayor legibilidad en pantalla respecto de las fuentes serif, que están más pensadas para impresión.
- La fuente **monoespaciada** en etiquetas y metadatos genera un contraste tipográfico que ayuda a diferenciar visualmente los distintos tipos de información (contenido principal vs. datos secundarios).
- Se definió una jerarquía clara de tamaños: los títulos `<h1>` son notablemente más grandes que los `<h2>`, y estos a su vez más grandes que el texto de párrafo. Esto responde al principio de jerarquía visual.
- El **interlineado** (`line-height`) en los párrafos se ajustó a aproximadamente 1.35 veces el tamaño de la fuente para facilitar la lectura.
- Las etiquetas de categoría usan `text-transform: uppercase` (mayúsculas) y un `letter-spacing` mayor para reforzar visualmente su función subordinada respecto al título principal.
- Los títulos grandes tienen un `letter-spacing` levemente negativo (tracking ajustado) para que los bloques de texto se lean como unidades compactas, algo habitual en diseño editorial.

---

### 6.3 Teoría del color

La paleta del sitio fue definida con tres colores base, expresados en formato **hexadecimal** (sistema de base 16, valores del 00 al FF para cada canal de rojo, verde y azul del modelo **RGB**).

| Color | Valor HEX | Uso |
|---|---|---|
| Crema | `#F2EDE3` | Color de fondo del sitio |
| Tinta (azul oscuro) | `#15233F` | Texto principal y elementos de UI |
| Acento (naranja) | `#E85F25` | Botones principales, énfasis, detalles del logotipo |

**Justificación de las decisiones de color:**

Se eligió el **azul oscuro** en lugar del negro puro para el texto porque genera un contraste suficiente con el fondo sin la dureza del negro absoluto, lo que mejora la legibilidad y da una sensación más profesional, en línea con la psicología del color azul (confianza, profesionalismo).

El **naranja** responde a la psicología del color: es un color asociado a la innovación, modernidad y dinamismo, que se alinea con el perfil de una consultora de tecnología y diseño. Siguiendo el principio de que los colores deben tener un rol claro, el naranja se usa exclusivamente para los botones de llamada a la acción (CTA) y los detalles del logotipo, para que actúe como señal visual clara sin saturar el diseño.

El **fondo crema** (en lugar del blanco puro `#FFFFFF`) suaviza la experiencia visual y da al sitio un tono más cálido. El blanco puro puede generar fatiga visual en pantallas; el crema lo reduce.

Los tres colores funcionan como una paleta complementaria equilibrada: fondo neutro cálido, texto oscuro frío y acento cálido.

---

### 6.4 HTML semántico

La estructura de cada página usa las **etiquetas semánticas de HTML5** en lugar de `<div>` genéricos, siguiendo las buenas prácticas vistas en clase.

```
<header>    → encabezado del sitio con el logo y el menú de navegación
<nav>       → menú de navegación principal
<main>      → contenido principal de cada página
<section>   → bloques temáticos (Hero, Equipo, Servicios, Proceso, etc.)
<article>   → unidades de contenido independientes (cards del equipo, filas de servicios)
<footer>    → pie de página con enlaces y datos del estudio
<h1>-<h3>   → jerarquía de encabezados sin saltear niveles
<a>         → hipervínculos con atributo href y texto descriptivo
```

El uso de etiquetas semánticas mejora el **posicionamiento SEO** (los buscadores le dan más jerarquía al contenido dentro de `<h1>` que al que está en un `<p>`) y permite que los **lectores de pantalla** interpreten correctamente la estructura del sitio.

**Atributos de accesibilidad aplicados:**
- `lang="es"` en `<html>` para indicar el idioma a los lectores de pantalla.
- Atributo `alt` con texto descriptivo en todas las imágenes de personas (ej.: `"Foto de Rosario Presedo"`).
- `aria-label="Abrir menú"` y `aria-expanded="false/true"` en el botón hamburger: el primero describe la acción al lector de pantalla (ya que el botón no tiene texto visible); el segundo informa si el menú está abierto o cerrado, y se actualiza dinámicamente con JavaScript.
- `aria-hidden="true"` en los SVG decorativos del logotipo, para que no sean leídos como contenido.
- Todos los enlaces externos usan `target="_blank"` acompañado de `rel="noopener noreferrer"`.
- Cada página tiene su propio `<title>` y `<meta name="description">` para SEO.

**Formulario de contacto (`contacto.html`):**
- Cada campo usa el tipo de `<input>` correcto: `type="email"` para el correo, `type="text"` para el nombre, `<textarea>` para el mensaje.
- Todos los campos tienen el atributo `required` para activar la validación nativa de HTML5 antes del envío.
- Los campos tienen `placeholder` para orientar al usuario sobre qué información ingresar.
- Los `<label>` están correctamente asociados a cada campo mediante el atributo `for`.

---

### 6.5 CSS: modelo de caja, estilos en cascada y diseño responsive

**Arquitectura del CSS**

El sitio usa **Tailwind CSS** vinculado desde un CDN como framework principal, complementado con el archivo `estilos/style.css` para animaciones y efectos de hover que requieren `@keyframes` o pseudo-elementos complejos. Esta separación mantiene el principio de distinguir la estructura (HTML) de la presentación (CSS).

**Modelo de caja (Box Model)**

Para CSS todos los elementos HTML son cajas. Las propiedades de **padding** (espacio entre el contenido y el borde), **border** (el borde) y **margin** (espacio externo entre cajas) se aplicaron de forma consistente en todo el sitio. Algunos ejemplos concretos:
- Los botones tienen `padding` que define su tamaño interior, sin necesidad de fijar un ancho arbitrario.
- Las secciones tienen `padding` generoso en los ejes vertical y horizontal para generar el espacio en blanco que mejora la legibilidad, siguiendo la heurística de diseño minimalista de Nielsen.
- El contenedor principal de cada sección tiene `max-width` y `margin: auto` para centrarse en pantalla.

La normalización de márgenes y paddings entre navegadores la gestiona **Tailwind CSS** a través de su capa base (Preflight), que aplica un reset consistente sobre todos los elementos. El archivo `style.css` propio no necesita incluir un reset manual.

**Estilos en cascada y especificidad**

Cuando hay reglas que se solapan, CSS aplica la de mayor especificidad o, ante igual especificidad, la que está más abajo en el archivo (la que entró última). El archivo `style.css` se vincula con `<link rel="stylesheet" href="estilos/style.css">` en el `<head>` de cada página, siguiendo la forma recomendada (hoja de estilo externa).

**Propiedad `display` y comportamiento de cajas**

- El menú de navegación usa `display: flex` para alinear los ítems en línea horizontal.
- Las grillas de cards usan `display: grid` con columnas que se adaptan al ancho disponible.
- El botón hamburger usa `display: none` en pantallas grandes y se muestra solo en mobile con `display: block`.

**Pseudoclases y estados de los vínculos**

Los vínculos del menú y los botones tienen estilos diferenciados para `:hover`, cambiando color de fondo o texto al pasar el cursor para dar feedback visual al usuario. Como se vio en clase, los vínculos no heredan el color del texto global, por lo que sus estilos se definen explícitamente.

**Animaciones y transiciones**

Se usaron `@keyframes` y la propiedad `transition` para los efectos visuales:
- El subrayado naranja del título principal se dibuja de izquierda a derecha al cargar la página.
- Los elementos tienen una entrada suave con `opacity` y desplazamiento vertical cuando aparecen en pantalla, activada con JavaScript.
- El hover de las filas de servicios invierte colores de fondo y texto con una animación de `transform`.
- El logotipo tiene una animación de entrada que construye los trazos de la X en secuencia.

**Diseño responsive (Mobile First)**

El sitio fue pensado con criterio **mobile first**: primero se define cómo se ve en pantalla pequeña y luego se agregan estilos para pantallas más grandes mediante **media queries** (puntos de quiebre o breakpoints). Tailwind usa los prefijos `sm:`, `md:` y `lg:` para esto.

Ejemplos concretos:
- En pantallas pequeñas el menú colapsa a un botón hamburger (☰); en pantallas medianas y grandes se muestra el menú horizontal completo.
- La grilla del equipo pasa de 1 columna en mobile, a 2 en tablet, y a 5 en escritorio.
- Las imágenes que aparecen al hacer hover en los servicios se ocultan en pantallas pequeñas para evitar solapamientos.

---

### 6.6 UX/UI y heurísticas de Nielsen

El diseño del sitio responde a los principios de **Experiencia de Usuario (UX)** e **Interfaz de Usuario (UI)** vistos en clase, y fue evaluado tomando como referencia las **10 heurísticas de usabilidad de Jakob Nielsen**.

**Público objetivo**
Antes de diseñar se definió el público objetivo: equipos y empresas que buscan servicios de diseño y desarrollo web. Las decisiones de tono, colores y tipografía responden a ese perfil.

**Wireframe y arquitectura de información**
Antes de programar se planificó el mapa del sitio (incluido en la sección 4 de este README) y la estructura de cada página, definiendo qué secciones incluir y en qué orden. El sitio tiene 4 páginas (`index.html`, `servicios.html`, `proyectos.html`, `contacto.html`) con una navegación clara entre ellas.

**Heurísticas de Nielsen aplicadas:**

1. **Visibilidad del estado del sistema:** el link de la página activa en el menú cambia de estilo para que el usuario siempre sepa en qué sección está.

2. **Relación entre el sistema y el mundo real:** todos los textos están escritos en lenguaje claro y cotidiano. Los íconos usados (flechas, logotipo) siguen convenciones visuales conocidas.

3. **Control y libertad del usuario:** el header con el menú de navegación está siempre visible en la parte superior (posición `sticky`), permitiendo moverse a cualquier sección sin perder contexto.

4. **Consistencia y estándares:** se usó el botón hamburger en mobile como estándar reconocible. Los colores de los botones son consistentes en todo el sitio.

5. **Prevención de errores:** el formulario de contacto tiene los campos marcados como `required` y usa `type="email"` para que el navegador valide el formato antes de permitir el envío. Esto previene errores comunes.

6. **Reconocimiento en lugar de recuerdo:** la navegación es visible en todo momento y las secciones tienen etiquetas descriptivas para que el usuario no tenga que memorizar la estructura del sitio.

7. **Estética y diseño minimalista:** el sitio aplica el principio de que "menos es más". Usa espacio en blanco generoso (con `padding` y `margin` amplios entre secciones) y cada pantalla comunica una sola idea principal, evitando la sobrecarga de información.

8. **Ayudar a reconocer y recuperarse de errores:** el formulario muestra un mensaje de confirmación visual cuando el envío es exitoso, y valida los campos antes del submit para orientar al usuario si falta información.

**Coherencia visual**
El header, footer y sistema de colores son idénticos en las cuatro páginas del sitio. Esta consistencia es fundamental en UX porque reduce la carga cognitiva del usuario y refuerza la identidad de la marca.

**Call to Action (CTA)**
Cada página termina con un único llamado a la acción claro (contacto o paso siguiente), sin sobrecargar al usuario con múltiples opciones simultáneas.
