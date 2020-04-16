// age in days 

const returnAge = (year) => {
    let currentDate = new Date(Date.now());
    let currentYear = currentDate.getFullYear()
    let ageInDays = (currentYear - year) * 365;
    document.querySelector(".age-result").innerHTML = `<h3>Your age in days is ${ageInDays}</h3>`; 
}

const collectBirthYear = () => {
    let birthYear= prompt("What year were you born?");
    returnAge(birthYear);
}

const startAgeBtn = document.querySelector(".age-btn");
const resetAgeBtn = document.querySelector(".age-reset");
startAgeBtn.addEventListener("click", collectBirthYear);
resetAgeBtn.addEventListener("click", () => {
    document.querySelector(".age-result").innerHTML= "";
})


// dog generator 

const randomNum = (min, max) => {
    return Math.random() * (max - min) + min ;
    
}
let dogNum = Math.floor(randomNum(1, 6));

const generateDog = () => {
    let imgSource = `static/images/dogs/dog-${dogNum}.jpg`;
    let img = document.createElement("img");
    img.src = imgSource;
    document.querySelector(".dog-generator__img-container").appendChild(img);
}

// RPS

const computerSelection = () => {
    const choices = ["rock", "paper", "scissors"];
    const choicesNum = (Math.floor(randomNum(0, 3)));
    return choices[choicesNum];
}

const rpsResultGeneration = (winner) => {
    switch(winner) {
        case "tie":
            return "<h3 class=rps__result-tie>You tied!</h3>"
        case "user":
            return "<h3 class=rps__result-win>You won!</h3>"
        case "computer":
            return "<h3 class=rps__result-lose>You lost!</h3>"
    }
}

const rpsPlay = (choice) => {
    let userChoice = choice.id;
    let computerChoice = computerSelection();
    let winner;

    switch(userChoice) {
        case "rock":
            if (computerChoice == "rock") {
                winner = "tie";
            } else if(computerChoice == "paper") {
                winner = "computer";
            } else if(computerChoice == "scissors") {
                winner = "user";
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                winner = "user";
            } else if(computerChoice == "paper") {
                winner = "tie";
            } else if(computerChoice == "scissors") {
                winner = "computer";
            } else {
                console.log("error with game logic");
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                winner = "computer";
            } else if(computerChoice == "paper") {
                winner = "user";
            } else if(computerChoice == "scissors") {
                winner = "tie";
            } else {
                console.log("error with game logic");
            }
            break; 
    }
    document.querySelector(".rps__choices").innerHTML = `
        <img src="static/images/rps/${userChoice}.png" class="user-choice__img"/>
        ${rpsResultGeneration(winner)} 
        <img src="static/images/rps/${computerChoice}.png" class="computer-choice__img"/>
     `;
}