import './css/owfont-regular.css'
import './css/style.css'
import { showTime } from './components/time.js';
import { showDate } from './components/date.js';
import { getLocalStorage } from './components/localStorage.js';
import { setBg } from './components/slider.js';
import { getWeather } from './components/weather.js';
import { getQuotes } from './components/dayQuot.js';
import { plList } from './components/playAudio'; 
// import { dataTranslation, getValueContents } from './components/dataTranslation';

showTime();
showDate();
getLocalStorage();
setBg();
getQuotes();
plList();

document.addEventListener('DOMContentLoaded', getWeather);