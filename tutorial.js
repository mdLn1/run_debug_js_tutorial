var rates = {
  euroToDollar: 1.2,
  dollarToEuro: 0.85
};
var amountError = document.getElementById("amount-error");
function convertCurrency() {
  amountError.style.display = "none";
  let result = document.getElementById("result");
  let amount = document.getElementById("amount").value;
  if (!isAmountValid(amount)) {
    amountError.style.display = "block";
    return;
  }
  let to = document.getElementById("to");
  let from = document.getElementById("from");
  let currencyFrom = from.options[from.selectedIndex].value;
  let currencyTo = to.options[to.selectedIndex].value;
  if (currencyTo === currencyFrom) {
    result.textContent = parseFloat(amount).toFixed(2);
    return;
  }
  if (currencyFrom == 1 && currencyTo == 2) {
    result.textContent = (amount * rates.euroToDollar).toFixed(2);
  } else {
    result.textContent = (amount * rates.dollarToEuro).toFixed(2);
  }
}

function isAmountValid(val) {
  if (isNaN(val)) {
    amountError.textContent = "Invalid amount";
    return false;
  }
  if (parseFloat(val) < 0) {
    amountError.textContent = "Amount cannot be negative";
    return false;
  }
  return true;
}

document.getElementById("submit").addEventListener("click", convertCurrency);
document.getElementById("header-result")
.addEventListener("mouseover", 
                 function(e) {
  e.currentTarget.style.color = "green";
})
document.getElementById("header-result")
.addEventListener("mouseout", 
                 function(e) {
  e.currentTarget.style.color = "black";
})