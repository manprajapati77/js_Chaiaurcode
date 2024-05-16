let mydate = new Date()
//console.log(mydate)

// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toTimeString())

// let createnewdate = new Date(2024, 0, 25)
//console.log(createnewdate.toDateString())
// create own date (custmize information about givan date)


// let createnewdate = new Date(2024, 0, 25, 5, 3)
// console.log(createnewdate.toLocaleString())

/*let createnewdate = new Date("01-15-2023") //we are also can use this like this
console.log(createnewdate.toLocaleString())
*/
//let mytime = Date.now() //give current time in milisecoend
//console.log(Math.round(Date.now()/1000)) // for convert milisecoend to sec we have to divite the numbers by 1000 and for round of we have to use math.round method or math.ceil or math.floor method

let mytype = new Date()
console.log(mytype.getDate)
console.log(mytype.getDay)


mytype.toLocaleString('default', {
    weekday: "long",
    timeZone: "long"
})

//we can add more things in single method

