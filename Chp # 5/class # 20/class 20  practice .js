// Part 1 — map()
let array = [2, 4, 6, 8, 10]
let n = array.map((value)=>{
    return value*2
})
console.log(n);

// Part 2 — map()
let a2 = [5, 10, 15, 20]
let b = a2.map((value)=>{
    return value + 5
})
console.log(b);

// Part 3 — filter()
let a3 = [12, 5, 25, 8, 30, 17, 3]
let g = a3.filter((numbers)=>{
    return (numbers > 10)
})
console.log(g);

// Part 4 — filter()
let a4 = [2, 7, 10, 15, 20, 23, 30]
let e = a4.filter((numbers)=>{
    return (numbers % 2 == 0)
})
console.log(e);

// Part 5 — reduce()
let a5 = [10, 20, 30, 40, 50];
let result = a5.reduce((k1,k2)=>{
    return k1+k2
})
console.log(result);
