import Deck from './deck.js'

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)





















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



