

const controle = document.querySelectorAll(["[data-controle]"])

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

// somar.addEventListener("click", (e) => {
//     braco.value = parseInt(braco.value) + 1
// })

// subtrair.addEventListener("click", () => {
//     braco.value = parseInt(braco.value) - 1
// })

