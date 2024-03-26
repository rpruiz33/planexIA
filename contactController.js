
  const transporter = require('./config/nodemailer');

exports.submitForm = async (req, res) => {
    const { name, email, message } = req.body;

    // Construir el correo electrónico
    const mailOptions = {
        from: email,
        to: 'planexia.sa@gmail.com', // Tu dirección de correo electrónico
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`
    };

    try {
        // Enviar el correo electrónico
        await transporter.sendMail(mailOptions);
        console.log('Correo electrónico enviado con éxito');
        res.json({ success: true }); // Devolver una respuesta de éxito al cliente
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        res.status(500).json({ error: 'Error al enviar el correo electrónico' }); // Devolver una respuesta de error al cliente
    }
};
