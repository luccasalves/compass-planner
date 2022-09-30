import { HeaderSection } from "./components/organism/HeaderSection";

import "./scss/main.scss";

export function App() {
  const App = document.querySelector("#app");
  App.setAttribute("class", "container");

  HeaderSection();
}
