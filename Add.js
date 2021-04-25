class Add{
    constructor(){}

    add (){
       Addtask.form.addEventListener("submit", function(e){
           e.preventDefault()
           if( Addtask.input.value==="")return;
           const text =  Addtask.input.value
           console.log( Addtask.input.value)
           Addtask.task = document.createElement("li")
           Addtask.task.className = 'task'
       Addtask.task.innerHTML= text + "<button>Usuń</button>"
       Addtask.ul.appendChild( Addtask.task)
       Addtask.toDoList.push( Addtask.task)
       Addtask.input.value=""
       Addtask.taskNumber.textContent =  Addtask.listItems.length;
       Addtask.taskNumber.textContent =  Addtask.toDoList.length;
       Addtask.remove.remove()
       Addtask.search.showSearch()
       })
    }
   
}