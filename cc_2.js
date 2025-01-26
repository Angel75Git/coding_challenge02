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