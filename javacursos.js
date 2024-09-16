document.addEventListener('DOMContentLoaded', function() {
    // Abrir modal
    document.querySelectorAll('.abrir-modal').forEach((boton) => {
      boton.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = boton.getAttribute('data-target');
        const modal = document.querySelector(modalId);
        if (modal) {
          modal.style.display = 'block';
          setTimeout(() => {
            modal.classList.add('show');
          }, 10); // Pequeño retraso para asegurar la animación
        }
      });
    });
  
    // Cerrar modal
    document.querySelectorAll('.cerrar-modal').forEach((boton) => {
      boton.addEventListener('click', () => {
        const modal = boton.closest('.modal');
        if (modal) {
          modal.classList.remove('show');
          setTimeout(() => {
            modal.style.display = 'none';
          }, 300); // Tiempo para coincidir con la duración de la animación
        }
      });
    });
  
    // Cerrar modal al hacer clic fuera del contenido
    document.querySelectorAll('.modal').forEach((modal) => {
      modal.addEventListener('click', (e) => {
        // Verifica si el clic fue fuera del contenido del modal
        if (e.target === modal) {
          modal.classList.remove('show');
          setTimeout(() => {
            modal.style.display = 'none';
          }, 300); // Tiempo para coincidir con la duración de la animación
        }
      });
    });
  });
  