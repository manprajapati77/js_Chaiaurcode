const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}


function changeColor(){
    document.body.style.backgroundColor = randomColor()
}
let startchange
function startchangingcolor(){
    if(!startchange){
        //!startchange ka mtlb null hi he ise startchange == null bhi likh sakte the
        startchange = setInterval(changeColor, 1000)
    }
}
function stopchangingcolor(){
    clearInterval(startchange)
    startchange = null
    //we put null value taki ye clear interval ke baad variable khali ho jaye jisse memory jyada nahi fill hogi or ye ek better tarika he code likhne ka 
    //sath hi ye karne per hume if condition add karna pada kyuki yadi hum variable ko pura khali kar dete he to value thik se work nahi kar rhi thi !startchange ka mtlb null hi he
}


document.querySelector('#start').addEventListener('click', startchangingcolor)
document.querySelector('#stop').addEventListener('click', stopchangingcolor)


