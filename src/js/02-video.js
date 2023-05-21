const VimeoPlayer = require('@vimeo/player');
const throttle = require('lodash.throttle');

const STORAGE_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    
const storedTime = localStorage.getItem('STORAGE_TIME_KEY');

if (storedTime) {
  player.setCurrentTime(storedTime);
}

const updateStoredTime = throttle(() => {
  player.getCurrentTime().then((currentTime) => {
    localStorage.setItem('STORAGE_TIME_KEY', currentTime);
  });
}, 1000);

player.on('timeupdate', updateStoredTime);
   




