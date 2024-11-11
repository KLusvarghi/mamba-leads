const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000; // Porta para rodar o servidor


// Caminho para o arquivo meetings.json
const filePath = path.join(process.cwd(), 'src', 'api', 'realMettings.json');

// Rota para obter os dados do arquivo JSON
app.get('/api/meetings', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo JSON:', err);
      res.status(500).json({ error: 'Erro ao ler o arquivo JSON' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Rota raiz opcional para mostrar uma mensagem de boas-vindas
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor da API! Acesse /api/meetings para obter os dados de chamadas.');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
