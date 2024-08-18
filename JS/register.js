// registro.js
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, verifica e inténtalo nuevamente.');
        return;
    }

    // Aquí iría la lógica para enviar los datos al servidor
    console.log('Formulario enviado:', { username, email, password });

    // Resetear el formulario después de enviarlo
    document.getElementById('registroForm').reset();
});
