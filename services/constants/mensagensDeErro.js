import { tiposDeInputs } from "./tiposDeInputs.js";
import {
  VALUE_MISSING,
  TYPE_MISMATCH,
  TOO_SHORT,
  CUSTOM_ERROR,
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
  [tiposDeInputs.DATA_NASCIMENTO]: {
    [VALUE_MISSING]: "Esta não é uma data válida",
    [RANGE_UNDER_FLOW]: "A data deve ser superior à 01/01/1900",
    [CUSTOM_ERROR]: "A idade mínima é de 18 anos"
  },
};
