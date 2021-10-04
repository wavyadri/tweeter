$(document).ready(function () {
  const renderTweets = function (tweets) {
    $('#tweets-container').empty();
    for (const tweet of tweets) {
      const $newTweet = createTweetElement(tweet);
      $('#tweets-container').prepend($newTweet);
    }
  };

  const escape = (str) => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = (tweet) => {
    return `
    <article class="single-tweet">
      <header>
        <div class="user">
          <img
            src=${tweet.user.avatars}
            alt="${tweet.user.name} avatar"
          />
          <h4>${tweet.user.name}</h4>
        </div>
        <div class="user-tag">
          <h4>${tweet.user.handle}</h4>
        </div>
      </header>
      <p class="user-tweet">${escape(tweet.content.text)}</p>
      <footer>
        <div class="date">
          <p>${timeago.format(tweet.created_at)}</p>
        </div>
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>
  `;
  };

  // new tweet button
  $('#tweet-form').submit((e) => {
    e.preventDefault();

    // hide error message
    $('#error-msg').slideUp(50).addClass('hide').empty();

    // tweet validation
    if ($('#tweet-text').val() === '') {
      const $msg = $('<p>').text('Please enter text for your tweet!');
      $('#error-msg').append($msg).slideDown('slow');
      return;
    }

    if ($('#tweet-text').val().length > 140) {
      const $msg = $('<p>').text('Your tweet is too long!');
      $('#error-msg').append($msg).slideDown('slow');
      return;
    }

    // serialize form data into a query string
    const serializedData = $('#tweet-text').serialize();

    $('#tweet-form').trigger('reset');

    // post request - make new tweet
    $.post('/tweets', serializedData)
      .done(() => {
        loadtweets();
      })
      .fail((err) => {
        console.log(`Your tweet failed to send due to an error: ${err}`);
      });
  });

  // get request - display all tweets
  const loadtweets = () => {
    $('#error-msg').addClass('hide');

    $.get('/tweets')
      .done((response) => {
        renderTweets(response);
      })
      .fail((err) => {
        console.log(`Your tweets failed to load due to an error: ${err}`);
      });
  };

  loadtweets();
});
