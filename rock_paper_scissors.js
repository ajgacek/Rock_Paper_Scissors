let computerChoice;

let humanScore = 0; 
let computerScore = 0; 

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


let humanChoice;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener("click", function() {
    getComputerChoice();
    playRound ("rock", computerChoice);
});

paper.addEventListener("click", function(){
    getComputerChoice();
    playRound ("paper", computerChoice);    
});

scissors.addEventListener("click", function() {
    getComputerChoice();
    playRound ("scissors", computerChoice);
});

function playRound (humanChoice, computerChoice) {

    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "rock":
                console.log("Tie! You both picked rock");
                break;
            case "paper":
                console.log("You lose! Paper beats rock!");
                computerScore++;
                document.querySelector("#computerScore").textContent = "Computer Score: " + computerScore;
                break;
            case "scissors":
                console.log("You win! Rock beats paper");
                humanScore++; 
                document.querySelector("#humanScore").textContent = "Human Score: " + humanScore;
                break;
        }
    }

    if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("You win! Paper beats rock!");
                humanScore++;
                document.querySelector("#humanScore").textContent = "Human Score: " + humanScore;
                break;
            case "paper":
                console.log("Tie! You both picked paper!");
                break; 
            case "scissors":
                console.log("You lose! Scissors beats paper");
                computerScore++; 
                document.querySelector("#computerScore").textContent = "Computer Score: " + computerScore;
                break;
        }
    }

    if (humanChoice == "scissors") {
        switch(computerChoice) {
            case "rock":
                console.log("You lose! Rock beats scissors!");
                computerScore++; 
                document.querySelector("#computerScore").textContent = "Computer Score: " + computerScore;
                break;
            case "paper":
                console.log("You win! Scissors beats paper!"); 
                humanScore++; 
                document.querySelector("#humanScore").textContent = "Human Score: " + humanScore;
                break; 
            case "scissors":
                console.log("Tie! You both picked scissors!");
                break;
        }
    }

    if (humanScore == 5) {
        document.querySelector("#humanScore").textContent = "Human Score: " + humanScore;
        alert("You win!");
        setTimeout (() => {
            humanScore = 0;
            document.querySelector("#humanScore").textContent = "Human Score: " + humanScore; 
            computerScore = 0;
            document.querySelector("#computerScore").textContent = "Computer Score: " + computerScore;
        }, 100);
    }

    if (computerScore == 5) {
        document.querySelector("#computerScore").textContent = "Computer Score: " + computerScore;
        alert("Computer wins!");
        setTimeout (() => {
        humanScore = 0; 
        document.querySelector("#humanScore").textContent = "Human Score: " + humanScore;
        computerScore = 0; 
        document.querySelector("#computerScore").textContent = "Computer Score: " + computerScore;
        }, 100); 
    }

}


/*playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0; 

    console.log("Your Score: ", humanScore);
    console.log("Computer's Score: ", computerScore);
    if (humanScore > computerScore) {
        console.log("Congrats, you win!");
    }
    else if (humanScore < computerScore) {
        console.log("Sorry, you lose!");
    }
    else {
        console.log("You both tied!");
    }

}*/