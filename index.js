let listContainer = document.getElementById("list-container");
let inputBox = document.getElementById("input-box");

const handleClick = () => {
  let text = inputBox.value;
  if (text === "") {
    alert("You must enter some text..");
  } else {
    let li = document.createElement("li");
    li.innerHTML = text;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "<img src='images/delete.png' />";
    li.appendChild(span);
  }
  inputBox.value = "";
  storeTasks();
};

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      storeTasks();
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.parentElement.remove();
      storeTasks();
    }
  },
  false
);

const storeTasks = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTasks = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showTasks();
