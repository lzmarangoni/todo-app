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
    li.id = task.id

    let div = document.createElement('div')
    div.classList.add("checkCustom")
    
    let input = document.createElement('input')
    input.setAttribute('type','checkbox' )
    input.id = `input${task.id}`
    

    let label = document.createElement('label')
    label.setAttribute('for',`input${task.id}` )


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
    let li = document.getElementById(''+taskID +'')
    if(li){
        todoList.removeChild(li)
    } 
}


