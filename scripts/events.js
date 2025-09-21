/**
 * Event Management Module
 * - Adds all event listeners
 * - Handles form validation and task actions
 */

// Import needed functions/variables
import {
  closeModals,
  selectedTask,
  newTaskModal,
  newTaskForm,
  titleErrorMsg,
  descriptionErrorMsg,
} from "./modals.js";
import {
  getNewTask,
  renderTasks,
  deleteTask,
  titleInput,
  descriptionInput,
  addTask,
} from "./tasks.js";
import { saveTasksToStorage } from "./storage.js";

// Buttons
const newTaskBtn = document.getElementById("add-task-btn");
const deleteTaskBtn = document.getElementById("delete-task-btn");
const modalCloseBtn = document.querySelectorAll(".task-modal-close-btn");

// === Open Add Task Modal ===
newTaskBtn.addEventListener("click", function () {
  newTaskModal.classList.add("visible");
});

// === Close any modal when its "X" button is clicked ===
modalCloseBtn.forEach((button) => {
  button.addEventListener("click", function () {
    closeModals();
  });
});

// === Handle Add Task form submit ===
newTaskForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop page reload
  const newTask = getNewTask();

  // Validate: title must not be empty
  if (newTask.title.trim() === "") {
    titleErrorMsg.textContent = "❗Please fill out this field.";
    titleErrorMsg.classList.add("visible");
    return;
  }
  // Validate: description must not be empty
  if (newTask.description.trim() === "") {
    descriptionErrorMsg.textContent = "❗Please fill out this field.";
    descriptionErrorMsg.classList.add("visible");
    return;
  }

  // Add the new task
  addTask(newTask);

  // Refresh task list and close modal
  renderTasks();
  closeModals();
});

// === Hide error messages when user types ===
titleInput.addEventListener("input", () => {
  titleErrorMsg.classList.remove("visible");
});
descriptionInput.addEventListener("input", () => {
  descriptionErrorMsg.classList.remove("visible");
});

// === Delete selected task ===
deleteTaskBtn.addEventListener("click", function () {
  deleteTask(selectedTask);
  saveTasksToStorage();
  renderTasks();
  closeModals();
});
