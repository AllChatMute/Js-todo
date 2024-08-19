"use strict";

const todoForm = document.querySelector(".todo__form");
const taskList = document.querySelector(".taskList");
const todoInput = document.querySelector(".todo__input");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (todoInput.value === "") {
    return;
  }

  const task = document.createElement("li");
  const taskBlock = document.createElement("span");
  taskBlock.setAttribute("class", "");
  taskList.appendChild(task);
  task.appendChild(taskBlock);
  taskBlock.textContent = todoInput.value;

  todoInput.value = "";

  const btnBlock = document.createElement("div");
  btnBlock.setAttribute("class", "btn-block");
  task.appendChild(btnBlock);

  const btnDel = document.createElement("button");
  btnDel.setAttribute("class", "todo__li-btn");
  btnDel.textContent = "Delete";
  btnBlock.appendChild(btnDel);

  btnDel.addEventListener("click", () => {
    btnDel.closest("li").remove();
  });

  const btnDone = document.createElement("button");
  btnDone.setAttribute("class", "todo__li-btn");
  btnDone.textContent = "✓";
  btnBlock.appendChild(btnDone);

  btnDone.addEventListener("click", () => {
    taskBlock.classList.toggle("active");
  });
});
