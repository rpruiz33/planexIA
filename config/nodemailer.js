// config/nodemailer.js

const nodemailer = require('nodemailer');

// Configuración de nodemailer para Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'planexia.sa@gmail.com', // Tu dirección de correo electrónico
        pass: 'Lanus.3279' // Tu contraseña de correo electrónico
    }
});

module.exports = transporter;
