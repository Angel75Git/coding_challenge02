let products = ["Plant","Laptop","Backpack","Shampoo","Tablet"]
products.unshift("Shoes"); 
console.log(products)

products.pop();
console.log(products)

let scores = [84,82,95,90,79]
scores[1] = 85
console.log(scores)
let total = scores.reduce((sum, price) => sum + price, 0);
console.log("Average:", total / scores.length)

let employee = {
    name: "Greg",
    age: 23,
    department: "Marketing",
    isActive: true
}
employee.department = "HR"

employee.position = "Senior Manager"

console.log(employee)

let customers = [
{
    name: "Joseph", 
    email: "Joseph23@gmail.com",
    purchaseAmount: 154.53
},
{
    name: "Ana",
    email: "Ana7@yahoo.com",
    purchaseAmount: 84.99
},
{
    name: "Edward",
    email: "Eddie74@gmail.com",
    purchaseAmount: 789.15
}
]

customers.push({
    name: "Zack",
    email: "Zacko01@gmail.com",
    purchaseAmount: 124.68
})

console.log(customers)

let order = {
    orderID: 461,
    customerName: "Joseph",
    amount: 78.49
}
let calculateTax = ((order.amount * 0.1) + order.amount)
console.log(order, "Total with Taxes: ",calculateTax.toFixed(2))