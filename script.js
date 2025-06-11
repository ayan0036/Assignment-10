const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task";
  li.textContent = taskText;
  li.classList.add("lis");
  li.addEventListener("contextmenu" , fun);
    function fun () {
    taskList.removeChild(li);
  }

  taskList.appendChild(li);
  taskInput.value = "";
});
