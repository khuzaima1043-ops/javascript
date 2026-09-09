// ARRAY MAP METHOD 

// map aik naya array banata ha jis pr kuch operations kiye gaye hoty hn 
// map aik naya array banany ke liye istemal hota ha.
// iska kaam hr aik element ko aik aik krky array ma tabdil knna hota ha. 
// iska syntax ye hota ha .
// [value , index , array]
let array = [1,2,3,4,5];
let a = array.map((value ,index)=>{
    console.log(value ,index);
    return value+index 
})
console.log(a); // it makes the new array at that point.
// for each loop ka kaam arrays kuy hr aik element pr operaion krna hota ha ye us  waqt use hota ha .
// isi trha hm value ky sath uska index and array bhi print kr skty hn 

// ARRAY FILTER METHOD 
// filter method ky zariye hm array pr ondition lga dety hn kor krhty hn agr wo  numbers jo  10 se less ha unko prin  kr do .
let Array = [1,2,3,4,5,11,21,13,2,31,4,14,22,33,44,55]
let k = Array.filter((numbers)=>{
        return(numbers<25)
});
console.log(k);
// array ma sirf wo value print hogi jo 25 se choti hn 
// numbers ki jga koi bhi namede skty hn 

// ARRAY REDUCE METHOD 
// iska kaam Array ke multiple elements ko process karke unka ek single final result banana.
// yani variable k0 function de kr usmy condition dena or phr hr number pr us condition se pass krana or final result nikalna
let r = [1,2,3,4,5]                    // 1 +2 =3 
let b = r.reduce((h1,h2)=>{             // 3 +3 =6 
    return h1 + h2                      // 6 +4 =10 
})                                     // 10 + 5 =15  
console.log(b);                       // total output = 15
// h ke ilawa apni mrzii se koii letter ya word bhi likh skty hn 


// map() → values ko change/transform karna
// filter() → condition laga kar values select karna
// reduce() → multiple values ko ek result mein convert karna





