            // INTRODUCTION TO STRINGS 


// first method to wrie strings 
// 1. Double coutes  (" ")           

let name = "khuzaima"
console.log(name);

// 2nd method to wrie strings 
// 2. Single coutes  //    ('')        
let NAme = 'khuzii'
console.log(NAme);

// first method to wrie strings 
// 3. Double and Single coutes  (" ')           

// let NAME = "Khuzaimas'
// console.log(NAME);          ==> this cannot work 


// TEMPLATE LITERALS 
// USES IN MORDRN JAVASCRIPT 

// for example : 
let boy1 = "khuzaima" 
let boy2 = "Ali"
// HM CHAHY HN KY PRINT HO KUZAIMA IS A FREIND OF ALI 
// ==> TO ISKO TERNARY LITERALS SE IS TRHAH LEKHENGY 

// USNIG A KEYBOARD WORD BACKTRICK . TAB KY NICHY WALA BUTOON  (  `` ~ ~       )

// aik varibale se hm declare krengy 

// let sentence = (`boy1 is a freind of boy 2 `)
// console.log(sentence);

// names boys ke print nii huy usky liye hm use krnegy brackets or dollars ka 
// Syntax h  ${boy1} is a freind of ${Ali}


let sentence = (`${boy1}is a freind of ${boy2}`)
console.log(sentence);

// PRINT DONE HO GYA 



// ESSCAPE SEQUENCE CHARACTERS 

// AGR HM KISI WORD KO IS TRHAHA LIKHNA CHAHATY HN  BANA'NA . TO ISKA SYNTAX YE HOGA 
let fruit = "Bana\'na"
console.log(fruit);

// ===> AGR H,M CHAHTY HN KY JAVASCRIPT MA  TEXT NEW LINE SE SHURU HO TO USKY LIYE HM IS SYNTAX KA USE KRTY HN   \n   means  ky text newline se shuru ho 

let newline=  "khuzaima khan\nbamozaiii "   // abhi ismy bamozaiii new line se shuru ho ga 
console.log(newline);

// AGR HMY TABLE MA YA AESI HI CHIZONM MA SPACE DENA HO TO USKY LIYE HM IS SYNTAX KA ISTEMAL KRTY HN    \t  means  tab   yani space dedo 

let tab = "khuzaima\tkhan\tbamozaii"
  console.log(tab);
  
// agr hm chahty hn kotext ko bilkul start se yani kuch is trha khuzaima khan bamozaii 
//                                                              is a web devloper 
// to iskew liye hm is syntax ka istmal krty hn  \r  means ky text ko bilkul new line ki begning se start kro 

let begining = "khuziam khan bamozaii \ris a web devloper"
console.log(begining);
