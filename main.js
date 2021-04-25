
// It is a program in one file
// only example

// /////////////////////


// let form = document.querySelector("form");
// let searching = document.querySelector(".search input")
// const ul = document.querySelector("ul");
// const taskNumber = document.querySelector("h1 span");
// const input = document.querySelector("input");
// let listItems = document.getElementsByClassName('task');
// const toDoList = [];


// const removeTask = (e)=>{
//   // console.log(e.target.parentNode)
//   const index = e.target.parentNode.dataset.key;
//  toDoList.splice(index,1)
//  taskNumber.textContent = toDoList.length;
//  renderList()
// }
//
// const addTask = (e) =>{
//   e.preventDefault()
//   const text = input.value
//   if(text==="") return
  
//   const task = document.createElement("li")
//   task.className = 'task'
//    task.innerHTML= text + "<button>Usuń</button>"
//    toDoList.push(task)
//    renderList()
//    ul.appendChild(task)
//    input.value=""
//    taskNumber.textContent = listItems.length;
//    task.querySelector('button').addEventListener('click', removeTask);
//    taskNumber.textContent = toDoList.length;
//   }
//   const renderList = () => {
//     ul.textContent = "";
//     toDoList.forEach((toDoElement, key) => {
//      toDoElement.dataset.key = key;
//      ul.appendChild(toDoElement);
//     })
//    }

//    const search = (e)=>{
    
//   const searchText = e.target.value.toLowerCase()
//   let tasks = [...toDoList];
//   tasks = tasks.filter(li =>li.textContent.toLowerCase().includes(searchText))
//   console.log(tasks)
//   listItems=''
//   ul.textContent=''
//   tasks.forEach(li => ul.appendChild(li))
//   taskNumber.textContent = toDoList.length;
//   // ul.textContent='';
  
//   }

// searching.addEventListener("input", search)
// form.addEventListener("submit",addTask)