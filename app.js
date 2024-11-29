const express = require('express');
const app = express();

// Port d'écoute
const PORT = 3000;

// Route de test
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
