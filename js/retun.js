document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Verifica se já estamos na index.html (ou painel.html, ou o que for sua tela principal)
    const paginaAtual = window.location.pathname;

    if (!paginaAtual.endsWith('/index.html') && !paginaAtual.endsWith('/painel.html')) {
      // Redireciona para a tela principal
      window.location.href = 'painel.html'; // ou 'index.html', depende do nome da sua tela principal
    }
  }
});
