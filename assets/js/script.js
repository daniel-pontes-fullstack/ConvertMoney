const btnSwitchNow = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

const convertValues = async () =>  {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToCovert = document.querySelector(".currency-value-to-convert");
  //Async Await (Cosumo de API AwesomeAPI > awesomeapi.com.br teste em ter-30-jan-2024 Daniel )
  const data = await fetch ("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL").then(response => response.json())
 
  const currencyValueCoverted = document.querySelector(".currency-value");
  const dolarToday = data.USDBRL.high
  const euroToday = data.EURBRL.high
  const libraToday = data.GBPBRL.high

  const convertedValue = inputCurrencyValue / dolarToday;

  if (currencySelect.value == "dolar") {
    currencyValueCoverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueCoverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currencySelect.value == "libra") {
    currencyValueCoverted.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  currencyValueToCovert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}
function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dollar";
    currencyImage.src = "./assets/img/usd.svg";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/img/euro.svg";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/img/libra.svg";
  }
}

currencySelect.addEventListener("change", changeCurrency);
btnSwitchNow.addEventListener("click", convertValues);
