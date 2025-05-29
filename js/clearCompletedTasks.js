import fetchData from "./fetchData";
import renderData from "./renderData";
import saveTasks from "./saveTasks";

const clearCompletedBtn = document.getElementById("clear-Completed");

export const clearCompletedTasksListener = () => {
  const tasks = fetchData("tasks");
  const filterTasks = tasks.filter((task) => !task.isCompleted === true);
  saveTasks("tasks", filterTasks);
  renderData();
};

clearCompletedBtn.addEventListener("click", clearCompletedTasksListener);
