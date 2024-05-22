const userId = "man@gmail.comm"

if(userId){
    console.log("Got the email")
}
else {
    console.log("not got the email")
}

//Falsy values

// 0, -0, false Bigin 0n, "", null, undefined, NaN
//except these all values are Truethy

// Some exmple of Truthy Values
//"0", "false", {}, [], function (){}, " "


//Check if a array is empty or not

// const arr = []
// if(arr.length == 0){
//     console.log("array is empty")
// }

//Check if a obj is empty or not
const obj = {}
if(Object.keys(obj).length === 0){

    //Object.keys() this will return a array
    console.log("Object is empty")
}