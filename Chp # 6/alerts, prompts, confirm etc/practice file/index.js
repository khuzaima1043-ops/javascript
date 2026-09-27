// 🟢 Alert + Prompt + Confirm Task
alert("Welcome to Quiz!")
let name = prompt("Please Enter your Name ")
let user = confirm("Are you ready for the Quiz")
if (user) {
    document.write(`Welcome ${name}, let's start!` )
}
else{
    document.write(`Okay ${name}, maybe later.`)
}
