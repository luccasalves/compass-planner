import { TaskApp } from "../../atoms/TaskApp";
import { TimeBoxApp } from "../../atoms/TimeBoxApp";
import { CardTask } from "../../molecules/CardTask";
import { TabGroup } from "../../molecules/TabGroup";
import "./styles.scss";
export function MainSection() {
  const main = document.querySelector(".main");

  main.append(TabGroup());

  main.append(CardTask("12:20", "Teste um", "primary"));
  main.append(CardTask("12:20", "Segunda Task", "secondary"));
  main.append(CardTask("10:20", "Terceira tarefa", "pink"));

  return main;
}
