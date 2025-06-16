const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev-img');
const nextBtn = document.getElementById('next-img');
const dotsContainer = document.getElementById('carousel-dots');

let currentImgs = [];
let currentImgIndex = 0;

let sky = document.querySelector('.sky');

function createDiv(size) {
  let circle = document.createElement('div');
  circle.classList.add('circle');
  let randRange5 = Math.floor(Math.random() * 5) + 1;
  circle.classList.add(`blink_${randRange5}`);
  let widthAndHeight = random(size, 'px');
  circle.style.height = circle.style.width = widthAndHeight;

  // Gera posição fora da área do título
  let tries = 0;
  let maxTries = 50;
  let left, top, circleSize = parseInt(widthAndHeight);
  do {
    left = Math.floor(Math.random() * (window.innerWidth - circleSize));
    top = Math.floor(Math.random() * (window.innerHeight - circleSize));
    tries++;
  } while (
    titleRect &&
    left + circleSize > titleRect.left &&
    left < titleRect.right &&
    top + circleSize > titleRect.top &&
    top < titleRect.bottom &&
    tries < maxTries
  );

  circle.style.left = left + 'px';
  circle.style.top = top + 'px';

  sky.appendChild(circle);
}

// let [starSlider, sizeSlider] = document.querySelectorAll('.slider');
// let [stars, size] = document.querySelectorAll('.value');

// [starSlider, sizeSlider].forEach(slider => {
//   slider.addEventListener('change', () => {
//     stars.textContent = starSlider.value;
//     size.textContent = sizeSlider.value;
//   });
//   slider.addEventListener('change', () => {
//     paintStars(starSlider.value, sizeSlider.value);
//   });
// });



function paintStars(stars, size) {
  while (sky.firstChild) {
    sky.removeChild(sky.firstChild);
  }
  for (let i = 0; i < stars; i++) {
    createDiv(size);
  }
}


function random(range, unit) {
  let randNum = Math.floor(Math.random() * range) + 1;
  return `${randNum}${unit}`;
}

//paintStars(50, 5);

/* function randomColor() {
  let range255 = () => random(255, '');
  return `rgb(${range255()},${range255()}, ${range255()}`
} */

const momentos = [
  {
    left: 500, top: 750,
    imgs: ['img/aparecida1.jpg', 'img/aparecida2.jpg', 'img/aparecida3.jpg', 'img/aparecida4.jpg', 'img/aparecida5.jpg'],
    desc: 'Nosso dia em Aparecida ⛪✝️'
  },
  {
    left: 1100, top: 350,
    imgs: ['img/brunomars1.jpg', 'img/brunomars2.jpg'],
    desc: 'Bruninho não tem fotos, pq será né? 🤔'
  },
  {
    left: 100, top: 650,
    imgs: ['img/capitolio2.jpg', 'img/capitolio1.jpg', 'img/capitolio4.jpg', 'img/capitolio3.jpg', 'img/capitolio5.jpg'],
    desc: 'Capitólio tem nosso coração 💗🏞️',
  },
  {
    left: 230, top: 600,
    imgs: ['img/lavrinhas2.jpg', 'img/lavrinhas1.jpg', 'img/lavrinhas3.jpg', 'img/lavrinhas4.jpg'],
    desc: 'Lavrinhas e o Faísca 🏕️🔥',
  },
  {
    left: 900, top: 500,
    imgs: ['img/mg2.jpg', 'img/mg1.jpg', 'img/mg3.jpg', 'img/mg4.jpg', 'img/mg5.jpg', 'img/mg6.jpg'],
    desc: 'Minas Gerais, o boi caiu!! 🐂❤️',
  },
  {
    left: 950, top: 760,
    imgs: ['img/monteverde1.jpg', 'img/monteverde2.jpg', 'img/monteverde3.jpg', 'img/monteverde4.jpg', 'img/monteverde5.jpg'],
    desc: 'Monte Verde, onde nosso amor floresceu ☀️🏔️',
  },
  {
    left: 200, top: 400,
    imgs: ['img/paraibuna1.jpg', 'img/paraibuna2.jpg', 'img/paraibuna3.jpg', 'img/paraibuna4.jpg', 'img/paraibuna5.jpg', 'img/paraibuna6.jpg'],
    desc: 'Paraibuna e nossos dogs, au au 🏞️🐶',
  },
  {
    left: 500, top: 430,
    imgs: ['img/parque1.jpg', 'img/parque2.jpg', 'img/parque3.jpg', 'img/parque4.jpg'],
    desc: 'Parque de milhões 🌳❤️',
  },
  {
    left: 640, top: 625,
    imgs: ['img/saoroque1.jpg', 'img/saoroque2.jpg', 'img/saoroque3.jpg'],
    desc: 'São Roque e um bom vinho 🍷',
  },
  {
    left: 1345, top: 525,
    imgs: ['img/socorro2.jpg', 'img/socorro1.jpg', 'img/socorro3.jpg', 'img/socorro4.jpg', 'img/socorro5.jpg'],
    desc: 'Socorro, uma viagem das boas 🛶❤️',
  },
  {
    left: 1065, top: 625,
    imgs: ['img/ubatuba1.jpg', 'img/ubatuba2.jpg', 'img/ubatuba3.jpg', 'img/ubatuba4.jpg'],
    desc: 'Ubatuba, em busca do extraordinário kkkkkk 🏖️🌊',
  },
  {
    left: 565, top: 325,
    imgs: ['img/natal1.jpg', 'img/natal2.jpg', 'img/natal3.jpg', 'img/natal4.jpg', 'img/natal5.jpg'],
    desc: 'Natal com a criançada 🎄🎁',
  },
  {
    left: 1415, top: 245,
    imgs: ['img/aquiemcasa2.jpg', 'img/aquiemcasa1.jpg', 'img/aquiemcasa3.jpg'],
    desc: 'Uns dias de paz aqui em casa 🏡❤️',
  },
  {
    left: 895, top: 347,
    imgs: ['img/euevoce1.jpg', 'img/euevoce2.jpg', 'img/euevoce3.jpg', 'img/euevoce4.jpg', 'img/euevoce5.jpg', 'img/euevoce6.jpg', 'img/euevoce7.jpg', 'img/euevoce8.jpg', 'img/euevoce9.jpg',  'img/euevoce10.jpg',  'img/euevoce11.jpg', 'img/euevoce12.jpg', 'img/euevoce13.jpg', 'img/euevoce14.jpg', 'img/euevoce15.jpg'],
    desc: 'Eu e você, sempre juntos ❤️',
  },
  {
    left: 395, top: 647,
    imgs: ['img/show1.jpg', 'img/show2.jpg', 'img/show3.jpg', 'img/show4.jpg', 'img/show5.jpg', 'img/show6.jpg', 'img/show7.jpg', 'img/show8.jpg', 'img/show9.jpg', 'img/show10.jpg'],
    desc: 'Vários shows nos derem muitas boas memórias 🎶',
  },
  {
    left: 1495, top: 687,
    imgs: ['img/diadosnamorados1.jpg', 'img/diadosnamorados2.jpg', 'img/diadosnamorados3.jpg'],
    desc: 'Nosso dia dos namorados 1 💕',
  },
  
  
  // Adicione outros momentos aqui, sempre usando imgs: ['img1.jpg', ...]
];


// Função para criar estrela especial
function createSpecialStar(momento) {
  let star = document.createElement('div');
  star.classList.add('circle', 'special-star');
  star.style.left = momento.left + 'px';
  star.style.top = momento.top + 'px';
  star.style.width = star.style.height = '20px'; // um pouco maior que as normais
  star.style.background = '#fffbe6'; // tom branco-amarelado suave
  star.style.boxShadow = '0 0 10px 3px #fffbe6'; // brilho mais suave
  star.style.cursor = 'pointer';
  star.addEventListener('click', () => openModal(momento));
  sky.appendChild(star);
}


function openModal(momento) {
  currentImgs = momento.imgs || [momento.img];
  currentImgIndex = 0;
  showCurrentImg();
  modalDesc.textContent = momento.desc;
  modal.style.display = 'flex';

  // Mostra ou esconde controles
  if (currentImgs.length > 1) {
    prevBtn.style.display = nextBtn.style.display = 'flex';
    dotsContainer.style.display = 'flex';
    renderDots();
  } else {
    prevBtn.style.display = nextBtn.style.display = 'none';
    dotsContainer.style.display = 'none';
  }
}
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// 4. Atualize paintStars para incluir estrelas especiais
function paintStars(stars, size) {
  while (sky.firstChild) {
    sky.removeChild(sky.firstChild);
  }
  // Estrelas normais
  for (let i = 0; i < stars; i++) {
    createDiv(size);
  }
  // Estrelas especiais
  momentos.forEach(createSpecialStar);
}
//paintStars(800, 8);

const titleDiv = document.querySelector('.universe-title');
let titleRect = null;

function updateTitleRect() {
  titleRect = titleDiv.getBoundingClientRect();
}

window.addEventListener('DOMContentLoaded', () => {
  updateTitleRect();
  paintStars(800, 8);
});
window.addEventListener('resize', updateTitleRect);

// const modal = document.getElementById('modal');
// const modalImg = document.getElementById('modal-img');
// const modalDesc = document.getElementById('modal-desc');
// const closeBtn = document.querySelector('.close');
// const prevBtn = document.getElementById('prev-img');
// const nextBtn = document.getElementById('next-img');
// const dotsContainer = document.getElementById('carousel-dots');

// let currentImgs = [];
// let currentImgIndex = 0;

// function openModal(momento) {
//   currentImgs = momento.imgs || [momento.img];
//   currentImgIndex = 0;
//   showCurrentImg();
//   modalDesc.textContent = momento.desc;
//   modal.style.display = 'flex';

//   // Mostra ou esconde controles
//   if (currentImgs.length > 1) {
//     prevBtn.style.display = nextBtn.style.display = 'flex';
//     dotsContainer.style.display = 'flex';
//     renderDots();
//   } else {
//     prevBtn.style.display = nextBtn.style.display = 'none';
//     dotsContainer.style.display = 'none';
//   }
// }

function showCurrentImg() {
  modalImg.src = currentImgs[currentImgIndex];
  updateDots();
}

prevBtn.onclick = function() {
  if (currentImgs.length > 1) {
    currentImgIndex = (currentImgIndex - 1 + currentImgs.length) % currentImgs.length;
    showCurrentImg();
  }
};
nextBtn.onclick = function() {
  if (currentImgs.length > 1) {
    currentImgIndex = (currentImgIndex + 1) % currentImgs.length;
    showCurrentImg();
  }
};

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

function renderDots() {
  dotsContainer.innerHTML = '';
  currentImgs.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (idx === currentImgIndex ? ' active' : '');
    dot.onclick = () => {
      currentImgIndex = idx;
      showCurrentImg();
    };
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll('.carousel-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentImgIndex);
  });
}
