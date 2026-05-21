// Configuración centralizada de Tailwind - se carga en todos los HTML
// después del CDN: <script src="js/tailwind.config.js"></script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream:  { DEFAULT: '#F2EDE3', soft: '#ECE6D8', deep: '#E3DBC8' },
        ink:    { DEFAULT: '#15233F', soft: '#2D3A56', mute: '#5C6680', faint: '#8E96A9' },
        accent: { DEFAULT: '#E85F25', deep: '#C9491A', soft: '#F5C8B0' },
        line:   { DEFAULT: '#C9C0AC', soft: '#DDD4BE' },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
    },
  },
};
