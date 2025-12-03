// Array to store all tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // Check if input is not empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Add task to array
    tasks.push(taskText);
    
    // Clear input field
    taskInput.value = '';
    
    // Update the display
    displayTasks();
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Function to display all tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    
    // Clear current list
    taskList.innerHTML = '';

    // Check if no tasks
    if (tasks.length === 0) {
        taskList.innerHTML = '<div class="empty-message">No tasks yet! Add one above.</div>';
        return;
    }

    // Display each task
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${tasks[i]}</span>
            <button class="remove-btn" onclick="removeTask(${i})">Delete</button>
        `;
        taskList.appendChild(li);
    }
}

// Allow adding task with Enter key
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Show initial empty message
displayTasks();