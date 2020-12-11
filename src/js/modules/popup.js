module.exports = function () {

  // begin counter
  const openBtn = document.querySelector('.info__btn');
  const popupLayer = document.querySelector('#popup-layer');
  const popupWrap = document.querySelector('#popup-wrap');

  openBtn.addEventListener('click', function (e) {
    e.preventDefault();

    popupLayer.classList.add('active');
    popupWrap.classList.add('active');
  });

  popupLayer.addEventListener('click', function () {
    popupLayer.classList.remove('active');
    popupWrap.classList.remove('active');
  });
  // end counter

};