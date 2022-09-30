export function getDate(locale) {
  const day = new Date().getDate();
  const month = new Date().toLocaleDateString(locale, { month: "long" });
  const year = new Date().getFullYear();
  return `${day} de ${month} de ${year}`;
}

export function getHoursWithSeconds(showSeconds) {
  const HH = new Date().getHours();
  const MM = new Date().getMinutes();
  const SS = new Date().getSeconds();

  if (showSeconds) {
    return `${HH}:${MM}:${SS}`;
  }

  return `${HH}:${MM}`;
}
