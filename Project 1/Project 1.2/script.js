const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    //If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

    //form Event me submit leta he 
    //form ke ander hi hame DOM se value lena chahiye kyuki form ke bahar lene per value empty aati he

    const height = parseInt(document.querySelector('#Height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    //.value karne se dom se hum value le sakte he, ki usme jo bhi value he vo aa jati he
    const result = document.querySelector('.result')

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
       // const bmiFinalResult = result.innerHTML = `<span> ${bmi} </span>`
        
         if(bmi < 18.6){
            result.innerHTML = `<span> Under weight <br> ${bmi} </span>`
         }
         else if(bmi > 18.6 && bmi < 24.9){
            result.innerHTML = `<span> Normal weight <br> ${bmi} </span>`
         }
         else{
            result.innerHTML = `<span> Over Weight <br> ${bmi} </span>`
         }
    }
})

/*Under weight = Less than 18.6

Normal weight = 18.6 and 24.9

Over Weight = Greater than 24.9*/