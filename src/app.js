import { HeaderSection } from "./components/organism/HeaderSection";
import { InputSection } from "./components/organism/InputSection";
import { MainSection } from "./components/organism/MainSection";

import "./scss/main.scss";

export function App() {
  const App = document.querySelector("#app");
  App.setAttribute("class", "container");

  HeaderSection();
  InputSection();
  MainSection();
}
