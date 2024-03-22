var tasks = [];

function addTask() {
    var inputValue = document.getElementById("taskInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        
        var task = {
            text: inputValue,
            completed: false
        };
        
        tasks.push(task);

        renderTasks();

        document.getElementById("taskInput").value = "";
    }
}


function renderTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 
    
    tasks.forEach(function(task, index) {
        var li = document.createElement("li");
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add("completed");
        }
        
        li.addEventListener("click", function() {
            var newTask = prompt("Edit task", task.text);
            if (newTask !== null) {
                task.text = newTask;
                renderTasks(); 
            }
            var markCompleted = confirm("Mark this task as completed?");
            if (markCompleted) {
                task.completed = !task.completed;
                renderTasks(); 
            }
        });
        
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", function(event) {
            event.stopPropagation(); 
            tasks.splice(index, 1); 
            renderTasks(); 
        });
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

renderTasks();
