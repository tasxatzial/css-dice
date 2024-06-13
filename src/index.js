'use strict';

const dieButton = document.querySelector('.js-die-button');
const dieResult = document.querySelector('.js-die-result');
dieButton.addEventListener('click', () => render(getRandomNumber()));

/* initial render */
render(1);

function render(value) {
    dieButton.innerHTML = createDieHtml(value);
    if (dieResult.textContent.charAt(dieResult.textContent.length - 1) === '.') {
        dieResult.innerHTML = value;
    } else {
        dieResult.innerHTML = value + '.';
    }
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
