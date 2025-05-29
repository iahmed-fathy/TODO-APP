import { taskList } from "./renderData";
import saveTasks from "./saveTasks";
document.addEventListener("DOMContentLoaded", () => {
  let draggedItem = null;
  taskList.addEventListener("dragstart", (e) => {
    e.target.classList.add("is-draging");
    if (e.target && e.target.nodeName === "LI") {
      draggedItem = e.target;
    }
  });
  taskList.addEventListener("dragover", (e) => {
    e.preventDefault();
    const target = e.target.closest("li");
    if (target && target != draggedItem) {
      taskList.insertBefore(draggedItem, target);
    }
  });
  taskList.addEventListener("dragend", (e) => {
    e.target.classList.remove("is-draging");
  });

  taskList.addEventListener("drop", (e) => {
    e.preventDefault();
    const newOrder = Array.from(taskList.children).map((element) => ({
      value: element.querySelector("p").textContent,
      isCompleted: element
        .querySelector(".mark-circle")
        .classList.contains("Complete"),
    }));
    saveTasks("tasks", newOrder);
  });
});
