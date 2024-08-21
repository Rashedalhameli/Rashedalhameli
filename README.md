<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            background: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .menu {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        .menu button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 5px;
        }
        .menu button:hover {
            background-color: #0056b3;
        }
        .form-container {
            display: none;
        }
        .task-list {
            display: none;
        }
        .task-item {
            padding: 10px;
            background-color: #f9f9f9;
            margin: 10px 0;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Task Manager</h2>
        <div class="menu">
            <button id="uploadTaskBtn">Upload Your Task</button>
            <button id="viewTaskBtn">View Your Task</button>
        </div>
        <div id="uploadTaskForm" class="form-container">
            <h3>Upload Task</h3>
            <form id="taskForm">
                <label for="taskName">Task Name:</label><br>
                <input type="text" id="taskName" name="taskName" required><br><br>
                <label for="taskDate">Current Date:</label><br>
                <input type="date" id="taskDate" name="taskDate" required><br><br>
                <label for="taskDescription">Description of the Task:</label><br>
                <textarea id="taskDescription" name="taskDescription" rows="4" required></textarea><br><br>
                <label for="taskImages">Upload Pictures (Optional):</label><br>
                <input type="file" id="taskImages" name="taskImages" multiple><br><br>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div id="taskList" class="task-list">
            <h3>Your Tasks</h3>
            <div id="tasks"></div>
        </div>
    </div>

    <script>
        const uploadTaskBtn = document.getElementById('uploadTaskBtn');
        const viewTaskBtn = document.getElementById('viewTaskBtn');
        const uploadTaskForm = document.getElementById('uploadTaskForm');
        const taskList = document.getElementById('taskList');
        const tasksDiv = document.getElementById('tasks');

        let tasks = [];

        uploadTaskBtn.addEventListener('click', () => {
            uploadTaskForm.style.display = 'block';
            taskList.style.display = 'none';
        });

        viewTaskBtn.addEventListener('click', () => {
            uploadTaskForm.style.display = 'none';
            taskList.style.display = 'block';
            displayTasks();
        });

        document.getElementById('taskForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const taskName = document.getElementById('taskName').value;
            const taskDate = document.getElementById('taskDate').value;
            const taskDescription = document.getElementById('taskDescription').value;

            const task = {
                name: taskName,
                date: taskDate,
                description: taskDescription,
                images: [] // You can add image handling later
            };

            tasks.push(task);
            document.getElementById('taskForm').reset();
            alert('Task added successfully!');
        });

        function displayTasks() {
            tasksDiv.innerHTML = '';
            tasks.forEach((task, index) => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.textContent = task.name;
                taskItem.addEventListener('click', () => viewTaskDetails(index));
                tasksDiv.appendChild(taskItem);
            });
        }

        function viewTaskDetails(index) {
            const task = tasks[index];
            alert(`Task Name: ${task.name}\nDate: ${task.date}\nDescription: ${task.description}`);
            // You can expand this to show images or any other details
        }
    </script>
</body>
</html>
