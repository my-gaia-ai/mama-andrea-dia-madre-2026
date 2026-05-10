// Página Día de la Madre — Mamá Andrea

// Config de fotos (edita libremente)
const HERO_PHOTO = {
  src: 'assets/hero.jpg',
  alt: 'Mamá Andrea',
};

const GALLERY_PHOTOS = [
  { src: 'assets/foto18.jpg', alt: 'Mamá Andrea', caption: 'Brazos que arreglan el mundo.' },
  { src: 'assets/foto06.jpg', alt: 'Mamá Andrea', caption: 'Tu sonrisa: terapia familiar.' },
  { src: 'assets/foto11.jpg', alt: 'Mamá Andrea', caption: 'Reina del caos (con amor).' },
  { src: 'assets/foto15.jpg', alt: 'Mamá Andrea', caption: 'Tres generaciones, un mismo abrazo.' },
  { src: 'assets/foto23.jpg', alt: 'Familia', caption: 'Equipo completo, capitana: Mamá.' },
  { src: 'assets/foto21.jpg', alt: 'Familia', caption: 'Abrazo que reinicia el corazón.' },
  { src: 'assets/foto22.jpg', alt: 'Familia', caption: 'Siempre en primera fila por nosotros.' },
  { src: 'assets/foto25.jpg', alt: 'Familia', caption: 'Mamá también sabe pasarlo bien.' },
  { src: 'assets/foto04.jpg', alt: 'Mamá Andrea', caption: 'Elegancia + ternura = tú.' },
  { src: 'assets/foto08.jpg', alt: 'Mamá Andrea', caption: 'Clásico: Andrea siendo Andrea.' },
  { src: 'assets/foto05.jpg', alt: 'Mamá Andrea', caption: 'Sonrisa lista para cualquier plan.' },
  { src: 'assets/foto01.jpg', alt: 'Familia', caption: 'Celebrar contigo es el mejor plan.' },
];

const COMPLIMENTS = [
  'Nivel de amor: infinito ♾️',
  'Paciencia: legendaria (y sospechosamente alta)',
  'Capacidad de resolver todo: 10/10',
  'Abrazo terapéutico certificado',
  'Olfato para detectar “algo anda mal” a 3 km',
  'Habilidad de “hacer aparecer” cosas perdidas',
];

const MOM_QUOTES = [
  '“Abrígate.”',
  '“¿Comiste algo?”',
  '“Yo te dije…”',
  '“Ya, pero con cuidado.”',
  '“Mándame cuando llegues.”',
  '“Te hice algo de comer.”'
];

const QUIZ = [
  {
    q: '¿Mamá ha comprado alguna vez algo de esos comerciales de “¡llame ya!”?',
    a: [
      {
        html: 'Sí: el <a href="https://www.youtube.com/watch?v=4q7GCuWFsSs" target="_blank" rel="noopener noreferrer">Ginsu 2000</a> (el cuchillo).',
        s: 2
      },
      {
        html: 'Sí: la <a href="https://www.youtube.com/watch?v=qbDQkt64NQs" target="_blank" rel="noopener noreferrer">Máquina del Lenguaje</a>.',
        s: 2
      },
      { t: 'Sí: todas las anteriores.', s: 1 },
      { t: 'Por supuesto que no. Ni una.', s: 0 },
    ]
  },
  {
    q: '¿Qué mes está de cumpleaños la Meme?',
    a: [
      { t: 'En abril.', s: 0 },
      { t: 'En mayo.', s: 0 },
      { t: 'Depende a quién le preguntes.', s: 2 },
      { t: 'Ninguno de los dos.', s: 0 },
    ]
  },
  {
    q: '¿Cuál es su animal favorito?',
    a: [
      { t: 'Perro.', s: 0 },
      { t: 'Gato.', s: 0 },
      { t: 'Caballo.', s: 0 },
      { t: 'Nietos.', s: 2 },
    ]
  },
  {
    q: '¿Qué hay dentro de la cartera de la Meme?',
    a: [
      { t: 'Chocolates.', s: 0 },
      { t: 'Pasta de dientes.', s: 0 },
      { t: 'Abanico.', s: 0 },
      { t: 'Pilas.', s: 0 },
      { t: 'Esponja.', s: 0 },
      { t: 'Aceite.', s: 0 },
      { t: 'Todas las anteriores.', s: 2 },
    ]
  },
  {
    q: '¿Qué hizo la Meme para asustar a las nietas, para que no fueran a una casa embrujada?',
    a: [
      { t: 'Las hizo ver una película de terror.', s: 0 },
      { t: 'Se disfrazó de payaso y las despertó a las 3am.', s: 0 },
      { t: 'Las hizo dormir solas en la casita del árbol.', s: 0 },
      { t: 'Mandó al Tata al entretecho para asustarlas.', s: 2 },
    ]
  },
];

function setToday() {
  const d = new Date();
  const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const dateLong = `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
  document.querySelector('#dateLong').textContent = dateLong;
  document.querySelector('#year').textContent = String(d.getFullYear());
}

function randomPick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function setCompliment(){
  document.querySelector('#compliment').textContent = randomPick(COMPLIMENTS);
}

function setQuote(){
  document.querySelector('#momQuote').textContent = randomPick(MOM_QUOTES);
}

function addConfirm(){
  const el = document.querySelector('#counter');
  const v = Number(el.textContent || '0') + 1;
  el.textContent = String(v);
  // mini “celebración”
  popHearts(10);
}

function popHearts(n=12){
  const hearts = document.querySelector('.hearts');
  if(!hearts) return;
  for(let i=0;i<n;i++){
    const h = document.createElement('div');
    h.className = 'heart';
    h.style.left = `${10 + Math.random()*80}%`;
    h.style.top = `${65 + Math.random()*25}%`;
    h.style.background = Math.random() > .5 ? 'rgba(255,77,141,.55)' : 'rgba(106,92,255,.45)';
    h.style.animationDuration = `${1400 + Math.random()*900}ms`;
    hearts.appendChild(h);
    setTimeout(()=>h.remove(), 2200);
  }
}

function openModal(){
  const m = document.querySelector('#modal');
  m.classList.add('show');
  m.setAttribute('aria-hidden','false');
  popHearts(16);
}

function closeModal(){
  const m = document.querySelector('#modal');
  m.classList.remove('show');
  m.setAttribute('aria-hidden','true');
}

function renderQuiz(){
  const root = document.querySelector('#quiz');
  root.innerHTML = '';

  QUIZ.forEach((item, idx) => {
    const wrap = document.createElement('div');
    wrap.className = 'q';

    const qt = document.createElement('div');
    qt.className = 'qt';
    qt.textContent = `${idx+1}. ${item.q}`;
    wrap.appendChild(qt);

    const opts = document.createElement('div');
    opts.className = 'opts';

    item.a.forEach((opt, j) => {
      const id = `q${idx}_o${j}`;
      const label = document.createElement('label');
      label.className = 'opt';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${idx}`;
      input.value = String(opt.s);
      input.id = id;

      const span = document.createElement('span');
      if(opt.html){
        span.innerHTML = opt.html;
      } else {
        span.textContent = opt.t;
      }

      label.appendChild(input);
      label.appendChild(span);
      opts.appendChild(label);
    });

    wrap.appendChild(opts);
    root.appendChild(wrap);
  });
}

function quizScore(){
  let score = 0;
  let answered = 0;

  QUIZ.forEach((_, idx) => {
    const checked = document.querySelector(`input[name="q${idx}"]:checked`);
    if(checked){
      answered++;
      score += Number(checked.value);
    }
  });

  return { score, answered, total: QUIZ.length };
}

function quizResultText(score, answered, total){
  if(answered < total) return `Te faltan ${total-answered} preguntas 😌 (igual te queremos).`;

  // Adaptativo al número de preguntas (máximo típico: 2 puntos por pregunta)
  const maxScore = total * 2;
  if(score >= Math.ceil(maxScore * 0.85)) return 'Resultado: Mamá Andrea nivel DIOS. (Abrazo + snack + solución incluida).';
  if(score >= Math.ceil(maxScore * 0.70)) return 'Resultado: Mamá Andrea modo PRO. (Detectas todo y encima con ternura).';
  return 'Resultado: Mamá Andrea en entrenamiento… pero con corazón gigante.';
}

function resetQuiz(){
  document.querySelectorAll('#quiz input[type="radio"]').forEach(i => i.checked = false);
  document.querySelector('#quizResult').textContent = '';
}

function applyPhotos(){
  // hero
  const hero = document.querySelector('#heroPhoto');
  if(hero && HERO_PHOTO?.src){
    hero.classList.remove('ph');
    hero.innerHTML = `<img src="${HERO_PHOTO.src}" alt="${HERO_PHOTO.alt||''}" />`;
  }

  // gallery
  const g = document.querySelector('#gallery');
  if(g){
    g.innerHTML = '';
    GALLERY_PHOTOS.forEach((p, idx) => {
      const fig = document.createElement('figure');
      fig.className = 'tile';
      fig.innerHTML = `
        <img loading="lazy" src="${p.src}" alt="${p.alt||''}" />
        <figcaption><strong>Foto ${idx+1}.</strong> ${p.caption||''}</figcaption>
      `.trim();
      g.appendChild(fig);
    });
  }
}

// Wire
setToday();
setCompliment();
setQuote();
renderQuiz();
applyPhotos();

document.querySelector('#btnBest').addEventListener('click', addConfirm);
document.querySelector('#btnHug').addEventListener('click', openModal);
document.querySelector('#modalClose').addEventListener('click', closeModal);
document.querySelector('#xClose').addEventListener('click', closeModal);

document.querySelector('#btnMore').addEventListener('click', ()=>popHearts(18));
document.querySelector('#btnCompliment').addEventListener('click', setCompliment);

document.querySelector('#btnQuiz').addEventListener('click', ()=>{
  const {score, answered, total} = quizScore();
  const text = quizResultText(score, answered, total);
  document.querySelector('#quizResult').textContent = text;
  if(answered === total) popHearts(14);
});

document.querySelector('#btnReset').addEventListener('click', resetQuiz);
