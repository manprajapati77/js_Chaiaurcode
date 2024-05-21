//If
//{} this is called scope

/*
const isUserLoggedIn = true
const temp = 41
if(temp < 50){
console.log("Less than 50")
}
*/
//<, >, <=, >=, ==, ===, !==, !=


// const point = 200
// if (point > 100){
//     let work = "fly"
//     console.log(`Now you can  ${work}`)
// }
// console.log(`Now you can  ${work}`)

//we can write if else condition like this but this is not a good practice
//and semicolon is also necessory

const balance = 1000
// if (balance > 500) console.log("test"), console.log("approve");

//nested statement

// if(balance < 500){
//     console.log("balance is less than 500")
// }
// else if (balance < 750){
//     console.log("balance is less than 750")
// }
// else if (balance < 800){
//     console.log("balance is less than 800")
// }
// else {
//     console.log("balance is less than 1200")
// }

const IsUserLoggedIn = true
const DebitCard = true
const LoggedInFromGoogle = true
const LoggedInfromEmail = false


//with && all condition should be true
if(IsUserLoggedIn && DebitCard){
    console.log("Now you can access to buy it")
}

//with || one of them condition should be true
if(LoggedInFromGoogle || LoggedInfromEmail){
    console.log("Now you can access in Account ")
}
