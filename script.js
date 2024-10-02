// Exercio 1
let idade = prompt("Digite sua Idade");
if (idade >= 18) {
    console.log("Você é de maior");
} else {
    console.log("Você é de menor");
}

//Exercio 2
let ParOuImpar = 10;
if (ParOuImpar % 2 === 0) {
    console.log("O número é par")
} else {
    console.log("O número é Impar");
}

//Exercio 3
let numero = prompt("Digite um número");
if (numero > 0 ) {
    console.log("Número positivo");
} else if (numero < 0) {
    console.log("Número negativo");
}  else  {
    console.log("Núemro é igual a 0");
} 

//Exercio 4
for (let i = 1; i < 11; i++){
    let total = 10 * i;
    console.log("10 x " + i + " = " + total);
}

