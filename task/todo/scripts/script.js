

const butt = document.getElementById('push')
butt.addEventListener('click', function(){
    
    if(document.querySelector('#newtask input').value.length == 0){
        alert('please enter a task')

        
    }else{
        
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                    
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash-can"></i>
                </delete>
            </div>
            
            
        `;
        
        
        
        tolocal()
        

   
        
    }
    const current_tasks = document.querySelectorAll('.delete')
    for(let i=0; i<current_tasks.length; i=i+1){
        current_tasks[i].addEventListener('click', function(){
            this.parentNode.remove()
            tolocal()
        })
        if(current_tasks[i] == 0){
            lc.classList.remove('clearactive')
        }
        
    }
    const tasks = document.querySelectorAll('.task')
    for(let i=0; i<tasks.length; i=i+1){
        tasks[i].addEventListener('click', function(){
            this.classList.toggle('comlited')
            tolocal()
        })
        
    }
   
    document.querySelector('#newtask input').value = ''
    

    

   
})

var todos;
function tolocal(){
    todos = document.querySelector('#tasks').innerHTML;
    localStorage.setItem('todos',todos)
}
if(localStorage.getItem('todos')){
    document.querySelector('#tasks').innerHTML = localStorage.getItem('todos')
}