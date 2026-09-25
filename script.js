
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById('quote-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      'Bonjour Jérémie,',
      '',
      'Je souhaite un devis pour le nettoyage de mes panneaux photovoltaïques.',
      '',
      `Nom : ${data.get('nom') || '-'}`,
      `Téléphone : ${data.get('telephone') || '-'}`,
      `Type d'installation : ${data.get('type') || '-'}`,
      `Puissance approximative : ${data.get('puissance') || '-'}`,
      `Commune : ${data.get('commune') || '-'}`,
      `Informations : ${data.get('message') || '-'}`,
      '',
      'Merci.'
    ];

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/33678580334?text=${text}`, '_blank', 'noopener,noreferrer');
  });
}
