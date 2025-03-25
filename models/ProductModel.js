const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  codigo: { type: String, required: true, unique: true },
  valor: { type: Number, required: true },
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Produto', ProductSchema);
