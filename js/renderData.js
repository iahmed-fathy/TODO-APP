import iconCheck from "../images/icon-check.svg";
import deleteIcon from "../images/icons8-delete-48.png";
import { countTasksLeft } from "./countTasksLeft";
import fetchData from "./fetchData";
import markCompletedTask from "./markCompletedTask";
import { addDeleteEvent } from "./removeTask";

export const taskList = document.querySelector(".tasks__list");

export default function renderData() {
  const tasks = fetchData("tasks");
  let tasksContainer = "";
  tasks.forEach((element) => {
    tasksContainer += `
          <li class="tasks__list--task" draggable="true">
            <div class="task-content">
              <div class="mark-circle ${
                element.isCompleted ? "Complete" : false
              }">
                <img class="icon-check" src="${iconCheck}" alt="check icon"/>
              </div>
              <p>${element.value}</p>
            </div>
            <img class="deleteIcon" src="${deleteIcon}" alt="delete icon"/>
          </li>
`;
  });
  taskList.innerHTML = tasksContainer;
  countTasksLeft();
  addDeleteEvent();
  markCompletedTask();
}

renderData();
