import { MemoryGame } from './memory-game';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

var game = new MemoryGame();

function shuffle() {
  $(".memory-game").each(function () {
    var divs = $(this).find('div');
    for (var i = 0; i < divs.length; i++) {
      $(divs[i]).remove();
    }
    // eslint-disable-next-line no-redeclare
    var i = divs.length;
    if (i == 0)
      return false;
    while (i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tempi = divs[i];
      var tempj = divs[j];
      divs[i] = tempj;
      divs[j] = tempi;
    }
    // eslint-disable-next-line no-redeclare
    for (var i = 0; i < divs.length; i++) {
      $(divs[i]).appendTo(this);
      game.cards.push($(divs[i]).data("value"));
    }
  });
}

function flipcard(value) {
    if(value.includes("yellow")){
      $("div[data-value=" + value + "]").addClass("yellow");
    } else if (value.includes("red")) {
      $("div[data-value=" + value + "]").addClass("red");
    }
    else if (value.includes("blue")) {
      $("div[data-value=" + value + "]").addClass("blue");
    }
    else if (value.includes("orange")) {
      $("div[data-value=" + value + "]").addClass("orange");
    }
    else if (value.includes("pink")) {
      $("div[data-value=" + value + "]").addClass("pink");
    }
}

function unflipCard(value) {
  var classname = value.match(/^1/);
  $("div[data-value=" + value + "]").removeClass(classname);
}


function checkMatch() {
  if (game.secondFlipValue.includes(game.firstFlipValue) || game.firstFlipValue.includes(game.secondFlipValue)) {
    game.isMatch = true;
    game.noOfMoves++;
  } else {
    game.isMatch = false;
    game.noOfMoves++;
  }
  unflipCard(game.secondFlipValue);
  unflipCard(game.secondFlipValue);
  game.clicks = 0;
  return console.log(game.isMatch)
}


//function reset() {
  //reset firstFlipValue and secondFlipValue
  //reset game.clicks
// }


function attachContactListeners() {
  $(".memory-game").on("click", "div", function () {
    console.log("The value of this <div> is " + $(this).data("value") + ".");
  });
}


$(document).ready(function() {
  shuffle();
  attachContactListeners();

  $(".memory-card").click(function() {
    if(game.clicks === 0) {
      game.firstFlipValue = $(this).data("value");
      flipcard(game.firstFlipValue);
      $("div[data-value=" + game.firstFlipValue + "]").off("click");
      console.log("Game Flip Val " + game.firstFlipValue);
      console.log("Game clicks " + game.clicks);
      game.clicks++;
    } else if(game.clicks === 1) {
      game.secondFlipValue = $(this).data("value");
      flipcard(game.secondFlipValue);
      $("div[data-value=" + game.secondFlipValue + "]").off("click");
      checkMatch();
    }
    //add button for reset
  //reset game using shuffle(); and reset();
  })
});
