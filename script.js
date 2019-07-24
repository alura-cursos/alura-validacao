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

let valorCPF = document.getElementById('valorCPF');
let erroCPF = document.getElementById('erroCPF');

let formularioValido = false;

form.addEventListener('submit', e => {
  let emailValido = validarEmail(valorEmail.value, valorEmail, erroEmail);
  let senhaValida = validarSenha(valorSenha.value, valorSenha, erroSenha);
  let estadoValido = validarEstados(valorEstados.value, valorEstados, erroEstados);
  let termosValido = validarTermos(valorTermos.checked, erroTermos);
  let cpfValido = validarCPF(valorCPF.value, valorCPF, erroCPF);

  formularioValido =
    emailValido &&
    senhaValida &&
    estadoValido &&
    termosValido &&
    cpfValido;

  if (!formularioValido) {
    e.preventDefault();
  }
});

const validarEmail = (valor, elementoValor, elementoErro) => {
  elementoValor.className = "input";
  elementoErro.innerText = "";

  if (valor.length === 0 || valor === null) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "O email é necessário";
    return false;
  } else if (valor.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null) {
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

  if (valor.length === 0 || valor === null) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "A senha é necessária";
    return false
  } else if (valor.length <= 3) {
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

  if (valor === 'Selecionar') {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "O estado é necessário";

    return false;
  }

  elementoValor.className += " is-success";

  return true;
}

const validarTermos = (valor, elementoErro) => {
  elementoErro.innerText = "";

  if (valor === false) {
    elementoErro.innerText = "Você precisa aceitar os termos e condições para prosseguir com o cadastro";

    return false;
  }

  return true;
}

const validarCPF = (valor, elementoValor, elementoErro) => {
  elementoValor.className = "input";
  elementoErro.innerText = "";

  if (valor.length === 0 || valor === null) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "O CPF é necessário";
    return false
  } else if (valor.length != 11) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "O CPF é contém apenas 11 dígitos";
    return false
  } else {
    const CPFsINVALIDOS = [
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999'
    ];

    if (CPFsINVALIDOS.indexOf(valor) >= 0) {
      elementoValor.className += " is-danger";
      elementoErro.innerText = "O CPF não é válido";

      return false;
    }

    let valorTotal = 0;
    let digito = 0;

    for (let i = 0, j = 10; i < 9; i++ , j--) {
      digito = Number(valor.charAt(i));

      valorTotal += digito * j;
    }

    digito = 11 - (valorTotal % 11);
    digito = digito > 9 ? 0 : digito;
    if (digito !== Number(valor.charAt(9))) {
      elementoValor.className += " is-danger";
      elementoErro.innerText = "O CPF não é válido";

      return false;
    }

    valorTotal = 0;

    for (let i = 0, j = 11; i < 10; i++ , j--) {
      digito = Number(valor.charAt(i));

      valorTotal += digito * j;
    }

    digito = 11 - (valorTotal % 11);
    digito = digito > 9 ? 0 : digito;

    if (digito !== Number(valor.charAt(10))) {
      elementoValor.className += " is-danger";
      elementoErro.innerText = "O CPF não é válido";

      return false;
    }
  }

  elementoValor.className += " is-success";

  return true;
}