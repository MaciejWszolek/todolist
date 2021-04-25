class Search {
    constructor() {
    }
showSearch()
{  
    
    //  this.searching = document.querySelector(".search input")    
        Addtask.searching.addEventListener("input", function(e){
            const searchText = e.target.value.toLowerCase()
            let tasks = [...Addtask.toDoList];
            tasks = tasks.filter(li =>li.textContent.toLowerCase().includes(searchText))
            console.log(tasks)
            Addtask.listItems=''
            Addtask.ul.textContent=''
            tasks.forEach(li => Addtask.ul.appendChild(li))
            Addtask.taskNumber.textContent = Addtask.toDoList.length;
            // Addtask.ul.textContent='';
})}
}