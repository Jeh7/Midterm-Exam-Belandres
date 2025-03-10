let tasks = [];

function Task(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
}

function addTask(name, description) {
    const id = tasks.length + 1;
    const newTask = new Task(id, name, description);
    tasks.push(newTask);
    console.log(`Task added: ${name}`);
}

function viewTask() {
    if (tasks.length === 0) {
        console.log('No tasks found.');
    } else {
        console.log('Tasks: ');
        tasks.forEach(task => {
            console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
        });
    }
}

function updateTask(id, newName, newDesc) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName || task.name;
        task.description = newDesc || task.description;
        console.log(`Task ID ${id} updated.`);
    } else {
        console.log('Task not found.');
    }
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Task ID ${id} deleted.`);
    } else {
        console.log('Task not found.');
    }
}

