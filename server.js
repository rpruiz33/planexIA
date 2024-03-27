// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // Puedes cambiar este puerto si es necesario

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware de logging
app.use((req, res, next) => {
  console.log('Solicitud recibida:', req.body.message);
  next();
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`servidor en ejecución en http://localhost:${PORT}`);
});
