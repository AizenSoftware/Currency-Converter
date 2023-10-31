import Currency from "./currency.js";

const amountInput = document.querySelector("#amount");
let firstOption = document.querySelector("#firstCurrencyOption");
let secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");
const changeArrow = document.querySelector(".bi-arrow-left-right");

const currency = new Currency(); // create a Object

runEventListeners();

function runEventListeners() {
  amountInput.addEventListener("input", exchange);
  changeArrow.addEventListener("click", changeValues);
}

function changeValues() {
  let temp;

  temp = firstOption.options[firstOption.selectedIndex].textContent;
  firstOption.options[firstOption.selectedIndex].textContent =
    secondOption.options[secondOption.selectedIndex].textContent;
  secondOption.options[secondOption.selectedIndex].textContent = temp;

  exchange();
}

function exchange(e) {
  const amount = Number(amountInput.value.trim());
  const firstOptionValue =
    firstOption.options[firstOption.selectedIndex].textContent;
  const secondOptionValue =
    secondOption.options[secondOption.selectedIndex].textContent;

  currency
    .exchange(amount, firstOptionValue, secondOptionValue)
    .then((result) => {
      resultInput.value = result.toFixed(3);
    });
}
