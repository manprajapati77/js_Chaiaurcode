// ES6
//make methods with class
class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    touppercase(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai", "chai@man", "123")
console.log(chai.encryptPassword());
console.log(chai.touppercase());

//agar class ka use nahi karte to aise karna padta
//behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `{this.password}abc`
}

const tea = new user("tea", "tea@man", "123")
console.log(tea.encryptPassword());
console.log(tea.touppercase());