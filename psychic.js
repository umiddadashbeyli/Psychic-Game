var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

function countLoses() {
	document.querySelector("#lose").innerHTML = "Losses: " + losses;
}

function countWins() {
	document.querySelector("#wins").innerHTML = "Wins: " + wins;
}

countGuessesLeft();
countLoses();
countWins();

function restart() {
	guessesLeft = 9 ;
    countGuessesLeft();
	letterUser = [];
    farUserGuesses();
    wins = 0;
    losses = 0;
    countLoses();
    countWins();
}

document.onkeyup = function(event) {

    if (guessesLeft>0){
        guessesLeft--;
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
        
        letterUser.push(userGuess);
        countGuessesLeft();
        farUserGuesses();

        if (userGuess === computerGuess){
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            // guessesLeft--;
        }
        else{
            losses++;
            document.querySelector("#lose").innerHTML = "Loses: " + losses;
            // guessesLeft--;
        }
    }
    else{
        restart();
    }

}
