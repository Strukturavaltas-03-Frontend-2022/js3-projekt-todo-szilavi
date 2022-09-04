// let testInfo = [
//   { name: "István", status: "Boss" },
//   { name: "Péter", status: "worker" },
//   { name: "Sándor", status: "worker" },
// ];

// const localStorage = {
//   setItem: function (key, value) {
//     value = JSON.stringify(value);
//     console.log(value);
//     localStorage.setItem(key, value);
//   },
//   getItem(key) {
//     const value = localStorage.getItem(key);
//     return JSON.parse(value);
//   },
//   removeItem(key) {
//     localStorage.removeItem(key);
//   },
// };

//console.log(localStorage.getItem("testelek2"));

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
  inputText = input.value;
  console.log(`clickre látja a ${inputText}-t`);
  if (inputText === "") {
    return;
  } else if (inputText !== "") {
    removeAndPushInput();
    counter++;
    console.log(`a számláló ${counter}, ami látszódik talán`);
    counterRefresh(counter); // ez itt valamiért nem működik
  }
}

//pusholom az inputot és kitörlöm, ahonnan jön

function removeAndPushInput() {
  console.log(`megvan a berít szöveg: ${inputText}`);
  (function createtoDO() {
    console.log(`az új div is elkészül a ${inputText}-al`);
    toDoList.innerHTML += ` <div class="toDo__list__notCompleted--item">
                            <div><input class="checker" type="radio" name="checker" id="checker"></div>
                            <div class="toDo__item__notCompleted--text"><p>${inputText}</p></div>
                            <div><button class="trashButton"><i class="fa-solid fa-trash"></i></button></div>
                            </div>`;
    const checker = document.querySelector(".checker");
  })();
  (function removeInput() {
    input.value = "";
  })();
}

//checker figyelő, ami átrakja az elvégzettek közé a feladatot
