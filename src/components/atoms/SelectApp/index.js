import "./styles.scss";

export function SelectApp(id, name, label, options, isObj) {
  const SelectApp = document.createElement("select");
  SelectApp.setAttribute("class", "select-app");
  SelectApp.setAttribute("name", name);
  SelectApp.setAttribute("id", id);

  const OptionLabel = document.createElement("option");
  OptionLabel.setAttribute("selected", true);
  OptionLabel.setAttribute("disabled", true);
  OptionLabel.setAttribute("value", label);
  OptionLabel.textContent = label;

  SelectApp.appendChild(OptionLabel);

  SelectApp.addEventListener("click", () => {
    SelectApp.classList.remove("input-error");
  });

  if (isObj) {
    options.forEach((option) => {
      const OptionApp = document.createElement("option");
      OptionApp.setAttribute("value", option.value);
      OptionApp.textContent = option.label;
      SelectApp.appendChild(OptionApp);
    });
    return SelectApp;
  }

  options.forEach((option) => {
    const OptionApp = document.createElement("option");
    OptionApp.setAttribute("value", option);
    OptionApp.textContent = option;
    SelectApp.appendChild(OptionApp);
  });

  return SelectApp;
}
