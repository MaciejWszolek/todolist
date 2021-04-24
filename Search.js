const search = (e)=>{
    
    const searchText = e.target.value.toLowerCase()
    let tasks = [...toDoList];
    tasks = tasks.filter(li =>li.textContent.toLowerCase().includes(searchText))
    console.log(tasks)
    listItems=''
    ul.textContent=''
    tasks.forEach(li => ul.appendChild(li))
    taskNumber.textContent = toDoList.length;
    // ul.textContent='';
    
    }