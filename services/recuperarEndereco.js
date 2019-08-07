export const recuperarEndereco = input => {
  const cep = input.value.replace("-", "");

  if (input.validity.valid) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const options = {
      method: "GET",
      mode: "cors",
      headers: {
        "content-type": "application/json;charset=utf-8"
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          preencherCampos(data);
        } else {
          input.setCustomValidity("Este CEP não é válido");
          return;
        }
      });
  }
};

const preencherCampos = data => {
  const logradouro = document.getElementById("logradouro");
  const cidade = document.getElementById("cidade");
  const estado = document.getElementById("estado");

  logradouro.value = data.logradouro;
  cidade.value = data.localidade;
  estado.value = data.uf;
};
