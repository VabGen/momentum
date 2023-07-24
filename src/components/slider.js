import { getTimeOfDay } from './greeting.js';

let numOld;

export const getRandomNum = (min, max) => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    if (numOld === random) return getRandomNum(min, max);
    numOld = random;
    return random;
}

let randomNum = getRandomNum(1, 20);

export function setBg() {
    const timeOfDay = getTimeOfDay();
    const bgNum = randomNum.toString().padStart(2, "0");
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.addEventListener('load', () => {
        document.body.style.backgroundImage = `url(${img.src})`
    })
}

const slideNext = document.querySelector('.slide-next');
const getSlideNext = () => {
    if (randomNum === '20') return randomNum = '00';
    randomNum++;
    setBg();
}

const slidePrev = document.querySelector('.slide-prev');
const getSlidePrev = () => {
    if (randomNum === '01') return randomNum = '21';
    randomNum--;
    setBg();
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
