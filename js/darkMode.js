import fetchData from "./fetchData";
import saveTasks from "./saveTasks";

const navbarIcon = document.querySelector(".navbar__icon");
const app = document.querySelector(".app");

const changeMode = () => {
  const theme = app.classList.toggle("is-dark");
  saveTasks("theme", theme);
};

navbarIcon.addEventListener("click", changeMode);

// Fetch Last Mode
if (fetchData("theme") === true) {
  app.classList.add("is-dark");
}
