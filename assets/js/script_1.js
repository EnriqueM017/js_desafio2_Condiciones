//variables
const bgColor = document.querySelector("body");
const imgSpiderman = document.querySelector("#imgSpiderman");

//evento
imgSpiderman.addEventListener("click", colorBorder);

function colorBorder() {
  if (imgSpiderman.classList.toggle("borderOrange")) {
    bgColor.classList.add("bgColor");
  } else {
    bgColor.classList.remove("bgColor");
  }
}
