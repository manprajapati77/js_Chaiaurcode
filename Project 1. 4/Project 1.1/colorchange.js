const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach( (buttons)=>{
   
    buttons.addEventListener('click', function(e){
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
    })

})