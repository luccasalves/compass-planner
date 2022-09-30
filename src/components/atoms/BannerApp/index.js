import "./styles.scss";

export function BannerApp(title, text) {
  const BannerApp = document.createElement("section");
  BannerApp.setAttribute("class", "banner");

  BannerApp.insertAdjacentHTML(
    "beforeend",
    `
  <h1 class="banner__title">${title}</h1> 
  <p class="banner__text"> ${text}</p>
  `
  );

  return BannerApp;
}
