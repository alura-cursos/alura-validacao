let form = document.getElementById('form');
let botaoSubmit = document.getElementById('botaoSubmit');

let valorEmail = document.getElementById('valorEmail');
let erroEmail = document.getElementById('erroEmail');

let valorSenha = document.getElementById('valorSenha');
let erroSenha = document.getElementById('erroSenha');

let valorEstados = document.getElementById('valorEstados');
let erroEstados = document.getElementById('erroEstados');

let valorTermos = document.getElementById('valorTermos');
let erroTermos = document.getElementById('erroTermos');

let formularioValido = false;

form.addEventListener('submit', e => {
  let emailValido = validarEmail(valorEmail.value, valorEmail, erroEmail);
  let senhaValida = validarSenha(valorSenha.value, valorSenha, erroSenha);
  let estadoValido = validarEstados(valorEstados.value, valorEstados, erroEstados);
  let termosValido = validarTermos(valorTermos.checked, valorTermos, erroTermos);

  formularioValido = emailValido && senhaValida && estadoValido && termosValido;

  if(!formularioValido) {
    e.preventDefault();
  }
});

const validarEmail = (valor, elementoValor, elementoErro) => {
  elementoValor.className = "input";
  elementoErro.innerText = "";

  if(valor.length === 0 || valor === null) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "O email é necessário";
    return false;
  } else if(valor.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "Este e-mail não é válido";
    return false;
  }

  elementoValor.className += " is-success";

  return true;
}

const validarSenha = (valor, elementoValor, elementoErro) => {
  elementoValor.className = "input";
  elementoErro.innerText = "";

  if(valor.length === 0 || valor === null) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "A senha é necessária";
    return false
  } else if(valor.length <= 3) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "A senha precisa ter mais de 3 caracteres";
    return false;
  }

  elementoValor.className += " is-success";

  return true;
}

const validarEstados = (valor, elementoValor, elementoErro) => {
  elementoValor.className = "input";
  elementoErro.innerText = "";

  if(valor === 'Selecionar') {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "O estado é necessário";

    return false;
  }

  elementoValor.className += " is-success";

  return true;
}

const validarTermos = (valor, elementoValor, elementoErro) => {
  elementoErro.innerText = "";

  if(valor === false) {
    elementoErro.innerText = "Você precisa aceitar os termos e condições para prosseguir com o cadastro";

    return false;
  }

  return true;
}