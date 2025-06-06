document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const currentPath = window.location.pathname;

    // Verifica se a página atual não é a principal
    if (!currentPath.endsWith('/PITCH_FAON/') && !currentPath.endsWith('/PITCH_FAON/menu.html')) {
      window.location.href = '/PITCH_FAON/menu.html';
    }
  }
});
