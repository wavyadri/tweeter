/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// returns a tweet <article> element containing the entire HTML structure of the tweet
const createTweetElement = (tweet) => {
  const $tweet = $(`<article class="single-tweet">
  <header>
    <div class="user">
      <img
        src="https://i.imgur.com/nlhLi3I.png"
        alt="Descartes' avatar"
      />
      <h4>Descartes</h4>
    </div>
    <div class="user-tag">
      <h4>@rd</h4>
    </div>
  </header>
  <p class="user-tweet">Je pense , donc je suis</p>
  <footer>
    <div class="date">
      <p>12 days ago</p>
    </div>
    <div class="icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
</article>`);
};
$(document).ready(function () {});

// Test / driver code (temporary). Eventually will get this from the server.
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

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
