import { validarRG } from "./validarRG.js";
import { validarCPF } from "./validarCPF.js";
import { validarDataNascimento } from "./validarDataNascimento.js";
import { recuperarEndereco } from "./recuperarEndereco.js";
import { validarPreco } from "./validarPreco.js";

const retornarMensagemErro = (tipo, validity) => {
  let mensagemDeErro = "";
  const tiposDeErro = [
    "typeMismatch",
    "valueMissing",
    "tooShort",
    "patternMismatch",
    "rangeUnderflow",
    "customError"
  ];
  const mensagensDeErro = {
    email: {
      valueMissing: "O e-mail é necessário",
      typeMismatch: "Este não é um e-mail válido"
    },
    senha: {
      valueMissing: "A senha é necessária",
      tooShort: "A senha deve conter 4 caracteres ou mais"
    },
    cpf: {
      valueMissing: "O CPF é necessário",
      tooShort: "Este não é um CPF válido",
      customError: "Este não é um CPF válido"
    },
    rg: {
      valueMissing: "O RG é necessário",
      tooShort: "Este não é um RG válido",
      customError: "Este não é um RG válido"
    },
    cep: {
      valueMissing: "O CEP é necessário",
      patternMismatch: "Este não é um CEP válido"
    },
    logradouro: {
      valueMissing: "O logradouro é necessário"
    },
    cidade: {
      valueMissing: "A cidade é necessária"
    },
    estado: {
      valueMissing: "O estado é necessário"
    },
    dataNascimento: {
      valueMissing: "Esta não é uma data válida",
      rangeUnderflow: "A data deve ser superior à 01/01/1900",
      customError: "A idade mínima é de 18 anos"
    },
    nomeProduto: {
      valueMissing: "O nome é necessário"
    },
    preco: {
      customError: "O valor do produto deve ser superior a R$ 0"
    }
  };

  tiposDeErro.forEach(erro => {
    if (validity[erro]) {
      mensagemDeErro = mensagensDeErro[tipo][erro];
    }
  });

  return mensagemDeErro;
};

export const validarInput = (input, adicionarErro = true) => {
  let elementoErro;
  const classeElementoErro = "erro-validacao";
  const elementoPai = input.parentNode;
  const elementoErroExiste = elementoPai.querySelector(
    `.${classeElementoErro}`
  );
  const classeInputErro = "possui-erro-validacao";
  const tipo = input.dataset.tipo;
  const elementoEhValido = input.validity.valid;
  const tiposEspecificos = {
    rg: "rg",
    cpf: "cpf",
    cep: "cep",
    dataNascimento: "dataNascimento",
    preco: "preco"
  };
  const validadorerEspecificos = {
    cep: input => recuperarEndereco(input),
    rg: input => validarRG(input),
    cpf: input => validarCPF(input),
    dataNascimento: input => validarDataNascimento(input),
    preco: input => validarPreco(input)
  };

  if (!elementoErroExiste) {
    elementoErro = document.createElement("div");
  } else {
    elementoErro = elementoPai.querySelector(`.${classeElementoErro}`);
  }

  if (tiposEspecificos[tipo] !== undefined) {
    validadorerEspecificos[tipo](input);
  }

  // elemento não é valido
  if (!elementoEhValido) {
    elementoErro.className = classeElementoErro;
    elementoErro.textContent = retornarMensagemErro(
      input.dataset.tipo,
      input.validity
    );

    if (adicionarErro) {
      elementoPai.insertBefore(elementoErro, input.nextSibling);
      input.classList.add(classeInputErro);
    }
  } else {
    // elemento é valido
    input.classList.remove(classeInputErro);
    elementoErro.remove();
  }
};
