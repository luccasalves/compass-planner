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
      ButtonApp("Excluir Todos ", "negative", deleteAllActivity)
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

function createActivity(id, description, time, color) {
  return {
    id: id,
    description: description,
    time: time,
    color: color,
  };
}

function createID(inLocal) {
  if (inLocal == null) {
    return 0;
  }
  return inLocal.length;
}

function wichColor(day) {
  if (day == "dom.") return "light-red";
  if (day == "seg.") return "secondary";
  if (day == "ter.") return "light-green";
  if (day == "qua.") return "primary";
  if (day == "qui.") return "purple";
  if (day == "sex.") return "light-blue";
  if (day == "sáb.") return "pink";
}

function hasRegister(activity, weekDay) {
  if (localStorage.getItem(weekDay) == null) {
    localStorage.setItem(`${weekDay}`, JSON.stringify([activity]));
    return;
  }
}
//TODO: verificar a ordem das verificacoes dos inputs

function addActivity() {
  const activityInput = document.getElementById("atv");
  const hourInput = document.getElementById("hr");
  let weekDay = document.getElementById("wd").value;

  if (weekDay == "Dia da semana") {
    alert("Dia da semana selecionado será o de hoje");
    weekDay = getWeekDay("pt-br");
  }
  const inLocalStorage = JSON.parse(localStorage.getItem(weekDay));

  if (isEmpty(activityInput) || isEmpty(hourInput)) {
    return;
  }

  const id = createID(inLocalStorage);
  const activity = createActivity(
    id,
    activityInput.value,
    hourInput.value,
    wichColor(weekDay)
  );

  hasRegister(activity, weekDay);

  const a = [...inLocalStorage];
  a.push(activity);
  localStorage.setItem(`${weekDay}`, JSON.stringify(a));
  // alert("Tarefa adicionada");
  location.reload();
}

//TODO: fazer um modal de msg para user
function deleteAllActivity() {
  const weekDay = document.getElementById("wd");

  if (weekDay.value == "Dia da semana") {
    weekDay.classList.add("input-error");
    setTimeout(() => {
      alert("Selecione o dia da semana a excluir tarefas");
    }, 350);
    return;
  }
  if (localStorage.getItem(weekDay.value) == null) {
    alert(weekDay.value);
    alert("Não há tarefas nesse dia!");
    return;
  }
  alert(`Toda as tarefas foram excluídas desse dia`);
  localStorage.removeItem(weekDay.value);
  setTimeout(() => {
    location.reload();
  }, 500);
}
