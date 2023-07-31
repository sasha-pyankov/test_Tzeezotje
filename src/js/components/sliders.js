//подключаем например swiper, переменную подключаем отдельно
import _vars from '../_vars.js'
import Swiper, { Navigation } from 'swiper'

Swiper.use([Navigation]);

new Swiper (_vars.reviewsSliderEl, {
  slidesPerView: 'auto',
  // бесконечная прокрутка
  loop: true,
  // Скорость прокрутки
  speed: 1000,
    // Паралакс
  parallax: true,
  // Упарвление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  autoHeight: true,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  // Отключение функционала, если слайдов меньше чем нужно
  watchOverflow: true,
  // Обновить свайпер при изменении элементов свайпера
  observer: true,
  // Обновить свайпер при изменении дочерних элементов свайпера
  observeSlideChildren: true,
  // Обновить свайпер при изменении родительских элементов свайпера
  observeParents: true,
})
