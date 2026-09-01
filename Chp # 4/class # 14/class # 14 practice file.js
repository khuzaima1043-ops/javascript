// CLASS # 14 PRACTICE FILE 

 let name = "Khuzaima " + " Khan" + " Bamozaii"
 console.log(name.length);
 console.log(name.toUpperCase());
 console.log(name.toLowerCase());
 
 console.log(name.replace("Khuzaima", "Mister") .replace("Khan","Muhammad") .replace("Bamozaii", "Khuzaima"));
  
 console.log(name.slice(4,12));
 console.log(name.slice(3));
 
 console.log(name[0]);
 console.log(name[1]);
 console.log(name[2]);
 console.log(name[3]);
 console.log(name[4]);
 console.log(name[5]);
 console.log(name[6]);
 console.log(name[7]);
 console.log(name[8]);
 console.log(name[9]);
 

 console.log(name.concat(" is the best developer in the world"));
 
 let name1 = "     ALi     "
 console.log(name1);
 console.log(name1.trim());
 
// USING FOR LOOP 
let string= "Khuzaima Khan Bamozaii"
for (let i = 0; i < string.length; i++) {
     console.log(string[i]);
}