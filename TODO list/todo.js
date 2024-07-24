const addTaskInput = document.getElementById("addTask");
const clearTask = document.getElementById("clear");
const completeTask = document.getElementById("complete");
const inputTaskText = document.getElementById("writeTask");
let taskList = [];



/* Grabs the value entered by the input to then be added into the list array */ 
function addingTask () {
    const anyText = addTaskInput.value;
    taskList.push(addTaskInput.value);
    console.log(taskList);
}

function clearOldTask () {

}

function completeOldTask () {

}