function validar({ inserirErro, input }) {
  const classeMensagemErro = 'erro-validacao';
  const classeInputErro = 'possui-erro-validacao';

  const parente = input.parentNode;
  const erro = parente.querySelector(`.${classeMensagemErro}`) || document.createElement('div');

  if (!input.validity.valid && input.validationMessage) {
    console.log(input.validity);

    erro.className = classeMensagemErro;
    erro.textContent = input.validationMessage;

    if (inserirErro) {
      parente.insertBefore(erro, input);
      input.classList.add(classeInputErro);
    }
  } else {
    input.classList.remove(classeInputErro);
    erro.remove();
  }
}

window.onload = function () {
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      validar({ inserirErro: true, input })
    });

    input.addEventListener('input', () => {
      validar({ inserirErro: false, input });
    });

    input.addEventListener('blur', () => {
      validar({ inserirErro: true, input });
    });
  });
};