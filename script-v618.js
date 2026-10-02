const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${Math.min((i % 4) * 70, 210)}ms`;
    revealObserver.observe(el);
  });
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

const form = document.getElementById('quote-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const msg = [
      'Bonjour, demande de devis - Nettoyage Solaire Aveyron.',
      `Nom : ${d.get('nom') || '-'}`,
      `Téléphone : ${d.get('telephone') || '-'}`,
      `Commune : ${d.get('commune') || '-'}`,
      `Puissance / surface : ${d.get('puissance') || '-'}`,
      `Demande : ${d.get('message') || '-'}`
    ].join('\n');

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const separator = isIOS ? '&' : '?';
    window.location.href = `sms:+33678580334${separator}body=${encodeURIComponent(msg)}`;
  });
}
