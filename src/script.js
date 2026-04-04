// COUNTDOWN
(function(){
  const t = new Date('2026-09-19T16:00:00');
  function tick(){
    const d = t - Date.now();
    if(d<=0){ document.getElementById('countdown').innerHTML='<span style="font-family:Cormorant Garamond,serif;font-size:24px;font-weight:300;color:var(--sage)">Hoje é o grande dia! 🌿</span>'; return; }
    document.getElementById('cd-d').textContent = String(Math.floor(d/86400000)).padStart(2,'0');
    document.getElementById('cd-h').textContent = String(Math.floor(d%86400000/3600000)).padStart(2,'0');
    document.getElementById('cd-m').textContent = String(Math.floor(d%3600000/60000)).padStart(2,'0');
    document.getElementById('cd-s').textContent = String(Math.floor(d%60000/1000)).padStart(2,'0');
  }
  tick(); setInterval(tick,1000);
})();

// NAV
window.addEventListener('scroll',()=>document.getElementById('navbar').classList.toggle('scrolled',scrollY>60));

// REVEAL
const obs = new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// GIFTS
// ── PERSONALIZE AQUI: altere name, price e image de cada presente ──
const gifts = [
  { name:'Cota Lua de Mel',     price:'R$ 500,00', img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', pix:'analuizaalves188@gmail.com' },
  { name:'Jantar Romântico',    price:'R$ 250,00', img:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', pix:'analuizaalves188@gmail.com' },
  { name:'Passeio de Barco',    price:'R$ 350,00', img:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', pix:'analuizaalves188@gmail.com' },
  { name:'Brinde com Champagne',price:'R$ 150,00', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', pix:'analuizaalves188@gmail.com' },
  { name:'SPA para o Casal',    price:'R$ 400,00', img:'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', pix:'analuizaalves188@gmail.com' },
  { name:'Ajudinha para a Casa',price:'R$ 200,00', img:'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80', pix:'analuizaalves188@gmail.com' },
];

const grid = document.getElementById('gifts-grid');
const chosen = new Set();
const delays = ['d1','d2','d3'];

gifts.forEach((g,i)=>{
  const card = document.createElement('div');
  card.className = `gift-card reveal ${delays[i%3]}`;
  draw(card, g, i);
  grid.appendChild(card);
  obs.observe(card);
});

// PIX banner
const pix = document.createElement('div');
pix.className = 'pix-banner reveal';
pix.innerHTML = `
  <div>
    <div class="pix-banner-label">Contribuição especial</div>
    <div class="pix-banner-title">Lua de Mel dos Sonhos ✈</div>
    <p class="pix-banner-desc">Se preferir, contribua para a nossa viagem dos sonhos. Qualquer valor é recebido com muito amor e gratidão.</p>
  </div>
  <div class="pix-box">
    <div class="pix-box-label">Chave Pix</div>
    <div class="pix-box-key">analuizaalves188@gmail.com</div>
  </div>
`;
grid.appendChild(pix);
obs.observe(pix);

function draw(card, g, i){
  const ok = chosen.has(i);
  card.innerHTML = `
    <div class="gift-img-wrap">
      <img src="${g.img}" alt="${g.name}" loading="lazy"/>
      ${ok ? '<span class="gift-badge-chosen">Escolhido ✓</span>' : ''}
    </div>
    <div class="gift-body">
      <div class="gift-name">${g.name}</div>
      <div class="gift-price">${g.price}</div>
      <button class="gift-btn" ${ok?'disabled':''} onclick="pick(${i})">
        ${ok ? 'Presente escolhido ✓' : 'Presentear'}
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
    <button class="pix-modal-close" onclick="closeModal()">✕</button>
    <div class="pix-modal-label">Presente escolhido</div>
    <div class="pix-modal-gift-name" id="modal-gift-name"></div>
    <div class="pix-modal-price" id="modal-gift-price"></div>
    <div class="pix-modal-divider"></div>
    <div class="pix-modal-instruction">Faça o Pix com o valor do presente:</div>
    <div class="pix-modal-key-wrap">
      <div class="pix-modal-key" id="modal-pix-key"></div>
      <button class="pix-modal-copy" id="modal-copy-btn" onclick="copyPix()">Copiar chave</button>
    </div>
    <p class="pix-modal-thanks">Obrigado pelo carinho! 🌿<br>Cada presente é recebido com muito amor.</p>
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
    btn.textContent = 'Copiado ✓';
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