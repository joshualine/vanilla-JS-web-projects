// SELECTOR
const swapBtn = document.getElementById('swap');
const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('ammount-one');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');

// FUNCTIONS ---------------------------
function swap() {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
}

function calculate() {
  const currency1 = currencyOne.value;
  const currency2 = currencyTwo.value;
  fetch('https://open.exchangerate-api.com/v6/latest')
    .then(res => res.json())
    .then(data => {
      const rates1 = data.rates[currency2] / data.rates[currency1];
      rate.innerText = `1 ${currency1} = ${rates1} ${currency2}`;
      // amountTwo.value = (amountOne.value * (rates1)).toFixed(2);
    });
}
// ADDING EVENT LISTENERS
swapBtn.addEventListener('click', swap);

calculate();

