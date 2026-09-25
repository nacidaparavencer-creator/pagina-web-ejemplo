// modal.js
const modal = document.getElementById('modal-info');
const cerrarBtn = document.getElementById('cerrar-modal');

cerrarBtn.onclick = function() {
  modal.style.display = 'none';
}

// Cerrar modal si se hace clic fuera del contenido
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

