export const validarRG = input => {
  let rg = input.value;
  let valorTotal = 0;
  let digito = 0;

  const rgNumeros = rg
    .replace(/\./g, "")
    .replace(/\//g, "")
    .replace(/-/g, "");

  for (let i = 0, j = 9; i < rgNumeros.length - 1; i++, j--) {
    digito = Number(rgNumeros.charAt(i));

    valorTotal += digito * j;
  }

  digito = valorTotal % 11;

  if (digito > 9) {
    digito = 0;
  }

  if (digito !== Number(rgNumeros.charAt(8))) {
    input.setCustomValidity("Este não é um RG válido");
    return;
  }

  input.setCustomValidity("");
  return;
};
