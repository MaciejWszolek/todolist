
class AddTask {
    constructor(){ 
        
    this.searching = document.querySelector(".search input")
    this.form = document.querySelector(".form");
    this.input = document.querySelector("input");
    this.ul = document.querySelector("ul");  
    this.toDoList = [];
    this.taskNumber = document.querySelector("h1 span");
    this.listItems = document.getElementsByClassName('task');
    this.task = '';
    this.add = new Add();
    this.search = new Search();
    this.remove = new Remove();
    this.render = new Render();
    
    
}
//  add (){
//      const that = this;
//     that.form.addEventListener("submit", function(e){
//         e.preventDefault()
//         if(that.input.value==="")return;
//         const text = that.input.value
//         console.log(that.input.value)
//         that.task = document.createElement("li")
//     that.task.className = 'task'
//     that.task.innerHTML= text + "<button>Usuń</button>"
//     that.ul.appendChild(that.task)
//     that.toDoList.push(that.task)
//     that.input.value=""
//     that.taskNumber.textContent = that.listItems.length;
//     that.taskNumber.textContent = that.toDoList.length;
//     that.remove.remove()
//     that.search.showSearch()
//     }

//     )}
    
}








