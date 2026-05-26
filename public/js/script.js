function addTask() {

    const taskInput = document.getElementById('taskInput');

    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = `
        ${taskValue}
        <button onclick="deleteTask(this)">
            Delete
        </button>
    `;

    document.getElementById('taskList').appendChild(li);

    taskInput.value = '';
}

function deleteTask(button) {
    button.parentElement.remove();
}