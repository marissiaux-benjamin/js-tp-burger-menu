const buttonSelector = document.querySelector('.nav-button');
document.querySelector('nav').style.display = 'none';
buttonSelector.style.display = 'block';

buttonSelector.addEventListener('click', ()=>{
    document.querySelector('nav').style.display = 'inline-block';
    buttonSelector.classList.toggle('is-opened');
});




