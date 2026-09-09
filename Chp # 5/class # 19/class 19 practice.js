// Part 1 — for loop
let a1 = [10, 20, 30, 40, 50]
for(i=0; i<a1.length; i++){
    console.log(a1[i]);
}

// Part 2 — forEach()
let a2 = [2, 4, 6, 8]
a2.forEach((element) => {
    console.log(element*element);
});

// Part 3 — Array.from()
let name = "javascript"
let a = Array.from(name)
console.log(a);

// Part 4 — for...of
let array = ["HTML", "CSS", "JavaScript"]
for(let a of array){
    console.log(a);
}

// Part 5 — for...in
let array2 = ["Apple", "Banana", "Milk"];
for (let a2 in array2) {
  console.log(a2);
}