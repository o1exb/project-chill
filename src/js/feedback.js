import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { getFeedbacks } from './artists-api';
import { renderStarsAdvanced } from './render-functions';

function renderFeedbackSlide({ name, rating, descr }) {
  return `
    <div class="swiper-slide">
      <ul class="feedback-stars">${renderStarsAdvanced(rating)}</ul>
      <p class="feedback-text">"${descr}"</p>
      <p class="feedback-author">${name}</p>
    </div>
  `;
}
function updateArrows(realIndex, first, last) {
  const prev = document.querySelector('.swiper-button-prev');
  const next = document.querySelector('.swiper-button-next');

  prev.classList.toggle('disabled', realIndex === first);
  next.classList.toggle('disabled', realIndex === last);
}

async function initFeedbackSwiper() {
  const { data: feedbacks } = await getFeedbacks();
  const limited = feedbacks.slice(0, 30);
  const first = 0;
  const last = limited.length - 1;
  const middle = Math.floor(limited.length / 2);

  document.querySelector('.swiper-wrapper').innerHTML = limited
    .map(renderFeedbackSlide)
    .join('');

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const pag = document.querySelector('.swiper-pagination');
  pag.innerHTML = `
    <span class="swiper-pagination-bullet" data-i="${first}"></span>
    <span class="swiper-pagination-bullet" data-i="${middle}"></span>
    <span class="swiper-pagination-bullet" data-i="${last}"></span>`;

  pag.addEventListener('click', e => {
    if (e.target.classList.contains('swiper-pagination-bullet')) {
      swiper.slideTo(+e.target.dataset.i);
    }
  });

  function updateBullets() {
    const idx = swiper.realIndex;
    document.querySelectorAll('.swiper-pagination-bullet').forEach(el => {
      el.classList.toggle('active', +el.dataset.i === idx);
    });
    updateArrows(idx, first, last);
  }

  swiper.on('slideChange', () => {
    updateBullets();
    updateArrows(swiper.realIndex, first, last);
  });
  updateBullets();
}
initFeedbackSwiper();
