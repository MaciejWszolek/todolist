class Remove{
    constructor() {}
        remove(){
            Addtask.task.addEventListener('click', function(e){
                console.log(e.target.parentNode)
                const index = e.target.parentNode.dataset.key;
               Addtask.toDoList.splice(index,1)
               Addtask.taskNumber.textContent = Addtask.toDoList.length;
               Addtask.render.renderList()
            })
        }
}