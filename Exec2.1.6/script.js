//Desafio Escopo
function confirmarDados(nome) {
  let idade;
  const nomeCompleto = nome + " da Silva";

  function getAnoNascimento() {
    let ano = 2022 - (idade = 40);
    return ano;
  }
  const geracao = getAnoNascimento() <= 1995 ? "Geração X" : "Millennium";

  return `Nome completo: ${nomeCompleto}
  \nAno de nascimento: ${getAnoNascimento()}
  \nGeração: ${geracao}`;
}
console.log(confirmarDados("Marcos"));
