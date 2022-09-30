import "./styles.scss";
export function HeaderSection() {
  const Header = document.querySelector(".header");
  Header.insertAdjacentHTML("beforeend", "<h2>Teste</h2>");
}
