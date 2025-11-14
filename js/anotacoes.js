// === Gerenciador de Anotações FOAN ===

// Seletores principais
const addButton = document.getElementById("add-button");
const notesContainer = document.getElementById("notes-container");

// Carregar notas salvas ao iniciar
window.addEventListener("load", carregarNotas);

// Criar nova nota
addButton.addEventListener("click", () => {
  criarNota();
  salvarNotas();
});

// Função para criar uma nova nota
function criarNota(conteudo = "") {
  const noteCard = document.createElement("div");
  noteCard.classList.add("note-card");

  // Botões de opções e exclusão
  const options = document.createElement("span");
  options.classList.add("note-options");
  options.innerHTML = "&#8943;";

  const deleteBtn = document.createElement("span");
  deleteBtn.classList.add("note-delete");
  deleteBtn.textContent = "×";

  // Área de texto
  const textarea = document.createElement("textarea");
  textarea.classList.add("note-content-editable");
  textarea.placeholder = "Clique para escrever...";
  textarea.value = conteudo;

  // Eventos
  textarea.addEventListener("input", salvarNotas);
  deleteBtn.addEventListener("click", () => {
    noteCard.remove();
    salvarNotas();
  });

  // Montar card
  noteCard.appendChild(options);
  noteCard.appendChild(deleteBtn);
  noteCard.appendChild(textarea);

  notesContainer.appendChild(noteCard);
}

// Função para salvar notas no localStorage
function salvarNotas() {
  const notas = [];
  document.querySelectorAll(".note-card textarea").forEach((textarea) => {
    notas.push(textarea.value);
  });
  localStorage.setItem("foan_notas", JSON.stringify(notas));
}

// Função para carregar notas salvas
function carregarNotas() {
  const notasSalvas = JSON.parse(localStorage.getItem("foan_notas") || "[]");
  notasSalvas.forEach((texto) => criarNota(texto));
}
