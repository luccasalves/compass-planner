import { TaskApp } from "../../atoms/TaskApp";
import { TimeBoxApp } from "../../atoms/TimeBoxApp";
import { CardTask } from "../../molecules/CardTask";
import "./styles.scss";
export function MainSection() {
  const Main = document.querySelector(".main");

  Main.append(TimeBoxApp("Horário", "white"));

  Main.append(CardTask());
  Main.append(CardTask());

  return Main;
}
