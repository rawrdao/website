(function ($) {
  $.fn.bmdIframe = function (options) {
    var self = this;
    var settings = $.extend(
      {
        classBtn: '.bmd-modalButton',
        defaultW: 960,
        defaultH: 613,
      },
      options
    );

    $(settings.classBtn).on('click', function (e) {
      var allowFullscreen = $(this).attr('data-bmdVideoFullscreen') || false;

      var dataGame = {
        src: $(this).attr('data-bmdSrc'),
        height: $(this).attr('data-bmdHeight') || settings.defaultH,
        width: $(this).attr('data-bmdWidth') || settings.defaultW,
      };

      if (allowFullscreen) dataGame.allowfullscreen = '';

      $(self).find('iframe').attr(dataGame);
    });

    this.on('hidden.bs.modal', function () {
      $(this).find('iframe').html('').attr('src', '');
    });

    return this;
  };
})(jQuery);

// A $( document ).ready() block.
$(document).ready(function () {
  jQuery('#myModal').bmdIframe();

  function getRandomGradient() {
    const SL = ', 100%, 90%';
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
