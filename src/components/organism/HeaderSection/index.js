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
      ButtonApp("Salvar Localstorage", "positive"),
      ButtonApp("Excluir Localstorage", "negative")
    )
  );

  Header.append(ClockApp());
}
