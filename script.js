alert("ROCK_PAPER_SCISSORS");

alert("choose the rock, paper, or scissors");


//humanchoice

function getHumanChoice() {
    let choiceH = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

    if(choiceH === "rock" || choiceH === "paper" || choiceH === "scissors"){
        alert(`You choose ${choiceH}`);
        return choiceH;
    }
    else{
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }   
}

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
        return "It's a tie!";
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        return `You win this round! ${humanChoice} beats ${computerChoice}.`;
    }
    else{
        computerScore++;
        return `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

let result = playRound(humanChoice, computerChoice);
alert(result);
alert(`current Score - You: ${humanScore}, Computer: ${computerScore}`);

//play a game of 5 rounds

function playGame(){

    for(let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        alert(result);
        alert(`current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    if(humanScore > computerScore){
        alert("Congratulations! You win the game!");
    }
    else if(computerScore > humanScore){
        alert("Sorry! You lose the game!");
    }
    else{
        alert("It's a tie game!");
    }
}

playGame();     


