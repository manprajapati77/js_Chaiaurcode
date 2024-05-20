//IIFE Immediately Invoke Function Expression

//An IIFE in js is a function that is defined and immediately executed
//IIFE is a powerful tool in js for creating private scopes and avoiding global scope pollution.

//()(); //this is the syntax of IIFE

(function chai(){
    //Named IIFE because we give it a name chai
    console.log(`man`)
})(); 
//semicolor ; is must compulsory because agar hum semicolor nahi lagayenge to ye call band nahi hoga aur agar aisa hua to new lines ke code exicude hi nahi honge

((name) => {
    console.log(`my naam is ${name}`)
})("man");

//This type we can pass an argument throgh parenthises