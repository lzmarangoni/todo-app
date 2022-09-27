const addTask = document.getElementById('newTask')
const todoInput = document.getElementById('todoInput')
const taskDone = document.getElementById('taskDone')
const taskDelete = document.getElementById('taskDelete')
const todoList = document.querySelector('.todoList')

addTask.addEventListener('click',()=>{
    let task = {
        name: todoInput.value,
        id: randomId()
    }
    if(task.name === ""){
        alert("A nova tarefa não pode ser vazia...")
        return
    }else{
    createTask(task)
    todoInput.value =''}
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
    div.id = `div${task.id}`
    
    let input = document.createElement('input')
   
    input.setAttribute('type','checkbox' )
    input.id = `input${task.id}`
   
    

    let label = document.createElement('label')
    label.setAttribute('for',`input${task.id}` )


    let span = document.createElement('span')
    span.innerHTML = task.name
    span.id = `span${task.id}`

    let deleteButton = document.createElement('button')
    deleteButton.classList.add('btnDelete')
    deleteButton.setAttribute('onclick', 'deleteTask('+task.id+')')

    div.addEventListener("change", (e) => {
        if (e.target.checked) {
          li.classList.add("taskDone")
       
        } else {
          li.classList.remove("taskDone")
          
        }
      })
    
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




let botaoLightDark = document.querySelector(".darkLight")
let bodyContent = document.querySelector(".bodyContent")
let buttonImg = document.querySelector(".buttonImg")
let todoForm = document.querySelector(".newTodo")
let todoItem = document.querySelector(".todoItem")
let filter = document.querySelector(".filter")

botaoLightDark.addEventListener("click",()=>{
    botaoLightDark = !botaoLightDark
    
    if(botaoLightDark){
        lightMode()
    }else{
        darkMode()
    }
})

function darkMode(){
        bodyContent.classList.add("darkMode")
        buttonImg.setAttribute('src','./images/icon-sun.svg')
        todoForm.classList.add("darkModeItem")
        todoList.classList.add("darkModeItem")
       
}

function lightMode(){
        bodyContent.classList.remove("darkMode")
        buttonImg.setAttribute('src','./images/icon-moon.svg')
        todoForm.classList.remove("darkModeItem")
        todoList.classList.remove("darkModeItem")
     

}