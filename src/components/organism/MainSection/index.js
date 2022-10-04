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
  taskCollisionGroup.classList.add("collision-group");

  taskGroup.classList.add("task-group");

  main.append(TabGroup(), taskGroup);

  const currentDay = JSON.parse(localStorage.getItem(currentTab));

  if (currentTab == null) {
    localStorage.setItem("currentTab", getWeekDay("pt-br"));
  }

  if (currentTasks == null || currentTasks.length == 0) {
    taskGroup.append(VoidTask());
    return;
  }
  let tasksRepeat;
  let tasksDontRepeat;

  currentDay.forEach((task) => {
    tasksRepeat = currentDay.filter((t) => task.time == t.time);
    tasksDontRepeat = currentDay.filter((t) => task.time !== t.time);

    taskGroup.append(
      CardTask(task.time, task.description, task.color, task.id)
    );
  });

  // tasksDontRepeat.forEach((task) =>
  //   taskGroup.append(CardTask(task.time, task.description, task.color))
  // );
  // tasksRepeat.forEach((task) => {
  //   taskCollisionGroup.append(CardTask(task.time, task.description, "error"));
  // });

  // taskGroup.append(taskCollisionGroup);

  return main;
}
