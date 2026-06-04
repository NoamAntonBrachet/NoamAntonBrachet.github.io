// ── Cards cliquables via data-href ──
document.querySelectorAll('.project-card[data-href]').forEach((card) => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    window.location.href = card.dataset.href;
  });
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach((s) => navObserver.observe(s));

// ── Scroll-reveal ──
const revealTargets = document.querySelectorAll('.skill-card, .project-card, .interest-item, .stat');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

document.querySelectorAll('.skills-grid, .projects-grid, .interest-grid').forEach((grid) => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = i * 0.07 + 's';
  });
});

document.head.insertAdjacentHTML('beforeend', `
  <style>
    .revealed { opacity: 1 !important; transform: translateY(0) !important; }
    .nav-links a.active { color: var(--white); }
    .nav-links a.active::after { transform: scaleX(1); }
  </style>
`);
