// ============================================================
//  tailwind.config.js — Configuración de Tailwind (el "design system")
//  Se carga en las 4 páginas DESPUÉS del CDN de Tailwind:
//    <script src="https://cdn.tailwindcss.com"></script>
//    <script src="js/tailwind.config.js"></script>
//  Acá defino los colores y tipografías propios de Nexo Studio, así
//  puedo usar clases como bg-cream, text-ink o text-accent en el HTML.
//  Es el equivalente a los tokens en :root, pero para Tailwind.
// ============================================================
tailwind.config = {
  theme: {
    extend: {               // "extend" = agrego a lo que ya trae Tailwind (no lo reemplazo)
      colors: {
        // Cada color tiene un DEFAULT y variantes (soft/deep/mute...).
        // Ej.: "cream" => clase bg-cream; "cream-soft" => bg-cream-soft.
        cream:  { DEFAULT: '#F2EDE3', soft: '#ECE6D8', deep: '#E3DBC8' }, // fondos crema
        ink:    { DEFAULT: '#15233F', soft: '#2D3A56', mute: '#5C6680', faint: '#6B7280' }, // azul tinta (texto)
        accent: { DEFAULT: '#E85F25', deep: '#C9491A', soft: '#F5C8B0' }, // naranja de acento
        line:   { DEFAULT: '#C9C0AC', soft: '#DDD4BE' },                  // bordes/divisores
      },
      fontFamily: {
        // Fuentes de Google Fonts (se importan en style.css con @import).
        sans: ['Geist', 'system-ui', 'sans-serif'],   // clase font-sans (cuerpo y títulos)
        mono: ['"Geist Mono"', 'monospace'],           // clase font-mono (etiquetas técnicas)
      },
    },
  },
};
