let choice  = prompt("Enter any name form these to play a game. Snake,Water,Gun")   
let num = Math.random()
let computerChoice;
        if (num < 0.33) {
    computerChoice = ("Snake")
}
else if (num < 0.66) {
    computerChoice = ("Water")
}
else{
    computerChoice =("Gun")
}

 if (choice !== "Snake" && choice !=="Water" && choice !=="Gun") {
    alert("Invalid Choice")
    
}
else if (choice === computerChoice) {
    alert("Match Draw")
}
else if (choice === "Snake" && computerChoice === "Water") {
    alert("Snake Wins")
}
else if (choice === "Water" && computerChoice === "Gun") {
    alert("Water Wins")
}
else if (choice === "Gun" && computerChoice === "Snake") {
    alert("Gun Wins")
}
else{
    alert("Computer Wins")
}
alert(`Computer Choice : ${computerChoice}`)

