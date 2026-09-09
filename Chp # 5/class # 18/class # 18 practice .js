// PRACTICE TASK CLASS 18 

// Part 1 — delete
let array = [10,20,30,40,50,]
delete array [2] 
console.log(array);
console.log(array.length);

// Part 2 — concat()
let a1 = [1,2,3,]
let a2 = [4,5,6]
let newArray =a1.concat(a2) 
console.log(newArray);

// Part 3 — sort()
let s = [45, 12, 89, 3, 27, 6]
let compare = (a,b)=>{
    return (a-b)
}
s= s.sort(compare)
console.log(s);

// Part 4 — splice()
let sp = [1, 2, 3, 4, 5, 6]
sp.splice(1,2,100,200)
console.log(sp);
// let deletedvalues =sp.splice(1,2,100,200);
// console.log(deletedvalues);

// Part 5 — slice() + reverse()
let sr = [1, 2, 3, 4, 5, 6];
let newvar = sr.slice(2)
newvar.reverse();
console.log(newvar);



