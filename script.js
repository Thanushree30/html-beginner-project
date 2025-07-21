function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value;
  if (task.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  // Delete on click
  li.onclick = function () {
    this.remove();
  };

  document.getElementById("taskList").appendChild(li);
  input.value = ""; // Clear input
}
