// // PARENT OF AN ELEMENT 
// 1. parentNode
// - Kisi node ka parent node return karta hai.
// - Parent Element, Document, ya doosri node type ho sakta hai.
// - Agar parent nahi hai, to null mil sakta hai.

// Syntax:
// element.parentNode

// 2. parentElement
// - Kisi node ka parent sirf tab return karta hai jab parent ek Element ho.
// - Agar parent Element nahi hai, to null return karta hai.

// Syntax:
// element.parentElement

// 3. parentNode vs parentElement
// - Agar parent ek HTML Element hai, to dono same parent element return karte hain.
// - parentNode kisi bhi type ka parent node return kar sakta hai.
// - parentElement sirf Element return karta hai; warna null.

// 4. Important example

// HTML:
// <div>
//   <p>Hello</p>
// </div>

// Agar p element ko select kiya ho:
// p.parentNode      -> div element
// p.parentElement   -> div element

// 5. Root HTML element
// document.documentElement -> <html> element
// document.documentElement.parentElement -> null

// Yaad rakho:
// - document.head, <html> ka parent nahi hai.
// - <head> aur <body>, dono <html> ke children hain.

// 6. Null check
// Kisi parent par kaam karne se pehle check karna useful hai ke parent null to nahi.
// Warna null par property/method use karne se error aa sakta hai.

// 7. Quick differences
// parentNode      : parent node
// parentElement   : parent element or null

// 8. Test checkpoint
// - Parent of an Element test: 7/8 correct.
// - Revision point: document.documentElement.parentElement is null.