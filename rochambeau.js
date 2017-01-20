// This is the varaible that stores the score.
// score[0] = wins, score[1] = ties, score[2] = losses
var score = [0, 0, 0];
// The variables store the current player's and computer's choices
// 0 = Rock, 1 = Paper, 2 = Scissors, 3 = Lizard, 4 = Spock
var playerChoice;
var computerChoice;

function playGame() {
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // We have a tie!
        console.log("tie");
        return 0;
    }
    else if (playerChoice == 0 && computerChoice == 2 || playerChoice == 0 && computerChoice == 3) {
        // Rock beats Scizzors, Lizard - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 1 && computerChoice == 0 || playerChoice == 1 && computerChoice == 4) {
        // Paper beats Rock, Spock - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 2 && computerChoice == 1 || playerChoice == 2 && computerChoice == 3) {
        // Scissors beats paper, Lizard - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 4 && computerChoice == 2 || playerChoice == 4 && computerChoice == 0) {
        // Spock beats Rock, Scissors- a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 3 && computerChoice == 4 || playerChoice == 3 && computerChoice == 1) {
        // Lizard beats paper, Spock - a win!
        console.log("win");
        return 1;
    }
    else {
        // All other combinations are losses
        console.log("lose");
        return -1;
    }
}

function displayScoreBoard(winsId, lossesId, tiesId, MwinsId, MlossesId) {
    document.getElementById(winsId).innerHTML = score[0];
    document.getElementById(lossesId).innerHTML = score[2];
    document.getElementById(tiesId).innerHTML = score[1];
    var match = [];
    if (match.length < 2) {
        if (playGame() == 0) {
            match.push(0);
            console.log("0 is pushed");
        }
        else if (playGame() == 2) {
            match.push(2);
            console.log("2 is pushed");
        }
    }
    else if (match.length == 2) {
        if (match <= 2) {
            document.getElementById(MwinsId).innerHTML = "workingWin";
            console.log("Match Won");
            match = [];
            console.log("Match array reset");
        }
        else if (match > 2) {
            document.getElementById(MlossesId).innerHTML = "workingLoss";
            console.log("Match Lost");
            match = [];
            console.log("Match array reset");
        }
    }
}

function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}

function displayGameResult(resultId) {
    // Define an array of text labels for the choices 0, 1, 2, 3, 4;
    var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    // Now play the game and store the result
    var result = playGame();
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + "<br/>";
    // Add to the base message if it was a win, loss, or tie
    if (result == 1) {
        // Display that it was a win
        updateScore(0);
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
    }
    else if (result == -1) {
        updateScore(2);
        // Display that it was a loss
        document.getElementById(resultId).innerHTML = message + "YOU LOOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
    }
    else {
        // Display that it was a tie
        updateScore(1);
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
    }
}

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
    storeComputerChoice();
}

function storeComputerChoice() {
    var autoWin = Math.floor(Math.random() * 2);
    // Decide if Computer should Auto-Win/Cheat
    if(autoWin > 0){
        var chooseWin = Math.round(Math.random());
        if (playerChoice == 0) {
            if(chooseWin = 1){
                computerChoice = 1;
            }
            else{
                computerChoice = 4;
            }
        }
        else if (playerChoice == 1) {
            if(chooseWin = 1){
                computerChoice = 2;
            }
            else{
                computerChoice = 3;
            }
        }
        else if (playerChoice == 2) {
            if(chooseWin = 1){
                computerChoice = 0;
            }
            else{
                computerChoice = 4;
            }
        }
        else if (playerChoice == 4) {
            if(chooseWin = 1){
                computerChoice = 1;
            }
            else{
                computerChoice = 3;
            }
        }
        else if (playerChoice == 3) {
            if(chooseWin = 1){
                computerChoice = 0;
            }
            else{
                computerChoice = 2;
            }
        }
    }
    else {
        // Generate computer's random choice
        computerChoice = Math.floor(Math.random() * 5);
        console.log("Computer choice = " + computerChoice);
    }
}
