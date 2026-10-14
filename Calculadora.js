   

let Digito1 = Number(prompt("Coloque o Primeiro Digito:"))
let Digito2 = Number(prompt("Coloque o Segundo digito:"))
let operacao = prompt("Coloque a operação desejada:\n[+]\n[-]\n[*]\n[/]")

if (operacao == "67") {
    alert("SIIIIXXXX SEVEEEEEN")
}
else if (operacao == "+") {
    alert(Digito1 + Digito2)
}
else if (operacao == "-") {
    alert(Digito1 - Digito2)
}
else if (operacao == "*") {
    alert(Digito1 * Digito2)
}
else if (operacao == "/") {
    alert(Digito1 / Digito2)
}
else {
    alert("ERRO A FAZER A CONTA")
}