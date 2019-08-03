export const validarPreco = input => {
  const preco = input.formatToNumber();

  if (preco === 0) {
    input.setCustomValidity("O valor do produto deve ser superior a R$ 0");
    return;
  }

  input.setCustomValidity("");
  return;
};
