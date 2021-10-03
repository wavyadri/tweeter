/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// returns a tweet <article> element containing the entire HTML structure of the tweet

$(document).ready(function () {
  const tweetData = {
    user: {
      name: 'Newton',
      avatars: 'https://i.imgur.com/73hZDYK.png',
      handle: '@SirIsaac',
    },
    content: {
      text: 'If I have seen further it is by standing on the shoulders of giants',
    },
    created_at: 1461116232227,
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
          <p>${tweet.created_at}</p>
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

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log('$tweet:', $tweet); // to see what it looks like
  $('#tweetr-feed').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
