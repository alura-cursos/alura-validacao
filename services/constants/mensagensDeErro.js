import { tiposDeInputs } from "./tiposDeInputs.js";
import {
  VALUE_MISSING,
  TYPE_MISMATCH,
  TOO_SHORT,
  CUSTOM_ERROR,
  PATTERN_MISMATCH,
  RANGE_UNDER_FLOW
} from "./tiposDeErros.js";

export const mensagensDeErro = {
  [tiposDeInputs.EMAIL]: {
    [VALUE_MISSING]: "O e-mail é necessário",
    [TYPE_MISMATCH]: "Este não é um e-mail válido"
  },
  [tiposDeInputs.SENHA]: {
    [VALUE_MISSING]: "A senha é necessária",
    [TOO_SHORT]: "A senha deve conter 4 caracteres ou mais"
  },
  [tiposDeInputs.CPF]: {
    [VALUE_MISSING]: "O CPF é necessário",
    [TOO_SHORT]: "Este não é um CPF válido",
    [CUSTOM_ERROR]: "Este não é um CPF válido"
  },
  [tiposDeInputs.RG]: {
    [VALUE_MISSING]: "O RG é necessário",
    [TOO_SHORT]: "Este não é um RG válido",
    [CUSTOM_ERROR]: "Este não é um RG válido"
  },
  [tiposDeInputs.CEP]: {
    [VALUE_MISSING]: "O CEP é necessário",
    [PATTERN_MISMATCH]: "Este não é um CEP válido"
  },
  [tiposDeInputs.LOGRADOURO]: {
    [VALUE_MISSING]: "O logradouro é necessário"
  },
  [tiposDeInputs.CIDADE]: {
    [VALUE_MISSING]: "A cidade é necessária"
  },
  [tiposDeInputs.ESTADO]: {
    [VALUE_MISSING]: "O estado é necessário"
  },
  [tiposDeInputs.DATA_NASCIMENTO]: {
    [VALUE_MISSING]: "Esta não é uma data válida",
    [RANGE_UNDER_FLOW]: "A data deve ser superior à 01/01/1900",
    [CUSTOM_ERROR]: "A idade mínima é de 18 anos"
  },
  [tiposDeInputs.NOME_PRODUTO]: {
    [VALUE_MISSING]: "O nome é necessário"
  },
  [tiposDeInputs.PRECO]: {
    [CUSTOM_ERROR]: "O valor do produto deve ser superior a R$ 0"
  }
};
