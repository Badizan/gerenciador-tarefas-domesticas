const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar uma nova tarefa
router.post('/', async (req, res) => {
  const { titulo, descricao, prioridade, data } = req.body;
  try {
    const novaTarefa = await prisma.tarefa.create({
      data: {
        titulo,
        descricao,
        prioridade,
        data: new Date(data),
      },
      
    });
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
});

// Listar todas as tarefas
router.get('/', async (req, res) => {
  try {
    const tarefas = await prisma.tarefa.findMany();
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
});

// Atualizar uma tarefa
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, prioridade, data, concluida } = req.body;
  try {
    const tarefaAtualizada = await prisma.tarefa.update({
      where: { id: parseInt(id) },
      data: {
        titulo,
        descricao,
        prioridade,
        data: new Date(data),
        concluida,
      },
    });
    res.status(200).json(tarefaAtualizada);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
});

// Excluir uma tarefa
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.tarefa.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir tarefa' });
  }
});

module.exports = router;
