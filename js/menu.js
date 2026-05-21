// Mobile menu toggle + active nav link
(function () {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav-menu');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
      // Asegurar visibilidad en mobile
      if (nav.classList.contains('open')) {
        nav.classList.remove('hidden');
      }
    });
  }

  // Marcar link activo según ruta
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.site-nav a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === path) {
      a.classList.add('active');
      // Tailwind no tiene una variante &.active, así que aplicamos estilos directos
      if (!a.classList.contains('nav-cta')) {
        a.classList.add('bg-ink', 'text-cream');
        a.classList.remove('text-ink-mute');
      }
    }
  });
})();
