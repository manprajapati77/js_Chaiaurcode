const promiseOne = new Promise(function(resolve, reject){
    //ek call back function leta he
    
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        //resolve() ise use karne per ab ye .then se connect ho gya ab ye .then ki value ko bhi print karega
        }, 1000)
})

promiseOne.then(function (){
    console.log("promise consumed");
})
//.then() ka connection direct resolve ke sath he
//iske ander ka function automaticly ek argument recieve karta he jiska kaam he jo bhi promise ke function ke ander kaam hua he vo value return hoti he yaha per
//ye tarika he variable me promise hold karke resolve karne ka


//bina variable me hold karke promise resolve

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async tast 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolve");
})


//resolve() se then me data pass karwana

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(
        function(){
            resolve({username: "man", id: "man@com"})
        }, 1000
    )
})

promiseThree.then(function(user){
    console.log(user)
})



//resolve and reject

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; //
        // let error = true; // reject with error
        if(!error){
            resolve({username: "man", password: "123"})
        }
        else{
            reject("ERROR: something went wrong")
        }
    }, 1000)
} )


//then for resolve and catch for error documantation me thik se dekh lena mene thik se dekha nahi he
promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then(()=>{
    console.log(username)
}).catch(function(error){
console.log(error);
}).finally(()=> console.log("the promise is resolved or rejected"))
//finally() ek default ki tarah hota he jo resolve ya reject dono ke time per hota he 


//Fifth type

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; //
        // let error = true; // reject with error
        if(!error){
            resolve({username: "js", password: "123"})
        }
        else{
            reject("ERROR: javascript went wrong")
        }
    }, 1000)
})

    async function consumePromiseFive(){
        try {
            const response = await promiseFive
            
        } catch (error) {
                console.log(error);
        }
        //direct bhi kar sakte he lekin bina try catch ke async await me error handle nahi hota he niche mene paste aur comment kiya he ki try or catch ke bina kese kar sakte he
    }
    consumePromiseFive()

    // async function consumePromiseFive(){
    //     try {
    //         const response = await promiseFive

    //     //ye bhi thik he lekin isse error handle nahi hota he error handle ke liye try catch use karna padta he ya fir async await ki jagah .then .catch use karna padta he dono tareeke thik he async await bhi or then catch bhi
    // }
    // consumePromiseFive()



    //get data from API ache se dekh lena merko lagta he yahi hoga thik se nahi pata he
    //iske ander direct data api se le rahe he promise se nahi le rahe he
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://fakestoreapi.com/products?limit=5') //api url aayega
//         const data = await response.json()
//         console.log(data);
//         //json me convert hone ka bhi wait karna padega
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()



//direct data ko fetch karke uthana then catch ki help se

fetch('https://fakestoreapi.com/products?limit=5')
.then((response) =>{
    return response.json()
})
.then ((data) => {
    console.log(data);
})
.catch((error) => console.log(error))