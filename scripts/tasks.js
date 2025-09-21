/**
 * Task Management Module
 * - Adds and deletes tasks
 * - Sorts tasks into the right columns
 * - Shows tasks on the page
 */

// Import needed functions/variables
import { displayTaskModal } from "./modals.js";
import { allTasks } from "./initialData.js";
import { retrieveTasksFromStorage, saveTasksToStorage } from "./storage.js";

// Inputs from the add-task form
export const titleInput = document.getElementById("add-task-title");
export const descriptionInput = document.getElementById("add-task-description");
export const statusInput = document.getElementById("add-task-status");

/**
 * Get the container element for a task status
 * @param {string} status - "todo", "doing" or "done"
 * @returns The container element for that status
 */
export function getTaskContainerByStatus(status) {
  return document.getElementById(`${status}-tasks-container`);
}

/**
 * Clear all tasks currently shown in the UI
 */
export function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Create a new task object from the input fields
 * @returns {object} The new task
 */
export function getNewTask() {
  return {
    id: allTasks.length + 1,
    title: titleInput.value,
    description: descriptionInput.value,
    status: statusInput.value,
  };
}

/**
 * Add a new task to the array and save to storage
 * @param {object} task - The new task
 */
export function addTask(task) {
  allTasks.push(task);
  saveTasksToStorage();
}

/**
 * Build the HTML element for one task
 * @param {object} task - A task object
 * @returns {HTMLElement} A new div element with task info
 */
export function createTaskElement(task) {
  const newDiv = document.createElement("div");

  newDiv.textContent = task.title;
  newDiv.dataset.taskId = task.id;
  newDiv.classList.add("task-div");

  // Show task details when clicked
  newDiv.addEventListener("click", function () {
    displayTaskModal(task);
  });

  return newDiv;
}

/**
 * Put a task into the right container on the page
 * @param {object} task - A task object
 */
export function assignTasks(task) {
  const tasksContainer = getTaskContainerByStatus(task.status);
  const taskDiv = createTaskElement(task);

  if (tasksContainer) {
    tasksContainer.appendChild(taskDiv);
  }
}

/**
 * Remove a task from the array and save to storage
 * @param {object} task - The task to delete
 */
export function deleteTask(task) {
  const indexToRemove = allTasks.indexOf(task);

  allTasks.splice(indexToRemove, 1);
  saveTasksToStorage();
}

/**
 * Load tasks from storage, clear the UI, then show all tasks
 */
export function renderTasks() {
  const tasks = retrieveTasksFromStorage();
  clearExistingTasks();
  tasks.forEach(assignTasks);
}
