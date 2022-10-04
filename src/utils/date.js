export function getWeekDay(locale) {
  return new Date().toLocaleDateString(locale, { weekday: "short" });
}

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

export const week = [
  { label: "Segunda-feira", value: "seg." },
  { label: "Terça-feira", value: "ter." },
  { label: "Quarta-feira", value: "qua." },
  { label: "Quinta-feira", value: "qui." },
  { label: "Sexta-feira", value: "sex." },
  { label: "Sábado", value: "sáb." },
  { label: "Domingo", value: "dom." },
];

export const hours = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];
