// Cotação de moedas do dia
const USD = 5.76
const EUR = 5.98
const GBP = 7.17
const BTC = 557072.64

//Obtendo elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// Manipula o input amount para receber só numero
amount.addEventListener("input" , () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit no formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
    case "BTC":
      convertCurrency(amount.value, BTC, "₿")
      break
  }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol){
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
  
    footer.classList.add("show-result") 
  } catch (error) {
    console.log(error)
  
    footer.classList.remove("show-result")
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

// formata a moeda em BRL
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}