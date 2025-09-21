# Task Board with Local Storage Persistence and Task Creation

## Overview

This project, yoimplements a task management system where **tasks are persisted in local storage**, ensuring that tasks remain available even after refreshing the page or reopening the application. Users will be able to **add new tasks**, with the task details being **stored in local storage** and displayed in the appropriate **columns** ("To Do", "Doing", "Done"). The application should also include an **Add Task** modal for creating new tasks.

## Key Outcomes

### Persistent Task Storage & Retrieval

- **Saves tasks to local storage**: On page load, the application **load tasks** from local storage so that the latest task list is available, even after a refresh.
-  It Ensures that **tasks are saved in local storage** every time a new task is added and that tasks persist after the page refreshes.
- **Load tasks** from local storage on startup, users can see the latest tasks without manually re-entering them.
- Tasks are categorized correctly into their respective columns (e.g., "To Do", "Doing", "Done") based on their **status** when loaded from local storage.
- Provides an "Add Task" button that, when clicked, opens a modal for creating a new task.
- The modal  includes:
- Fields for entering the task title and description.
- A dropdown to select the task status ("To Do", "Doing", "Done").
- A submit button to add the new task to the task board immediately.
- After submitting, the task should appear on the board without requiring a page refresh.

## Technologies

- HTML
- CSS
- JavaScript

## Design & Responsiveness

- The **"Add New Task" modal** should match the [Figma design](https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=0-1&p=f&t=NNqgDPlU1PNLLh8i-0), including mobile-responsive behavior.
- Ensure that the modal and task board are **fully responsive** and function properly on both desktop and mobile devices.
- The "Add Task" button should **transform** appropriately on mobile devices to match the Figma design.

## Code Structure & Maintainability

- **Modularized JavaScript code**: Broke my code into separate modules, each handling a **single responsibility** (e.g., local storage handling, task rendering, modal management).
- Used **descriptive variable and function names** to ensure the code is clear and easy to maintain.
- Included **JSDoc comments** for every major function and module to describe their functionality, parameters, and return values.

## setup Instructions

- Clone the repository git clone [https://github.com/ThandolwethuMangesana/THAMAN25493_FTO2506_GroupA_Thandolwethu-Mangesana_JSL05.git]
- Open the project folder Navigate to the directory where the files are stored
- Run locally Open index.html in your preferred browser (Chrome, Firefox, etc.). The task input prompts will appear automatically.


