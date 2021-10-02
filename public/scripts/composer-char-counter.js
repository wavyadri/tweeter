$(document).ready(function () {
  // update text counter as user types
  $('#tweet-text').on('input', function (event) {
    const textLimit = 140;
    const textCounter = $(this).closest('form').find('#text-counter');

    textCounter.val(textLimit - $(this).val().length);

    // add/remove danger class when textCounter is below 0
    if (textCounter.val() < 0) {
      textCounter.addClass('danger');
    }

    if (textCounter.val() >= 0 && $('.danger')) {
      textCounter.removeClass('danger');
    }
  });
});
