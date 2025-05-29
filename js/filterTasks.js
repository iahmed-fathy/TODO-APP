import fetchData from "./fetchData";

const allBtn = document.querySelector(".filter-all");
const activeBtn = document.querySelector(".filter-active");
const completedBtn = document.querySelector(".filter-completed");
const taskslistTask = () => document.querySelectorAll(".tasks__list--task");

const filterTasks = (filterType) => {
  const tasks = fetchData("tasks");
  taskslistTask().forEach((element, index) => {
    const isCompleted = tasks[index]?.isCompleted;
    switch (filterType) {
      case "all":
        element.style.display = "flex";
        break;
      case "active":
        element.style.display = !isCompleted ? "flex" : "none";
        break;
      case "completed":
        element.style.display = isCompleted ? "flex" : "none";
        break;
    }
  });
};

allBtn.addEventListener("click", () => filterTasks("all"));
activeBtn.addEventListener("click", () => filterTasks("active"));
completedBtn.addEventListener("click", () => filterTasks("completed"));
