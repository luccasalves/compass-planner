import "./styles.scss";
let time = null;
export function InputApp(id, placeHolder, type) {
  const InputApp = document.createElement("input");
  InputApp.setAttribute("type", type);
  InputApp.setAttribute("id", id);
  InputApp.setAttribute("placeholder", placeHolder);
  InputApp.classList.add("input-app", `input-app-${type}`);

  InputApp.addEventListener("keyup", () => {
    InputApp.classList.remove("input-error");
  });

  if (type == "number") {
    InputApp.addEventListener("keypress", () => {
      if (InputApp.value.length == 2) {
        InputApp.setAttribute("type", "text");
        InputApp.setAttribute("maxlength", 5);
        InputApp.value = InputApp.value + ":";
      }
    });
  }

  return InputApp;
}
