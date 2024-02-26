// menu image showing
function changeMenu(menuType) {
  var menuImage = document.getElementById("menu-img");
  var imagePaths = {
    desert: "assets/DesertMenu.png",
    autumn: "assets/menuWine1.png",
    sandwich: "assets/sandwich1.png",
    children: "assets/childrenMenu.png",
    mazak_tha_mazak: "assets/Money.avif",
  };
  menuImage.src = imagePaths[menuType];
  menuImage.alt = menuType + " menu";
}
// Read More text functionality
const dots = document.getElementById("dots");
const readMore = document.getElementById("readMore");
const btnText = document.getElementById("btnText");

function readMoreFunction() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    readMore.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    readMore.style.display = "inline";
  }
}

// Show only the truncated content by default
dots.style.display = "inline";
readMore.style.display = "none";
btnText.innerHTML = "Read More";
