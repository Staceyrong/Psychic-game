// Initialize variables
var computerChoices = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var maxChance = 9;
var guessList = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;

    guessList.push(userGuess);
    if (userGuess === computerGuess) {
        wins++;
        maxChance = 9;
        guessList=[];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    } 
    else {
        maxChance--;
        if (maxChance === 0){
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            maxChance = 9;
            guessList=[];
            losses ++;
        }
    }
    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses Left: " + maxChance + "</p>" +
        "<p>You guess: " +guessList + "</p>";
    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
}

  

