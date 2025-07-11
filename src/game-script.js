'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');//Alt way of querySelector but for id
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const currentScoresElements = [current0El, current1El];
const playerActive = [player0El, player1El];
//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let activePlayer = 0;
let scores =[0,0];
let currentScore = 0;
let playingGame = true;

const switchPlayer = () => { 
    currentScore = 0;
    currentScoresElements[activePlayer].textContent = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
}

const initGame = () => {
    activePlayer = 0;
    scores = [0,0];
    currentScore = 0;
    playingGame = true;

    score0El.textContent = 0;
    score1El.textContent = 0;

    diceEl.classList.add('hidden');

    player0El.classList.remove("player--winner")
    player1El.classList.remove("player--winner")
    player0El.classList.add("player--active")
    player1El.classList.remove("player--active")

    document.getElementById(`name--0`).textContent = 'Player 1';
    document.getElementById(`name--1`).textContent = 'Player 2';
}

btnNew.addEventListener("click", initGame)

//Display dice and score
btnRoll.addEventListener('click', function(){
    if(playingGame === true){
        let dice = Math.trunc(Math.random() * 6 + 1);
        diceEl.classList.remove('hidden');
        diceEl.src = `/assets/DIE${dice}.png`;
    
        if(dice !== 1){
            //Add dice to current  score
            currentScore += dice;
            currentScoresElements[activePlayer].textContent = currentScore;
        }else{
            switchPlayer();
        }
    }
    
})

btnHold.addEventListener("click", function(){
    if(playingGame === true){
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 50){
            playingGame = false;
            diceEl.classList.add("hidden");
            playerActive[activePlayer].classList.remove("player--active");
            document.getElementById(`name--${activePlayer}`).textContent = `👑Player ${activePlayer + 1}`;
            playerActive[activePlayer].classList.add("player--winner");
        }else{
            switchPlayer();
        }
    }    
})


initGame();
