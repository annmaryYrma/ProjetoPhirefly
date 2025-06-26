document.addEventListener("DOMContentLoaded", () => {
  // Dados iniciais
  const refeicoes = ["Café da manhã 🥣", "Almoço 🍛", "Lanche 🍪", "Jantar 🍲"];
  const receitas = ["Smoothie Verde 🥬", "Salada de Quinoa 🥗", "Sopa de Legumes 🥕"];

  const listaRefeicoes = document.getElementById("listaRefeicoes");
  const listaReceitas = document.getElementById("listaReceitas");


  function renderizarLista(lista, container) {
    container.innerHTML = "";
    lista.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      li.classList.add("item-lista");
      container.appendChild(li);
    });
  }

  renderizarLista(refeicoes, listaRefeicoes);
  renderizarLista(receitas, listaReceitas);
});
