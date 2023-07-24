import { getValueContents, dataTranslation } from './dataTranslation.js';

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

export async function getWeather() {
    const langs = getValueContents();
    const valueLang = langs.val;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${valueLang}&appid=8c236f06a049df7906dec49e1298e820&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.classList.add(`owf-905`);
    wind.textContent = ' ' + data.wind.speed + ' ' + dataTranslation[0].speed[valueLang];
    humidity.textContent = dataTranslation[0].main[valueLang] + ` ${data.main.humidity}%`;
}

function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
}

city.addEventListener('keypress', setCity);
