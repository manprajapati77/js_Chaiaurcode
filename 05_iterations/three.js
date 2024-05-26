//For of Loop

// for (const iterator of object) {
    
// }

// let collection = [1, 2, 3, 4, 5]
// for (const num of collection) {
//     console.log(num)
//}

// let collection = "Hello World"
// for (const greet of collection) {
//     console.log(greet)
// }

//Map // see in MDN for more imformation

//Map is a kind of object that takes only unique key and value in a given order

const map = new Map()

map.set('IN', "india")
map.set('USA', "United Kindom")

// console.log(map)

//Perform a for of loop on map

// for (const contry of map){
//     console.log(contry)
// }

//if we want to print key and value saprately than we can write for of loop like that
// for (const [key, value] of map){
//     console.log(key, "and ", value)
// }

let obj = {
    name: "man",
    sur: "praja"
}

// for (const ab of obj) {
//     console.log(ab) // Objcet is nor iterable with for of loop
// }

//For in loop
//For in loop specially use for Object

const lang = {
    js: "javascript",
    cpp: "C++",
    java: "Java"
}


// for (const key in lang) {
//    // console.log(key) //this will print only key of object
// }

// for (const key in lang) {
//     console.log(`the key is ${key} and value is ${lang[key]}`) //this will print value of object
// }

//Use for in loop for Array
// const arr = ["man", "praja", "Parso"]
// for (const key in arr) {
//     console.log(`the key is ${key} and value is ${arr[key]}`)
// }