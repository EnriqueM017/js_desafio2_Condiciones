const buttonVerificar = document.querySelector("#buttonVerificar");
const stickersTotales = document.querySelector("#stickersTotales");

const verify = buttonVerificar.addEventListener("click", () => {
  const number1 = document.querySelector("#sticker1").value;
  const number2 = document.querySelector("#sticker2").value;
  const number3 = document.querySelector("#sticker3").value;

  const suma = +number1 + +number2 + +number3;

  if (suma === 0) {
    stickersTotales.style.color = "red";
    stickersTotales.style.fontWeight = "bold";
    stickersTotales.textContent = `No llevas stickers`;
  } else if (suma === 1) {
    stickersTotales.style.color = "blue";
    stickersTotales.textContent = `Llevas ${suma} sticker`;
  } else if (suma <= 10) {
    stickersTotales.style.color = "brown";
    stickersTotales.textContent = `Llevas ${suma} stickers`;
  } else {
    stickersTotales.style.color = "red";
    stickersTotales.style.fontWeight = "bold";
    stickersTotales.textContent = "Llevas demasiados stickers";
  }
});
