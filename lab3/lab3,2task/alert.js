document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
  
      const li = document.createElement("li");
  
      const taskLeft = document.createElement("div");
      taskLeft.classList.add("task-left");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function () {
        taskSpan.classList.toggle("completed", checkbox.checked);
      });
  
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
  
      taskLeft.appendChild(checkbox);
      taskLeft.appendChild(taskSpan);
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
      });
  
      li.appendChild(taskLeft);
      li.appendChild(deleteBtn);

      taskList.appendChild(li);
  
      taskInput.value = "";
    }
  
    addTaskBtn.addEventListener("click", addTask);
  
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });