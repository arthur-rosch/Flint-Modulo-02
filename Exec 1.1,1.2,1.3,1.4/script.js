let soma = 1 + 1,
  subtracao = 2 - 2,
  divisao = 80 / 3,
  resto = 80 % 3;
soma += 5;
soma += 3;

//Exec 1.2 e 1.3
let se_caminho = 5,
  se_corro = 2;
se_caminho == 5 && se_corro === 2
  ? console.log("Passo o dia bem")
  : console.log("Passo o dia Mal");

let se_levanto_cedo,
  se_levanto_antes_das_8 = 8;
se_levanto_cedo === true || se_levanto_antes_das_8 === 8
  ? console.log("Saio Tranquilo")
  : console.log("Saio Preocupado");

let se_nao_termino_trabalho,
  nao_tenho_compromisso = false;
se_nao_termino_trabalho == false || nao_tenho_compromisso == false
  ? console.log("Saio tarde")
  : console.log("Saio cedo");

let num = 2;
num % 2 === 0 ? console.log(false) : console.log(true);

let hora = 2,
  minutos = 0;
hora > 0 ? (minutos = hora * 60) : (minutos = 60);
console.log(minutos);

//1.4
let numberArray = [12, 6, 9, 42, 11, 102, 44, 15],
  sumOfAllFor = 0;
for (let index = 0; index < numberArray.length; index++) {
  sumOfAllFor += numberArray[index];
}

let counterWhile = 0,
  sumOfAllWhile = 0;
while (counterWhile < numberArray.length) {
  sumOfAllWhile += numberArray[counterWhile];
  counterWhile++;
}

let counterDoWhile = 0,
  sumOfAllDoWhile = 0;
do {
  sumOfAllDoWhile += numberArray[counterDoWhile];
  counterDoWhile++;
} while (counterDoWhile < numberArray.length);
console.log(sumOfAllFor, sumOfAllWhile, sumOfAllDoWhile);
let numberFor = 10;
for (let index = 2; index < numberFor; index++) {
  numberFor % index === 0 ? (index = numberFor) : console.log(index);
}
for (let index = 0; index < 100; index++) {
  index <= 40 ? console.log(index) : console.log();
  index >= 50 ? console.log(index) : console.log();
}
