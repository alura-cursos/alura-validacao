import { validarInput } from './validar.js';

window.onload = function () {
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
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