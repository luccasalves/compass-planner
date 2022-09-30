import "./styles.scss";
export function ButtonApp(text, bgColor, callBack) {
  const Button = document.createElement("button");
  Button.setAttribute("type", "button");
  Button.classList.add("button", `button-${bgColor}`);
  Button.innerHTML = text;

  Button.addEventListener("click", () => {
    callBack();
  });

  return Button;
}
