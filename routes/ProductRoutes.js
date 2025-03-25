const express = require('express');
const Produto = require('../models/ProductModel');
const router = express.Router();

// Criar produto
router.post('/produtos', async (req, res) => {
  try {
    const novoProduto = new Produto(req.body);
    await novoProduto.save();
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

// Listar todos os produtos
router.get('/produtos', async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// Atualizar produto
router.put('/produtos/:id', async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

// Excluir produto
router.delete('/produtos/:id', async (req, res) => {
  try {
    await Produto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir produto' });
  }
});

module.exports = router;
