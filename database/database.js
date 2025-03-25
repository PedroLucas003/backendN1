const mongoose = require('mongoose');
require('dotenv').config();


const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Conectado ao MongoDB');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
    process.exit(1); // Encerra a aplicação em caso de erro
  }
};

module.exports = conectarDB;


