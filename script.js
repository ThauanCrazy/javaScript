// function Soma(n1,n2) {
//     let resultado = n1 + n2
//     return resultado
// }

// function tabuada(Numero,iteracoes) {
//     for (let index = 1; index <= iteracoes; index++) {
//         console.log(Numero + " * " + index + " = " + Numero * index)
        
//     }

// }

// // let resposta = Soma(30,37)
// // console.log(resposta)

// tabuada(6,1000000)

let peso = parseFloat(prompt("Seu peso em KG"))
let altura = parseFloat(prompt("Sua altura em M"))

let resultadoIMC = CalcularIMC(peso,altura)


function CalcularIMC(P,A) {
    return P / (A * A)
}
function ClassificaoIMC(IMC) {
    if (IMC < 18.5) {
        alert("Seu IMC:" + IMC + "Abaixo do peso")
    } else if (IMC > 18.5 && IMC < 24.9) {
        alert("Seu IMC:" + IMC + "Peso adequado")
    } else if (IMC > 24.9 && IMC < 29.9) {
        alert("Seu IMC:" + IMC + "Sobrepeso")
    } else if (IMC > 29.9) {
        alert("Seu IMC:" + IMC + "Obeso")
    } else {
        alert("Não conseguimos calcular seu IMC")
    }
}

function Relatorio(PE,AL) {
    let imc = CalcularIMC(PE,AL)
    ClassificaoIMC(imc)
}
Relatorio(peso,altura)
