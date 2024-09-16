// Obtener los elementos del modal
const modalWrapper = document.querySelector('.registration-modal-wrapper');
const modalOverlay = document.querySelector('.modal-overlay');
const showModalButton = document.querySelector('#show-registration-modal');
const closeModalButton = document.querySelector('#close-modal'); // Nuevo botón de cerrar

// Función para mostrar el modal
const showModal = () => {
  modalWrapper.style.display = 'block';
  modalOverlay.style.display = 'block';
};

// Función para ocultar el modal con animación
const hideModal = () => {
  modalWrapper.classList.add('fade-out');
  modalOverlay.classList.add('fade-out');

  // Esperar a que la animación termine antes de ocultar el modal completamente
  setTimeout(() => {
    modalWrapper.style.display = 'none';
    modalOverlay.style.display = 'none';
    modalWrapper.classList.remove('fade-out');
    modalOverlay.classList.remove('fade-out');
  }, 300); // Debe coincidir con la duración de la animación en CSS
};

// Función para mostrar la notificación
const showNotification = (message) => {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.remove('hidden');
  notification.classList.add('visible');

  // Ocultar la notificación después de 3 segundos
  setTimeout(() => {
    notification.classList.remove('visible');
    notification.classList.add('hidden');
  }, 3000); // 3 segundos
};

// Abrir el modal al hacer clic en el botón
if (showModalButton) {
  showModalButton.addEventListener('click', showModal);
}

// Cerrar el modal al hacer clic en la superposición
modalOverlay.addEventListener('click', hideModal);

// Cerrar el modal al hacer clic en el botón de cerrar
if (closeModalButton) {
  closeModalButton.addEventListener('click', hideModal);
}

// Manejar el envío del formulario con AJAX
$('#signup-form').on('submit', function(e) {
  e.preventDefault();
  
  $.ajax({
    type: 'POST',
    url: 'process_form.php',
    data: $(this).serialize(),
    success: function(response) {
      showNotification('Formulario enviado correctamente'); // Mostrar la notificación
      $('#signup-form')[0].reset(); // Limpiar el formulario
      hideModal(); // Cerrar el modal
    },
    error: function(xhr, status, error) {
      showNotification('Error al enviar el formulario'); // Mostrar la notificación de error
    }
  });
});