// ARRAY METHODS : 

// 1 : STRING METHOD : 
// Converting a number into a string 
let num = [1,2,3,4,5,6]
let b = num.toString()   //This syntax can change the number into the string
console.log(typeof b);

// 2 : JOin  METHOD 
// this method can join the number ,arrays ,  like if we have 2 number s 1 and 2 then with the help of join methodd we can chenge them int 1 and 2  or 1_2  
console.log(num .join("_"));
console.log(num .join(" and "));

// 3 : POP  METHOD 
// this method can remover thw last number or element of the array . With the helpof this syntax .
num.pop()
console.log(num); // this can pop the last element .so array have 5 value inoutput accordng to let num .
let r = num.pop()
console.log(num,r); // agr hm let  r kry or log ma num,r krdy toto wo num ky sath r ko bi return krega mtlb jo value num ky andr pop krny se out huii whi value idhr dubara return ho jayegi  lkin array ma nii 


// 4 : PUSh  METHOD 
// ye method array ky end ma aik number add kr dega . wo number bayega ky aray ma kitny elements hn yani unki length btayega
let p = num.push(67)
console.log(num,p);

// 5 : SHIFT  METHOD 
let s = num.shift()  // removes the first element from the array and returns it 
console.log(num,s);

// 6 : UNSHIFT  METHOD 
 let unshift = num.unshift(323); // add elment to the beginning of a anew array and reeurns the new array length .
 console.log(num,unshift);
 






