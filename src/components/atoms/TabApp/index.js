import "./styles.scss";

export function TabApp(label, color) {
  const tabApp = document.createElement("div");
  tabApp.classList.add("tab-app", `tab-app-${color}`);

  const labelText = document.createElement("p");
  labelText.textContent = label;

  tabApp.appendChild(labelText);

  return tabApp;
}
