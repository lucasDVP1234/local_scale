const express = require('express');
const app = express();
const port = 1111;

app.use(express.static('public')); // Pour servir les fichiers statiques comme HTML, CSS

app.get('/api/automate', (req, res) => {
  // Ici, vous pouvez intégrer votre logique pour appeler make.com ou integromat.com
  res.json({ message: 'Tâche automatisée!' });
});

app.listen(port, async () => {
  console.log(`Serveur écoutant sur http://localhost:${port}`);
  const open = await import('open');
  open.default(`http://localhost:${port}`);
});
