var user;
var choose = function(choice) {
  user = choice;
}

var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock"; 
} else if (computerChoice < 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    document.getElementById("result").innerHTML = "DRAW!";
  } 
  else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      document.getElementById("result").innerHTML = "You Win!";
    } else {
      document.getElementById("result").innerHTML = "You Lose!";
    }
  }
  else if (choice1 === "paper") {
    if (choice2 === "scissors") {
      document.getElementById("result").innerHTML = "You Win!";
    } else {
      document.getElementById("result").innerHTML = "You Lose!";
    }
  }
  else if (choice1 === "scissors") {
    if (choice2 === "paper") {
      document.getElementById("result").innerHTML = "You Win!";
    } else {
      document.getElementById("result").innerHTML = "You Lose!";
    }
  }
  else {
    document.getElementById("result").innerHTML = "Not valid!";
  }
}

var t, count;
var minutes = 0;
var seconds = 0;
var start = 0;       // used to control when to read data from form

function countdownTimer() {
  // http://coursesweb.net/javascript/
  // if $startchr is 0, and form fields exists, gets data for minutes and seconds, and sets $startchr to 1
  if(start == 0 && document.getElementById('min') && document.getElementById('sec')) {
    // makes sure the script uses integer numbers
    minutes = parseInt(document.getElementById('min').value) + 0;
    seconds = parseInt(document.getElementById('sec').value) * 1;

    // if data not a number, sets the value to 0
    if(isNaN(minutes)) minutes = 0;
    if(isNaN(seconds)) seconds = 0;

    // rewrite data in form fields to be sure that the fields for minutes and seconds contain integer number
    document.getElementById('min').value = minutes;
    document.getElementById('sec').value = seconds;
    start = 1;
    // disable the button
  }

  // if minutes and seconds are 0, sets $startchr to 0, and return false
  if(minutes==0 && seconds==0) {
    start = 0;
    document.getElementById('btnTimer').removeAttribute('disabled');     // remove "disabled" to enable the button

    /* HERE YOU CAN ADD TO EXECUTE A JavaScript FUNCTION WHEN COUNTDOWN TIMER REACH TO 0 */

    return false;
  }
  else {
    // decrease seconds, and decrease minutes if seconds reach to 0
    seconds--;
    if(seconds < 0) {
      if(minutes > 0) {
        seconds = 59;
        minutes--;
      }
      else {
        seconds = 0;
        minutes = 0;
      }
    }
  }

  // display the time in page, and auto-calls this function after 1 seccond
    document.getElementById('timeMin').innerHTML = minutes;
    document.getElementById('timeSec').innerHTML = seconds;
    t = setTimeout('countdownTimer()', 1000);
}

function cdpause() {
  // pauses countdown
  clearTimeout(t);
};
function cdreset() {
        // resets countdown
  cdpause();
  minutes = 0;
  seconds = 0;
  document.getElementById('timeMin').innerHTML = minutes;
  document.getElementById('timeSec').innerHTML = seconds;
};