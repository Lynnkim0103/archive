/*let itemList = [];

let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList(event) {
  event.preventDefault();
  let item = document.querySelector("#item").value;
  if (item != null) {
    itemList.push(item);
    document.querySelector("#item").value = "";
    document.querySelector("#item").focus();
  }
  showList();
}

function showList() {
  let list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    list += "<li>" + itemList[i] + "<span class='close' id=" + i +"> X </span></li>"
  }
  list += "</ul>";

  document.querySelector("#itemList").innerHTML = list;

  let remove = document.querySelectorAll(".close");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

  function removeList() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}*/

// document.querySelector("#detail h3").style.visibility = "hidden"
// document.querySelector("#detail p").style.visibility = "hidden"

// document.getElementsByClassName("accent")[1].style.textDecoration="underline";
// document.getElementsByClassName("accent")[0].style.textDecoration="underline";
// document.getElementsByTagName("h2")[0].style.backgroundColor="#eee";

// document.querySelectorAll(".accent")[1].style.backgroundColor = "yellow";

/*let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".small");

for (let i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", changePic);
}*/

function changePic() {
  let newPic = this.src;
  bigPic.setAttribute("src", newPic)
}

let isOpen = false;
let view = document.querySelector("#view");
view.addEventListener("click", pageOpen);

function pageOpen() {
  if(isOpen == false) {
    document.querySelector("#detail").style.display = "block";
    view.innerHTML = "상세 설명 닫기";
    isOpen = true;
  } else {
      document.querySelector("#detail").style.display = "none"
      view.innerHTML = "상세 설명 보기"
      isOpen = false;
  }
}