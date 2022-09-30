import { ButtonApp } from "../../atoms/ButtonApp";
import "./styles.scss";

export function ActionGroup(...arrayElements) {
  const ActionGroup = document.createElement("section");
  ActionGroup.setAttribute("class", "action-group");

  arrayElements.forEach((element) => ActionGroup.appendChild(element));

  return ActionGroup;
}
