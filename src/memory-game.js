export class MemoryGame {
  constructor() {
    this.No_Of_Squares = 10;
    this.cards = [];
    this.clicks = 0;
    this.firstCard = "";
    this.secondCard = "";
    this.buildCardGrid();
    this.buildBoard();
  }
    
  buildCardGrid() {
    for(let i = 0; i <= this.No_Of_Squares; i++){
      let card = new Card(i);
      this.cards.push(card); 
    }
  }

}

export class Card{

}
