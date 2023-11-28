const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const password3 = document.querySelector("#password3");
const verificar = document.querySelector("#verificarPass");
const passCorrecta = document.querySelector("#passCorrecta");

verificar.addEventListener("click", () => {
  const a = +password1.value;
  const b = +password2.value;
  const c = +password3.value;

  if (a === 9 && b === 1 && c === 1) {
    passCorrecta.style.marginTop = "5px";
    passCorrecta.style.color = "green";
    passCorrecta.textContent = "La contraseña es correcta";
  } else if (a === 7 && b === 1 && c === 4) {
    passCorrecta.style.marginTop = "5px";
    passCorrecta.style.color = "green";
    passCorrecta.textContent = "La segunda contraseña es correcta";
  } else {
    passCorrecta.style.marginTop = "5px";
    passCorrecta.style.color = "red";
    passCorrecta.textContent = "La contraseña es incorrecta";
  }
});
