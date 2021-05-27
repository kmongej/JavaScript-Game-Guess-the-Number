let randomNumber = Math.floor(Math.random() * 100) + 1; 
const guesses = document.querySelector('.quesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSumit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess () {
    let userGuess = Number(guessField.value);

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations!  You got it right';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();        
    } else if (guessCount === 10){
        lastResult.textContent = 'Game Over!!';
        setGameOver();        
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Too low!';
        } else {
            lowOrHi.textContent = 'Too hight!';
        }
    }

    guessCount ++;
    guessField.value = '';
    guessField.focus();
}

guessSumit.addEventListener('click', checkGuess);

function setGameOver () {
    guessField.disable = true;
    guessSumit.disable = true;
    resetButton = document.createElement('buttom');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0; i < resetParas.length; i ++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disable = false;
    guessSumit.disable = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;

}
