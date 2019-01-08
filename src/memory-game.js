export function MemoryGame() {
  this.cards = [];
  this.clicks = 0;
  this.firstFlipValue = "";
  this.secondFlipValue = "";
  this.isMatch = false;
  this.noOfMoves = 0;
}

//optional logic for randomisation
// var divs = ["red", "green", "blue", "yellow"];
// randomDivs = [];
// decreasingIndex = divs.length;
// for (var i = 0; i < divs.length; i++) {
//   var randomIndex = Math.floor((Math.random() * decreasingIndex));
//   randomDivs.push(divs[randomIndex]);
//   divs.splice(randomIndex,1);
//   decreasingIndex -= 1;
// }
// return randomDivs;
