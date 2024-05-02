const SUITS = ['♠', '♣', '♥', '♦'];
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export default class Deck {                //anything that deals with a pile of cards will be encapsulated within this class
    constructor(cards = freshDeck()) {
        this.cards = cards
    }

    get numberOfCards() {           //getter to return the number of cards instead of having to write out this.cards.length all the time
        return this.cards.length
    }

    pop() {
        return this.cards.shift()   //removes top element of array and returns it to us
    }

    push(card) {                    //put card at end of array
        this.cards.push(card)
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

    get color() {
        return this.suit === '♠' || this.suit === '♣' ? 'black' : 'red'   //turnery operator - if the card is a spade or a club,
                                                                          //the color of the card is black, otherwise it should be red
    }

    getHTML() {                     //this pulls the code from the div in the index.html file
        const cardDiv = document.createElement("div")
        cardDiv.innerText = this.suit               
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.rank = `${this.rank} ${this.suit}`
        return cardDiv
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {      //flatMap takes the 4 arrays (suits) and flattens them into one array
        return RANKS.map (rank => {
            return new Card(suit, rank)
        })
    })
}