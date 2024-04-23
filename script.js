const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleTryClick(event) {
  event.preventDefault()
  
  const inputNumber = document.querySelector("#inputNumber")

  console.log(xAttempts)

  if(Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`

    console.log(`Você acertou em ${xAttempts} tentativas`)
}

    inputNumber.value = ""
    xAttempts++
}

btnTry.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', function() {
screen1.classList.remove("hide")
screen2.classList.add("hide")
})