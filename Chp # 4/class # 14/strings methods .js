// STRINGS METHODS 

let name = "khuzii"
console.log(name.length);  
// ye show kr rha ha ky ismy kitny numbers hn yani digits 

console.log(name.replace("khuzii" , "Khuzaima")); 
// strig ky andr jo name ha usko replace kr rha ha yani khuzii se khuzaima replace kr rha ha

console.log(name.toLowerCase());   
 // lowercase text ko sary choty lafzon ma convert kr rha ha 
console.log(name.toUpperCase());   
// Uppercase text ko sary bary lafzon ma convert kr rha ha 

let name2 = "Khuzaima"
console.log(name2.slice(0,4));  
// ye text ki lenght ma jo  umber h unko print krega Ex: khuziama ma 8 alphabets hn to agr ma slice  ky agy likhta huu ky (0,4) to wo 0 s ele kr 4 tk alhpabets print krega yani khuz print krega 
console.log(name2.slice(2));
// sirf 2 likhny sy ye dusre aplhabet kyagy se shuru krega yani "Kh" ko chor kr us sy agy jitny bhi alhpabets h unko print krega 


let name3 = "ALI"
let name4 = "Khan"
console.log(name3.concat(" is a friend of " ,name4));
// ye method use hota ha sentence ko banany ke liye jese upr log ma likha ha  nam3 ka mtlb ha ali and .concat ka mtlb ha ky ali ko is jumly ky sath jor kr name4 yani khan se mila do . ye sentence bananay ke liuye istewmal hota ha 

let name5 = "    khuzaimakhan     "
console.log(name5);
// agr string ma gap le kr likha ha koi bhi name ya kuch bhi to ham is gapko khtmkrn ke liyr likhty hn trim . trim ka asalmaqsad left or right ka space khtm krna hota ha nichy ex ma dekh skty hn 

let name6 = "    khuzaimakhan     "
console.log(name6.trim());
// trim krny se left right ka space khtm ho gya 

// boht sary strings ko aik sath bhi print kr skty hn 
let name7 = "khuziama" 
console.log(name7);
console.log(name7[1]);
console.log(name7[2]);
console.log(name7[3]);
console.log(name7[4]);

// IMPORTANT MESSAGE : 
// string method ko istemal krky hm orinal name string ka name kabhi bhi change nii kr skty yani agr ket = khuziama kikha ha to hm kisi bhi method se hm khuziama ki jga kuch or name nii likhj skty ex;
//         ag hm likhy let name = khuziama  to lhuziam ko replace kr skty hn console log ke zariye likn changeni kr skty yani agr hm lgo ke ilawa ye likh de ky name ="khuziama" ,"KHan" to ye nii mana jayega 


// IPMPORTANT QUIZ: Use a for loop to print a string 

let string = "javascript"
for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
}

