document.getElementById('newTaskButton').addEventListener('click', function() {
    document.getElementById('newTaskForm').classList.remove('hidden');
    document.getElementById('taskList').classList.add('hidden');
});

document.getElementById('viewTaskButton').addEventListener('click', function() {
    document.getElementById('taskList').classList.remove('hidden');
    document.getElementById('newTaskForm').classList.add('hidden');
    displayTasks();
});

document.getElementById('submitTaskButton').addEventListener('click', function() {
    let taskName = document.getElementById('taskName').value;
    let taskDate = document.getElementById('taskDate').value;
    let taskDescription = document.getElementById('taskDescription').value;

    if (taskName && taskDate && taskDescription) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ name: taskName, date: taskDate, description: taskDescription });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        alert('Task added successfully!');
        document.getElementById('taskName').value = '';
        document.getElementById('taskDate').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskImage').value = '';
    } else {
        alert('Please fill in all required fields.');
    }
});

function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let tasksTableBody = document.querySelector('#tasksTable tbody');
    tasksTableBody.innerHTML = '';

    tasks.forEach((task, index) => {
        let row = tasksTableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.innerHTML = index + 1;
        cell2.innerHTML = task.date;
        cell3.innerHTML = task.name;
        cell4.innerHTML = task.description;
    });
}
