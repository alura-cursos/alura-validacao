let form = document.getElementById('form');
let botaoSubmit = document.getElementById('botaoSubmit');

let valorNome = document.getElementById('valorNome');
let erroNome = document.getElementById('erroNome');

let valorDescricao = document.getElementById('valorDescricao');
let erroDescricao = document.getElementById('erroDescricao');

let valorPreco = document.getElementById('valorPreco');
let erroPreco = document.getElementById('erroPreco');

SimpleMaskMoney.setMask(valorPreco, {
  allowNegative: false,
  negativeSignAfter: false,
  prefix: 'R$ ',
  fixed: true,
  fractionDigits: 2,
  decimalSeparator: ',',
  thousandsSeparator: '.',
  cursor: 'move'
});

form.addEventListener('submit', e => {
  let formularioValido = false;
  let nomeValido = validarNome(valorNome, erroNome);
  let descricaoValida = validarDescricao(valorDescricao, erroDescricao);
  let precoValido = validarPreco(valorPreco, erroPreco);

  formularioValido = nomeValido && descricaoValida && precoValido;

  if (!formularioValido) {
    e.preventDefault();
  }
});

const validarNome = (elementoValor, elementoErro) => {
  let valor = elementoValor.value;

  elementoValor.className = "input";
  elementoErro.innerText = "";

  if (valor.length === 0 || valor === null) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "O nome é necessário";
    return false;
  }

  elementoValor.className += " is-success";

  return true;
}

const validarDescricao = (elementoValor, elementoErro) => {
  let valor = elementoValor.value;

  elementoValor.className = "input";
  elementoErro.innerText = "";

  if (valor.length === 0 || valor === null) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "A descrição do produto é necessária";
    return false;
  } else if (valor.length <= 15) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "A descrição do produto deve conter ao menos 15 caracteres";
    return false;
  }

  elementoValor.className += " is-success";

  return true;
}

const validarPreco = (elementoValor, elementoErro) => {
  let valor = elementoValor.formatToNumber();

  if (valor === 0) {
    elementoValor.className += " is-danger";
    elementoErro.innerText = "O valor do produto deve ser maior que R$ 0";

    return false;
  }

  elementoValor.className = "input";
  elementoErro.innerText = "";

  elementoValor.className += " is-success";

  return true;
}