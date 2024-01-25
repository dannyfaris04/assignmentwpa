document.addEventListener("DOMContentLoaded", function() {
  var amountInput = document.getElementById("amount");
  var fromSelect = document.getElementById("from");
  var toSelect = document.getElementById("to");

  amountInput.addEventListener("input", updateConversion);
  fromSelect.addEventListener("change", updateConversion);
  toSelect.addEventListener("change", updateConversion);

  var exchangeRates = {
    MYR: {
      USD: 0.21,
      EUR: 0.19,
      GBP: 0.17
    },
    USD: {
      MYR: 4.72,
      EUR: 0.91,
      GBP: 0.78
    },
    EUR: {
      MYR: 5.14,
      USD: 1.08,
      GBP: 0.85
    },
    GBP: {
      MYR: 6.01,
      USD: 1.27,
      EUR: 1.16
    }
  };

  function updateConversion() {
    var amount = parseFloat(amountInput.value);
    var fromCurrency = fromSelect.value;
    var toCurrency = toSelect.value;
    var convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
    alert("Converted amount: " + convertedAmount.toFixed(2) + " " + toCurrency);
  }
  function convertCurrency(amount, fromCurrency, toCurrency) {
    var rate = exchangeRates[fromCurrency][toCurrency];
    if (rate) {
      return amount * rate;
	}
  }
});