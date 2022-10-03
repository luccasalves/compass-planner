import "./styles.scss";

export function TaskApp(text) {
  const task = document.createElement("div");
  task.classList.add("task-app");

  const leftBar = document.createElement("div");
  leftBar.classList.add("left-bar");

  const content = document.createElement("p");
  content.classList.add("task-content");

  content.textContent = text;

  task.append(leftBar, content);
  return task;
}
