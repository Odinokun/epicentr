module.exports = function () {

  // begin rating
  const ratingList = document.querySelector('.rating');
  const ratingListValue = ratingList.getAttribute('data-rating');
  const ratingInputs = document.querySelectorAll('.rating__input');

  for (let i = 0; i < ratingInputs.length; i++) {
    let input = ratingInputs[i];

    input.addEventListener('click', function () {
      let newRating = this.value;

      ratingList.setAttribute('data-rating', newRating);
      activeRating(newRating);
    })
  }

  function activeRating(ratingValue) {
    const ratingItems = document.querySelectorAll('.rating__item');

    for (let i = 0; i < ratingItems.length; i++) {
      let item = ratingItems[i];

      if (i < ratingValue) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }
  }

  activeRating(ratingListValue);
  // end rating

};