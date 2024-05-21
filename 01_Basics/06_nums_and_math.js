const score = 100
//console.log(score)

const balance = new Number(400)
//console.log(balance)
//This will absolutly a number

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const othernum = 123.1589
// console.log(othernum.toPrecision(4)) // first 4 numbers tak aapko value roundof karke de dega


const hundreds = 1000000
// console.log(hundreds.toLocaleString()) //toLocalString() se numbers me dollar ke hisab se coma lag jate he taki hume padne me asani ho
// console.log(hundreds.toLocaleString('en-IN')) //toLocalString('en-IN') is method se numbers me rupee ke hisab se coma lag jate he taki hume padne me asani ho is method ke bare me MDN me pad sakte he

// *************************** Maths ***********************************

/*console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(5.5));
console.log(Math.ceil(5.8));
console.log(Math.floor(5.6)); 
console.log(Math.min(5, 6, 12, 01)); 
console.log(Math.max(5, 6, 12, 01)); */

//console.log(Math.random()) // Give value between 0 and 1 (that can also be 1 and 0)
console.log((Math.random()*10) + 1) 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//In Javascript there is only one type : floating type 
//floating type is when you can write numbers with decimals then we call it floating Type