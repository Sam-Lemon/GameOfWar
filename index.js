class Card {
    constructor (suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }

};

class Deck {
    constructor () {
        this.cards = [];
    }

    createGameDeck() {

        this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

        for(let s = 0; s < suits.length; s++) {     //iterating through the suits array
            for(let r = 0; r < ranks.length; r++) {     //iterating through the ranks array
                this.cards.push(new Card(suits[s], ranks[r], values[v]));    //creates a new card and assigns it a rank and suit
            }
        }
    
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

