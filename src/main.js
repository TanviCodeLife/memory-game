import { MemoryGame } from './memory-game';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

var game = new MemoryGame();

function shuffle() {
  $(".memory-game").each(function () {
    var divs = $(this).find('div');
    for (let i = 0; i < divs.length; i++) {
      $(divs[i]).remove();
    }

    var currentIndex = divs.length;
    if (currentIndex == 0)
    return false;
    while (currentIndex--) {
      var randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      var currentIndexVal = divs[currentIndex];
      var randomIndexVal = divs[randomIndex];
      divs[currentIndex] = randomIndexVal;
      divs[randomIndex] = currentIndexVal;
    }

    for (let i = 0; i < divs.length; i++) {
      $(divs[i]).appendTo(this);
    }
  });
}

function flipcard(value) {
 let outputValue = (value.includes("yellow")) ? "yellow" : (value.includes("red")) ? "red" : (value.includes("blue")) ? "blue" : (value.includes("orange")) ? "orange" : (value.includes("pink")) ? "pink" : null ;

 $("div[data-value=" + value + "]").addClass(outputValue);
}

function unflipCard(value) {
  var classname = value.match(/[^1]/gi).join("");
  $("div[data-value=" + value + "]").removeClass(classname);
}


function checkMatch() {
  let game.isMatch = (game.secondFlipValue.includes(game.firstFlipValue) || game.firstFlipValue.includes(game.secondFlipValue));

  switch(game.isMatch) {
    case true:
      game.isMatch = true;
      let div1 = $("div[data-value=" + game.firstFlipValue + "]");
      let div2 = $("div[data-value=" + game.secondFlipValue + "]");
      div1.off("click");
      div2.off("click");
      game.cards.push(div1);
      game.cards.push(div2);
    break;
    case false:
      setTimeout(function(){
        console.log("Hello");
        unflipCard(game.firstFlipValue);
        unflipCard(game.secondFlipValue);
      }, 1000);
    break;
    default:
  }
  game.clicks = 0;
}

function reset() {
  for(var i = 0; i < game.cards.length; i++ ){
    unflipCard($(game.cards[i]).data("value"));
    console.log($(game.cards[i]).data("value"));
  }
  shuffle();
  playGame();
  game.cards = [];
  game.clicks = 0;
  game.firstFlipValue = "";
  game.secondFlipValue = "";
  game.isMatch = false;
  game.noOfMoves = 0;
}


function attachContactListeners() {
  $(".memory-game").on("click", "div", function () {
    //console.log("The value of this <div> is " + $(this).data("value") + ".");
  });
}



function playGame() {
  $(".memory-card").click(function() {
    attachContactListeners();
    if(game.clicks === 0) {
      game.firstFlipValue = $(this).data("value");
      flipcard(game.firstFlipValue);
      game.clicks++;

    } else if(game.clicks === 1) {
      game.secondFlipValue = $(this).data("value");
      flipcard(game.secondFlipValue);
      game.noOfMoves++;
      //remove contact listeners for rest of the cards or lock board
      checkMatch();
      console.log("Moves: " + game.noOfMoves);
      if (game.cards.length === 10) {
        $(".moves").append("<li>" + game.noOfMoves + "</li>");
        setTimeout(function(){
          reset();
        }, 1000);
      }
    }
  })
}

$(document).ready(function() {
  shuffle();
  playGame();
});
