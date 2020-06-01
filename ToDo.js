const edit = document.querySelector(".edit");
const del = document.querySelector(".delete");
const add = document.querySelector(".add");
const addText = document.querySelector(".addText");
const toDoList = document.querySelector(".TODoList");
const modalBtn = document.querySelector(".modalBtn");
const modalExit = document.querySelector(".modalExit");
const modalPage = document.getElementById("modalPage");

window.onload = function () {
  edit.addEventListener("click", editing);
  del.addEventListener("click", deleting);
  add.addEventListener("click", adding);
  modalBtn.addEventListener("click", openModal);
  modalExit.addEventListener("click", closeModal);
};
function editing() {
  if (this.parentElement.children[0].readOnly == true) {
    this.parentElement.children[0].readOnly = false;
  } else {
    this.parentElement.children[0].readOnly = true;
  }
}
function deleting() {
  this.parentElement.remove();
}
function adding() {
  let inputText = addText.value;
  if (inputText != "") {
    let liAdd = document.createElement("li");
    let inputAdd = document.createElement("input");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    liAdd.setAttribute("class", "toDO");
    inputAdd.setAttribute("type", "text");
    inputAdd.setAttribute("value", inputText);
    inputAdd.readOnly = true;
    editBtn.innerHTML = "수정";
    editBtn.setAttribute("class", "edit");
    editBtn.addEventListener("click", editing);
    deleteBtn.innerHTML = "삭제";
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.addEventListener("click", deleting);
    toDoList.appendChild(liAdd);
    liAdd.appendChild(inputAdd);
    liAdd.appendChild(editBtn);
    liAdd.appendChild(deleteBtn);
  } else {
    alert("한 단어 이상 입력해주십시오");
  }
  addText.value = null; //해당하는 변수를 가져오면 (inputText) 그 변수에 저장되어있는 값이 초기화된다.
}
function openModal() {
  modalPage.classList.add("active");
}
function closeModal() {
  modalPage.classList.remove("active");
}
