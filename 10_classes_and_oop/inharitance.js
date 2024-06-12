class user {
    constructor(username) {
        this.username = username
    }

    logme() {
        console.log(`Username is  ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.username = username;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai"," man@man", 123)
chai.addCourse()

const masalachai = new user("masala chai")
masalachai.logme()