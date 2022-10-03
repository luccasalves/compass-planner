import "./styles.scss";

import { TaskApp } from "../../atoms/TaskApp";
import { TimeBoxApp } from "../../atoms/TimeBoxApp";

export function CardTask() {
  const CardTask = document.createElement("div");

  CardTask.classList.add("card-task");

  CardTask.append(
    TimeBoxApp("04:20", "primary"),
    TaskApp("Eu aamo minha garanhona")
  );

  return CardTask;
}
