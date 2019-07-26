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

let valorRG = document.getElementById('valorRG');
let erroRG = document.getElementById('erroRG');

let valorDia = document.getElementById('valorDia');
let valorMes = document.getElementById('valorMes');
let valorAno = document.getElementById('valorAno');
let erroData = document.getElementById('erroData');

form.addEventListener('submit', e => {
  let formularioValido = false;
  let emailValido = validarEmail(valorEmail.value, valorEmail, erroEmail);
  let senhaValida = validarSenha(valorSenha.value, valorSenha, erroSenha);
  let estadoValido = validarEstados(valorEstados.value, valorEstados, erroEstados);
  let termosValido = validarTermos(valorTermos.checked, erroTermos);
  let cpfValido = validarCPF(valorCPF, erroCPF);
  let rgValido = validarRG(valorRG, erroRG);
  let dataValida = validarData(valorDia, valorMes, valorAno, erroData);

  formularioValido =
    emailValido &&
    senhaValida &&
    estadoValido &&
    termosValido &&
    cpfValido &&
    rgValido &&
    dataValida;

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

const validarCPF = (elementoValor, elementoErro) => {
  let valor = elementoValor.value;

  elementoValor.className = "input";
  elementoErro.innerText = "";

  valor = valor.replace(/\./g, "").replace(/\//g, "").replace(/-/g, "");

  if (valor.length === 0 || valor === null) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "O CPF é necessário";
    return false
  } else if (valor.length != 11) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "O CPF contém apenas 11 dígitos";
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

const validarRG = (elementoValor, elementoErro) => {
  let valor = elementoValor.value;

  elementoValor.className = "input";
  elementoErro.innerText = "";

  valor = valor.replace(/\./g, "").replace(/\//g, "").replace(/-/g, "");

  if (valor.length === 0 || valor === null) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "O RG é necessário";
    return false
  } else if (valor.length != 9) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "O RG contém apenas 9 dígitos";
    return false
  } else {
    let valorTotal = 0;
    let digito = 0;

    for (let i = 0, j = 9; i < 8; i++ , j--) {
      digito = Number(valor.charAt(i));

      valorTotal += digito * j;
    }

    digito = valorTotal % 11;
    digito = digito > 9 ? 0 : digito;

    if (digito !== Number(valor.charAt(8))) {
      elementoValor.className += " is-danger";
      elementoErro.innerText = "O RG não é válido";

      return false;
    }
  }

  elementoValor.className += " is-success";

  return true;
}

const validarData = (elementoValorDia, elementoValorMes, elementoValorAno, elementoErro) => {
  let valorDia = elementoValorDia.value;
  let valorMes = elementoValorMes.value;
  let valorAno = elementoValorAno.value;
  let dataAtual = new Date();
  let dataGerada = new Date(valorAno + "-" + valorMes + "-" + valorDia + " 19:00:00");

  elementoValorDia.className = "input";
  elementoValorMes.className = "input";
  elementoValorAno.className = "input";

  elementoErro.innerText = "";

  if (valorDia.length === 0 || valorDia === null || valorMes.length === 0 || valorMes === null || valorAno.length === 0 || valorAno === null) {
    elementoValorDia.className += " is-danger";
    elementoValorMes.className += " is-danger";
    elementoValorAno.className += " is-danger";

    elementoErro.innerText = "A data de nascimento é necessária";
    return false;
  }

  if (isNaN(dataGerada)) {
    elementoValorDia.className += " is-danger";
    elementoValorMes.className += " is-danger";
    elementoValorAno.className += " is-danger";

    elementoErro.innerText = "A data digitada está incorreta";
    return false;
  }

  if (dataGerada.getDate().toLocaleString() !== valorDia) {
    elementoValorDia.className += " is-danger";
    elementoValorMes.className += " is-danger";
    elementoValorAno.className += " is-danger";

    elementoErro.innerText = "A data digitada está incorreta";
    return false;
  }

  if (valorAno <= 1900 || valorAno > dataAtual.getFullYear()) {
    elementoValorDia.className += " is-danger";
    elementoValorMes.className += " is-danger";
    elementoValorAno.className += " is-danger";

    elementoErro.innerText = "O ano de nascimento está incorreto";
    return false;
  }


  elementoValorDia.className += " is-success";
  elementoValorMes.className += " is-success";
  elementoValorAno.className += " is-success";

  return true;
}
