// function SayMyName(){
//     console.log("M")
//     console.log("A")
//     console.log("N")
// }

//SayMyName()

// function addTwoNum(num1, num2) {
//     console.log(num1 + num2)
// }
//addTwoNum(1, 2) //1 and 2 are arguments, function ko jab call karate he to jab uske undar jo value pass karte he use kahte he use kahte he arguments
//or function addTwoNum (num1, num2) isme paranthesis ke ander jo value he use kahte he perameters


function addTwoNum(num1, num2) {
    // let add = num1 + num2
    //    return add
    return num1 + num2
}
const add = (addTwoNum(1, 3))
// console.log("result :", add)





function logInUser(username = "sam"/*if there are no value pass it will be not undefiend it will be sam */){
    return `${username} is just logged in`
}

//logInUser("@man") //not print the value kyuki return value ko print karwana padta he variable me store karke ya fir console log karke
//console.log(logInUser("man")) //agar ham isme koi argument pass nahi karate he to undefiend aata he

//when we don't know how many value passing throgh parameters we are going to use spread or rest operator (both are same on conditions)

function addCardPrice (val1, val2, ...num1){
    return num1
}
// console.log(addCardPrice(10, 20, 30, 40))

//how to pass object in function

const user = {
    username: "man",
    price: 99
}

function handObject(anyobject){
    console.log(`username is : ${anyobject.username} and price is ${anyobject.price}` )
}
//handObject(user)

//there is a another option to pass object into function
handObject({
    username: "mann",
    price: 200
})