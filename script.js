const open = document.querySelector('#open');
const popup = document.querySelector('.popup-container');
const close = document.querySelector('#close');

open.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});