import fetchData from "./fetchData";
import renderData from "./renderData";
import saveTasks from "./saveTasks";

const form = document.getElementById("todo-form");
const input = document.getElementById("new-todo");

// input focus
form.addEventListener("click", () => {
  input.focus();
});

const addTask = (event) => {
  event.preventDefault();
  let tasks = fetchData("tasks");
  const task = {
    value: input.value,
    isCompleted: false,
  };
  tasks.push(task);
  saveTasks("tasks", tasks);
  renderData();
  input.value = ``;
};
form.addEventListener("submit", addTask);
