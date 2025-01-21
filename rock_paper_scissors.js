let computerChoice;
getComputerChoice();

function getComputerChoice() {
    random_number = Math.floor(Math.random() * 3);

    if(random_number == 0) {
        computerChoice = "rock";
        return computerChoice;
    }

    else if(random_number == 1) {
        computerChoice =  "paper";
        return computerChoice;
    }

    else {
        computerChoice = "scissors";
        return computerChoice;
    }
}

console.log(computerChoice);

let humanChoice;
getHumanChoice();

function getHumanChoice() {
    let human = prompt("What's your choice?");
    humanChoice = human.toLowerCase(); 
}

console.log(humanChoice); 

let humanScore = 0;
let computerScore = 0; 

playRound(humanChoice, computerChoice);

function playRound (humanChoice, computerChoice) {

    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "rock":
                console.log("Tie! You both picked rock");
                break;
            case "paper":
                console.log("You lose! Paper beats rock!");
                computerScore++; 
                break;
            case "scissors":
                console.log("You win! Rock beats paper");
                humanScore++; 
                break;
        }
    }

    if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("You win! Paper beats rock!");
                humanScore++;
                break;
            case "paper":
                console.log("Tie! You both picked paper!");
                break; 
            case "scissors":
                console.log("You lose! Scissors beats paper");
                computerScore++; 
                break;
        }
    }

    if (humanChoice == "scissors") {
        switch(computerChoice) {
            case "rock":
                console.log("You lose! Rock beats scissors!");
                computerScore++; 
                break;
            case "paper":
                console.log("You win! Scissors beats paper!"); 
                humanScore++; 
                break; 
            case "scissors":
                console.log("Tie! You both picked scissors!");
                break;
        }
    }

}