export const validarRG = (input) => {
  let rg = input.value;
  let valorTotal = 0;
  let digito = 0;

  rg = rg.replace(/\./g, "").replace(/\//g, "").replace(/-/g, "");

  for (let i = 0, j = 9; i < rg.length - 1; i++ , j--) {
    digito = Number(rg.charAt(i));

    valorTotal += digito * j;
  }

  digito = valorTotal % 11;
  digito = digito > 9 ? 0 : digito;

  if (digito !== Number(rg.charAt(8))) {
    input.setCustomValidity('Este não é um RG válido');
    return;
  }

  input.setCustomValidity('');
  return;
}