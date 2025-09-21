/**
 * Main Script
 * - Loads all modules
 * - Starts rendering tasks once the page is ready
 */

// Import all event listeners
import "./events.js";
// Import render function for tasks
import { renderTasks } from "./tasks.js";

/**
 * Run renderTasks only after the DOM is fully loaded
 */
document.addEventListener("DOMContentLoaded", renderTasks);
