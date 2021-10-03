// Fake data taken from initial-tweets.json
const data = [
  {
    user: {
      name: 'Newton',
      avatars: 'https://i.imgur.com/73hZDYK.png',
      handle: '@SirIsaac',
    },
    content: {
      text: 'If I have seen further it is by standing on the shoulders of giants',
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: 'Descartes',
      avatars: 'https://i.imgur.com/nlhLi3I.png',
      handle: '@rd',
    },
    content: {
      text: 'Je pense , donc je suis',
    },
    created_at: 1461113959088,
  },
];

// returns a tweet <article> element containing HTML structure of the tweet
$(document).ready(function () {
  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      const $newTweet = createTweetElement(tweet);
      $('#tweets-container').append($newTweet);
    }
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
          <h4>${tweet.user.name} </h4>
        </div>
        <div class="user-tag">
          <h4>${tweet.user.handle} </h4>
        </div>
      </header>
      <p class="user-tweet">${tweet.content.text} </p>
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

  renderTweets(data);

  $('#tweet-form').submit((e) => {
    e.preventDefault();

    // tweet validation
    if ($('#tweet-text').val() === '') {
      return alert('Please enter some text!');
    }

    if ($('#tweet-text').val().length > 140) {
      return alert('Your tweet is too long');
    }

    // serialize form data into a query string
    const serializedData = $('#tweet-text').serialize();

    // post request
    $.post('/tweets', serializedData, (response) => {
      console.log('response from post req: ', response);
    })
      .done(() => {
        $('#tweet-form').trigger('reset');
        loadtweets();
      })
      .fail((err) => {
        console.log(`Your tweet failed to send due to an error: ${err}`);
      });
  });

  // get request
  const loadtweets = () => {
    $.get('/tweets', (response) => {
      console.log('response from get req: ', response);
    })
      .done((response) => {
        renderTweets(response);
      })
      .fail((err) => {
        console.log(`Your tweets failed to load due to an error: ${err}`);
      });
  };

  loadtweets();
});
