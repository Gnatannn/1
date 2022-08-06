import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}

const parsedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
// console.log(parsedTime);

let parsedSeconds;
if (parsedTime.seconds) {
  parsedSeconds = parsedTime.seconds;
} else {
  parsedSeconds = 0;
}

// console.log(parsedSeconds);

player
  .setCurrentTime(parsedSeconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
    seconds = parsedSeconds;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
