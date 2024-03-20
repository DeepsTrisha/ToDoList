function addTask() {
    var inputValue = document.getElementById("taskInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var li = document.createElement("li");
        var text = document.createTextNode(inputValue);
        li.appendChild(text);
        var taskList = document.getElementById("taskList");
        taskList.appendChild(li);

        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = "delete";
        li.appendChild(deleteBtn);
        deleteBtn.onclick = function() {
            var listItem = this.parentElement;
            listItem.style.display = "none";
        };
        li.onclick = function() {
            this.classList.toggle("completed");
        };
        document.getElementById("taskInput").value = "";
    }
}