// Selectors
const todoInput= document.querySelector(".todo-input");
const todoButton= document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener("click", deleteCheck)

//Functions
function addTodo(event){
    //prevent form from submittng

    event.preventDefault();
    console.log("Hello world");
    // Todo Div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add('todo');

    //create li
    const newTodo=document.createElement("li");
    newTodo.innerHTML=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // CHECK MARK BUTTON
    const completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check"></li> Completed';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // CHECK TRASH BUTTON
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></li><span class="trash">X</span>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST

    todoList.appendChild(todoDiv)

    //Clear Todo INPUT VALUE
    todoInput.value="";
    todoInput.focus()
}

function deleteCheck(event){
    console.log(event.target)

    const item=event.target;
    //DELETE TODO
    if(item.classList[0]==="trash-btn"|| item.classList[0]==="fas fa-trash"){
        console.log("UN Hello")
        const todo=item.parentElement;

        //ANIMATION
        todo.classList.add("fall")
        todo.addEventListener("transitionend", function(){
            console.log("Hi mister")
            todo.remove();
            
        })

        // todo.remove()
    }
    //CHECK MARK
    

    
    if (item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        
        // console.log(item.nextElementSibling)
    //     const todoItems=document.querySelector('.todo-item')
        
    //    todoItems.classList.toggle("completed")
        
        todo.classList.toggle("completed");
    }

 }

 const filterOption = document.querySelector('.filter-todo');

 filterOption.addEventListener('click', filterTodo);
 function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case "all":
                // console.log(todos)
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                    }
                    break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }        
    });
}
