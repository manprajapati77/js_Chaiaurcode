//reduce() Method
//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

//reduce() Method call back function leti he jisme initialValue accumlator me sirf ek baar jati he fir accumlator first current value ke sath operation perform karta he fir jo accumlator aur current value se jo value aati he vo accumlator me jati he fir second current value ke sath operation perform karta he yaha process last current value tak continue rahti he
//reduce() Method me initial value sirf ek baar accumlator me jati he

// const mynum = [1, 2, 3, 4]
// const hold = mynum.reduce( function (acc, mycurrentval) {
//     console.log(`my acc is ${acc} and my mycurrentval is ${mycurrentval}`)
//     return acc + mycurrentval
// }, 0 )
// console.log(hold)


//Use reduce() in object in array
const shopingcart = [
    {course: "js",
        price: 1000
    },
    {course: "jaba",
        price: 500
    },
    {course: "ruby",
        price: 1050
    },
    {course: "Cpp",
        price: 2000
    }
]

const totalprice = shopingcart.reduce( (acc, item) => {
    return acc + item.price
}, 0
 )
 console.log(totalprice )