const SUITS = ['♠', '♣', '♥', '♦'];
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export default class Deck {                //anything that deals with a pile of cards will be encapsulated within this class
    constructor(cards = freshDeck()) {
        this.cards = cards
    }

    get numberOfCards() {           //getter to return the number of cards instead of having to write out this.cards.length all the time
        return this.cards.length
    }

    shuffle() {
       for (let i = this.numberOfCards -1; i > 0; i--) {      //iterating through the array from back to front
        const newIndex = Math.floor(Math.random() * (i + 1))        //gives a random placement somewhere else within the deck
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards [i]
        this.cards[i] = oldValue        //the last three lines are swapping the cards
        }
    }
}

class Card {
    constructor(suit, rank) {
        this.suit = suit
        this.rank = rank
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {      //flatMap takes the 4 arrays (suits) and flattens them into one array
        return RANKS.map (rank => {
            return new Card(suit, rank)
        })
    })
}