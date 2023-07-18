document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    // Create new task item
    const taskItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    taskItem.appendChild(taskText);
  
    // Add task item to the list
    taskList.appendChild(taskItem);
  
    // Clear input field
    taskInput.value = '';
  });
  