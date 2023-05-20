const VimeoPlayer = require('@vimeo/player');
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    
const storedTime = localStorage.getItem('videoplayer-current-time');

if (storedTime) {
  player.setCurrentTime(storedTime);
}

const updateStoredTime = throttle(() => {
  player.getCurrentTime().then((currentTime) => {
    localStorage.setItem('videoplayer-current-time', currentTime);
  });
}, 1000);

player.on('timeupdate', updateStoredTime);
   




