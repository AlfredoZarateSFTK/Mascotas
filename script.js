document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const confirmationMessage = document.getElementById('confirmation-message');

    if (email) {
        // Aquí puedes agregar la lógica para enviar el correo a tu servicio de mailing
        console.log('Correo registrado:', email);
        
        confirmationMessage.textContent = '¡Gracias por registrarte! Te notificaremos cuando lancemos.';
        confirmationMessage.classList.remove('hidden');
        
        document.getElementById('email').value = '';
    }
});
