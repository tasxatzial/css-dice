'use strict';

const formEl = document.querySelector('.js-form');
const formDieCountInputEl = document.querySelector('.js-form-die-count-input');
const diceContainerEl = document.querySelector('.js-dice-container');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const dieCount = Number(formDieCountInputEl.value);
    diceContainerEl.innerHTML = '';
    for (let i = 0; i < dieCount; i++) {
        renderDie(i);
    }
});

function renderDie(index) {
    const randomNumber = getRandomNumber();
    const dieContainer = createDieContainerHtml(index);
    diceContainerEl.insertAdjacentHTML('beforeend', dieContainer);
    const dieEl = diceContainerEl.querySelector(`[aria-labelledby="die-result-${index}"]`);
    const dieResultEl = diceContainerEl.querySelector(`#die-result-${index}`);
    dieEl.classList.add('roll-animation');
    setTimeout(() => {
        dieEl.classList.remove('roll-animation');
    }, 1000);
    setTimeout(() => {
        dieEl.innerHTML = createDieHtml(randomNumber);
        dieResultEl.innerHTML = randomNumber;
    }, 850);
}

function createDieContainerHtml(index) {
    return `
        <div class="die-container" aria-live="polite">
            <div aria-label="die" class="die js-die" aria-labelledby="die-result-${index}"></div>
            <span hidden id="die-result-${index}" class="js-die-result"></span>
        </div>
    `
}

function createDieHtml(value) {
    const dotPositions = createDotPositions(value);
    return dotPositions.map(createDotHtml).join("");
}

function createDotHtml(position) {
    return `<span class="die-dot ${position}"></span>`;
}

function getRandomNumber() {
    return 1 + Math.floor(Math.random() * 6);
}

function createDotPositions(number) {
    const dots = [];

    if (number === 1 || number === 3 || number === 5) {
        dots.push(('center'));
    }
    if (number !== 1) {
        dots.push('top-left');
        dots.push('bottom-right');
    }
    if (number === 4 || number === 5 || number === 6) {
        dots.push('top-right');
        dots.push('bottom-left');
    }
    if (number === 6) {
        dots.push('middle-left');
        dots.push('middle-right');
    }
    return dots;
}
