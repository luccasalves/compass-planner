import { getWeekDay, week } from "../../../utils/date";
import { InputApp } from "../../atoms/InputApp";
import { SelectApp } from "../../atoms/SelectApp";
import { ButtonApp } from "../../atoms/ButtonApp";
import { ActionGroup } from "../../molecules/ActionGroup";
import "./styles.scss";

export function InputSection() {
  const InputSection = document.querySelector(".inputs");
  const weekDay = getWeekDay("pt-br");

  InputSection.append(InputApp("atv", "Atividade", "text"));
  InputSection.append(SelectApp("DiaSemana", "Dia da semana", week, true));
  InputSection.append(InputApp("hr", "Horário", "number"));

  InputSection.append(
    ActionGroup(
      ButtonApp("Adicionar Atividade", "positive", () => addActivity(weekDay)),
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

function createActivity(id, description, time) {
  return {
    id: id,
    description: description,
    time: time,
  };
}

function createID(inLocal) {
  if (inLocalStorage == null) {
    return localStorage.length;
  }
  return inLocal.length;
}

function hasRegister(activity) {
  if (localStorage.length == 0) {
    localStorage.setItem(`${weekDay}`, JSON.stringify([activity]));
    return;
  }
}

function addActivity(weekDay) {
  const activityInput = document.getElementById("atv");
  const hourInput = document.getElementById("hr");
  const inLocalStorage = JSON.parse(localStorage.getItem(weekDay));

  if (isEmpty(activityInput) || isEmpty(hourInput)) {
    return;
  }

  const id = createID(inLocalStorage);

  const activity = createActivity(id, activityInput.value, hourInput.value);

  //verificando se ha registro existente
  hasRegister(activity);

  //concatenando com registros existentes
  const a = [...inLocalStorage];
  a.push(activity);
  localStorage.setItem(`${weekDay}`, JSON.stringify(a));
}
