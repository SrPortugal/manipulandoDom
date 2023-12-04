

const controle = document.querySelectorAll(["[data-controle]"])
const estatisticas = document.querySelectorAll("[data-estatistica]")
const corRobo = document.getElementById("corRobo")


corRobo.addEventListener("change", () => {
    const value = corRobo.options[corRobo.selectedIndex].value;
    if (value === "azu"){
        corRobo.className = "dropDown-azul"
        const raiz = corRobo.parentNode.parentNode.getElementsByTagName("img")
        raiz[0].src = "./img/cores/azul/robotron.png"
    }if (value === "ama") {
        corRobo.className = "dropDown-amarelo"
        const raiz = corRobo.parentNode.parentNode.getElementsByTagName("img")
        raiz[0].src = "./img/cores/amarelo/robotron.png"
    } if (value === "bra") {
        corRobo.className = "dropDown-branco"
        const raiz = corRobo.parentNode.parentNode.getElementsByTagName("img")
        raiz[0].src = "./img/cores/branco/robotron.png"
    } if (value === "pre") {
        corRobo.className = "dropDown-preto"
        const raiz = corRobo.parentNode.parentNode.getElementsByTagName("img")
        raiz[0].src = "./img/cores/preto/robotron.png"
    } if (value === "ros") {
        corRobo.className = "dropDown-rosa"
        const raiz = corRobo.parentNode.parentNode.getElementsByTagName("img")
        raiz[0].src = "./img/cores/rosa/robotron.png"
    } if (value === "ver") {
        corRobo.className = "dropDown-vermelho"
        const raiz = corRobo.parentNode.parentNode.getElementsByTagName("img")
        raiz[0].src = "./img/cores/vermelho/robotron.png"
    }
})
    
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
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

function atualizaEstatisticas (peca) {
    // console.log(pecas[peca])

    estatisticas.forEach( (elemento) => {
        console.log(pecas[peca][elemento.dataset.estatistica])
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        

    })
}
// somar.addEventListener("click", (e) => {
//     braco.value = parseInt(braco.value) + 1
// })

// subtrair.addEventListener("click", () => {
//     braco.value = parseInt(braco.value) - 1
// })

