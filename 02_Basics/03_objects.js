//singleton // Object.create

//Object literals
//in this part we learn about Object Literals
//const JsUser = {} // This type of code is Object Literals

let mysym = Symbol("Key1")
const JsUser = {
    name: "Hitesh",
    email: "man@gmail.com",
    "run": "Kyu batau", //in Object behind the scene key is a string format
    [mysym]: "Key1" //This is the only way to write symbol object
}
// console.log(JsUser.name)
// console.log(JsUser["run"])
// console.log(JsUser[mysym])

//to change value of objects

JsUser.email = "changevalue@gmail.com"
console.log(JsUser.email)

//Object.freeze(JsUser) // with the help of this method now we can't change values in object

//To add a new key with value or function

// JsUser.greeting = "hello everyone"
// console.log(JsUser.greeting)


//for refer the same variable those already exist in object

JsUser.greeting2 = function(){
    console.log(`Hello Jsuser ${this.name}`)
}
console.log(JsUser.greeting2())