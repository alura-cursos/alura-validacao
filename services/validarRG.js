const calcularValorTotal = multiplicador => (resultado, numeroAtual) =>
  resultado + numeroAtual * multiplicador--;

const calcularDigito = parteRG => {
  let digitoGerado = 0;
  let valorTotal = 0;

  valorTotal = parteRG.reduce(calcularValorTotal(9), 0);

  digitoGerado = valorTotal % 11;

  if (digitoGerado > 9) {
    digitoGerado = 0;
  }

  return digitoGerado;
};

export const validarRG = input => {
  const rgNumeros = input.value
    .replace(/\./g, "")
    .replace(/\//g, "")
    .replace(/-/g, "");

  const parteRG = rgNumeros.substr(0, 8).split("");
  const digitoDoRG = Number(rgNumeros.charAt(8));
  const digitoGerado = calcularDigito(parteRG);

  if (digitoDoRG !== digitoGerado) {
    input.setCustomValidity("Este não é um RG válido");
    return;
  }

  input.setCustomValidity("");
  return;
};
