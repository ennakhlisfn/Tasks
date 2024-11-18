let add = document.querySelector(".add");
let input = document.querySelector(".input");
let contenerOfTask = document.querySelector(".tasks");

input.value = window.sessionStorage.getItem("input");

input.onblur = function () {
  window.sessionStorage.setItem("input", `${input.value}`);
};

function creatTask(inputValue) {
  let task = document.createElement("div");
  let p = document.createElement("p");
  let but = document.createElement("button");

  but.textContent = "Delet";
  p.textContent = inputValue;
  task.className = "task";

  task.appendChild(p);
  task.appendChild(but);

  contenerOfTask.appendChild(task);
}

function updateLocalStorage() {
  let tasks = document.querySelectorAll("p");

  window.localStorage.clear();
  let i = 0;
  tasks.forEach((task) => {
    window.localStorage.setItem(`task${i}`, task.textContent);
    i++;
  });
}

add.onclick = function () {
  if (input.value === "") return;
  creatTask(input.value);
  window.sessionStorage.removeItem("input");
  input.value = "";
  updateLocalStorage();
};

document.addEventListener("click", function (e) {
  if (e.target.textContent !== "Delet" || e.target.nodeName !== "BUTTON")
    return;
  e.target.parentNode.remove();
  updateLocalStorage();
});

if (window.localStorage.length) {
  for (let i = 0; i < window.localStorage.length; i++) {
    creatTask(window.localStorage.getItem(`task${i}`));
  }
}

// tasks.appendChild(window.localStorage.getItem("saveTasks"));
