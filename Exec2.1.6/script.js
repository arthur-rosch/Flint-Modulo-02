//Desafio Escopo, Var|let|Const e Function
function confirmarDados(nome, idade) {
  const nomeCompleto = nome + " da Silva";
  const AnoNascimento = () => {
    let ano = 2022 - idade;
    return ano;
  };
  const geracao = () => {
    return idade <= 1995 ? "Geração X" : "Millennium";
  };

  return `Nome completo: ${nomeCompleto}
   \nAno de nascimento: ${AnoNascimento()}
   \nGeração: ${geracao()}`;
}
console.log(confirmarDados("Marcos", 41));

//Desafio de Tratar erro
function confirmarDados(nome) {
  try {
    var nomeCompleto = nome + "da Silva";
    function getAnoNascimento() {
      var idade = 20;
      var ano = 2022 - idade;
      return ano;
    }
    return `Nome completo: ${nomeCompleto}
    \nAno de nascimento: ${getAnoNascimento()}
    \nIdade: ${idade}`;
  } catch (error) {
    console.log(
      `um erro foi encontrado e não foi possível concluir a operação \n\n${error}`
    );
  }
}
confirmarDados("Marcos");
