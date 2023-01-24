const cardArray = [
    {
        name: 'cheeseburger', 
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries', 
        img: 'images/fries.png'
    }, 
    {
        name: 'hotdog', 
        img: 'images/hotdog.png'
    }, 
    {
        name: 'ice cream', 
        img: 'images/ice-cream.png'
    }, 
    {
        name: 'milkshake', 
        img: 'images/milkshake.png'
    }, 
    {
        name: 'pizza', 
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger', 
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries', 
        img: 'images/fries.png'
    }, 
    {
        name: 'hotdog', 
        img: 'images/hotdog.png'
    }, 
    {
        name: 'ice cream', 
        img: 'images/ice-cream.png'
    }, 
    {
        name: 'milkshake', 
        img: 'images/milkshake.png'
    }, 
    {
        name: 'pizza', 
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random()); //simply explained: returns a mixed order of "cardArray" object values 

//elements being pulled from HTML document

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

//blank arrays

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) { //regular for loop. only thing to take note of is the "cardArray.length" method, which makes it loop as long as the "cardArray" length is more than i var
        const card = document.createElement('img'); //creates "img" HTML element for each "cardArray" object 
        card.setAttribute('src', 'images/blank.png'); //adds source for each "cardArray" object (default value is/was "blank.png")
        card.setAttribute('data-id', i); //adds "data-id" attribute for each "cardArray" object & appends "i" var loop to it's value
        card.addEventListener('click', flipCard); //when the "cardArray" array elements are clicked, it will start the "flipCard" function
        gridDisplay.appendChild(card); //simply explained: adds "card" var from above. Appends it to "gridDisplay" var  
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img'); //selects all img elements

    //declared const variables

    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];


    console.log(cards);
    console.log("Check for match");

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', './images/blank.png');
        cards[optionTwoId].setAttribute('src', './images/blank.png');
        alert('You have clicked the same image');
    }
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', './images/white.png');
        cards[optionTwoId].setAttribute('src', './images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again!');
    }

    resultDisplay.textContent = cardsWon.length; //will display the "score" in the "score" string of the HTML document
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "Congrats, you have found them all!";
    }
};

function flipCard() {
    const cardId = this.getAttribute('data-id'); //if there is a "data-id" HTML attribute set in any other function (see line 69) it will pull that attribute out of it
    cardsChosen.push(cardArray[cardId].name); //will "push" all the names from "cardArray" variable to into the "cardsChosen" array (see line 61)
    cardsChosenIds.push(cardId); //will "push" "cardId" variable into "cardsChosenIds" variable (see line 62)
    this.setAttribute('src', cardArray[cardId].img); //will set "src" with the image paths in "cardArray" object/array
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500); //calls "checkMatch" function in conditional statement (see line 77) with timeout of 500ms 
    }
}