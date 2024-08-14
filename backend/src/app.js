const express = require('express');
const app = express();
const cors = require('cors');

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.send('API Gerenciamento de Tarefas Domésticas');
});

// Rota para Tarefas (a implementar)
const tarefasRouter = require('./routes/tarefas');
app.use('/tarefas', tarefasRouter);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
