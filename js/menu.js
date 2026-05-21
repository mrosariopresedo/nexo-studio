// Mobile menu toggle + active nav link
(function () {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav-menu');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      // toggle('hidden', false) muestra el nav; toggle('hidden', true) lo oculta
      nav.classList.toggle('hidden', !isOpen);
      // Actualizar estado accesible del botón
      hamburger.setAttribute('aria-expanded', isOpen);
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
