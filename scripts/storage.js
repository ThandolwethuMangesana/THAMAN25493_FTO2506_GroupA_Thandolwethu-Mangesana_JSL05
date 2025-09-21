/**
 * Storage Management Module
 * - Saves tasks to localStorage
 * - Loads tasks from localStorage
 */

import { initialTasks, allTasks } from "./initialData.js";

/**
 * Save allTasks array to localStorage
 */
export function saveTasksToStorage() {
  const allTasksJSON = JSON.stringify(allTasks);
  localStorage.setItem("allTasks", allTasksJSON);
}

/**
 * Load tasks from localStorage
 * - If nothing saved yet, load initialTasks instead
 * - Replace contents of allTasks with loaded data
 * @returns {array} allTasks after loading
 */
export function retrieveTasksFromStorage() {
  const savedTasks = localStorage.getItem("allTasks");

  // If nothing saved yet, use initialTasks and save them
  if (!savedTasks) {
    initialTasks.forEach((task) => {
      allTasks.push(task);
    });
    saveTasksToStorage();
    return allTasks;
  }

  try {
    // Parse JSON and replace allTasks with parsed data
    const parsedTasks = JSON.parse(savedTasks);
    allTasks.length = 0; // clear existing
    parsedTasks.forEach((task) => {
      allTasks.push(task);
    });
  } catch (error) {
    console.error("Error parsing JSON", error);
  }

  return allTasks;
}
