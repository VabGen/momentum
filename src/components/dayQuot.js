import { getRandomNum } from './slider.js';
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

export function getQuotes() {
    let num = getRandomNum(0, 2);
    const quotes = 'data.json';
    fetch(quotes)
        .then(res => res.json())
        .then(data => {
            quote.textContent = `${data[`${num}`].text}`;
            author.textContent = `Автор: ${data[`${num}`].author}`;
        });
}

function buttonChangeQuote() {
    getQuotes();
}

changeQuote.addEventListener('click', buttonChangeQuote);
 