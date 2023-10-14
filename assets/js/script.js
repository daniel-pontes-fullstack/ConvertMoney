const btnSwitchNow = document.querySelector(".convert-button")

function convertValues(){
    
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToCovert = document.querySelector(".currency-value-to-convert")
    const currencyValueCoverted = document.querySelector(".currency-value")
    const dollarToday = 5.2
    const convertedValue = inputCurrencyValue / dollarToday
    
    currencyValueToCovert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)
    
    currencyValueCoverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(convertedValue)

}

btnSwitchNow.addEventListener("click", convertValues)

