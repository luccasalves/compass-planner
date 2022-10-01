import { weekDay } from "../../../utils/date";
import { InputApp } from "../../atoms/InputApp";
import { SelectApp } from "../../atoms/SelectApp";
import { ButtonApp } from "../../atoms/ButtonApp";
import { ActionGroup } from "../../molecules/ActionGroup";
import "./styles.scss";

export function InputSection() {
  const InputSection = document.querySelector(".inputs");

  InputSection.append(InputApp("atv", "Atividade", "text"));
  InputSection.append(SelectApp("DiaSemana", "Dia da semana", weekDay, true));
  InputSection.append(InputApp("hr", "Horário", "number"));

  InputSection.append(
    ActionGroup(
      ButtonApp("Adicionar Atividade", "positive", addActivity),
      ButtonApp("Excluir Todos ", "negative")
    )
  );
}

function isEmpty(element) {
  if (element.value < 1) {
    element.classList.add("input-error");
    setTimeout(() => {
      alert("Atividade com descrição ou horário vazio");
    }, 250);
    return true;
  }
  return false;
}

function addActivity() {
  const activityInput = document.getElementById("atv");
  const hourInput = document.getElementById("hr");

  if (isEmpty(activityInput) || isEmpty(hourInput)) {
    return;
  }

  const id = localStorage.length;
  const activity = {
    id: id,
    description: activityInput.value,
    time: hourInput.value,
  };

  if (localStorage.length == 0) {
    localStorage.setItem(`atv`, JSON.stringify(activity));

    return;
  }

  const a = [JSON.parse(localStorage.getItem("atv"))];
  a.push(activity);
  //TODO:  trocar key atv pelo dia da semana
  //TODO: fazer func para retornar o dia da semana em pt-br
  localStorage.setItem(`atv`, JSON.stringify(a));
}
