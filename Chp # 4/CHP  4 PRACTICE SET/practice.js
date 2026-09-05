// CHP # 4 practice set 

// PROBLEM # 1 
let name = "Khuz\""
console.log(name.length); //abhi yahan pr length 4 print honi chahiyr lekin 5 print hogi kiuynky / bhi aik eswcape character ha.



// PROBLEM # 2
const sentence = " I am learning the javascript"
const word = "learning"
console.log(
    `the word "${word}"  ${sentence.includes(word)? "is" : "is not"  } in the sentence ` ,
);
const sentenceA = " I am learning the javascript"
const wordA = "lerning"
console.log(
    `the word "${wordA}"  ${sentenceA.includes(wordA)? "is" : "is not"  } in the sentence ` ,
);



// PROBLEM # 3
let name3= "KhuzaiMA KHan BamozaII"
console.log(name3.toLocaleLowerCase());



// PROBLEM # 4
let name4="Please give him RS : 1000"
console.log(name4.slice(15));


// PROBLEM # 5
let name5 = "khuziama"
// but if i want to change my string then this method cannnot work because stirng is iterable
name5[5] ="K" // i want to chsnge the 5th character with capital K but it will not work and it gives not error but still not work.
console.log(name5);
