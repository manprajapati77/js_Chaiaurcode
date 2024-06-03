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
function startchangingcolor(){
    let startchange = setInterval(changeColor, 500000)
}
function stopchangingcolor(){
    clearInterval(startchange)
}


document.querySelector('#start').addEventListener('click', startchangingcolor)
document.querySelector('#stop').addEventListener('click', stopchangingcolor)


/*
function man(){
    console.log("free")
}
let man = function (){
    console.log("no free")
}
*/
