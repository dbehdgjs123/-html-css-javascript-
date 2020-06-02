const edit = document.querySelector(".edit");
const del = document.querySelector(".delete");
const add = document.querySelector(".add");
const addText = document.querySelector(".addText");
const toDoList = document.querySelector(".TODoList");
const modalBtn = document.querySelector(".modalBtn");
const modalExit = document.querySelector(".modalExit");
const modalPage = document.getElementById("modalPage");
const menuBtn = document.querySelector(".menu_icon");
const sideMenu = document.getElementById("side-nav");

window.onload = function () {
  edit.addEventListener("click", editing);
  del.addEventListener("click", deleting);
  add.addEventListener("click", adding);
  modalBtn.addEventListener("click", openModal);
  modalExit.addEventListener("click", closeModal);
  menuBtn.addEventListener("click", showMenu);
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
    liAdd.setAttribute("class", "toDO");
    liAdd.innerHTML = `<input type="text" value= ${inputText} readonly /><button class="edit">수정</button><button class="delete">삭제</button>`;
    liAdd.children[1].addEventListener("click", editing);
    liAdd.children[2].addEventListener("click", deleting);
    toDoList.appendChild(liAdd);
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
function showMenu() {
  sideMenu.classList.toggle("active");
}
