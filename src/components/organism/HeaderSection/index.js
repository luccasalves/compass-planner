import { BannerApp } from "../../atoms/BannerApp";
import { ButtonApp } from "../../atoms/ButtonApp";
import { ClockApp } from "../../atoms/ClockApp";
import { ActionGroup } from "../../molecules/ActionGroup";
import "./styles.scss";

export function HeaderSection() {
  const Header = document.querySelector(".header");

  Header.append(
    BannerApp(
      "Planejamento Semanal",
      "Utilize o formulário para adicionar novas tarefas"
    )
  );
  Header.append(
    ActionGroup(
      ButtonApp("Salvar Localstorage", "positive", saveStorage),
      ButtonApp("Excluir Localstorage", "negative", deleteFromStorage)
    )
  );

  Header.append(ClockApp(true));
}

function deleteFromStorage() {
  const userRes = prompt(
    "Seus dados serão EXCLUÍDOS, deseja prosseguir? \nDigite S para confirmar ou N para cancelar"
  );
  if (userRes.toLocaleLowerCase() == "s") {
    localStorage.clear();
    alert("Dados excluídos");
    location.reload();
    return;
  }
  alert("Operação cancelada");
}

function saveStorage() {
  alert("Dados foram salvos !");
}
