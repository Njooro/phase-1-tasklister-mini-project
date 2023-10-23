document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const taskDescription = document.getElementById('new-task-description').value;
    handleTodo(taskDescription);
    e.target.reset();
  });
});

function handleTodo(task) {
  const taskList = document.getElementById('tasks');
  const newTask = document.createElement('li');
  newTask.innerText = task;
  taskList.appendChild(newTask);
}
