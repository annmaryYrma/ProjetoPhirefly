const headerDiario= document.createElement("headerDiario");
headerDiario.id = "hIDDiario";
const body = document.querySelector("body");
body.prepend(headerDiario);

document.addEventListener("DOMContentLoaded", () => {
  // Exibir data atual
  const data = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  document.getElementById("dataAtual").textContent = data;

  const emocaoEscolhidaSpan = document.getElementById("emocaoEscolhida");
  let emocaoSelecionada = "";

  document.querySelectorAll(".emoji").forEach(botao => {
    botao.addEventListener("click", () => {
      emocaoSelecionada = botao.textContent;
      emocaoEscolhidaSpan.textContent = emocaoSelecionada;
    });
  });

  document.getElementById("salvarButton").addEventListener("click", () => {
    const textoRelato = document.getElementById("relato").value.trim();
    if (!emocaoSelecionada || !textoRelato) {
      alert("Selecione uma emoção e escreva algo.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = `${emocaoSelecionada} - ${textoRelato}`;
    document.getElementById("historico").appendChild(li);

    // Limpar após salvar
    document.getElementById("relato").value = "";
    emocaoSelecionada = "";
    emocaoEscolhidaSpan.textContent = "Nenhuma";
  });
});
