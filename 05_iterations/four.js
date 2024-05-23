//forEach Loop // forEach loop is a high Order Array Loop this is use for perform any operation and other things on each array element

//forEach callback function leta he or callback function me function ka naam nahi aata he
// const arr = ["js", "java", "javascript", "sql"]
// arr.forEach( function (array){
//     console.log(array)
// });

//forEach by arrow function
// arr.forEach( (man)=> {
//     console.log(man)
//});

// Use forEach Loop with reference
const code = ["man", "prajapati"]
// function thisIsReference(item){
//     console.log(item)
// }

// code.forEach(thisIsReference)

//we have 3 parameters when we use forEach Loop (If needed) 1. value 2. index 3. array

// code.forEach( (value, index, array) =>{
//     console.log(value, index, array)
// } )


//access Objects in array

const arr = [
    {
        objName : "javascript",
        obj: "js"
    },
    {
        objName : "Java",
        obj: "jv"
    },
    {
        objName : "Cascading style sheet",
        obj: "CSS"
    }
]

arr.forEach( (item) => {
    console.log(item.objName)
    
});