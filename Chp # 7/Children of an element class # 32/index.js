// Children of an Element
// 1. Child

// Agar koi element kisi doosre element ke andar directly ho, to woh uska child hai.

// <html>
//     <head></head>
//     <body></body>
// </html>

// Yahan:

// <html> → parent
// <head> → direct child
// <body> → direct child
// Rule:

// Child = direct connection

// 2. Descendant

// Kisi element ke andar directly ya indirectly maujood elements ko descendants kehte hain.

// <body>
//     <div>
//         <p>Hello</p>
//     </div>
// </body>

// Yahan:

// <div> → body ka direct child
// <p> → body ka descendant
// <p> ka direct parent → <div>
// Rule:

// Descendant = child + nested children

// 3. Child Nodes

// childNodes kisi element ke saare direct child nodes ki collection return karta hai.

// element.childNodes

// Child nodes mein ho sakte hain:

// Element node
// Text node
// Comment node

// ⚠️ childNodes normal JavaScript Array nahi hai.

// 4. firstChild
// element.firstChild

// Element ka pehla direct child node return karta hai.

// ⚠️ Ye hamesha HTML element nahi hota; text/comment node bhi ho sakta hai.

// 5. lastChild
// element.lastChild

// Element ka aakhri direct child node return karta hai.

// 6. childNodes + Index

// Agar:

// element.childNodes

// mein multiple nodes hain:

// element.childNodes[0]

// → first child node

// element.childNodes[element.childNodes.length - 1]

// → last child node

// Isliye:

// element.childNodes[0] === element.firstChild

// → true

// 7. hasChildNodes()
// element.hasChildNodes()

// Check karta hai ke element ke direct child nodes hain ya nahi.

// Result:

// true

// ya

// false

// ⚠️ Ye descendants ko check nahi karta; direct child nodes ko check karta hai.

// 8. Array.from()

// childNodes normal Array nahi hai.

// Agar actual Array chahiye:

// Array.from(element.childNodes)

// Ye child-node collection ko Array mein convert kar deta hai.

// 🧠 Quick Revision
// Child
// → Direct child

// Descendant
// → Direct + nested children

// childNodes
// → All direct child nodes

// firstChild
// → First direct child node

// lastChild
// → Last direct child node

// hasChildNodes()
// → Direct child nodes hain? true/false

// Array.from()
// → Collection ko Array mein convert karta hai
// ⭐ Golden Rule

// Child = direct, Descendant = direct + nested, Node = element/text/comment mein se koi bhi ho sakta hai.