import { dataTranslation } from './dataTranslation.js';

const divGreeting = document.querySelector('.greeting');

const getTimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();
    const getArrayElement = hours / 6;
    const integer = Math.floor(getArrayElement);
    const currentTimeOfDay = dataTranslation[0].greeting.en[integer];
    return currentTimeOfDay;
}

function showGreeting() {
    const timeOfDay = getTimeOfDay();
    divGreeting.textContent = `Good ${timeOfDay}`;
} showGreeting()

export { getTimeOfDay, showGreeting, divGreeting }; 
