// Mobile menu toggle
const toggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;
toggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.style.display = menuOpen ? 'block' : 'none';
});

// Smooth close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { menuOpen = false; mobileMenu.style.display = 'none'; });
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Navbar active highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link-custom');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--cyan)' : '';
    });
});
// ============================================================
// 7. TYPING EFFECT - ANIMASI PENULISAN TEKS DI HERO SECTION
// ============================================================
var typed = new Typed('.typing', {
  strings: [
    "Web Developer",
    "UI/UX Design",
    "Mobile Developer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Send button feedback
function showSent(btn) {
    btn.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Pesan Terkirim!';
    btn.style.background = 'linear-gradient(90deg, var(--green), #00c851)';
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = '<i class="bi bi-send-fill me-2"></i>Kirim Pesan';
        btn.style.background = 'linear-gradient(90deg, var(--cyan), #00b8d9)';
        btn.disabled = false;
    }, 3000);
}