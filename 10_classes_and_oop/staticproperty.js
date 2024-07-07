class user(){
    constructor(username){
        this.username = username;
    }
    LockMe(){
        //make a method for print username
        console.log(`username ${username}`);
    }
    createid(){
        //maan lo ye value har time update ho rhi he math.random ki tarah
        return  `123`;
    }
}

const man = new man("man")
console.log(man.createid())