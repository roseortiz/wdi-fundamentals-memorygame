const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
   {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
    {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
let cardsInPlay = [];

let checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {                  console.log('You found a match!');
    } else {
        console.log('Sorry, try again.');
    }   
}
let flipCard = function() {
  let cardId = this.getAttribute('data-id');
 this.setAttribute("src", cards[cardId]. cardImage); 
  cardsInPlay.push(cards[cardId].rank);
  if (cardsInPlay.length === 2)
    checkForMatch();
}
{
   console.log("User flipped " + cards[cardId].rank);
 console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
 }
let createBoard = function () {
  for (let i = 0; i < cards.length; i++) {
 let cardElement = document.createElement ('img');
    cardElement.setAttribute('img')
    cardElement.setAttribute('data-id', i);
   cardElement.addEventListener('click', flipCard);
   document.getElementById('game-board').appendChild(cardElement);
}
};

createboard();