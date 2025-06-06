document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Pega o nome do arquivo atual
    const paginaAtual = window.location.pathname.split('/').pop();

    // Só redireciona se NÃO estiver na página principal
    if (paginaAtual !== 'painel.html' && paginaAtual !== 'index.html') {
      window.location.href = 'painel.html'; // ou 'index.html' se for o seu caso
    }
  }
});
