import { getDate, getHoursWithSeconds } from "../../../utils/date";

import "./styles.scss";

export function ClockApp(showSeconds) {
  const ClockApp = document.createElement("div");
  const TimeText = document.createElement("h1");
  const TimeLabel = document.createElement("p");

  ClockApp.setAttribute("class", "clock-app");
  TimeLabel.setAttribute("class", "time-label");

  TimeText.textContent = getHoursWithSeconds(showSeconds);
  TimeLabel.textContent = getDate("pt-br");

  ClockApp.append(TimeText, TimeLabel);

  setInterval(() => {
    TimeText.textContent = getHoursWithSeconds(showSeconds);
  }, 1000);

  return ClockApp;
}
