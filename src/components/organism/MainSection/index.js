import { TaskApp } from "../../atoms/TaskApp";
import { TimeBoxApp } from "../../atoms/TimeBoxApp";
import { CardTask } from "../../molecules/CardTask";
import "./styles.scss";
export function MainSection() {
  const Main = document.querySelector(".main");

  Main.append(TimeBoxApp("Horário", "white"));
  Main.append(CardTask("12:20", "Teste um", "primary"));
  Main.append(CardTask("12:20", "Segunda Task", "secondary"));
  Main.append(CardTask("10:20", "Terceira tarefa", "pink"));

  return Main;
}
