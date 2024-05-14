// There are 2 type of data types primitive data type and reference (Non Primitive) data type

//Primitive Data type
//null, number, symbol, string, boolean, bigint, undefined

const num = 123
const str = "man"
const thisisbigint = 15616156n
const thisisboolean = false
const thisisnull = null
let thisisundefined;


const thisissymbol = Symbol('man')
const thisisanothersymbol = Symbol('man')

console.log(thisissymbol === thisisanothersymbol) //these are not same the output is false


// Reference (Non Primitive)
//Array, Objects, function

const heros = ["saktiman", "man", "dhaga"]
let obj = {
    name : "man",
    num : 123
}