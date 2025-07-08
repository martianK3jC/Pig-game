const startGameButton = document.querySelector('.start-game');
const howToPlayButton = document.querySelector('.how-to-play');
const aboutButton = document.querySelector('.about');


const closeButton = document.querySelector('#close');
const overlay = document.querySelector('.overlay');
const startGame = () => {
    window.location.href = 'pig-game.html';
}

const closeInstructions = () => {
    howToPlayButton.classList.remove('game-info');
    overlay.classList.remove('overlay');
}

const showInfo = () => {
    howToPlayButton.classList.add('game-info');
    overlay.classList.add('overlay');
}

startGameButton.addEventListener('click', startGame);
closeButton.addEventListener('click', closeInstructions);