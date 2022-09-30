export function getDate(locale) {
  const day = new Date().getDate();
  const month = new Date().toLocaleDateString(locale, { month: "long" });
  const year = new Date().getFullYear();
  return `${day} de ${month} de ${year}`;
}

export function ClockApp() {
  const ClockApp = document.createElement("div");
  const TimeText = document.createElement("h1");
  const HourLabel = document.createElement("p");
  HourLabel.textContent = getDate("pt-br");

  ClockApp.append(TimeText, HourLabel);

  setInterval(() => {
    let HH = new Date().getHours();
    let MM = new Date().getMinutes();
    let SS = new Date().getSeconds();

    let htmlContent = `${HH}:${MM}:${SS}`;
    TimeText.textContent = htmlContent;
  }, 1000);

  return ClockApp;
}
