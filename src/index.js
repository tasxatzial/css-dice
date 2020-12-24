window.onload = function() {
    const dice = document.querySelector('.dice');
    const diceNumber = document.querySelector('.dice-number');

    dice.appendChild(createDot('dot-middle-center'));
    diceNumber.innerHTML = 1;

    dice.addEventListener('click', function() {
        const randomNumber = 1 + Math.floor(Math.random() * 6);
        const diceFace = createDiceFace(randomNumber);
        dice.innerHTML = '';
        for (let i = 0; i < randomNumber; i++) {
            dice.appendChild(diceFace[i]);
        }
        diceNumber.innerHTML = 'You rolled: ' + randomNumber;
    });
    
}

function createDot(position) {
    const dot = document.createElement('div');
    dot.className = 'dot ' + position;
    return dot;
}

function createDiceFace(number) {
    const dots = [];

    if (number === 1 || number === 3 || number === 5) {
        dots.push(createDot('dot-middle-center'));
    }
    if (number !== 1) {
        dots.push(createDot('dot-top-left'));
        dots.push(createDot('dot-bottom-right'));
    }
    if (number === 4 || number === 5 || number === 6) {
        dots.push(createDot('dot-top-right'));
        dots.push(createDot('dot-bottom-left'));
    }
    if (number === 6) {
        dots.push(createDot('dot-middle-left'));
        dots.push(createDot('dot-middle-right'));
    }

    return dots;
}
