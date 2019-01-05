import { MemoryGame } from './memory-game';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';import { tmpdir } from 'os';

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



  
  // function flipCard() {
  
  // }

function attachContactListeners() {
  $(".memory-game").on("click", "div", function () {
    console.log("The value of this <div> is " + $(this).data("value") + ".");
  });
  //flipcard1 
  //flipcard2
  //check match
  //match == true; keep cards open
  //match == false; close cards 
}

$(document).ready(function() {
  attachContactListeners(); 
  shuffle();
});
