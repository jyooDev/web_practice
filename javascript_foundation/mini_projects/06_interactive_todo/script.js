
let taskCt = 0;
function addTask(){
    const task = document.querySelector('.inputBox');
    if (task.value === ''){
        alert('Please Enter Task');
    }else{
        taskCt += 1;
        const taskDiv = createTaskDiv(task.value);
        const toDoContainer = document.querySelector('.todoContainer');
        toDoContainer.appendChild(taskDiv);
        task.value = '';
    }
}

function createTaskDiv(task){
    const newDiv = document.createElement('div');
    const newTask = document.createElement('p');
    newTask.textContent = task;
    newDiv.classList.add(`task${taskCt}`);
    const taskRemoveButton = document.createElement('button');
    taskRemoveButton.textContent = '-';
    taskRemoveButton.addEventListener('click', function(){
        const todoContainer = document.querySelector('.todoContainer');
        const removeDiv = document.querySelector(`.task${taskCt}`);
        todoContainer.removeChild(removeDiv);
        console.log(`Removed Task '${removeDiv.getElementsByTagName(`p`)[0].textContent}'`);
    })
    newDiv.appendChild(newTask);
    newDiv.appendChild(taskRemoveButton);
    return newDiv;
}