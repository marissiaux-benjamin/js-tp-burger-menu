const buttonSelector = document.querySelector('.nav-button');
document.querySelector('nav').style.display = 'none';
buttonSelector.style.display = 'block';

buttonSelector.addEventListener('click', ()=>{
    buttonSelector.classList.toggle('is-opened');
    document.querySelector('nav').style.display = 'inline-block';
});




