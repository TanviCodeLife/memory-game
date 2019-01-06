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

//function flipcard() {
  //add class to display value
//}


// function checkMatch() {
//   if (game.firstFlipValue === game.secondFlipValue) {
//     matched();
//   }
// }

// function matched() {
  //use $("div[name=" + game.firstFlipValue + "]") to access the element
  //disable click events for matched cards
//}

//function unmatched() {
  //disable clicks more clicks until unmatch cards flipped back(hidden)
  //add class to hide value for firstFlipValue and secondFlipValue  
//}

//function reset() {
  //reset firstFlipValue and secondFlipValue
  //reset game.clicks
}


function attachContactListeners() {
  $(".memory-game").on("click", "div", function () {
    //console.log("The value of this <div> is " + $(this).data("value") + ".");
    flipcard();
  });
}

$(document).ready(function() {
  shuffle();
  attachContactListeners(); 
  if(game.clicks == 0) {
    game.firstFlipValue = $(this).data("value");
    game.clicks++;
  } else if(game.clicks == 1) {
    game.secondFlipValue = $(this).data("value");
    //check match
  }
  //add button for reset
  //reset game using shuffle(); and reset();
});
