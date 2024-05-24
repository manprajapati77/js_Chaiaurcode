const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newnum = mynum.map( (num) => {return num + 10} )
//map() method new array return karti he
//console.log(newnum)

//Chain ki tarah use method ko karna
// Hum ek map method ke sath ek aur map method ya filter method ya koi or method ke sath koi method bhi use kar sakte he (if use ho sakti he to)

let store = mynum
            .map( (num) => num * 10 )
            .map( (num) => num + 1 )
            .filter( (num) => num >= 30 )
console.log(store)