const calc = document.querySelector('.calc')
const result = document.getElementById('result')




calc.addEventListener('click',function(event){
    if(!event.target.classList.contains('calc_btn')) return

    const value = event.target.innerHTML
    const left = result.innerHTML.slice(0, -1)

    result.innerHTML += value

    switch(value){
        case 'ac':
            result.innerHTML = '';
            break;
        case '':
            result.innerHTML = eval(result.innerHTML).toFixed(1)
            break;  
        case 'c':
            result.innerHTML = left
    }

    if(result.innerHTML.length == '11'){
        result.innerHTML = 'error'    
    }
    setTimeout(function(){
        if(result.innerHTML == 'error'){
            result.innerHTML = ''    
        }
    },3000)

    



    
   
})



