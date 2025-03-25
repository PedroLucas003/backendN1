const express = require('express');
const Usuario = require('../models/UserModel');
const router = express.Router();

// Criar um novo usuário (POST)
router.post('/usuarios', async (req, res) => {
  try {
    const novoUsuario = new Usuario(req.body);
    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Buscar todos os usuários (GET)
router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

module.exports = router;
