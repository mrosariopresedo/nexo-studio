// ============================================================
//  menu.js — Menú móvil (hamburguesa) + marcar el link activo
//  Se carga en las 4 páginas, al final del <body>.
//  Envuelto en una IIFE (función que se ejecuta sola): así las
//  variables quedan encerradas y no "ensucian" el ámbito global.
// ============================================================
(function () {
  // Agarro del DOM el botón hamburguesa y el <nav> por su id.
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav-menu');

  // Solo si ambos existen (buena práctica: evita errores si falta uno).
  if (hamburger && nav) {
    // Al hacer clic en la hamburguesa...
    hamburger.addEventListener('click', () => {
      // El nav se muestra/oculta con la clase .open (ver la media query móvil en style.css).
      // toggle() agrega la clase si no está y la saca si está; devuelve true si quedó puesta.
      const isOpen = nav.classList.toggle('open');
      // Actualizo el estado accesible del botón: los lectores de pantalla
      // anuncian si el menú está expandido o colapsado.
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }

  // ----- Marcar el link de la página actual en el menú -----
  // window.location.pathname es la ruta (ej. "/servicios.html").
  // split('/').pop() se queda con lo último ("servicios.html").
  // El || 'index.html' cubre el caso de la raíz ("/"), donde pop() da "".
  const path = window.location.pathname.split('/').pop() || 'index.html';

  // Recorro los links del nav y comparo su href con la página actual.
  document.querySelectorAll('nav.site-nav a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === path) {
      a.classList.add('active');
      // Tailwind no tiene una variante "&.active", así que el estilo del
      // link activo lo aplico por JS (fondo tinta + texto crema),
      // salvo en el botón "Hablemos" (nav-cta), que ya tiene su propio color.
      if (!a.classList.contains('nav-cta')) {
        a.classList.add('bg-ink', 'text-cream');
        a.classList.remove('text-ink-mute');
      }
    }
  });
})();
