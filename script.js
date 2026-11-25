/* =============================================
   BELLISIMO HELADERÍA — script.js
   ============================================= */

/* ==================== DATOS ==================== */

const flavors = [
  { name: 'Fresa Silvestre', emoji: '🍓', category: 'fruta', color: '#FFE0E8', desc: 'Cremoso helado de fresas frescas recogidas en la temporada. Suave, dulce y con trocitos de fruta real.', tags: ['Sin gluten', 'Fruta natural', 'Favorito clásico'] },
  { name: 'Mango Tropical', emoji: '🥭', category: 'fruta', color: '#FFF0C0', desc: 'El paraíso en un cono: mango maduro batido con leche cremosa y un toque de maracuyá.', tags: ['Exótico', 'Tropical', 'Vitamina C'] },
  { name: 'Arándano Azul', emoji: '🫐', category: 'fruta', color: '#E8E0FF', desc: 'Intenso sabor a arándanos frescos con un color violeta vibrante. Rico en antioxidantes.', tags: ['Antioxidante', 'Sin conservantes', 'Vegano'] },
  { name: 'Limonada Rosa', emoji: '🍋', category: 'fruta', color: '#FFF0D0', desc: 'Refrescante sorbete de limón y frambuesa, perfecto para los días calurosos.', tags: ['Sorbete', 'Sin lactosa', 'Refrescante'] },
  { name: 'Maracuyá Cremoso', emoji: '🌟', category: 'fruta', color: '#FFEFD0', desc: 'La acidez perfecta del maracuyá balanceada con una base de crema suave artesanal.', tags: ['Tropical', 'Artesanal', 'Cremoso'] },
  { name: 'Chocolate Belga', emoji: '🍫', category: 'clasico', color: '#E8D8C8', desc: 'Oscuro, rico e irresistible. Elaborado con cacao belga al 70% de la más alta calidad.', tags: ['Premium', 'Chocolate puro', 'Intenso'] },
  { name: 'Vainilla Francesa', emoji: '🍦', category: 'clasico', color: '#FFF8E0', desc: 'El clásico reinventado. Vainilla bourbon de Madagascar que transforma lo simple en excepcional.', tags: ['Clásico', 'Vainilla real', 'Suave'] },
  { name: 'Dulce de Leche', emoji: '🥛', category: 'clasico', color: '#FFE8C0', desc: 'Cremoso y acaramelado. La receta de abuela llevada a otro nivel con caramelo artesanal.', tags: ['Favorito', 'Caramelo', 'Artesanal'] },
  { name: 'Cookies & Cream', emoji: '🍪', category: 'clasico', color: '#E8E8E8', desc: 'Perfectos trozos de galleta Oreo mezclados en crema de vainilla. Irresistible en cada cucharada.', tags: ['Con galleta', 'Clásico', 'Crujiente'] },
  { name: 'Té Verde Matcha', emoji: '🍵', category: 'especial', color: '#D8F0E0', desc: 'Equilibrado sabor a matcha japonés premium con notas herbales y una textura ultra sedosa.', tags: ['Premium', 'Japonés', 'Antioxidante'] },
  { name: 'Lavanda & Miel', emoji: '💜', category: 'especial', color: '#EDE0FF', desc: 'Una combinación floral única. Lavanda provenzal con miel de flores silvestres. Elegante y delicado.', tags: ['Floral', 'Miel natural', 'Único'] },
  { name: 'Taro Púrpura', emoji: '🟣', category: 'especial', color: '#F0E0FF', desc: 'El exótico taro asiático con su característico color violeta y sabor suavemente dulce.', tags: ['Exótico', 'Asiático', 'Sin colorantes'] },
];

const menuData = {
  copas: [
    { emoji: '🍧', name: 'Copa Sencilla', desc: '1 sabor a elección con toppings', price: 'S/ 8.00' },
    { emoji: '🍨', name: 'Copa Doble', desc: '2 sabores con salsa y crema chantilly', price: 'S/ 12.00' },
    { emoji: '🎉', name: 'Copa Especial', desc: '3 sabores + brownie + toppings premium', price: 'S/ 18.00' },
    { emoji: '👑', name: 'Copa Bellisimo', desc: 'La experiencia completa: 4 sabores, 5 toppings y salsa de tu elección', price: 'S/ 25.00' },
  ],
  conos: [
    { emoji: '🍦', name: 'Cono Clásico', desc: '1 bola en cono de barquillo crujiente', price: 'S/ 6.00' },
    { emoji: '🍡', name: 'Cono Doble', desc: '2 bolas en cono bañado de chocolate', price: 'S/ 10.00' },
    { emoji: '🌈', name: 'Cono Arcoíris', desc: 'Cono de colores con 2 sabores sorbete', price: 'S/ 12.00' },
    { emoji: '✨', name: 'Cono Waffle', desc: 'Waffle recién hecho + 2 bolas + miel', price: 'S/ 14.00' },
  ],
  sundaes: [
    { emoji: '🍫', name: 'Sundae Chocolate', desc: 'Helado de vainilla, salsa de chocolate caliente y nueces', price: 'S/ 16.00' },
    { emoji: '🍓', name: 'Sundae Fresa', desc: 'Helado con coulis de fresa, granola y fresas frescas', price: 'S/ 15.00' },
    { emoji: '🥜', name: 'Sundae Caramel', desc: 'Caramelo salado, crema chantilly y pretzels', price: 'S/ 17.00' },
    { emoji: '🌟', name: 'Sundae Bellisimo', desc: 'El sundae supremo — ¡pregunta por las sorpresas del día!', price: 'S/ 22.00' },
  ],
  malteadas: [
    { emoji: '🥤', name: 'Malteada Clásica', desc: 'Malteada de vainilla, fresa o chocolate. Cremosa y espesa.', price: 'S/ 14.00' },
    { emoji: '🍫', name: 'Malteada Oreo', desc: 'Chocolate negro + galletas Oreo trituradas', price: 'S/ 16.00' },
    { emoji: '🥭', name: 'Malteada Tropical', desc: 'Mango, maracuyá y coco — verano en cada sorbo', price: 'S/ 15.00' },
    { emoji: '🍵', name: 'Malteada Matcha', desc: 'Matcha premium + leche de almendras + miel', price: 'S/ 17.00' },
  ],
};

const testimonials = [
  { stars: '⭐⭐⭐⭐⭐', text: '¡El mejor helado que he probado en mi vida! La Copa Bellisimo es una obra de arte. Mis hijos ya no quieren helados de otra parte.', author: 'María González', role: 'Cliente desde 2018' },
  { stars: '⭐⭐⭐⭐⭐', text: 'Fui de visita a Lima y lo primero que me recomendaron fue Bellisimo. El Chocolate Belga y el Matcha son una combinación que nunca imaginé tan perfecta.', author: 'Carlos Rivas', role: 'Visitante de Arequipa' },
  { stars: '⭐⭐⭐⭐⭐', text: 'Celebramos el cumpleaños de mi hija aquí y fue mágico. El personal es increíblemente amable y los helados artesanales son únicos en su clase.', author: 'Lucia Fernández', role: 'Cliente frecuente' },
  { stars: '⭐⭐⭐⭐⭐', text: 'El sabor de Lavanda & Miel me conquistó para siempre. Es tan delicado y especial... no hay otro lugar que ofrezca algo así. ¡Bravo, Bellisimo!', author: 'Andrés Morales', role: 'Foodie & Blogger' },
];

/* ==================== NAVBAR ==================== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ==================== SCROLL TOP ==================== */
const scrollTopBtn = document.getElementById('scrollTop');
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ==================== FLAVORS ==================== */
const grid = document.getElementById('flavorsGrid');
const modal = document.getElementById('flavorModal');
const modalClose = document.getElementById('modalClose');

function renderFlavors(filter = 'all') {
  grid.innerHTML = '';
  flavors.forEach((f, i) => {
    if (filter !== 'all' && f.category !== filter) return;
    const card = document.createElement('div');
    card.className = 'flavor-card';
    card.style.background = f.color;
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="flavor-emoji">${f.emoji}</div>
      <div class="flavor-name">${f.name}</div>
      <div class="flavor-type">${capitalize(f.category)}</div>
    `;
    card.addEventListener('click', () => openFlavorModal(f));
    grid.appendChild(card);
  });
}

function openFlavorModal(f) {
  document.getElementById('modalIcon').textContent = f.emoji;
  document.getElementById('modalName').textContent = f.name;
  document.getElementById('modalDesc').textContent = f.desc;
  const tagsEl = document.getElementById('modalTags');
  tagsEl.innerHTML = f.tags.map(t => `<span>${t}</span>`).join('');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderFlavors(btn.dataset.filter);
  });
});

renderFlavors();

/* ==================== MENU ==================== */
const menuContent = document.getElementById('menuContent');

function renderMenu(tab = 'copas') {
  menuContent.innerHTML = '';
  menuData[tab].forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'menu-item reveal';
    el.style.animationDelay = `${i * 0.08}s`;
    el.innerHTML = `
      <div class="menu-item-left">
        <span class="menu-item-emoji">${item.emoji}</span>
        <div>
          <div class="menu-item-name">${item.name}</div>
          <div class="menu-item-desc">${item.desc}</div>
        </div>
      </div>
      <div class="menu-item-price">${item.price}</div>
    `;
    menuContent.appendChild(el);
  });
  observeReveal();
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.tab);
  });
});

renderMenu();

/* ==================== STATS COUNTER ==================== */
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(step);
}

let statsTriggered = false;
const statsSection = document.querySelector('.stats-section');

const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !statsTriggered) {
    statsTriggered = true;
    document.querySelectorAll('.stat-number').forEach(el => {
      animateCounter(el, parseInt(el.dataset.target));
    });
  }
}, { threshold: 0.4 });

statsObserver.observe(statsSection);

/* ==================== TESTIMONIALS ==================== */
const track = document.getElementById('testimonialsTrack');
const dotsContainer = document.getElementById('testimonialDots');
let currentTestimonial = 0;

const inner = document.createElement('div');
inner.className = 'testimonials-inner';
track.appendChild(inner);

testimonials.forEach((t, i) => {
  const card = document.createElement('div');
  card.className = 'testimonial-card';
  card.innerHTML = `
    <div class="testimonial-bubble">
      <div class="testimonial-stars">${t.stars}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">${t.author}</div>
      <div class="testimonial-role">${t.role}</div>
    </div>
  `;
  inner.appendChild(card);

  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goToTestimonial(i));
  dotsContainer.appendChild(dot);
});

function goToTestimonial(idx) {
  currentTestimonial = idx;
  inner.style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

setInterval(() => {
  goToTestimonial((currentTestimonial + 1) % testimonials.length);
}, 5000);

/* ==================== CONTACT FORM ==================== */
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.classList.add('show');
  this.reset();
  setTimeout(() => success.classList.remove('show'), 5000);
});

/* ==================== SCROLL REVEAL ==================== */
function observeReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));
}

// Mark sections for reveal on scroll
document.querySelectorAll('.feature-card, .contact-item, .about-text p, .badge').forEach(el => {
  el.classList.add('reveal');
});

observeReveal();

/* ==================== HELPERS ==================== */
function capitalize(str) {
  const map = { fruta: 'Frutas', clasico: 'Clásicos', especial: 'Especiales' };
  return map[str] || str;
}

/* ==================== ACTIVE NAV LINK ==================== */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#FF8FAB' : '';
  });
}, { passive: true });
