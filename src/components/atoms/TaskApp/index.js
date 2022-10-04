import "./styles.scss";

export function TaskApp(text, color, id) {
  const task = document.createElement("div");
  task.classList.add("task-app");

  const leftBar = document.createElement("div");
  leftBar.classList.add("left-bar", `left-bar-${color}`);

  const content = document.createElement("p");
  content.classList.add("task-content");

  content.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.classList.add("del-btn");
  delBtn.textContent = "Apagar";

  task.addEventListener("click", () => {
    taskRemove(id);
  });

  task.append(delBtn);

  task.append(leftBar, content);
  return task;
}

function taskRemove(taskId) {
  const currentDay = localStorage.getItem("currentTab");
  const tasks = JSON.parse(localStorage.getItem(currentDay));

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    if (task.id === taskId) {
      tasks.splice(taskId, 1);
      localStorage.setItem(currentDay, JSON.stringify(tasks));
      location.reload();
    }
  }
}
