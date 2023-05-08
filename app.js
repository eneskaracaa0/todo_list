const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addNewItem);

    taskList.addEventListener("click", deleteItem);

    btnDeleteAll.addEventListener("click", deleteAllItems);
}

//add new item
function addNewItem(e) {
    if (input.value === "") {
        alert("add new item");
    }

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));

    const a = document.createElement("a");
    a.classList = "delete-item float-end";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    // li ekleme işlemi
    li.appendChild(a);

    //ul ekleme
    taskList.appendChild(li);

    //clear
    input.value = "";

    e.preventDefault();
}

//single delete item
function deleteItem(e) {
    if (confirm("Are you sure?")) {
        if (e.target.className === "fas fa-times") {
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}

//all li item remove

function deleteAllItems() {
    if (confirm("are you sure")) {
        taskList.innerHTML = "";
    }
    e.preventDefault();
}