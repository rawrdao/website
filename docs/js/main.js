// A $( document ).ready() block.
$(document).ready(function () {
  function getRandomGradient() {
    const SL = ', 100%, 85%';
    const bgc = `linear-gradient(to left bottom, hsl(${
      Math.floor(Math.random() * 255) + SL
    }) 0%, hsl(${Math.floor(Math.random() * 255) + SL}) 100%)`;
    return bgc;
  }

  function changeColor() {
    $('body').css('background', getRandomGradient());
  }

  changeColor();
});
