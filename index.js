const express = require('express');
const cors = require('cors');
const conectarDB = require('./database/database');

const usuariosRouter = require('./routes/UserRoutes');
const produtosRouter = require('./routes/ProductRoutes');

const app = express();
conectarDB();

app.use(cors());
app.use(express.json()); // Para processar JSON

// Rotas
app.use('/api', usuariosRouter);
app.use('/api', produtosRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
