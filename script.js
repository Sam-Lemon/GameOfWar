import Deck from './deck.js'

const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,


}

const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector('.player-deck')
const text = document.querySelector('.text')

let playerDeck, computerDeck, inRound, stop

document.addEventListener('click', () => {
    if (stop) {
        startGame()
        return
    }
    if (inRound) {
        cleanBeforeRound()
    } else {
        flipCards()
    }
})

startGame()                 //starts game
function startGame() {
    const deck = new Deck()     //creates new deck
    deck.shuffle()              //shuffles that deck

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))        //gives player first 26 cards of the deck, index 0 to midpoint
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))     //gives computer last 26 cards of the deck, midpoint to end
    inRound = false
    stop = false

    cleanBeforeRound()

}

function cleanBeforeRound() {       //cleans up before new round
    inRound = false
    computerCardSlot.innerHTML = ''
    playerCardSlot.innerHTML = ''
    text.innerText = ''

    updateDeckCount()
}

function flipCards() {
    inRound = true

    const playerCard = playerDeck.pop()     //pulls the card out of the player deck and plays it
    const computerCard = computerDeck.pop()

    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(computerCard.getHTML())

    updateDeckCount()

    if (isRoundWinner(playerCard, computerCard)) {      //if Player wins, both player and computer card go into their hand
        text.innerText = 'Win'
        playerDeck.push(playerCard)
        playerDeck.push(computerCard)
    } else if (isRoundWinner(computerCard, playerCard)) {   //if Computer wins, both player and computer card go into their hand
        text.innerText = 'Lose'
        computerDeck.push(playerCard)
        computerDeck.push(computerCard)
    } else {
        text.innerText = 'Tie'      //if tie, each player/computer gets their card back
        playerDeck.push(playerCard)
        computerDeck.push(computerCard)
    }

    if (isGameOver(playerDeck)) {   
        text.innerText = 'You lose'
        stop = true
    } else if (isGameOver(computerDeck)) {
        text.innerText = 'Winner winner chicken dinner!!'
        stop = true

    }
}

function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText = playerDeck.numberOfCards
}

function isRoundWinner(cardOne, cardTwo) {
    return CARD_VALUE_MAP [cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
}

function isGameOver(deck) {
    return deck.numberOfCards === 0
}












/********************************************************************/
// class Card {
//     constructor (suit, rank) {
//         this.suit = suit;
//         this.rank = rank;
//     }

// };

// class Deck {                //THE CODE WITHIN THIS CLASS WORKS, BUT IM NOT SURE ABOUT ONCE ITS IN THE CLASS
//     constructor (card) {
//         this.card = card
//     }

//     createShuffledDeck() {
//         //Fisher-Yates shuffle 

//         let shuffledDeck = [];      //this is the array the created and shuffled deck will go into

//         for (let suit in suits) {
//             for (let rank in ranks) {
//                 shuffledDeck.push(ranks[rank] + ' of ' + suits[suit])
//             }
//         }
//         //Takes a rank from the ranks array and a suit from the suits array and concatenates them. This creates the deck.

//         for (let i = shuffledDeck.length -1; i > 0; i--) {
//             let j = Math.floor(Math.random() * (i + 1));
//             [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
//         }

//         //i starts at the end of the array and iterates through in descending order. Math.floor rounds down, Math.random returns a random number.
//         //And then the   [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]]; bit takes it all and flips it. So there's two
//         //moments of shuffling, j being a random number, and then the switching of the order of i and j at the end.
//     }


// };


// class Player {
//     constructor () {
        
//     }

// };

// class Game {
//     constructor() {

//     }

// }

/*******************************************************************************************************/



