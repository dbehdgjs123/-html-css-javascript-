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

let isClick = false; //클릭 되었으면 잠시 뒤 클릭 될 수 있게 선언
let sliderPage = 1; //슬라이더 페이지수 초기화
const sliderContain = document.querySelector(".slider_box_contain");
const sliderLeft = document.querySelector(".slider_box_btn_left");
const sliderRight = document.querySelector(".slider_box_btn_right");
sliderContain.style.transform = `translateX(${sliderPage * -325}px)`; //두번째 요소(두번째 자식)부터 시작해야함.

let isAutoClick = false;
let autoSliderPage = 1;
const autoSliderContain = document.querySelector(".auto_slider_box_contain");
const autoSliderBtnBox = document.querySelector(".slider_box_btn_auto");
const autoSliderOne = document.querySelector(".auto_btn_one");
const autoSliderTwo = document.querySelector(".auto_btn_two");
const autoSliderThree = document.querySelector(".auto_btn_three");
autoSliderContain.style.transform = `translateX(${autoSliderPage * -325}px)`; //두번째 요소(두번째 자식)부터 시작해야함.
autoSliderOne.style.backgroundColor = "White";

const dragBoxes = document.querySelectorAll(".drag_box");
const imgBoxes = document.querySelectorAll(".drag_imgbox");

window.onload = function () {
  edit.addEventListener("click", editing);
  del.addEventListener("click", deleting);
  add.addEventListener("click", adding);
  modalBtn.addEventListener("click", openModal);
  modalExit.addEventListener("click", closeModal);
  menuBtn.addEventListener("click", showMenu);
  sliderLeft.addEventListener("click", leftMove);
  sliderRight.addEventListener("click", rightMove);
  sliderContain.addEventListener("transitionend", sliderReset);
  autoSliderOne.addEventListener("click", oneMove);
  autoSliderTwo.addEventListener("click", twoMove);
  autoSliderThree.addEventListener("click", threeMove);
  autoSliderContain.addEventListener("transitionend", autoSliderReset);
  autoSliderContain.addEventListener("transitionstart", autoBtnColor);
  setInterval(autoMove, 3000);

  for (const box of dragBoxes) {
    box.addEventListener("drop", dropped);
    box.addEventListener("dragover", dropping);
  }
  for (const imgbox of imgBoxes) {
    imgbox.addEventListener("drop", imgDropped);
    imgbox.addEventListener("dragover", imgDropping);
    imgbox.addEventListener("dragleave", imgDropLeave);
  }
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
/*일반 슬라이더 움직임*/
function leftMove() {
  if (sliderPage > 0 && isClick === false) {
    sliderContain.style.transition = "all 0.5s ease-in-out";
    sliderPage--;
    sliderContain.style.transform = `translateX(${sliderPage * -325}px)`;
    isClick = true;
  } else {
    return;
  }
  setTimeout(function () {
    isClick = false;
  }, 1000);
}
function rightMove() {
  if (sliderPage < 4 && isClick === false) {
    sliderContain.style.transition = "all 0.5s ease-in-out";
    sliderPage++;
    sliderContain.style.transform = `translateX(${sliderPage * -325}px)`;
    isClick = true;
  } else {
    return;
  }
  setTimeout(function () {
    isClick = false;
  }, 1000);
}

function sliderReset() {
  if (sliderPage === 4) {
    sliderContain.style.transition = "all 0.5s ease-in-out";
    sliderPage = 1;
    sliderContain.style.transition = "none";
    sliderContain.style.transform = `translateX(${sliderPage * -325}px)`;
  } else if (sliderPage === 0) {
    sliderPage = 3;
    sliderContain.style.transition = "none";
    sliderContain.style.transform = `translateX(${sliderPage * -325}px)`;
  }
}

/*자동 슬라이더 움직임*/

function autoMove() {
  if (isAutoClick === false && autoSliderPage < 4) {
    autoSliderPage++;
    autoSliderContain.style.transition = "all 0.5s ease-in-out";
    autoSliderContain.style.transform = `translateX(${
      autoSliderPage * -325
    }px)`;
    isAutoClick = true;
  } else {
    return;
  }
  setTimeout(function () {
    isAutoClick = false;
  }, 1000);
}

function oneMove() {
  if (isAutoClick === false) {
    autoSliderPage = 1;
    autoSliderContain.style.transition = "all 0.5s ease-in-out";
    autoSliderContain.style.transform = `translateX(${
      autoSliderPage * -325
    }px)`;
    isAutoClick = true;
  } else {
    return;
  }
  setTimeout(function () {
    isAutoClick = false;
  }, 1000);
}
function twoMove() {
  if (isAutoClick === false) {
    autoSliderPage = 2;
    autoSliderContain.style.transition = "all 0.5s ease-in-out";
    autoSliderContain.style.transform = `translateX(${
      autoSliderPage * -325
    }px)`;
    isAutoClick = true;
  } else {
    return;
  }
  setTimeout(function () {
    isAutoClick = false;
  }, 1000);
}

function threeMove() {
  if (isAutoClick === false) {
    autoSliderPage = 3;
    autoSliderContain.style.transition = "all 0.5s ease-in-out";
    autoSliderContain.style.transform = `translateX(${
      autoSliderPage * -325
    }px)`;
    isAutoClick = true;
  } else {
    return;
  }
  setTimeout(function () {
    isAutoClick = false;
  }, 1000);
}

function autoSliderReset() {
  if (autoSliderPage === 4) {
    autoSliderContain.style.transition = "all 0.5s ease-in-out";
    autoSliderPage = 1;
    autoSliderContain.style.transition = "none";
    autoSliderContain.style.transform = `translateX(${
      autoSliderPage * -325
    }px)`;
  } else if (autoSliderPage === 0) {
    autoSliderPage = 3;
    autoSliderContain.style.transition = "none";
    autoSliderContain.style.transform = `translateX(${
      autoSliderPage * -325
    }px)`;
  }
}
function autoBtnColor() {
  //페이지에 따라 버튼색도 바뀜
  if (autoSliderPage === 1) {
    autoSliderOne.style.backgroundColor = "White";
    autoSliderTwo.style.backgroundColor = "gray";
    autoSliderThree.style.backgroundColor = "gray";
  } else if (autoSliderPage === 2) {
    autoSliderOne.style.backgroundColor = "gray";
    autoSliderTwo.style.backgroundColor = "White";
    autoSliderThree.style.backgroundColor = "gray";
  } else if (autoSliderPage === 3) {
    autoSliderOne.style.backgroundColor = "gray";
    autoSliderTwo.style.backgroundColor = "gray";
    autoSliderThree.style.backgroundColor = "White";
  } else if (autoSliderPage === 4) {
    autoSliderOne.style.backgroundColor = "White";
    autoSliderTwo.style.backgroundColor = "gray";
    autoSliderThree.style.backgroundColor = "gray";
  }
}

function drag(e) {
  //드래그 시작했을때
  e.dataTransfer.setData("redBox", e.target.id);
  setTimeout(
    () => e.target.classList.add("droping_box"), //드래그한 요소 없어지는 효과
    0
  );
}

function dropped(e) {
  //드롭되었을때
  e.preventDefault(); //기본 동작 방지 (링크로 열거나. 클릭 되는 등)
  let data = e.dataTransfer.getData("redBox");
  e.target.appendChild(document.getElementById(data));
}
function dropping(e) {
  //드롭한 아이템이 요소위를 지나갈때
  e.preventDefault(); //기본 동작 방지 (원래 데이터/요소는 다른 요소에 드롭 x)
}
function dragEnd(e) {
  e.target.classList.remove("droping_box");
}
function imgDropped(e) {
  console.log("dorpped");
  e.preventDefault();
  let files = e.target.files || e.dataTransfer.files;

  if (files.length > 1) {
    alert("파일은 최대 하나를 추가할 수 있습니다.");
    return;
  }
  if (files[0].type.match("image/*")) {
    e.target.style.backgroundImage = `url(${window.URL.createObjectURL(
      files[0]
    )})`;
    e.target.style.backgroundSize = "100% 100%";
  } else {
    alert("이미지 파일만 가능합니다.");
  }
}
function imgDropping(e) {
  e.preventDefault();
}
function imgDropLeave(e) {
  console.log("leave");
}
