const todoValue = document.getElementById("todoText"),
 listItems = document.getElementById("list-items"),
 addUpdateClick = document.getElementById("AddUpdateClick");
 let updateText;
 let todoData = JSON.parse(localStorage.getItem("todo Data"))

todoValue.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        addUpdateClick.click();
    }
});

function CreateToDoDate() {
    if (todoValue.value=== ""){
        alert("please Enter your todo Text!");
        todoValue.focus();
    }

    let li = document.createElement("li");
    const todoItems = `<div ondblclick= "CompleteToDoItem(this)">${todoValue.value}</div> <div><img class = "edit todo-controls" onclick="UpdateToDoItems(this)"  src="pencil.png"><img class ="delete todo-controls" onclick= "DeleteToDoItems(this)" src= "delete.png"></div>`;

    li.innerHTML = todoItems;
    listItems.appendChild(li);
    todoValue.value = "";

    if (todoData){
        todoData = [];
    }

    let dataItem = {item: todoData.value, status: false};
    todoData.push(dataItem);
}

function CompleteToDoItem(e) {
    if  (e.parentElement.querySelector("div").style.textDecoration === "") {
        e.parentElement.querySelector("div").style.textDecoration ="line-through";
    }
}

function UpdateOnSelectionItems(){
    updateText.innerHTML= todoValue.value;
    addUpdateClick.setAttribute("onclick", "CompleteToDoItem()");
    addUpdateClick.setAttribute("src", "plus.png");
    todoValue.value = "";
}

function UpdateToDoItems(e) {
    if(e.parentElement.parentElement.querySelector("div").style.textDecoration === ""){
    todoValue.value =
        e.parentElement.parentElement.querySelector("div").innerText;
    addUpdateClick.setAttribute("onclick", "UpdateOnSelectionItems()");
    addUpdateClick.setAttribute("src", "refresh.png");
    updateText = e.parentElement.parentElement("div");
    }
}

function DeleteToDoItems(e) {
    let deleteValue = e.parentElement.parentElement.querySelector("div").innerText
    if (confirm(`Are You want to delete this ${deleteValue}!`));
    e.parentElement.parentElement.querySelector("div").remove();
}