// for (let i = 0; i <= 10; i++){
//     const ele = i
//     if (ele == 5){
//         console.log("value is 5")
//     }
//     console.log(ele)
//}

// for (let i = 0; i < 10; i++) {
//     console.log(`outer Loop value ${i}`)
//     for (let j = 0; j < 10; j++) {
//         // console.log(`Inner Loop Value ${j} and outer is ${i}`)
//         console.log(i + "*" + j + "=" + i*j)
//     }
    
// 



// const arr = ["man", "prajapati", "he"]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
// }

// break and continue


//if we use break syntex the code will stop after it example
// for (let i = 1; i < 10; i++) {
//     if(i == 5){
//         console.log(`detected value 5`)
//         break;
//     }
//     console.log(`value is ${i}`)
    
// }


//if we use continue syntex the code will skip that one part and then continue the code
for (let i = 1; i < 10; i++) {
    if(i == 5){
        console.log(`detected value 5`)
        continue;
    }
    console.log(`value is ${i}`)
    
}