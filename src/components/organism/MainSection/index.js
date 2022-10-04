import { getWeekDay } from "../../../utils/date.js";

import { CardTask } from "../../molecules/CardTask";
import { TabGroup } from "../../molecules/TabGroup";
import { VoidTask } from "../../molecules/voidTask";
import "./styles.scss";
export function MainSection() {
  const main = document.querySelector(".main");
  const taskGroup = document.createElement("section");
  const currentTab = localStorage.getItem("currentTab");
  const currentTasks = JSON.parse(localStorage.getItem(currentTab));
  const taskCollisionGroup = document.createElement("div");
  const currentDay = JSON.parse(localStorage.getItem(currentTab));
  const tabActive = localStorage.getItem("activeTab");
  const lineError = document.createElement("div");
  lineError.className = "line-error";

  taskCollisionGroup.classList.add("collision-group");
  taskCollisionGroup.append(lineError);
  taskGroup.classList.add("task-group");

  main.append(TabGroup(), taskGroup);

  setTimeout(() => {
    const active = document.getElementById(tabActive);
    active.classList.add("active-tab");
  }, 50);

  if (currentTasks == null || currentTasks.length == 0) {
    taskGroup.append(VoidTask());
    return;
  }
  let tasksRepeat = [];
  let tasksNotRepeat = [];

  currentDay.forEach((el, i, arr) => {
    arr.forEach((e) => {
      if (e.id !== el.id && e.time == el.time) {
        tasksRepeat.push(e);
      }
    });
  });

  currentDay.forEach((task) => {
    taskGroup.append(
      CardTask(task.time, task.description, task.color, task.id)
    );
  });

  return main;
}
