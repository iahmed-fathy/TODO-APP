import { countTasksLeft } from "./countTasksLeft";
import fetchData from "./fetchData";
import saveTasks from "./saveTasks";

const markCircle = () => document.querySelectorAll(".mark-circle");

export default function markCompletedTask() {
  markCircle().forEach((element, index) => {
    element.addEventListener("click", () => {
      let isComplete = element.classList.toggle("Complete");
      const tasks = fetchData("tasks");
      if (tasks.length) tasks[index].isCompleted = isComplete;
      saveTasks("tasks", tasks);
      countTasksLeft();
    });
  });
}
