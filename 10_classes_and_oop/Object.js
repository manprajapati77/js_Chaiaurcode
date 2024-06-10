function multiply5(num){
return num*5
}

multiply5.power = 2
// console.log(multiply5(5));
// console.log(multiply5.power);
// console.log(multiply5.prototype);



//method create karna ya fir kahe to method create krke new key ko samjhna

//Create a method

function createUser(username, score){
    this.username = username
    this.score = score
}


//increment method ko prototype me store kar liya
createUser.prototype.increment = function(){
   this.score++
   console.log(this.score);
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}


//isme method ko new se 
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()
chai.increment()