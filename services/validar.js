import { validarRG } from "./validarRG.js";
import { validarCPF } from "./validarCPF.js";
import { validarDataNascimento } from "./validarDataNascimento.js";
import { recuperarEndereco } from "./recuperarEndereco.js";
import { validarPreco } from "./validarPreco.js";
import { mensagensDeErro } from "./constants/mensagensDeErro.js";
import {
  CUSTOM_ERROR,
  VALUE_MISSING,
  TOO_SHORT,
  PATTERN_MISMATCH,
  RANGE_UNDER_FLOW,
  TYPE_MISMATCH
} from "./constants/tiposDeErros.js";
import { tiposDeInputs } from "./constants/tiposDeInputs.js";

const retornarMensagemErro = (tipo, validity) => {
  let mensagemDeErro = "";
  const tiposDeErro = [
    TYPE_MISMATCH,
    VALUE_MISSING,
    TOO_SHORT,
    PATTERN_MISMATCH,
    RANGE_UNDER_FLOW,
    CUSTOM_ERROR
  ];

  tiposDeErro.forEach(erro => {
    if (validity[erro]) {
      mensagemDeErro = mensagensDeErro[tipo][erro];
    }
  });

  return mensagemDeErro;
};

export const validarInput = (input, adicionarErro = true) => {
  const classeElementoErro = "erro-validacao";
  const elementoPai = input.parentNode;
  const elementoErroExiste = elementoPai.querySelector(
    `.${classeElementoErro}`
  );
  const elementoErro = elementoErroExiste || document.createElement("div");
  const classeInputErro = "possui-erro-validacao";
  const tipo = input.dataset.tipo;
  const elementoEhValido = input.validity.valid;
  const tiposEspecificos = {
    [tiposDeInputs.RG]: "rg",
    [tiposDeInputs.CPF]: "cpf",
    [tiposDeInputs.CEP]: "cep",
    [tiposDeInputs.DATA_NASCIMENTO]: "dataNascimento",
    [tiposDeInputs.PRECO]: "preco"
  };
  const validadoresEspecificos = {
    cep: input => recuperarEndereco(input),
    rg: input => validarRG(input),
    cpf: input => validarCPF(input),
    dataNascimento: input => validarDataNascimento(input),
    preco: input => validarPreco(input)
  };

  if (tiposEspecificos[tipo]) {
    validadoresEspecificos[tipo](input);
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
