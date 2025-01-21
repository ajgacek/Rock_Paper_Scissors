let ComputerChoice;
getComputerChoice();

function getComputerChoice() {
    random_number = Math.floor(Math.random() * 3);

    if(random_number == 0) {
        ComputerChoice = "rock";
        return ComputerChoice;
    }

    else if(random_number == 1) {
        ComputerChoice =  "paper";
        return ComputerChoice;
    }

    else {
        ComputerChoice = "scissors";
        return ComputerChoice;
    }
}

console.log(ComputerChoice);

let HumanChoice;
getHumanChoice();

function getHumanChoice() {
    HumanChoice = prompt("What's your choice?"); 
}

console.log(HumanChoice); 