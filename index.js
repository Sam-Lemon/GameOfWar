class Card {
    constructor (suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

};

class Deck {                //THE CODE WITHIN THIS CLASS WORKS, BUT IM NOT SURE ABOUT ONCE ITS IN THE CLASS
    constructor (card) {
        this.card = card
    }

    createShuffledDeck() {
        //Fisher-Yates shuffle 
        const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        let shuffledDeck = [];      //this is the array the created and shuffled deck will go into

        for (let suit in suits) {
            for (let rank in ranks) {
                shuffledDeck.push(ranks[rank] + ' of ' + suits[suit])
            }
        }
        //Takes a rank from the ranks array and a suit from the suits array and concatenates them. This creates the deck.

        for (let i = shuffledDeck.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
        }

        //i starts at the end of the array and iterates through in descending order. Math.floor rounds down, Math.random returns a random number.
        //And then the   [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]]; bit takes it all and flips it. So there's two
        //moments of shuffling, j being a random number, and then the switching of the order of i and j at the end.
    }


};


class Player {
    constructor () {
        
    }

};

class Game {
    constructor() {

    }

}

/*******************************************************************************************************/



/********************************************************************** */
//The face cards create a little bit of a problem as they don't have numbers per say, 
//so I used a switch to take their numerical value and return the face value.
// switch() {
//     case 11:
//         return 'J'; //return Jack
//     case 12:
//         return 'Q'; //return Queen
//     case 13:
//         return 'K'; //return King
//     case 1:
//         return 'A'; //return Ace, with a value of 1 (ace low)
//     default:
//         return 'Oops try again.'
// }

// createGameDeck() {

//     this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
//     this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//     this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

//     for(let s = 0; s < suits.length; s++) {     //iterating through the suits array
//         for(let r = 0; r < ranks.length; r++) {     //iterating through the ranks array
//             cards.push(new Card(suits[s], ranks[r], values[v]));    //creates a new card and assigns it a rank and suit
//         }
//     }
// }


