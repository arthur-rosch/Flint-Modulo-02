let soma = 1 + 1,
  subtracao = 2 - 2,
  divisao = 80 / 3,
  resto = 80 % 3;
soma = +5;
soma = -3;

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

let num = 1;
num % 1 === 0 && num % num === 0 ? console.log(true) : console.log(false);

let hora = 1,
  minutos = 0;
hora > 0 ? (minutos = hora * 60) : (minutos = 60);
