import fetchData from "./fetchData";
import renderData from "./renderData";
import saveTasks from "./saveTasks";

const deleteIcon = () => document.querySelectorAll(".deleteIcon");

const addDeleteEvent = () => {
  deleteIcon().forEach((element, index) => {
    let tasks = fetchData("tasks");
    element.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks("tasks", tasks);
      renderData();
    });
  });
};

export { addDeleteEvent };
