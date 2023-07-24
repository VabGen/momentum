const divTime = document.querySelector('.time');

export function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    divTime.textContent = currentTime;
    setTimeout(showTime, 1000);
}