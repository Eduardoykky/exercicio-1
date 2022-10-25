/*
Faça um algoritmo que lê um valor inteiro de reais e calcula o menor valor possível de
notas de 100, 50, 10, 5 e 1 que o valor lido pode ser decomposto. Exiba o valor lido e a
decomposição. Ex.: 576 // 5 nota(s) de 100 1 nota(s) de 50 2 notas(s) de 10 1
nota(s) de 5 1 nota(s) de 1
*/

var valor = parseInt(prompt("Insira um número."))
var valor100 = 0
var valor50 = 0
var valor10 = 0
var valor5 = 0
var valor1 = 0
console.log("Valor Inserido " + valor + "!")
while(valor >= 100){
  valor = valor - 100
  valor100 = valor100 + 1
}
while(valor >= 50){
  valor = valor - 50
  valor50 = valor50 + 1
}
while(valor >= 10){
  valor = valor - 10
  valor10 = valor10 + 1
}
while(valor >= 5){
  valor = valor - 5
  valor5 = valor1 + 1
}
while(valor >= 1){
    valor = valor - 1
    valor1 = valor1 + 1
  }
  console.log (valor100 + " notas de 100 " + valor50 + " notas de 50 " + valor10 + " notas de 10 " + valor5 + " notas de 5 " + valor1 + " notas de 1 " )