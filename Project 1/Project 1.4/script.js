let randomnum = parseInt(Math.random() * 100 + 1)

let guessField = document.querySelector('#guessField')
let submit = document.querySelector('.guessSubmit')
let guesses = document.querySelector('.guesses')
let guessremaining = document.querySelector('.lastResult')
let lowOrHi = document.getElementsByClassName('lowOrHi')[0]

let startgame = true
let numguesses = 1

if(startgame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(guessField.value)
        validateguess(guess)
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess < 1 || guess > 100){
        alert('please enter a valid number')
    }
    else{
        checkguess(guess)
    }
}

function checkguess(guess){
    if(guess === randomnum){
        displaymsg(`You guessed it right`)
        endgame()
   
    }
    else if (guess < randomnum){
        displaymsg(`Number is too low`)
    }
    else if (guess > randomnum){
        displaymsg(`Number is too high`)
       
    } }

    function displayguess(guess){
        guessField.value = ''
        guesses.innerHTML += `${guess}`
        numguesses++
        lastResult.innerHTML = `${11 - numguesses}`
    }
    
    function displaymsg(msg){
        lowOrHi.innerHTML = `${msg}`
    }