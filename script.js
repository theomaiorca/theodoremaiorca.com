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

// Highlight the nav link matching the current page
const current = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === current) {
    link.classList.add('active');
  }
});
