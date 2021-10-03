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

// returns a tweet <article> element containing the entire HTML structure of the tweet
$(document).ready(function () {
  const renderTweets = function (tweets) {
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      const $newTweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
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
    // prevent default
    e.preventDefault();

    // serializeData
    const serializedData = $('#tweet-text').serialize();

    // post request
    $.post('/tweets', serializedData, (response) => {
      console.log('response: ', response);
    })
      .done(() => {
        $('#tweet-form').trigger('reset');
      })
      .fail((err) => {
        console.log(`Your tweet failed to send due to an error: ${err}`);
      });
  });

  // questions:
  // for our post, when we type in the text area it convert str into key value pairs
  // which is why we need to serialize it?

  // for get, we are requesting data from server which is already JSON
  // so we don't need to do anything?

  // where is server pulling tweets from?

  // my get request returns 304 - is this ok or should it be 200?

  // should .post be a func like .get?

  // review .post and .get

  // get request
  const loadtweets = () => {
    $.get('/tweets', (response) => {
      console.log('response: ', response);
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
