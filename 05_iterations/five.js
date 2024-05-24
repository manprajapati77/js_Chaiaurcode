// const item = ["javascript", "java", "python", "cpp"]

// const loop = item.forEach( (code)=>{
//     //console.log(code)
//     return code //forEach value ko return nahi karta he
// } )
// console.log(loop)

//Filter 
//Filter me value return hoti he 
//Filter callback function leta he

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/*
//const newnum = mynum.filter( (num) => num < 5 ) //ek line ke code me arrow function me return nahi krna padta
const newnum = mynum.filter( (num) => {
    return num < 5
    //jaha per arrow function me scope aa jata he waha value return karna padta he nahi to return nahi hota
}
 )
 console.log(newnum)
 */

//use forEach as filter (complex hota he isliye filter use karte he)

// const store = []
// mynum.forEach( (num)=>{
//     if(num < 5){
//         store.push(num)
//     }
// } )
// console.log(store)


//Access object by value from Array with the help of filter method

const item = [
    {
        book: "Math", public: 1914, state: "bp"
    },
    {
        book: "physics", public: 1980, state: "mp"
    },
    {
        book: "Math", public: 2020, state: "bc"
    },
    {
        book: "chemistry", public: 2019, state: "mp"
    },
    {
        book: "physics", public: 2000, state: "mp"
    },
    {
        book: "chemistry", public: 1900, state: "bc"
    }
]
// let man = item.filter( (bk) => {
//     return bk.book == "Math"
// } )
let man = item.filter( (bk) => {
    return bk.book == "physics" && bk.public <= 2000
} )


console.log(man) 