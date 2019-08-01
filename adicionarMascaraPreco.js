const inputPreco = document.getElementById('preco');

SimpleMaskMoney.setMask(inputPreco, {
  allowNegative: false,
  negativeSignAfter: false,
  prefix: 'R$ ',
  fixed: true,
  fractionDigits: 2,
  decimalSeparator: ',',
  thousandsSeparator: '.',
  cursor: 'move'
});