// login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(loginForm);
        const loginData = {
            username: formData.get('username'),
            password: formData.get('password')
        };

        try {
            const response = await fetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                // Redirigir a la página principal o dashboard
                window.location.href = '../index.html';
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error durante el login:', error);
            alert('Error en el servidor. Intenta nuevamente.');
        }
    });
});
