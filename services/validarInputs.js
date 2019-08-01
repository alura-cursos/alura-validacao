import { validarInput } from './validar.js';

window.onload = function () {
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
    if (input.dataset.tipo === 'preco') {
      SimpleMaskMoney.setMask(input, {
        allowNegative: false,
        negativeSignAfter: false,
        prefix: 'R$ ',
        fixed: true,
        fractionDigits: 2,
        decimalSeparator: ',',
        thousandsSeparator: '.',
        cursor: 'move'
      });
    }

    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      validarInput(input);
    });

    input.addEventListener('input', () => {
      validarInput(input, false);
    });

    input.addEventListener('blur', () => {
      validarInput(input);
    });
  });
};