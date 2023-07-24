const inputName = document.querySelector('.name');

export function setLocalStorage() {
    return localStorage.setItem('name' , inputName.value);
} 
window.addEventListener('beforeunload', setLocalStorage);

export function getLocalStorage() {
    if (localStorage.getItem('name')) {
        inputName.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage);

inputName.addEventListener('click', getLocalStorage);

