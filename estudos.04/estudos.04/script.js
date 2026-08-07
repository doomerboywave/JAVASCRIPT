const domain = document.querySelector("#domainInput");
const outStatus = document.querySelector("#outStatus");
const outDataEx = document.querySelector("#outDataEx");
const outSugestao = document.querySelector("#outSugestao");

domain.addEventListener("input", () => {
  let inDomain = domain.value.trim().toLowerCase();
  let url = `https://brasilapi.com.br/api/registrobr/v1/${inDomain}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.errors) {
        alert("Dominio Inválido!");
        outStatus.textContent = "";
        outDataEx.textContent = "";
        outSugestao.textContent = "";
        return;
      }

      if (data.status == "REGISTERED") {
        outStatus.textContent = "dominio em uso"
        outDataEx.textContent = "data de expiração: " + data.expires_at
      } else{
        outStatus.textContent = "dominio disponivel"
        outDataEx.textContent = ""
      }
        outSugestao.textContent = "SUGESTÃO: " + data.suggestion
    })
    .catch((error) => {
      alert("Erro ao consultar o domínio.");
      outStatus.textContent = "";
      outDataEx.textContent = "";
      outSugestao.textContent = "";
    });
});
