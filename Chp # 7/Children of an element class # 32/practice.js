// 1. Practice Goal

// DOM mein child, descendant, childNodes, firstChild, lastChild, hasChildNodes(), children aur Array.from() ko practically check karna.

// Important: output ko observe karke concept samajhna, sirf syntax yaad nahi karna.

// 2. childNodes — Practice Observation

// document.body.childNodes ne NodeList return ki.

// Ismein direct child nodes aaye: element nodes, whitespace/text nodes aur Live Server ka comment/script.

// Whitespace/newlines bhi text nodes ban sakte hain.

// 3. firstChild / lastChild

// firstChild first direct child NODE deta hai; zaroori nahi ke element ho.

// Agar HTML mein starting whitespace ho to firstChild #text ho sakta hai.

// lastChild bhi last direct child NODE deta hai; closing body se pehle whitespace ho to #text aa sakta hai.

// 4. hasChildNodes()

// hasChildNodes() direct child nodes check karta hai.

// Agar parent ke paas kam az kam ek direct child node ho to true.

// Ye nested descendants ko separately check nahi karta.

// 5. child vs descendant

// Child = direct connection.

// Descendant = direct child + uske andar nested children.

// Example: body → div → ul → li mein ul, div ka child hai; li, body ka descendant hai.

// 6. Array.from()

// childNodes normal Array nahi; ye NodeList hai.

// Array.from(document.body.childNodes) se NodeList ko actual Array mein convert kiya ja sakta hai.

// Practice mein converted array ka length check kiya gaya.

// 7. children vs childNodes — Important Final Concept

// children = sirf direct CHILD ELEMENTS.

// childNodes = saare direct CHILD NODES.

// Node mein element, text ya comment ho sakta hai.

// children mein #text aur comments nahi aate.

// Descendant element bhi children mein nahi aata jab tak woh direct child na ho.

// 8. Example

// <body> → <div> → <p>

// body.children → div

// body.childNodes → div + whitespace/text nodes (aur agar hon to comments etc.)

// body.children mein p nahi aayega, kyunki p body ka direct child nahi hai.

// div.children → p

// div.childNodes → text nodes + p (structure/whitespace par depend karta hai).

// 9. Golden Rules

// childNodes = all direct nodes

// children = direct element children only

// firstChild = first direct node

// lastChild = last direct node

// hasChildNodes() = direct child node present?

// Child = direct; Descendant = direct + nested

// 10. Practice Result

// Class 32 practical practice score: 9.5/10

// Main confusion children vs descendants tha; examples aur console output se clear ho gaya.

// Problem-solving point: actual browser output observe karke rule derive kiya gaya.