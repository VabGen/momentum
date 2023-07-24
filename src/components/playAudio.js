import playList from './playList.js';
import { getRandomNum } from './slider.js';

const audioPlayer = document.querySelector('.player');
const play = document.querySelector('.play');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
const current = document.querySelector('.current'); 
const divider = document.querySelector('.divider'); 

const max = playList.length - 1;
let randomNum = getRandomNum(0, max);

let isPlay = false;

const audio = new Audio();

export function playPause(event) {
    if (event.target.closest('.play')) {
        play.classList.toggle('pause');
    }
    if (!isPlay) {
        audio.src = playList[randomNum].src;
        audio.currentTime = 0;
        audio.play();
        current.style.visibility = 'visible';
        divider.style.visibility = 'visible';
        isPlay = true;
        plList();
    } else {
        audio.pause();
        isPlay = false;
    }
}

function audioNext(event) {
    randomNum++;
    if (randomNum > max) {
        randomNum = 0;
    } if (play.closest('.play')) {
        play.classList.add('pause');
    } if (play.closest('.pause')) {
        play.classList.add('play');
    }
    audio.src = playList[randomNum].src;
    isPlay = false;
    playPause(event);
}

function audioPrev(event) {
    randomNum--;
    if (randomNum < 0) {
        randomNum = max;
    } if (play.closest('.play')) {
        play.classList.add('pause');
    } if (play.closest('.pause')) {
        play.classList.add('play');
    }
    audio.src = playList[randomNum].src;
    isPlay = false;
    playPause(event);
}

play.addEventListener('click', playPause, false);
playNext.addEventListener('click', audioNext);
playPrev.addEventListener('click', audioPrev);

(function createLi() {
    playList.forEach(el => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.textContent = el.title;
        // li.textContent = el.duration;
        playListContainer.append(li);
    })
})();

export function plList() {
    const childUl = playListContainer.childNodes;
    for (let tag of childUl) {
        if (tag.classList.contains('item-active')) {
            tag.classList.remove('item-active');
        }
    }
    childUl[randomNum].classList.add('item-active');
}

audio.addEventListener(
    "loadeddata",
    () => {
        document.querySelector(".tic .length").textContent = getTimeCodeFromNum(
            audio.duration
        );
        // audio.volume = .75;
    },
    false
);

setInterval(() => {
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    document.querySelector(".tic .current").textContent = getTimeCodeFromNum(
        audio.currentTime
    );
}, 500);

const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
}, false);

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
}