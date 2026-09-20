        // GENERATING NUMBER USINMG MATH 
//Math.Random => math.random number generate krta ha 
//Math.floor => math.floor us number ko deciamal se hta kr aik number bana deata ha yani agr 12.345 ha to math.floor usko sirf 12 bna kr dedega
//*100 => math.random krny se number points ma milta ha jes 0.012 to hm usko multipy krty hn 100 ke sath to wo nmber tabdil ho jata ha  12 ma . 
// +1 =>  +1 ka mtlb number 1 se generate krna shuru kro  
let number = Math.floor(Math.random() * 100)+1
console.log(number);

let chances = 1;

let userNum = prompt("Guess a number")
userNum  = Number.parseInt(userNum )

if (userNum === number) {
    console.log("Correct");
}
else if (userNum > number) {
    console.log("Greater");
}
else if (userNum < number) {
    console.log("Lesser");
}

while (userNum !== number) {
    userNum = prompt("Guess a number")
    userNum  = Number.parseInt(userNum )
    chances++;
    if (userNum === number) {
        console.log("Correct");
    }
    else if (userNum > number) {
        console.log("Greater");
    }
    else if (userNum < number) {
        console.log("Lesser");
    }
}
let score = 100 - chances
console.log(`Actual Number : ${number} , Total score : ${score}`);