let page = 1;
const messages = [
    'Please think again',
    'Maan bhi jao na ab',
    'Baby maan jao kitna Baoo khaoge',
    'Gaand mara (I still love you, so say yes)'
];

const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');
const heading = document.querySelector('h1');

yesButton.addEventListener('click', () => {
    window.location.href = 'yes.html';
});

noButton.addEventListener('click', () => {
    if (page < messages.length - 1) {
        heading.textContent = messages[page];
        page++;
    } else if (page === messages.length - 1) {
        heading.textContent = messages[page];
        page++;
        noButton.classList.add('moving');
    } else {
        noButton.style.top = `${Math.random() * 80 + 10}%`;
        noButton.style.left = `${Math.random() * 80 + 10}%`;
    }
});
