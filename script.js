const startBtn = document.getElementById("startBtn");
const startMenu = document.getElementById("startMenu");
const timeEl = document.getElementById("time");
const todoApp = document.getElementById("todoApp");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

startBtn.addEventListener("click", () => {
  startMenu.classList.toggle("hidden");
});

function updateTime() {
  const now = new Date();
  const hrs = now.getHours().toString().padStart(2, '0');
  const mins = now.getMinutes().toString().padStart(2, '0');
  timeEl.textContent = `${hrs}:${mins}`;
}

setInterval(updateTime, 1000);
updateTime();

function toggleTodoApp() {
  todoApp.classList.toggle("hidden");
  startMenu.classList.add("hidden");
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  li.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
