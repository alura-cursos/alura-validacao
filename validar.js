import { validarRG } from './validarRG.js'
import { validarCPF } from './validarCPF.js'
import { recuperarEndereco } from './recuperarEndereco.js';

const retornarMensagemErro = (tipo, validity) => {
  const mensagensDeErro = {
    email: {
      valueMissing: 'O e-mail é necessário',
      typeMismatch: 'Este não é um e-mail válido',
    },
    senha: {
      valueMissing: 'A senha é necessária',
      tooShort: 'A senha deve conter 4 caracteres ou mais'
    },
    cpf: {
      valueMissing: 'O CPF é necessário',
      tooShort: 'Este não é um CPF válido',
      customError: 'Este não é um CPF válido'
    },
    rg: {
      valueMissing: 'O RG é necessário',
      tooShort: 'Este não é um RG válido',
      customError: 'Este não é um RG válido'
    },
    cep: {
      valueMissing: 'O CEP é necessário',
      patternMismatch: 'Este não é um CEP válido',
    },
    logradouro: {
      valueMissing: 'O logradouro é necessário',
    },
    cidade: {
      valueMissing: 'A cidade é necessária',
    },
    estado: {
      valueMissing: 'O estado é necessário',
    },
  };

  if(validity.typeMismatch) {
    return mensagensDeErro[tipo]['typeMismatch'];
  }
  if(validity.valueMissing) {
    return mensagensDeErro[tipo]['valueMissing'];
  }
  if(validity.tooShort) {
    return mensagensDeErro[tipo]['tooShort'];
  }
  if(validity.patternMismatch) {
    return mensagensDeErro[tipo]['patternMismatch'];
  }
  if(validity.customError) {
    return mensagensDeErro[tipo]['customError'];
  }
}

export const validarInput = (input, adicionarErro = true) => {
  const classeInputErro = 'possui-erro-validacao';
  const classeElementoErro = 'erro-validacao';
  const elementoPai = input.parentNode;
  const elementoErro = elementoPai.querySelector(`.${classeElementoErro}`) || document.createElement('div');
  const tipo = input.dataset.tipo;
  const validadorerEspecificos = {
    cep: (input) => recuperarEndereco(input),
    rg: (input) => validarRG(input),
    cpf: (input) => validarCPF(input)
  };

  if(tipo === 'rg' || tipo === 'cpf' || tipo === 'cep') {
    validadorerEspecificos[tipo](input);
  }

  // elemento não é valido
  if(!input.validity.valid) {
    elementoErro.className = classeElementoErro;
    elementoErro.textContent = retornarMensagemErro(input.dataset.tipo, input.validity);

    if(adicionarErro) {
      elementoPai.insertBefore(elementoErro, input.nextSibling);
      input.classList.add(classeInputErro);
    }
  } else {
    // elemento é valido
    input.classList.remove(classeInputErro);
    elementoErro.remove();
  }
}