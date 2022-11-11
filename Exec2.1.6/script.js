//Desafio Escopo
function confirmarDados(nome) {
  let idade,
    nomeCompleto = nome + " da Silva";
  function getAnoNascimento() {
    let ano = 2022 - (idade = 20);
    return ano;
  }
  return `Nome completo: ${nomeCompleto}
  \nAno de nascimento: ${getAnoNascimento()}
  \nIdade: ${idade}`;
}
console.log(confirmarDados("Marcos"));
