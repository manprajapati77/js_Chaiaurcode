
if (true){
    // var a = 30 // globall scope
    let b = 20
    const c = 10
}


// console.log(a)
// console.log(b)
// console.log(c)

//nesting meaning - Kisi ke ander ke ander

//nested scope
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        //console.log(username)
    }
    two()
    // console.log(website)
}
one()

// child apne parent se value le sakta he parent apne child se value nahi le sakta

if (true){
    const username = "hitesh"
    if(true){
        const lastname = " praja"
        console.log(username + lastname)
    }
// console.log(lastname)
}

// console.log(username)


//Hoisting

console.log(addone(5)) //this can be write before function this will not throw an error
function addone(num){
    return num + 1
}


//this is the another way to write function in there we hold function in a variable
//in this case we will can't exicution before variable


//console.log(addtwo(5)) // in this case we get an error because in this type of code we will not exicute code before the main variable who hold a function
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5))