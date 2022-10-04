import { TabApp } from "../../atoms/TabApp";
import { TimeBoxApp } from "../../atoms/TimeBoxApp";
import "./styles.scss";

export function TabGroup() {
  const tabGroup = document.createElement("section");
  tabGroup.classList.add("tab-group");

  tabGroup.append(TimeBoxApp("Horário", "white"));

  tabGroup.append(TabApp("Segunda-feira", "secondary", "seg."));
  tabGroup.append(TabApp("Terça-feira", "light-green", "ter."));
  tabGroup.append(TabApp("Quarta-feira", "primary", "qua."));
  tabGroup.append(TabApp("Quinta-feira", "purple", "qui."));
  tabGroup.append(TabApp("Sexta-feira", "light-blue", "sex."));
  tabGroup.append(TabApp("Sábado", "pink", "sáb."));
  tabGroup.append(TabApp("Domingo", "light-red", "dom."));

  return tabGroup;
}
