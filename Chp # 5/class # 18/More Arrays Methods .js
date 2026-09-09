// DELETE OPERATOR 

// It is not a method it is operator , it is used for the deletion of arrays elements and numbers. 
// delete operator ma length whi rehti ha yania agr length 9 ha to wo 9 rhy gi lekin agr index ke zariye jo number delete hua wo bhi length ma count hoga console.log ma wo number nzr nii ayega lekin wo count zaur hoga
let a = [1,2,3,4,5,6,7,8,9]
console.log(a.length);
delete a[0];
console.log(a);
console.log(a.length);

// Concat Method 
// iska mainly kaam mukhtalif arrays ko aik sath jorna hota ha 
let b = [1,2,3,4,5,6,7,8,9];
let c = [10 ,12,13,14,15,16,17,18,];
let d = [21,22,23,24,25,26,27,28,29];
let newarray = b.concat(c,d)
console.log(newarray);
// .concat var b ko c or d ky sathh comibne krky aik hi array ma show krwa rha ha 


// Sort Method 
// ye meethod elements ya numbers ko alphabetially arrange kr ky show krwata ha yani agr array ha [123 ,23,45,78.34,]  to is hisab sy ye mathmatical squence ki trha show krega yani pehly number agr 1 ha to usky agy sary 1 se shuru hony waly numbers phrr 2 ha to usky agy say 2 sy shuru hony waly honyy waly numbers ayengy up to so on . 
let s = [344 ,233,6877,122,344,677,889,4,5,6]
//console.log(s.sort); 
// mtlb 1 ky gy : 122,   phr 2  : 233, phr 3 : 344,344 up to so on.. 

// Sort method ma values ko compare bhi kr skty hn yani compare function bna kr values ko assending order ma bhhi arrange kr skty hn 
let compare =(a,b)=>{
    return(b-a)
}
s = s.sort(compare)
console.log(s);

// SPLICE METHOD 
//Splice method arrays ma new items dalny ky kaam ata ha. iska syntax ye hota ha ky [positon of an element , no of elements to remove , no of elements to be added.]
// position = means ka number konsy index se shuru krna ha 
// to remove = means ky kitny elements delete krny hn 
// to be added = means ky jonsy numbers add krny hn 
let num = [12,34,45,56,75,123,127]
// num.splice(1,3, 10002,10003,10004 )
// console.log(num);
let deletedvalues= num.splice(1,3, 10002,10003,10004 )
console.log(deletedvalues);
// index 1 se start hua usky bad 3 number remove huy or phr jo number add krny tho wo likhy 
//  isko variable ma bnd krny ky bad console.log kryngy usi variable ko to jo values delete huii hn wo print ho kr a jayengi 

// SLICE METHOD 
// ye method array ma sirf wo value jo hm print krwana chahy unko print keta ha lekin usky liye aik nya varibale banana prta ha 
let num2 = [1,2,3,4,5,56,6,]
// num2.slice(3)
// console.log(num2);
// abhi ye print nii hua kiunky hmny isko new varibale ma store ni kia 
let newNum = num2.slice(3)
console.log(newNum);

// REVERSE METHOD
// ye method arrays ki value ko ulta k deta ha yani agr values 1 se 10 tk print ho rhi hn to revesrs method lagany sy values 10 se 1 tk print ho jayengi
let r = [1,2,3,4,5,6,7,8,9,10]
r.reverse()
console.log(r);


