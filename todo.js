let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
displayItems();
function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  //let [day, month, year] = todoDate.split("/");
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";
  saveToLocalStorage();
  displayItems();
}

function saveToLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete"  onclick="todoList.splice(${i}, 1);saveToLocalStorage();displayItems();">Delete</button>
    `;
  }

  containerElement.innerHTML = newHtml;
}
