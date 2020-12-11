module.exports = function () {

  // begin slider
  new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination'
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
  })
  // end slider

};