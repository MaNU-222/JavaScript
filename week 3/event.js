let tasks = [];

function renderTasks(tasks) {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  tasks.forEach((tasks) => {
    listElement.innerHTML += `
    <li ${tasks.completed ? 'class="strike"' : ""}>
      <p>${tasks.detail}<p/>
      <div>
        <span data-function="delete">$</span>
        <span data-function="complete">^^</span>
      </div>
    </li>`;
  });
}

function newTask() {
  document.querySelector("#todo").value;
  tasks.push({detail: tasks, completed: false});
  renderTasks(tasks);
}

function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail != taskElement.childNodes[1].inneerText
  );
  taskElement.remove();
}


function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[1].inneerText
  );
  tasks[taskIndex].completed = task[taskIndex].completed ? false : true;
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTask(e) {
  console.log(e.target);
  const parent = e.target.closest("li");
  if (e.target.dataset.function === "delete") {
    removeTask(parent);  
  }
  if (e.target.dataset.function === "comlete") {
    completeTask(parent);
  }
}


document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTask);

renderTasks(tasks);

