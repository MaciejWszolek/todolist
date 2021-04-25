class Render{
    constructor() {}
        
    
    renderList() {
      
            Addtask.ul.textContent = "";
            Addtask.toDoList.forEach((toDoElement, key) => {
             toDoElement.dataset.key = key;
             Addtask.ul.appendChild(toDoElement);
            })
           }
    
     
    
}