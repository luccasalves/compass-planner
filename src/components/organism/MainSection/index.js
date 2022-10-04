import { CardTask } from "../../molecules/CardTask";
import { TabGroup } from "../../molecules/TabGroup";
import { VoidTask } from "../../molecules/voidTask";
import "./styles.scss";
export function MainSection() {
  const main = document.querySelector(".main");
  const taskGroup = document.createElement("section");
  const currentTab = localStorage.getItem("currentTab");
  const currentTasks = localStorage.getItem(currentTab);

  taskGroup.classList.add("task-group");

  main.append(TabGroup(), taskGroup);

  const sab = JSON.parse(localStorage.getItem(currentTab));

  if (currentTasks == null) {
    taskGroup.append(VoidTask());
    return;
  }

  sab.forEach((el) =>
    taskGroup.appendChild(CardTask(el.time, el.description, el.color))
  );

  return main;
}
