document.addEventListener('keydown', function(e) {
  if (
    (e.ctrlKey && e.key.toLowerCase() === 'u') ||  // Ctrl+U
    (e.ctrlKey && e.key.toLowerCase() === 'c') ||  // Ctrl+C
    (e.ctrlKey && e.shiftKey && e.key === 'I')     // Ctrl+Shift+I (DevTools)
  ) {
    e.preventDefault();
  }
});
