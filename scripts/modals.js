/**
 * Modal Management Module
 * - Shows and hides modals
 * - Fills modals with the correct task data
 */

// Task info elements inside the modal
const taskTitle = document.getElementById("task-title");
const taskDescription = document.getElementById("task-description");
const taskStatus = document.getElementById("task-status");

// Modal elements
const taskModal = document.getElementById("task-modal-container");
export const newTaskModal = document.getElementById("add-task-modal-container");
export const newTaskForm = document.getElementById("add-task-form");

// Error message elements
export const titleErrorMsg = document.getElementById("title-error-msg");
export const descriptionErrorMsg = document.getElementById("description-error-msg");

// Stores the task currently selected by the user
export let selectedTask;

/**
 * Show the task modal with the info from the selected task
 * @param {object} task - The task to display
 */
export function displayTaskModal(task) {
  selectedTask = task;

  // Fill in the modal with task details
  taskTitle.textContent = task.title;
  taskDescription.textContent = task.description;
  taskStatus.value = task.status;

  // Make the modal visible
  taskModal.classList.add("visible");
}

/**
 * Hide all modals and reset the add-task form
 */
export function closeModals() {
  // Hide both modals
  taskModal.classList.remove("visible");
  newTaskModal.classList.remove("visible");

  // Reset the form inputs
  newTaskForm.reset();

  // Hide any error messages
  titleErrorMsg.classList.remove("visible");
  descriptionErrorMsg.classList.remove("visible");
}
