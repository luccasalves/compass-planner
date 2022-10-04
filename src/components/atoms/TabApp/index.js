import "./styles.scss";

//TODO: criar func pra selecinar as tasks correspondente no localStorage
//criar uma div , selecionar ela e inserir as tass nelas por aqui
export function TabApp(label, color, value) {
  const tabApp = document.createElement("div");
  tabApp.classList.add("tab-app", `tab-app-${color}`);
  tabApp.id = `tab-app-${color}`;

  const labelText = document.createElement("p");
  labelText.textContent = label;

  tabApp.appendChild(labelText);

  tabApp.addEventListener("click", () => {
    localStorage.setItem("currentTab", value);
    localStorage.setItem("activeTab", `tab-app-${color}`);
    location.reload();
    tabApp.classList.add("current-active");
  });

  return tabApp;
}
