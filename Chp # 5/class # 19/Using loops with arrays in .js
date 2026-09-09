// LOOPS WITH ARRAYS IN JAVASCRIPT 

// for loop
// for loop aik aik krky sary arrays ki values print krtaa ha 
let a = [1,2,3,4,5]
for (let i= 0; i< a.length; i++) {
    console.log(a[i]);
}

// for each loop
//forEach() array ke har element ko ek-ek karke access karta hai.
//Har element par same kaam karne ke liye use hota hai.
//Is mein array ke elements ko automatically one by one process kiya jata hai.
//forEach() original array ko normally replace nahi karta; jo kaam callback ke andar karte hain woh perform hota hai.
// forEach() mein ek function banate hain aur woh function array ke har element par ek-ek baar automatically apply/run hota hai.
let a2 = [3,4,5,6]
a2.forEach((element)=>{
     console.log(element+element);    
}) 

// Array.From
// array.from ka kaam yr hota ha ky wo kisi  bhi string se hmy aik array bna kr de deta ha 
// isko new varivale ma store krky hm us string se new array nikal lete ha 
let name = "khuzaima";
let newArray = Array.from(name)
console.log(newArray);

// For off loop 
// for off loop aik short tariqa ha arrays items ko access krny ka bjaye isky ky hm for loop wala bara method use kry
// for...of array ki actual values/elements deta hai.
let array = [12,34,5,6,6,7,88]
for (let a of array) {
    console.log(a);
}

// FOR IN LOOP 
// forin loop hmy object ky andr uski keys btata tha lekin 
// for...in array ke indexes (keys) deta hai, values nahi. 

let array2 = [
    name = "Khuziama",
    city = "dera isamil khan" ,
    language = "urdu" ,
    subject = "English"
]
for (let b in array2) {
    console.log(b);
}