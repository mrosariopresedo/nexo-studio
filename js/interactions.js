// Scroll reveal + form micro-interactions
(function () {
  // Reveal on scroll using IntersectionObserver
  const els = document.querySelectorAll('.reveal');
  if (els.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add('in'));
  }

  // Form: client-side fake submit -> success state
  const form = document.querySelector('form');
  if (form && form.querySelector('textarea')) {
    const ok = document.querySelector('.form-success');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (ok) {
        ok.classList.remove('hidden');
        ok.classList.add('fade-up');
      }
      form.reset();
      setTimeout(() => {
        if (ok) ok.classList.add('hidden');
      }, 5500);
    });
  }
})();
