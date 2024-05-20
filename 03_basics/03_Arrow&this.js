const user = {
    username: "hitesh",
    price: 999,

    welcomemassage: function(){
        console.log(`${this.username}, welcome to our website`)
    }
}

// user.welcomemassage()
// user.username = "sam"
// user.welcomemassage()

//this : this hum use karte he jab hume kisi ek perticular portion ke ander se kisi value ko access karna hota he tab jese ki isme user naam ka ek object he usi ke ander se hume username ko access karna tha isiye humne this ka use kiya mtlb this mtlb is object ke ander ka username hume de do, agar hum baad me username ki value ko change bhi karte he to hume this keyword live value provide karega

//console.log(this) //print empty object

function chai(){
    let man = "praja"
    //console.log(this) // if we only print this in a function this give us lots of value 
    console.log(this.man) //but when we print this with some variables  it will give us undefiend that means this is only work in object not in function
}
//chai()


//we got same result when we use arrow function instead of noraml function
 const coffee = () => {
     let man = "praja"
   console.log(this.man)
}
//coffee()



//****************** Arrow function

//we can write arrow function in one line without curly bracess
// const sumtwo = (sum1, sum2) => sum1 + sum2
// console.log(sumtwo(1, 2))

//we can write arrow function in one line with parenthises instead of curly brecess in curly bracess we have to return value but in parenthises we don't have to return value
const sumtwo = (sum1, sum2) => (sum1 + sum2)
//console.log(sumtwo(1, 2))

//if we want to use object in single line arrow function we have to wrap the object in parenthises without wrap the object we can;'t access object property

const obj = ()=> ({name: "man"})
console.log(obj())