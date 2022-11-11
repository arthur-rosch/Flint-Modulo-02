let user, password;
function register() {
  user = prompt("Cadastre o seu user:");
  password = prompt("Cadastre sua senha:");
}

function check(userParameter, passwordParameter) {
  let user = prompt("Digite o seu nome:"),
    password = prompt("Digite a sua senha:");
  userParameter === user && passwordParameter === passwordgti
    ? alert("Login feito com sucesso")
    : alert("User ou senha inválido!!!");
}
register();
check(user, password);
