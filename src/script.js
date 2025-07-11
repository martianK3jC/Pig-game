'use strict';
const startGameButton = document.querySelector('.start-game');
const howToPlayButton = document.querySelector('.how-to-play');
const aboutButton = document.querySelector('.about');

const hidden = document.querySelectorAll('.hide');
const closeButtons = document.querySelectorAll('.close');

const overlay = document.querySelector('.overlay');

const startGame = () => {
    window.location.href = '/src/pig-game.html';
}

const close = () => {
    for(let i = 0; i < hidden.length; i++){
        hidden[i].classList.add('hide');
    }
}

const showInfo = () => {
    for(let i = 0; i < hidden.length - 1; i++){
        hidden[i].classList.remove('hide');
    }
}

const showAbout = () => {
    for(let i = 1; i < hidden.length; i++){
        hidden[i].classList.remove('hide');
    }
}

startGameButton.addEventListener('click', startGame);
howToPlayButton.addEventListener('click', showInfo);
aboutButton.addEventListener('click', showAbout);
for(let i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click', close);
}
overlay.addEventListener('click', close);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        closeButton();
    }
});

