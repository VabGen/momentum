import { showGreeting, getTimeOfDay, divGreeting } from './greeting.js';
import { getWeather } from './weather.js'; showDate
import { showDate } from './date.js';

export const dataTranslation = [
    {
        greeting: {
            en: ['night', 'morning', 'afternoon', 'evening'],
            ru: ['доброй ночи', 'доброе утро', 'добрый день', 'добрый вечер'],
        },
        speed: {
            en: 'm/s',
            ru: 'км/ч',
        },
        main: {
            en: 'Humidity',
            ru: 'Важность',
        }
    }
]

const btnTranslation = document.querySelector('.btn__translation');

btnTranslation.addEventListener('click', showGreetingLang);

export function getValueContents() {
    const valueContents = window.getComputedStyle(btnTranslation, ':after').getPropertyValue('content');
    const textWithoutQuotes = valueContents.replace(/['"]/g, '');
    const timeOfDay = getTimeOfDay();
    const indexTimeOfDay = dataTranslation[0].greeting.en.indexOf(timeOfDay);
    const lang = dataTranslation[0].greeting.ru[indexTimeOfDay];
    return { langRu: lang, val: textWithoutQuotes };
} 

export function showGreetingLang(event) {
    if (event.target.closest('.btn__translation')) {
        btnTranslation.classList.toggle('btn__lang');
        const greetingLang = getValueContents();
        getWeather();
        showDate(greetingLang.val);
    } if (btnTranslation.classList.contains('btn__lang')) {
        const greetingText = getValueContents().langRu[0].toUpperCase() + getValueContents().langRu.slice(1);
        divGreeting.textContent = greetingText;
    } else {showGreeting();}
}

// export default dataTranslation;
