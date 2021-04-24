

class AddTask {
    constructor(){ 
    this.searching = document.querySelector(".search input")
    this.form = document.querySelector(".form");
    this.input = document.querySelector("input");
    this.ul = document.querySelector("ul");  
    this.toDoList = [];
    this.taskNumber = document.querySelector("h1 span");
    this.listItems = document.getElementsByClassName('task');
    this.task = ''
this.add()
this.search()
}
 add (){
     const that = this;
    that.form.addEventListener("submit", function(e){
        e.preventDefault()
        if(that.input.value==="")return;
        const text = that.input.value
        console.log(that.input.value)
        that.task = document.createElement("li")
    that.task.className = 'task'
    that.task.innerHTML= text + "<button>Usuń</button>"
    that.ul.appendChild(that.task)
    that.toDoList.push(that.task)
    that.input.value=""
    that.taskNumber.textContent = that.listItems.length;
    that.taskNumber.textContent = that.toDoList.length;
    that.remove()
    
    }

    )}
    remove(){
        const that = this;
        that.task.addEventListener('click', function(e){
            console.log(e.target.parentNode)
            const index = e.target.parentNode.dataset.key;
           that.toDoList.splice(index,1)
           that.taskNumber.textContent = that.toDoList.length;
           that.renderList()
        })
    }
renderList() {
    const that = this
        that.ul.textContent = "";
        that.toDoList.forEach((toDoElement, key) => {
         toDoElement.dataset.key = key;
         that.ul.appendChild(toDoElement);
        })
       }

 search(){
    const that= this;
    that.searching.addEventListener("input", function(e){
        const searchText = e.target.value.toLowerCase()
        let tasks = [...that.toDoList];
        tasks = tasks.filter(li =>li.textContent.toLowerCase().includes(searchText))
        console.log(tasks)
        that.listItems=''
        that.ul.textContent=''
        tasks.forEach(li => that.ul.appendChild(li))
        that.taskNumber.textContent = that.toDoList.length;
        // that.ul.textContent='';
    })}
}
const Addtask = new AddTask()





