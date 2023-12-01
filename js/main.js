

const subtrair = document.getElementById("subtrair")
const somar = document.getElementById("somar")
const braco = document.getElementById("braco")

console.log(braco)
const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
})

function manipulaDados(operacao){
    if(operacao === "-"){
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}

// somar.addEventListener("click", (e) => {
//     braco.value = parseInt(braco.value) + 1
// })

// subtrair.addEventListener("click", () => {
//     braco.value = parseInt(braco.value) - 1
// })

