// JavaScript code goes here
        const taskInput = document.getElementById("taskInput");
        const taskList = document.getElementById("taskList");
        const addTaskButton = document.getElementById("add-task-button");

        addTaskButton.addEventListener("click", addTask);
        taskInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                addTask();
            }
        });

        function addTask() {
            const taskText = taskInput.value;
            if (taskText.trim() !== "") {
                const li = document.createElement("li");
                const span = document.createElement("span");
                const editInput = document.createElement("input");
                const editButton = document.createElement("button");
                const removeButton = document.createElement("button");

                span.textContent = taskText;
                editInput.type = "text";
                editInput.value = taskText;
                editButton.textContent = "Edit";
                removeButton.textContent = "Remove";

                li.appendChild(span);
                li.appendChild(editInput);
                li.appendChild(editButton);
                li.appendChild(removeButton);

                taskList.appendChild(li);

                editInput.style.display = "none";

                editButton.addEventListener("click", function () {
                    toggleEditInput(li);
                });

                editInput.addEventListener("keypress", function (event) {
                    if (event.key === "Enter") {
                        saveEditedTask(li, editInput.value);
                        toggleEditInput(li);
                    }
                });

                removeButton.addEventListener("click", function () {
                    li.classList.add("strikethrough");
                    setTimeout(function () {
                        li.remove();
                    }, 1000);
                });

                taskInput.value = "";
            } else {
                alert("Please enter a task.");
            }
        }

        function toggleEditInput(li) {
            const span = li.querySelector("span");
            const editInput = li.querySelector("input[type='text']");

            if (span.style.display === "none") {
                span.style.display = "inline";
                editInput.style.display = "none";
            } else {
                span.style.display = "none";
                editInput.style.display = "inline";
                editInput.focus();
            }
        }

        function saveEditedTask(li, newText) {
            const span = li.querySelector("span");
            span.textContent = newText;
        }