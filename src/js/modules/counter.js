module.exports = function () {

  // begin counter
  const counters = document.querySelectorAll('.counter');

  for (let i = 0; i < counters.length; i++) {
    let counter = counters[i];
    let counterValue = counter.querySelector('.counter__input').value;
    const btnUp = counter.querySelector('.counter__btn--up');
    const btnDown = counter.querySelector('.counter__btn--down');

    btnUp.addEventListener('click', function () {
      counterValue++;
      counterValue = counterValue < 10 ? '0' + counterValue : counterValue;
      counter.querySelector('.counter__input').value = counterValue;
    });

    btnDown.addEventListener('click', function () {
      counterValue--;
      counterValue = counterValue < 10 ? '0' + counterValue : counterValue;
      counterValue = counterValue < 1 ? '0' + 1 : counterValue;
      counter.querySelector('.counter__input').value = counterValue;
    });
  }
  // end counter

};