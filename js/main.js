const inputNumber1 = document.querySelector('[id="number1"]');
const inputNumber2 = document.querySelector('[id="number2"]');
const btnPlus = document.querySelector('[id="btn-plus"]');
const btnTimes = document.querySelector('[id="btn-times"]');
const btnClear = document.querySelector('[id="btn-clear"]');

btnPlus.addEventListener("click", () => {
  if (removeAddClassInputError()) {
    const valor = Number(inputNumber1.value) + Number(inputNumber2.value);
    document.querySelector("#result-box").innerHTML = valor;
  }
});
btnTimes.addEventListener("click", () => {
  if (removeAddClassInputError()) {
    const valor = Number(inputNumber1.value) * Number(inputNumber2.value);
    document.querySelector("#result-box").innerHTML = valor;
  }
});
btnClear.addEventListener("click", () => {
  document.querySelector("#result-box").innerHTML = 0;
  document.querySelector("#number1").value = "";
  document.querySelector("#number2").value = "";
});

function removeAddClassInputError() {
  if (isNumber(inputNumber1.value) && isNumber(inputNumber2.value)) {
    inputNumber1.classList.remove("input-error");
    inputNumber2.classList.remove("input-error");
    return true;
  } else if (!isNumber(inputNumber1.value) && isNumber(inputNumber2.value)) {
    inputNumber1.classList.add("input-error");
    inputNumber2.classList.remove("input-error");
    return false;
  } else if (!isNumber(inputNumber2.value) && isNumber(inputNumber1.value)) {
    inputNumber2.classList.add("input-error");
    inputNumber1.classList.remove("input-error");
    return false;
  } else {
    inputNumber1.classList.add("input-error");
    inputNumber2.classList.add("input-error");
    return false;
  }
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
