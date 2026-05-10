// Página Día de la Madre — Mamá Andrea (MVP)

const PHOTOS = [
  // Cuando tengas fotos: ponlas en assets/ y descomenta estas líneas
  // { selector: '#heroPhoto', src: 'assets/foto-portada.jpg', alt: 'Mamá Andrea' },
  // { selector: '#gallery', slot: 0, src: 'assets/foto1.jpg', alt: 'Foto 1' },
  // { selector: '#gallery', slot: 1, src: 'assets/foto2.jpg', alt: 'Foto 2' },
  // { selector: '#gallery', slot: 2, src: 'assets/foto3.jpg', alt: 'Foto 3' },
  // { selector: '#gallery', slot: 3, src: 'assets/foto4.jpg', alt: 'Foto 4' },
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
    q: 'Alguien dice: “Me duele la guata”. Tú…',
    a: [
      { t: 'Apareces con té y una mantita en 7 segundos.', s: 2 },
      { t: 'Dices “¿qué comiste?” con cara de detective.', s: 2 },
      { t: 'Sugieres “respira… ya va a pasar” (y pasa).', s: 1 },
    ]
  },
  {
    q: 'Cuando tu hijo/a dice “estoy bien, tranqui”…',
    a: [
      { t: 'Tu radar detecta mentira piadosa de inmediato.', s: 2 },
      { t: 'Respondes “ya, pero cuéntame igual”.', s: 2 },
      { t: 'Le mandas un audio de 2 min con amor y orden.', s: 1 },
    ]
  },
  {
    q: 'En una salida familiar, el “kit de mamá” incluye:',
    a: [
      { t: 'Paracetamol + parche curita + snack (obvio).', s: 2 },
      { t: 'Un suéter extra… para alguien que “no lo iba a necesitar”.', s: 2 },
      { t: 'Agua y una mirada que dice “yo sabía”.', s: 1 },
    ]
  },
  {
    q: 'Tu frase más probable al despedirte:',
    a: [
      { t: '“Avísame cuando llegues.”', s: 2 },
      { t: '“Que te vaya bien, te quiero.”', s: 1 },
      { t: '“Y ojo con…” (lista de 3 cosas).', s: 2 },
    ]
  },
  {
    q: 'Nivel de “meme” en el chat familiar:',
    a: [
      { t: 'Stickers tiernos que aparecen en el momento perfecto.', s: 2 },
      { t: 'Reacción con corazón a TODO. Todo.', s: 1 },
      { t: 'Un mensaje serio… seguido de un emoji inesperado.', s: 1 },
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
      span.textContent = opt.t;

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

  // score range: min 5, max 10
  if(score >= 9) return 'Resultado: Mamá Andrea nivel DIOS. (Abrazo + snack + solución incluida).';
  if(score >= 7) return 'Resultado: Mamá Andrea modo PRO. (Detectas todo y encima con ternura).';
  return 'Resultado: Mamá Andrea en entrenamiento… pero con corazón gigante.';
}

function resetQuiz(){
  document.querySelectorAll('#quiz input[type="radio"]').forEach(i => i.checked = false);
  document.querySelector('#quizResult').textContent = '';
}

function applyPhotos(){
  // hero photo
  PHOTOS.forEach(p => {
    if(p.selector === '#heroPhoto' && p.src){
      const el = document.querySelector('#heroPhoto');
      el.classList.remove('ph');
      el.innerHTML = `<img src="${p.src}" alt="${p.alt||''}" />`;
      el.querySelector('img').style.width = '100%';
      el.querySelector('img').style.height = '100%';
      el.querySelector('img').style.objectFit = 'cover';
    }
    if(p.selector === '#gallery' && typeof p.slot === 'number'){
      const tiles = document.querySelectorAll('#gallery .tile');
      const tile = tiles[p.slot];
      if(tile && p.src){
        tile.classList.remove('ph');
        tile.innerHTML = `<img src="${p.src}" alt="${p.alt||''}" />`;
      }
    }
  });
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
