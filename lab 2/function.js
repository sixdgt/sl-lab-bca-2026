// Retrieve tasks from local storage or initialize an empty array
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// global variable to track the index of the task being edited
const form = document.getElementById('createTaskForm');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// task index for removal and editing
let currentEditIndex = null;

// function to render tasks in the DOM
function loadTasks(){
    taskList.innerHTML = ''; // Clear existing tasks in the list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task; // Set the task text
        const removeButton = document.createElement('button'); // Create a remove button for each task
        removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // Set the button content to an "X" icon
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

function addTask(event){
    event.preventDefault(); // Prevent form submission
    const task = taskInput.value.trim();
    if(task){
        if(currentEditIndex !== null){
            // If we're editing an existing task, update it
            tasks[currentEditIndex] = task;
            currentEditIndex = null; // Reset edit index
            addTaskButton.textContent = 'Add Task'; // Reset button text
        } else {
            // Otherwise, add a new task
            tasks.push(task);
        }
        taskInput.value = ''; // Clear the input field
        loadTasks(); // Re-render the tasks
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to local storage
    }
}

function removeTask(event){
    if(event.target.tagName === 'BUTTON' || event.target.tagName === 'I'){
        // here we find the index of the task to remove by looking at the closest 'li' element
        const index = Array.from(taskList.children).indexOf(event.target.closest('li'));
        tasks.splice(index, 1); // Remove the task from the array with the found index
        loadTasks(); // Re-render the tasks
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to local storage
    }
}

// Load tasks when the page loads
loadTasks();

// Add event listeners for form submission
form.addEventListener('submit', addTask);

// Add event listener for task removal using event delegation
taskList.addEventListener('click', removeTask);