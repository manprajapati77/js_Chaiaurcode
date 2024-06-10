//Object literals

const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,
    getUserDetails: function(){
        // console.log("Got information");
        console.log(`userName: ${this.username}`);
        // console.log(`userName: ${this}`);
    }
}
console.log(user.loginCount);
console.log(user.getUserDetails());
console.log(this); // this will give empty peranthises


//constractur function
//New context banane ke liye use hota hota he jese ki new

// const promisesOne = new Promise()
// const date = new Date()
function User (username, loginCount, isLoggedin){
    this.username = username
    //this wala variable he samne wala value pass kar rhe he
    this.loginCount = loginCount
    this.isLoggedin = isLoggedin
    
    //function bhi add kar sakte he
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this   
    //this return nahi karne per bhi ye hota he mtlb nahi likhe to bhi chalega kyuki vo waha per he 
}

// const userOne = User("hitesh", 12, true)
//const userTwo = User("ChaiAurCode", 11, false)


//userTwo ko print nahi karne per bhi sari value ko isne overwrite kar diya
//ise Overwrite karne se bachane ke liye hume constructor function use karna padega
//constructor function ek new copy de deta he ya kahe to constructon function naya Instance deta he

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
//ab ye dono value ek dusre ko overwright nahi kregi or khud me unique hogi
//jese hi hum new keyword use karenge sabse pahle ek empty object create hota he jise instance bola jata he
//constructor function create hota he new keyword ke sath constructor function sare argument pack karta he aur aapko de deta he
//iske baad jitne bhi argumet he vo this keyword he vo sab new ke ander inject ho jate he
//fourth step me aapko function ke ander mil jate he

//console.log(userOne);
//console.log(userTwo);
console.log(userOne.constructor);



