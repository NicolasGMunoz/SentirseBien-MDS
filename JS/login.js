// login.js (en el servidor)
const express = require('express');
const router = express.Router();
const pool = require('../DB/connectionDB'); // Asegúrate de que este sea el archivo correcto donde configuras el pool

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

        if (rows.length > 0) {
            // Usuario encontrado
            res.status(200).json({ message: 'Login exitoso', user: rows[0] });
        } else {
            // Usuario no encontrado
            res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }
    } catch (error) {
        console.error('Error en el login:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports = router;
