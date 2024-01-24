document.addEventListener('DOMContentLoaded', () => {
    const memoryCards = document.querySelectorAll('.memory-card');
    const cardsArray = Array.from(memoryCards);
    const randomCardsArray = randomCards(cardsArray);

    const memoryContent = document.querySelector('.memory-content .memory-cards');
    memoryContent.innerHTML = '';
    randomCardsArray.forEach(card => {
        memoryContent.appendChild(card);
    });
});

function randomCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let cards = document.querySelectorAll('.memory-card');
let finishDisplay = document.querySelector('.finishgame');
let gameDisplay = document.querySelector('.memory');
let playAgainBtn = document.querySelector('#playAgain');

function checkAll() {
    cards = document.querySelectorAll('.memory-card');
    let i = 0;
    cards.forEach(card => {
        if (card.classList.contains('active')) {
            i += 1
        }
        
        if (i >= 2) {
            cards.forEach(card => {
                if (card.classList.contains('active')) {
                    card.classList.remove('active');
                    card.firstElementChild.classList.remove('back-flip');
                    card.lastElementChild.classList.remove('front-flip');
                }
            });
        }
    });
}

function userSelection(x) {
    if (x.classList.contains('done')) {
        return
    }
    else
    {
        x.classList.add('active');
        x.firstElementChild.classList.add('back-flip');
        x.lastElementChild.classList.add('front-flip');
    }
}

function checkSelection() {
    cards = document.querySelectorAll('.memory-card');
    let selectedArray = [];
    cards.forEach(card => {
        if (card.classList.contains('active')) {
            selectedArray.push(card);
        }
    });

    if (selectedArray.length == 2) {
        if (selectedArray[0].classList.value == selectedArray[1].classList.value) {
            selectedArray[0].classList.remove('active');
            selectedArray[1].classList.remove('active');
            selectedArray[0].classList.add('done');
            selectedArray[1].classList.add('done');
        }
    }
    else {
        return
    }
}

function checkFinish() {
    setTimeout(() => {
        cards = document.querySelectorAll('.memory-card');
        let i = 0;
        cards.forEach(card => {
            if (card.classList.contains('done')) {
                i += 1
            }
    
            if (i == 16) {
                gameDisplay.style.display = 'none'
                finishDisplay.style.display = 'flex'
                i = 0
            }
        });
    }, 4000);
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        checkAll();
        userSelection(card);
        checkSelection();
        checkFinish();
    });
});

// playAgainBtn.addEventListener('click', () => {
//     finishDisplay.style.display = 'none';
//     gameDisplay.style.display = 'flex';

// });