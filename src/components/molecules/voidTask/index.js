import "./styles.scss";
export function VoidTask() {
  const voidTaskContainer = document.createElement("div");
  voidTaskContainer.className = "void-task-container";
  const voidTask = document.createElement("h1");
  voidTask.textContent = "Sem tarefas para esse dia !";
  voidTaskContainer.appendChild(voidTask);

  return voidTaskContainer;
}
