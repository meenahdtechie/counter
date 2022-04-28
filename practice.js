let display = document.querySelector('h1')
let plus = document.querySelector('.plus')
let reset = document.querySelector('.reset')
let minus = document.querySelector('.minus')


let counter=0;
updateDisplay()


plus.addEventListener('click', ()=>{
    counter++;
    updateDisplay()
    
    
})


minus.addEventListener('click', ()=>{
    if(counter>0){
        counter--
    }else if(counter=0){
        counter=0;
    }
    updateDisplay()
    
    
})

reset.addEventListener('click', ()=>{
    counter=0;
    updateDisplay()
    
    
})

function updateDisplay(){
    display.innerHTML=counter;

}
