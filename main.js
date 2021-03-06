/* Rock Paper Scissors v 2 - as a DOM event:
1. Copy the original code into a new file
2. Remove the logic (for now) to play to 5 wins
3. Create 3 buttons, one for each selection. Add an event listener to the buttons
    that calls the playRound function with the correct playerSelection each time a 
    button is clicked
4. Add a div for displaying results and change the console.logs into DOM methods
5. Display the running score, and announce a winner of the game once one player
    reaches 5
6. You'll likely have to refactor original code - that's OK!
*/


// Set init scores/selections
let playerScore = 0;
let computerScore = 0;
let computerSelection = 0;
let playerSelection = "";


// Create reset button at game end
const reset = document.createElement('button');
const resetText = document.createTextNode("RESET!");
reset.classList.add('game-btn');
reset.appendChild(resetText);
reset.addEventListener("click", () => {
  refreshPage();
});

// Scoreboard and round announce
const scores = document.querySelector('#scores');
const scoreboard = document.createElement('div');
scoreboard.classList.add('scores');

const round = document.querySelector('#round');
const roundplay = document.createElement('div');
roundplay.classList.add('round');

// have computer randomly choose
function computerPlay() {
    // randomly pull number from 0-2:
    computerSelectionRandom = Math.floor(Math.random() * 3);
    // assign string to random number
    if (computerSelectionRandom === 0) {
        computerSelection = "Rock";
    } else if (computerSelectionRandom === 1) {
        computerSelection = "Paper";
    } else if (computerSelectionRandom === 2) {
        computerSelection = "Scissors";
    }
}

// set playerselection, execute game, check for winner
function setPlayerSelection(choice) {
  playerSelection = choice;
 
  computerPlay();
  playRound();
    

    if (playerScore === 5) {
      // remove scores/roundplay/buttons
      container.removeChild(round);
      container.removeChild(scores);
      container.removeChild(game);
      
      // announce winner
      result.textContent = "You win! Score: " + playerScore + " to " + computerScore;

      // create button to reset game
      container.appendChild(reset);
      

      container.appendChild(result);

    } else if (computerScore === 5) {
      container.removeChild(round);
      container.removeChild(scores);
      container.removeChild(game);
      
      // announce loser
      result.textContent = "You lose! Score: " + playerScore + " to " + computerScore;
      
      container.appendChild(reset);
 
      container.appendChild(result);

    } else {
      console.log("The score is: " + playerScore + " for you, and " + computerScore + " for the computer.");      
    } 
}

function playRound() {
    // compare playerSelection to computerSelection for winner

    // choose winner
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        // return string declaring winner - "You lose! Paper beats Rock!", etc.
        roundplay.textContent = "You chose Rock and the computer chose Paper - You lose!";
        // add 1 score to the winner - playerScore, computerScore
        computerScore++;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        roundplay.textContent = "You chose Rock and the computer chose Scissors - You win!";
        playerScore++;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        roundplay.textContent = "You chose Paper and the computer chose Scissors - You lose!";
        computerScore++;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        roundplay.textContent = "You chose Paper and the computer chose Rock - You win!";
        playerScore++;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        roundplay.textContent = "You chose Scissors and the computer chose Paper - You win!";
        playerScore++;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        roundplay.textContent = "You chose Scissors and the computer chose Rock - You lose!";
        computerScore++;
    } else {
        // if any tie, no winner  
        roundplay.textContent = "You chose " + playerSelection + " and the computer chose " + computerSelection + " - it\'s a tie!";
    }
    
  // Create an append to div for scores  
  scoreboard.textContent = playerScore + " Vs. " + computerScore;

  // scores.appendChild(scoreboard);
  round.appendChild(scoreboard);

  round.appendChild(roundplay);
}

// Create button to reset the game
function refreshPage() {
        window.location.reload(true);
}