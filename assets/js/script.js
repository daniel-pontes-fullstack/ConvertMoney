const btnSwitchNow = document.querySelector(".convert-button")

function convertValues(){
    
    const inputCurrencyValue = document.querySelector(".input-currency").value
    
    const dollarToday = 5.2
    const convertedValue = inputCurrencyValue / dollarToday
    
    console.log(convertedValue)
}

btnSwitchNow.addEventListener("click", convertValues)

