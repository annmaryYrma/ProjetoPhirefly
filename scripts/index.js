const container = document.getElementById("container");

function criarCard(textoBotao, callback) {
  const card = document.createElement("div"); 
  card.classList.add("card");

  const botao = document.createElement("button");
  botao.textContent = textoBotao;
  botao.addEventListener("click", callback);

  card.appendChild(botao);
  container.appendChild(card);
}

criarCard("Diário emocional", () => {
  window.location.href = "pages/diario.html";
});

criarCard("Agenda nutricional", () => {
  window.location.href = "pages/nutricional.html";
});


const textoH = document.createElement('p');
const headerIn = document.getElementById("headerInicial");
headerIn.appendChild(textoH)
textoH.innerText = "Seja bem vindo!"
textoH.id = 'textoH' 








 