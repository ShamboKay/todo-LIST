const addTaskInput = document.getElementById("addTask");
const clearTask = document.getElementById("clear");
const completeTask = document.getElementById("complete");
let taskList = [];
let taskNumber = [];



/* Grabs the value entered by the input to then be added into the list array */ 
function addingTask () {
    let anyText = addTaskInput.value

    if (anyText && anyText !== addTaskInput.placeholder) {    
       
            taskList.push({text: anyText, completed: false});
        
        updateTaskList()
        
    } else if (anyText == '') {
        return null
    }
    addTaskInput.value = '';
    console.log(taskList);
}



function updateTaskList() {
const list = document.getElementById('taskOrder')
    list.innerHTML = '';  

    taskList.forEach((taskList, index)=> {
        const li = document.createElement('li')
        li.textContent = `Task ${index + 1}:  ${taskList.text}`;
        if (taskList.completed) {
            li.classList.add('completed');
        }

        const completeButton = document.createElement('button');
        completeButton.textContent = taskList.completed ? 'Undo' : 'Complete';
        completeButton.onclick = () => completeOldTask(index);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete'
        deleteButton.onclick = () => clearOldTask(index);
        
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        list.appendChild(li);
    });

}

function clearOldTask (index) {
taskList[index].completed = !taskList[index].completed;
updateTaskList();
}

function completeOldTask (index) {
taskList.splice(index, 1)
updateTaskList();
}