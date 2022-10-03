import "./styles.scss";

export function TimeBoxApp(content, bgColor) {
  const TimeBox = document.createElement("div");
  TimeBox.classList.add("time-box", `time-box-${bgColor}`);

  const TextContent = document.createElement("p");

  TextContent.textContent = content;

  TimeBox.append(TextContent);

  return TimeBox;
}
