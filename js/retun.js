document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const pathname = window.location.pathname;

    // Verifica se está na raiz do projeto ou na index.html
    if (pathname !== '/PITCH_FAON/' && pathname !== '/PITCH_FAON/index.html') {
      window.location.href = '/PITCH_FAON/';
    }
  }
});
