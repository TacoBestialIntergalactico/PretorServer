const express = require('express');
const path = require('path');
const cors = require('cors'); // Importar el paquete cors
const app = express();
const port = 3000;

// Habilitar CORS para todas las rutas
app.use(cors());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para servir archivos JSON
app.get('/data/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, 'data', filename));
});

// Endpoint para servir imágenes
app.get('/images/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, 'images', filename));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
