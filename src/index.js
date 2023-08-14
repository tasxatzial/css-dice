'use strict';

const dice = document.querySelector('.dice');
const resultContainer = document.querySelector('.result-container');
dice.addEventListener('click', render);

/* initialize */
dice.innerHTML = createDotHtml('dot-middle-center');
resultContainer.innerHTML = 1;

function render() {
    dice.innerHTML = createDiceHtml();
    resultContainer.innerHTML = dice.children.length;
}

function createDiceHtml() {
    const dice = createRandomDice();
    const diceHtml = dice.map(createDotHtml).join("");

    return diceHtml;
}

function createDotHtml(position) {
    return `<div class="dot ${position}"></div>`;
}

function createRandomDice() {
    const randomNumber = 1 + Math.floor(Math.random() * 6);
    
    return createDice(randomNumber);
}

function createDice(number) {
    const dots = [];

    if (number === 1 || number === 3 || number === 5) {
        dots.push(('dot-middle-center'));
    }
    if (number !== 1) {
        dots.push('dot-top-left');
        dots.push('dot-bottom-right');
    }
    if (number === 4 || number === 5 || number === 6) {
        dots.push('dot-top-right');
        dots.push('dot-bottom-left');
    }
    if (number === 6) {
        dots.push('dot-middle-left');
        dots.push('dot-middle-right');
    }

    return dots;
}
