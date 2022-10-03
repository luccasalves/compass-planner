import "./styles.scss";

import { TaskApp } from "../../atoms/TaskApp";
import { TimeBoxApp } from "../../atoms/TimeBoxApp";

export function CardTask(timeText, contentText, color) {
  const CardTask = document.createElement("div");

  CardTask.classList.add("card-task");

  CardTask.append(TimeBoxApp(timeText, color), TaskApp(contentText, color));

  return CardTask;
}
