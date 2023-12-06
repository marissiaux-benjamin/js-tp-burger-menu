document.documentElement.classList.add('js-enabled');

document.querySelector('.nav-button').addEventListener('click', () => {
    if (document.querySelector('main').classList.contains('is-opened')) {
        document.querySelector('main').classList.remove('is-opened');
    } else {
        document.querySelector('main').classList.add('is-opened');
    }
});




