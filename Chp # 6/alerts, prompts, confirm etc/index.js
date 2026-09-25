
            // ALERTS PROMPTS AND CONFIRM 
// alert bta rha ha 
// propmt puch rha ha 
// confirm confirm kr rh ha ky ye tumhara ha ky nii 
// doucument .write condition dekh kr weboage pr likhrha ha 



alert("Welcome to my JavaScript program!")
let name = prompt("What is your Name?")
let a = confirm ("Is this your name?")
if (a) {
    document.write(name)
}
else{
    document.write( "Name was not confirmed") 
}
let num = prompt("Enter a number")
num = Number.parseInt(num)
console.log(typeof num);
if (num>=50) {
    console.log ("You entered a big number");
}
else {
    console.log ("You entered a small number");
}
