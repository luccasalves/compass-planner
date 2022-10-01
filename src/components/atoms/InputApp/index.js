import "./styles.scss";
let time = null;
export function InputApp(id, placeHolder, type) {
  const InputApp = document.createElement("input");
  InputApp.setAttribute("type", type);
  InputApp.setAttribute("id", id);
  InputApp.setAttribute("placeholder", placeHolder);
  InputApp.classList.add("input-app", `input-app-${type}`);

  InputApp.addEventListener("keyup", (event) => {
    InputApp.classList.remove("input-error");
    // let wait = type === "number" ? 2500 : 800;

    // clearTimeout(time);
    // time = setTimeout(() => {}, wait);
  });

  if (type == "number") {
    InputApp.addEventListener("keydown", (event) => {
      if (InputApp.value.length == 2) {
        InputApp.setAttribute("type", "text");
        InputApp.setAttribute("maxlength", 6);
        InputApp.value = InputApp.value + "h";
      }
      if (InputApp.value.length == 5) {
        InputApp.value = InputApp.value + "m";
      }
    });
  }

  return InputApp;
}
