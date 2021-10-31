const express = require('express');
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');

const router = express.Router();

router
  .route('/')
  .get(getAllTodos)
  .post(createTodo);

router
  .route('/:id')
  .patch(updateTodo)
  .delete(deleteTodo);

module.exports = router;
