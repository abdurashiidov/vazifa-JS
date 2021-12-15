// const minus = document.querySelector(".minus")
// const plus = document.querySelector(".plus")
// const finnally = document.querySelector(".final")

// let defaults = 50
// let ozgaruvchi = 50
// minus.disabled = true 

// minus.addEventListener("click", () => {
//     if(ozgaruvchi == defaults){
//         minus.disabled = true
//     } else{
//         ozgaruvchi -= defaults
//     }
//     finnally.textContent = ozgaruvchi
// })

// plus.addEventListener("click", () => {
//     minus.disabled = false
//     ozgaruvchi += defaults
//     finnally.textContent = ozgaruvchi
// })

const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
let heading = document.querySelector("heading")
let input = document.querySelector(".input")
let result = document.querySelector(".result")

console.log(result);

button1.addEventListener("click", () => {
    natija1 = input.value * 3
    natija1.textContent = result

})

