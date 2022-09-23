const addTask = document.getElementById('newTask')
const todoInput = document.getElementById('todoInput')
const taskDone = document.getElementById('taskDone')
const taskDelete = document.getElementById('taskDelete')
const todoList = document.querySelector('.todoList')

addTask.addEventListener('click',()=>{
    let task = {
        nome: todoInput.value,
        id: randomId()
    }
    createTask(task)
    console.log(task)
    todoInput.value =''
})

function randomId(){
    return Math.floor(Math.random() *1000)
}

function createTask(task){
    let li = newLi(task)
    todoList.appendChild(li)
}

function newLi(task){
    let li = document.createElement('li')
    li.classList.add("todoItem")

    let div = document.createElement('div')
    
    
    let input = document.createElement('input')
    
    let label = document.createElement('label')
    div.classList.add("checkCustom")
    let span = document.createElement('span')
    span.innerHTML = task.nome
    
    let deleteButton = document.createElement('button')
    deleteButton.classList.add('btnDelete')
    deleteButton.setAttribute('onclick', 'deleteTask('+task.id+')')

  


    
    li.appendChild(div)
    div.appendChild(input)
    div.appendChild(label)
    li.appendChild(span)
    li.appendChild(deleteButton)

    return li
}

function deleteTask(taskID){
    console.log(taskID)
}


