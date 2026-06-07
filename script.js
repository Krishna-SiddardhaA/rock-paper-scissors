
//humanchoice

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

//computerChoice

function getComputerChoice() {
    let computerChoice = Math.random();
    
    if(computerChoice < 0.34){ 
        alert("Computer chooses rock"); 
        return "rock";
    }
    else if(computerChoice < 0.67){
        alert("Computer chooses paper");
        return "paper";
    }
    else{
        alert("Computer chooses scissors");
        return "scissors";
    }
}   


//declare variables

let humanScore = 0;
let computerScore = 0;

//play a single round

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        resultDiv.textContent = "It's a tie!";
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        resultDiv.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    }
    else{
        computerScore++;
        resultDiv.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }
    scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    checkWinner();
}




//play a game of 5 rounds

function checkWinner(){
    if(humanScore === 5){
        resultDiv.textContent = "Congratulations! You won the game!";
        resetGame();    
    }
    else if(computerScore === 5){
        resultDiv.textContent = "Sorry! You lost the game!";
        resetGame();
    }       

}    
function resetGame(){
    humanScore = 0;
    computerScore = 0;
    scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}   


