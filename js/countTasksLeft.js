import fetchData from "./fetchData";

export const countTasksLeft = () => {
  const itemCountElement = document.querySelector(
    ".todo__footer--itemLeft-count"
  );
  const tasks = fetchData("tasks");

  itemCountElement.innerText = tasks.filter(
    (task) => task.isCompleted === false
  ).length;
};
