export class MemoryGame {
  constructor() {
    this.No_Of_Squares = 10;
    this.randomCards = [];
    this.clicks = 0;
    this.firstCard = "";
    this.secondCard = "";
    this.buildCards();
    this.buildCardGrid();
  }

  //build random cards in a grid and push them into a random Cards array
  buildCardGrid() {
    for(let i = 0; i <= this.No_Of_Squares; i++){
      let randomNumber = Math.floor(Math.random() * this.No_Of_Squares);
      let card = new Card(randomNumber);
      this.randomCards.push(card);
      $("#board").append("<div class='grid'></div>");
    }
  }
}
    
export class Card{
  constructor(CardId) {
    this.id = CardId;
  }
}
