let expenses = [
    {
        name : "Apple" ,
        category : "Fruit" ,
        amount : 5000,
    },
    {
        name : "Mango" ,
        category : "Fruit" ,
        amount : 10000,
    },
    {
        name : "Cycle" ,
        category : "Transport" ,
        amount : 5000,
    },
    {
        name : "Counter" ,
        category : "Bills" ,
        amount : 50000,
    },
    {
        name : "Icecream" ,
        category : "Bills" ,
        amount : 500
    },
]


function calculateTotal(expensesArray) {
    let total = 0;
    for (const a of expensesArray) {
        total = a.amount + total;
    }
      return(total);
}
console.log(calculateTotal(expenses));


function findExpensive(expensesArray, limit) {
    for (const a of expensesArray) {
        if (a.amount >limit) {
            console.log(a.name);
        }
    }
}

let expenseName = prompt("Enter your expense name")
let n1 = expenseName.trim();
let first= n1.slice(0,1).toUpperCase();
let second = n1.slice(1).toLowerCase();
let n2 = first + second
 
let userAmount = prompt("Enter expense amount")
userAmount = Number.parseInt(userAmount)
while (userAmount<=0) {
     userAmount = prompt("Enter expense amount")
     userAmount = Number.parseInt(userAmount)
     if (userAmount>0) {
     }
}

let expense = {
    name : expenseName,
    category : "fruit",
    amount : userAmount,
}
expenses.push(expense);

function getCategoryLabel(category) {
    switch (category) {
        case "Food" :
            return("🍔 Food");

        case "Transport" :
           return("🚗 Transport");

        case "Bills" :
            return("💡 Bills");
            
        default :
        return("📦 Others");
        
    }
}

console.log(getCategoryLabel("Transport"));
console.log(getCategoryLabel("Bills"));
console.log(getCategoryLabel("Shopping"));


let expensiveExpenses = expenses.filter((a)=>{
    return (a.amount  > 500)
})

let expenseNames = expenses.map((a)=>{
    return (a.name)
})
let totalAmount = expenses.reduce((total,a)=>{
    return (a.amount + total)
})

expenses.forEach(a => {
    console.log(a.name);
    console.log(a.amount);
    console.log(a.category); 
});


let categoryTotals = {

};

for (const a of expenses) {
        if (categoryTotals[a.category]) {
        categoryTotals[a.category] = categoryTotals[a.category] + a.amount;
    } 
    else {
        categoryTotals[a.category] = a.amount;
    }
    
}

for (const a in categoryTotals) {
    console.log(a + ":" + categoryTotals[a]);
}


let Budget = 10000;
console.log(totalAmount > Budget ? "Over Budget" : "Within Budget");

let status = totalAmount > Budget ? "Over Budget" : "Within Budget";

console.log(`TotalAmount : ${totalAmount} , Budget : ${Budget} , Status : ${status}`);






