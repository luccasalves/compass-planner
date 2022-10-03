import { TabApp } from "../../atoms/TabApp";
import { TimeBoxApp } from "../../atoms/TimeBoxApp";
import "./styles.scss";

export function TabGroup() {
  const tabGroup = document.createElement("section");
  tabGroup.classList.add("tab-group");

  tabGroup.append(TimeBoxApp("Horário", "white"));

  tabGroup.append(TabApp("Domingo", "primary"));
  tabGroup.append(TabApp("Segunda", "secondary"));
  tabGroup.append(TabApp("Terça", "pink"));
  tabGroup.append(TabApp("Quarta", "light-blue"));
  tabGroup.append(TabApp("Quinta", "light-green"));
  tabGroup.append(TabApp("Sexta", "light-red"));
  tabGroup.append(TabApp("Sábado", "purple"));

  return tabGroup;
}
