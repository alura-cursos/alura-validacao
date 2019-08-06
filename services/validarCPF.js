export const validarCPF = input => {
  const CPFsINVALIDOS = [
    11111111111,
    22222222222,
    33333333333,
    44444444444,
    55555555555,
    66666666666,
    77777777777,
    88888888888,
    99999999999
  ];
  const cpf = input.value;
  let valorTotal = 0;
  let digito = 0;

  const cpfNumeros = cpf
    .replace(/\./g, "")
    .replace(/\//g, "")
    .replace(/-/g, "");

  if (CPFsINVALIDOS[cpfNumeros] !== undefined) {
    input.setCustomValidity("Este não é um CPF válido");
    return;
  }

  let primeiroTamanhoInicial = 10;
  const primeiraPausa = 9;
  Array.from(cpfNumeros).forEach((numeroAtual, index) => {
    if (index < primeiraPausa) {
      const digito = Number(numeroAtual);

      valorTotal += digito * primeiroTamanhoInicial;
      primeiroTamanhoInicial--;
    }
  });

  digito = 11 - (valorTotal % 11);

  if (digito > 9) {
    digito = 0;
  }

  if (digito !== Number(cpfNumeros.charAt(9))) {
    input.setCustomValidity("Este não é um CPF válido");
    return;
  }

  valorTotal = 0;

  let segundoTamanhoInicial = 11;
  const segundaPausa = 10;
  Array.from(cpfNumeros).forEach((numeroAtual, index) => {
    if (index < segundaPausa) {
      const digito = Number(numeroAtual);

      valorTotal += digito * segundoTamanhoInicial;
      segundoTamanhoInicial--;
    }
  });

  digito = 11 - (valorTotal % 11);

  if (digito > 9) {
    digito = 0;
  }

  if (digito !== Number(cpfNumeros.charAt(10))) {
    input.setCustomValidity("Este não é um CPF válido");
    return;
  }

  input.setCustomValidity("");
};
