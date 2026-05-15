// COUNTDOWN
(function(){
  const t = new Date('2026-09-19T16:00:00');
  function tick(){
    const d = t - Date.now();
    if(d<=0){ document.getElementById('countdown').innerHTML='<span style="font-family:Cormorant Garamond,serif;font-size:24px;font-weight:300;color:var(--sage)">Hoje é o grande dia!</span>'; return; }
    document.getElementById('cd-d').textContent = String(Math.floor(d/86400000)).padStart(2,'0');
    document.getElementById('cd-h').textContent = String(Math.floor(d%86400000/3600000)).padStart(2,'0');
    document.getElementById('cd-m').textContent = String(Math.floor(d%3600000/60000)).padStart(2,'0');
    document.getElementById('cd-s').textContent = String(Math.floor(d%60000/1000)).padStart(2,'0');
  }
  tick(); setInterval(tick,1000);
})();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// NAV
const navScrollHandler = () => document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
window.addEventListener('scroll', navScrollHandler);
navScrollHandler();

// HERO PARALLAX
(function () {
  const heroImg = document.querySelector('.hero-photo img');
  const hero = heroImg && heroImg.closest('.hero-photo');

  if (prefersReducedMotion || !heroImg || !hero) return;

  let ticking = false;

  function updateParallax() {
    const rect = hero.getBoundingClientRect();
    const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;

    if (isVisible) {
      const offset = Math.min(window.scrollY * 0.12, 40);
      heroImg.style.setProperty('--hero-parallax-y', `${offset}px`);
    }

    ticking = false;
  }

  function requestParallaxUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateParallax);
  }

  window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
  window.addEventListener('resize', requestParallaxUpdate);
  requestParallaxUpdate();
})();

// REVEAL
function revealElement(el) {
  el.classList.add('visible', 'is-visible');
}

const obs = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    revealElement(entry.target);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => {
  if (prefersReducedMotion) {
    revealElement(el);
  }

  obs.observe(el);
});

// HERO PETALS
const heroPetals = document.querySelector('.hero-petals');
const petalCount = 12;

if (heroPetals && !prefersReducedMotion) {
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('span');
    petal.className = 'hero-petal';
    petal.style.setProperty('--x', `${8 + Math.random() * 84}%`);
    petal.style.setProperty('--duration', `${18 + Math.random() * 12}s`);
    petal.style.setProperty('--delay', `${Math.random() * -24}s`);
    petal.style.setProperty('--size', `${8 + Math.random() * 8}px`);
    petal.style.setProperty('--opacity', `${0.14 + Math.random() * 0.18}`);
    const drift = Math.random() * 70 - 35;
    petal.style.setProperty('--drift', `${drift}px`);
    petal.style.setProperty('--drift-mid', `${drift * -0.45}px`);
    petal.style.setProperty('--rotation', `${Math.random() * 80 - 40}deg`);
    heroPetals.appendChild(petal);
  }
}

// CUSTOM CURSOR
(function () {
  const supportsCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (!supportsCursor) return;

  const cursor = document.querySelector('.custom-cursor');
  if (!cursor) return;

  const hoverTargets = 'a, button, .gift-card, .btn-map';
  let mouseX = -100;
  let mouseY = -100;
  let frameId = null;

  function updateCursor() {
    frameId = null;
    const offset = cursor.classList.contains('is-hovering') ? 14 : 9;
    cursor.style.transform = `translate3d(${mouseX - offset}px, ${mouseY - offset}px, 0)`;
  }

  function scheduleUpdate(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.classList.add('is-visible');

    if (frameId === null) {
      frameId = requestAnimationFrame(updateCursor);
    }
  }

  window.addEventListener('mousemove', scheduleUpdate, { passive: true });
  document.addEventListener('mouseover', (event) => {
    if (event.target.closest(hoverTargets)) {
      cursor.classList.add('is-hovering');
      if (frameId === null) {
        frameId = requestAnimationFrame(updateCursor);
      }
    }
  });
  document.addEventListener('mouseout', (event) => {
    const target = event.target.closest(hoverTargets);

    if (target && !target.contains(event.relatedTarget)) {
      cursor.classList.remove('is-hovering');
      if (frameId === null) {
        frameId = requestAnimationFrame(updateCursor);
      }
    }
  });
  document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));
})();

// GIFTS
const gifts = [
  { name:'Cota Lua de Mel',     price:'R$ 200,00', img:'/assets/lua-de-mel.png', pix:'analuizaalves188@gmail.com' },
  { name:'Comprar presentes para noiva de TPM',    price:'R$ 100,00', img:'/assets/acalmar-tpm-casamento.jpeg', pix:'analuizaalves188@gmail.com' },
  { name:'Viagem para o Chile',    price:'R$ 6000,00', img:'/assets/viagem-chile.png', pix:'analuizaalves188@gmail.com' },
  { name:'SPA para o Casal',    price:'R$ 400,00', img:'/assets/spa-casal-casamento.png', pix:'analuizaalves188@gmail.com' },
  { name:'Ajudinha para a Casa',price:'R$ 50,00', img:'/assets/presentes-para-casa.png', pix:'analuizaalves188@gmail.com' },
  { name:'Todo presente é bem vindo',price:'R$ 0,00', img:'/assets/todo-presente.png', pix:'analuizaalves188@gmail.com' },
];

const grid = document.getElementById('gifts-grid');
const chosen = new Set();
const delays = ['d1','d2','d3'];

gifts.forEach((g,i)=>{
  const card = document.createElement('div');
  card.className = `gift-card reveal reveal-scale ${delays[i%3]}`;
  draw(card, g, i);
  grid.appendChild(card);
  if (prefersReducedMotion) {
    revealElement(card);
  }
  obs.observe(card);
});

// PIX banner
const pix = document.createElement('div');
pix.className = 'pix-banner reveal reveal-up';
pix.innerHTML = `
  <div>
    <div class="pix-banner-label">Contribuição especial</div>
    <div class="pix-banner-title">Lua de Mel dos Sonhos</div>
    <p class="pix-banner-desc">Se preferir, contribua para a nossa viagem dos sonhos. Qualquer valor é recebido com muito amor e gratidão.</p>
  </div>
  <div class="pix-box">
    <div class="pix-box-label">Chave Pix</div>
    <div class="pix-box-key">analuizaalves188@gmail.com</div>
  </div>
`;
grid.appendChild(pix);
if (prefersReducedMotion) {
  revealElement(pix);
}
obs.observe(pix);

function draw(card, g, i){
  const ok = chosen.has(i);
  card.innerHTML = `
    <div class="gift-img-wrap">
      <img src="${g.img}" alt="${g.name}" loading="lazy"/>
      ${ok ? '<span class="gift-badge-chosen">Escolhido</span>' : ''}
    </div>
    <div class="gift-body">
      <div class="gift-name">${g.name}</div>
      <div class="gift-price">${g.price}</div>
      <button class="gift-btn" ${ok?'disabled':''} onclick="pick(${i})">
        ${ok ? 'Presente escolhido' : 'Presentear'}
      </button>
    </div>`;
}

function pick(i){
  chosen.add(i);
  const cards = grid.querySelectorAll('.gift-card');
  draw(cards[i], gifts[i], i);
}

// MODAL PIX
const modal = document.createElement('div');
modal.id = 'pix-modal';
modal.innerHTML = `
  <div class="pix-modal-backdrop"></div>
  <div class="pix-modal-box">
    <button class="pix-modal-close" onclick="closeModal()" aria-label="Fechar modal">
      <svg class="icon-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5" aria-hidden="true">
        <path d="M6.75 6.75 17.25 17.25M17.25 6.75 6.75 17.25" />
      </svg>
    </button>
    <div class="pix-modal-label">Presente escolhido</div>
    <div class="pix-modal-gift-name" id="modal-gift-name"></div>
    <div class="pix-modal-price" id="modal-gift-price"></div>
    <div class="pix-modal-divider"></div>
    <div class="pix-modal-instruction">Faça o Pix com o valor do presente:</div>
    <div class="pix-modal-key-wrap">
      <div class="pix-modal-key" id="modal-pix-key"></div>
      <button class="pix-modal-copy" id="modal-copy-btn" onclick="copyPix()">Copiar chave</button>
    </div>
    <p class="pix-modal-thanks">Obrigado pelo carinho!<br>Cada presente é recebido com muito amor.</p>
  </div>
`;
document.body.appendChild(modal);

modal.querySelector('.pix-modal-backdrop').addEventListener('click', closeModal);

function pick(i) {
  const g = gifts[i];
  document.getElementById('modal-gift-name').textContent = g.name;
  document.getElementById('modal-gift-price').textContent = g.price;
  document.getElementById('modal-pix-key').textContent = g.pix;
  document.getElementById('modal-copy-btn').textContent = 'Copiar chave';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function copyPix() {
  const key = document.getElementById('modal-pix-key').textContent;
  navigator.clipboard.writeText(key).then(() => {
    const btn = document.getElementById('modal-copy-btn');
    btn.textContent = 'Copiado';
    setTimeout(() => btn.textContent = 'Copiar chave', 2000);
  });
}

// NAV HAMBÚRGUER
const navbar   = document.getElementById('navbar');
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('nav-open');
});

// Fecha ao clicar em qualquer link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('nav-open');
  });
});

// THEME
(function () {
  const root = document.documentElement;
  const btn  = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  // Detecta preferência do sistema e verifica localStorage
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    icon.classList.toggle('is-dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }

  apply(initial);

  btn.addEventListener('click', () => {
    apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();
