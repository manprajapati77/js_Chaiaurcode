//const tinderUser = new Object() //singleton Object

const tinderUser = {} //Non Singleton Object

tinderUser.Id = "123abc"
tinderUser.name = "man"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "Kyu@gmail.com",
    fullname : {
        userFullName : {
            firstName: "man",
            lastName:"Prajapati"
        }
    }
}

//console.log(regularUser.fullname.userFullName.lastName)

const obj1 = {1: "a", 2 : "b"}
const obj2 = {3: "a", 4 : "b"}
//const obj3 = {obj1, obj2} //not recommended because in this case objects are store in the form of objects more about this search on chatgpt
//const obj3 = Object.assign({}, obj1, obj2) //This is  good

//Spread method is best for arrays and object to join the 2 array or objects
const obj3 = {...obj1, ...obj2}
//console.log(obj3)



//if we want to access only keys or only values from an object we have to use object.keys or object.values method with the help of these method we get keys or values in the form of array
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))


//if we want to convert object key or value to array we have to use Object.entries() this method give us set of key and value in the form of arrays in array

//console.log(Object.entries(tinderUser))


//Objects ko access karne ke liye bahut bada naam likhna padta he isko short kiya ja sakta destructuring ki help se

//destructuring

const man = {
    course: "jscode",
    price: 99,
    teacherName: "hitesh"
}
//console.log(man.teacherName)
//agar ab isme se mujhe teacher ko acess karna he to mujhe bada sa code likhna padega isko solve karne ke liye me destructuring ki help lunga

//const {teacherName} = man //ise hi destructuring kahte he
//agar mujhe ab ye key bada lag raha he to me uske naam ko chote naam se change kar sakta hu
const {teacherName: Nam} = man

//console.log(Nam)

// {
//     "name": "man",
//     "coursename": "js in hindi",
//     "price": "free"
// }