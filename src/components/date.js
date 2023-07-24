const divDate = document.querySelector('.date');

export function showDate(val) {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const currentDate = date.toLocaleDateString(val || 'en', options);
    return divDate.textContent = currentDate;
}