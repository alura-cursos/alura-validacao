export const validarCPF = (input) => {
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
  let cpf = input.value;
  let valorTotal = 0;
  let digito = 0;

  cpf = cpf.replace(/\./g, "").replace(/\//g, "").replace(/-/g, "");

  if (CPFsINVALIDOS.indexOf(cpf) >= 0) {
    input.setCustomValidity('Este não é um CPF válido');
    return;
  }

  for (let i = 0, j = 10; i < cpf.length - 2; i++ , j--) {
    digito = Number(cpf.charAt(i));

    valorTotal += digito * j;
  }

  
  digito = 11 - (valorTotal % 11);
  digito = digito > 9 ? 0 : digito;
  
  console.log(digito, cpf.charAt(9))
  if (digito !== Number(cpf.charAt(9))) {
    input.setCustomValidity('Este não é um CPF válido');
    return;
  }

  valorTotal = 0;

  for (let i = 0, j = 11; i < cpf.length - 1; i++ , j--) {
    digito = Number(cpf.charAt(i));

    valorTotal += digito * j;
  }

  digito = 11 - (valorTotal % 11);
  digito = digito > 9 ? 0 : digito;

  if (digito !== Number(cpf.charAt(10))) {
    input.setCustomValidity('Este não é um CPF válido');
    return;
  }

  input.setCustomValidity('');
}