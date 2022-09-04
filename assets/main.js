
/*
let todoItems = [
   { title: "work", isDone: false },
   { title: "lunch", isDone: true },
   { title: "shopping", isDone: true }
 ];
*/
function testTodoItems() {
  todoItems = [
    { title: "work", isDone: false },
    { title: "lunch", isDone: true },
    { title: "shopping", isDone: true }
  ]
  updateLocalStorage();
}


let todoItems = JSON.parse(localStorage.getItem('todoItems'));

function updateLocalStorage() {
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

function renderTodoItems() {
  const todoListCompleted = document.querySelector('.toDo__list__completed');
  todoListCompleted.innerHTML = '';
  const todoListNotCompleted = document.querySelector('.toDo__list__notCompleted');
  todoListNotCompleted.innerHTML = '';

  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].isDone) {
      todoListCompleted.innerHTML += ` <div class="toDo__list__Completed--item">
                      <div><input class="checker" checked type="checkbox" name="checker"></div>
                      <div class="toDo__item__Completed--text"><p>${todoItems[i].title}</p></div>
                      </div>`
    } else {
      todoListNotCompleted.innerHTML += ` <div class="toDo__list__notCompleted--item">
                      <div><input class="checker" type="checkbox" name="checker"></div>
                      <div class="toDo__item__notCompleted--text"><p>${todoItems[i].title}</p></div>
                      <div><button class="trashButton" onclick="removeTodoItem(${i})"><i class="fa-solid fa-trash"></i></button></div>
                      </div>`;

    }
  }
}

renderTodoItems()

const showDate = document.querySelector(".date__dateTime");
const showDateDay = document.querySelector(".date__day");
const input = document.querySelector(".input__toDo");
const plusButton = document.querySelector(".plusButton");
const toDoList = document.querySelector(".toDo__list__notCompleted");
const toDoCounter = document.querySelector(".toDoCounter");
let counter = 0;

//ezt itt gyors létrehozta, mai a számláló értéket belerakja a html-be
function counterRefresh(counter) {
  toDoCounter.textContent = "counter";
} // valamiért nem működik

//Dátum mutatása

function refreshDate() {
  const date = new Date().toLocaleDateString("hu-HU", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const dateDay = new Date().toLocaleDateString("hu-HU", {
    weekday: "long",
  });
  showDateDay.innerHTML = dateDay.charAt(0).toUpperCase() + dateDay.slice(1);
  showDate.innerHTML = date;
}

refreshDate();

//input mező kezelése

plusButton.addEventListener("click", clickAddButton);

function clickAddButton() {
  console.log(`clickre látja a ${input.value}-t`);
  if (input.value === "") {
    return;
  } else if (input.value !== "") {
    removeAndPushInput(input.value);
    input.value = "";
    counter++;
    console.log(`a számláló ${counter}, ami látszódik talán`);
    counterRefresh(counter); // ez itt valamiért nem működik
  }
}

//pusholom az inputot és kitörlöm, ahonnan jön

function removeAndPushInput(inputText) {
  console.log(`megvan a berít szöveg: ${inputText}`);
  todoItems.push({ title: inputText, isDone: false })
  renderTodoItems()
  updateLocalStorage()



}

function removeTodoItem(i) {
  todoItems.splice(i, 1)
  renderTodoItems()
  updateLocalStorage()
}
//checker figyelő, ami átrakja az elvégzettek közé a feladatot
