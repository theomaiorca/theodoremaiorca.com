const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => links.classList.remove('open'));
});

window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10
    ? '0 2px 12px rgba(0,0,0,0.08)'
    : 'none';
});

// Highlight nav link matching the current page
const path = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === '/' && (path === '/' || path === '')) {
    link.classList.add('active');
  } else if (href !== '/' && path.startsWith(href)) {
    link.classList.add('active');
  }
});
