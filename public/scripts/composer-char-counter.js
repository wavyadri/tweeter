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

  // toggle compose button
  $('#compose-btn').click(() => {
    $('#new-tweet').slideToggle();
    if ($('#new-tweet').is(':visible')) {
      $('#tweet-text').focus();
    }
  });

  // scroll to top button
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('#scroll-btn').fadeIn(200);
    } else {
      $('#scroll-btn').fadeOut(100);
    }
  });

  $('#scroll-btn').click(() => {
    $(window).scrollTop(0);
  });

  // starting state
  $('#new-tweet').hide();
});

// questions
// is it okay to set   $('#new-tweet').hide();
