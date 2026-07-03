// ============================================================
//  interactions.js — Dos micro-interacciones del sitio:
//   1) Aparición de secciones al hacer scroll (efecto "reveal").
//   2) Envío simulado del formulario de contacto.
//  Se carga en las 4 páginas. También va dentro de una IIFE.
// ============================================================
(function () {

  // ---------- 1) Reveal al hacer scroll ----------
  // Busco todos los elementos con la clase .reveal (empiezan invisibles,
  // ver style.css: opacity 0 + desplazados hacia abajo).
  const els = document.querySelectorAll('.reveal');

  // IntersectionObserver: avisa cuando un elemento entra en pantalla.
  // Es más eficiente que escuchar el evento scroll a cada momento.
  if (els.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {            // si el elemento se ve...
          e.target.classList.add('in');    // ...le agrego .in => se desvanece hacia arriba
          io.unobserve(e.target);          // dejo de observarlo (la animación pasa una sola vez)
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    // threshold 0.12 = se dispara cuando el 12% del elemento está visible.
    els.forEach((el) => io.observe(el));
  } else {
    // Plan B: si el navegador no soporta IntersectionObserver,
    // muestro todo directamente (el sitio nunca queda invisible).
    els.forEach((el) => el.classList.add('in'));
  }

  // ---------- 2) Formulario: envío simulado ----------
  // Es un formulario de práctica (no hay servidor/back-end):
  // valida en el cliente y muestra un mensaje de éxito.
  const form = document.querySelector('form');
  if (form && form.querySelector('textarea')) {
    const ok = document.querySelector('.form-success'); // el cartel de "¡Listo!"
    form.addEventListener('submit', (e) => {
      e.preventDefault();                  // freno el envío real (recargaría la página)
      if (!form.checkValidity()) {         // validación nativa de HTML (required, type=email)
        form.reportValidity();             // el navegador muestra los errores
        return;
      }
      if (ok) {
        ok.classList.remove('hidden');     // muestro el mensaje de éxito
        ok.classList.add('fade-up');       // con una pequeña animación (ver style.css)
      }
      form.reset();                        // limpio los campos
      // Escondo el mensaje de éxito después de 5,5 segundos.
      setTimeout(() => {
        if (ok) ok.classList.add('hidden');
      }, 5500);
    });
  }
})();
