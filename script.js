let userScore = 0 
let compScore = 0
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const resetBtn = document.querySelector("#reset-btn")
let darkModeBtn = document.querySelector(".ui-switch")

const showWinner = (userWin,userChoice, compChoice) =>{
    if(userWin){
        console.log("You win")
        userScore++;
        userScorePara.innerText =userScore
        msg.innerText = `Your ${userChoice} beats Computer's ${compChoice}. You win🎉`
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText =compScore
        console.log('You lose');
        msg.innerText = `Computer's ${compChoice} beats your ${userChoice} . You lose👎`
        msg.style.backgroundColor = "red"
    }
}

const drawGame = ()=>{
    console.log('Match is drawn');
    msg.innerText = "Match is drawn😐. Play again!😁"
}

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"]
    const randIndex = Math.floor(Math.random()*3) //To get a random number among 0,1 and 2
    return options[randIndex];
}

const playGame = (userChoice) => {
    console.log("User Choice : "+userChoice)
    //Generating Computer choice
    const compChoice = genCompChoice()
    console.log("Computer Choice : "+compChoice)
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true
        if(userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors"? false : true;
        }
        else{
            //rock, paper
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})

resetBtn.addEventListener("click",() => {
    userScore = 0
    compScore = 0
    userScorePara.innerText =userScore
    compScorePara.innerText =compScore
})