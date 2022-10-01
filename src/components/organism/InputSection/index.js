import { getWeekDay, week } from "../../../utils/date";
import { InputApp } from "../../atoms/InputApp";
import { SelectApp } from "../../atoms/SelectApp";
import { ButtonApp } from "../../atoms/ButtonApp";
import { ActionGroup } from "../../molecules/ActionGroup";
import "./styles.scss";

export function InputSection() {
  const InputSection = document.querySelector(".inputs");

  InputSection.append(InputApp("atv", "Atividade", "text"));
  InputSection.append(
    SelectApp("wd", "DiaSemana", "Dia da semana", week, true)
  );
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

function createActivity(id, description, time) {
  return {
    id: id,
    description: description,
    time: time,
  };
}

function createID(inLocal) {
  if (inLocal == null) {
    return localStorage.length;
  }
  return inLocal.length;
}

function hasRegister(activity, weekDay) {
  if (localStorage.length == 0) {
    localStorage.setItem(`${weekDay}`, JSON.stringify([activity]));
    return;
  }
}

//TODO: trocar a label pelo dia da semana do select

function addActivity() {
  const activityInput = document.getElementById("atv");
  const hourInput = document.getElementById("hr");
  let weekDay = document.getElementById("wd").value;

  if (weekDay == "Dia da semana") {
    alert("Dia da semana da selecionado sera o dia de hoje");
    weekDay = getWeekDay("pt-br");
  }
  const inLocalStorage = JSON.parse(localStorage.getItem(weekDay));

  console.log(weekDay);

  if (isEmpty(activityInput) || isEmpty(hourInput)) {
    return;
  }

  const id = createID(inLocalStorage);
  const activity = createActivity(id, activityInput.value, hourInput.value);

  hasRegister(activity, weekDay);

  const a = [...inLocalStorage];
  a.push(activity);
  localStorage.setItem(`${weekDay}`, JSON.stringify(a));
}
