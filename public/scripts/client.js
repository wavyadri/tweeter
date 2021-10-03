/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// questions:
// should the function definitions be inside doc.ready()?
// should I refactor createTweetElement so it creates a div, appends children etc etc?

// returns a tweet <article> element containing the entire HTML structure of the tweet
$(document).ready(function () {
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

  ///////////////////////////////////////////////////////////////////
  $('#tweet-form').submit((e) => {
    e.preventDefault();
  });
});

////////////////////
// const tweetData = {
//   user: {
//     name: 'Newton',
//     avatars: 'https://i.imgur.com/73hZDYK.png',
//     handle: '@SirIsaac',
//   },
//   content: {
//     text: 'If I have seen further it is by standing on the shoulders of giants',
//   },
//   created_at: 1461116232227,
// };

// const $tweet = createTweetElement(tweetData);
// // Test / driver code (temporary)
// console.log('$tweet:', $tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
