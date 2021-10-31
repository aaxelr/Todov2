/* eslint-disable no-underscore-dangle */
const Todo = require('../models/todoModel');

exports.getAllTodos = async (req, res) => {
  const authorId = req.user._id;

  try {
    const todos = await Todo.find({ author: authorId }).sort({ updated: -1 });
    res.json({ data: todos });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createTodo = async (req, res) => {
  const todo = req.body;
  const authorId = req.user._id;
  const newTodo = new Todo({ ...todo, author: authorId });

  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  const updateDate = Date.now();
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { uuid: id },
      { title, body, updated: updateDate },
      { new: true },
    );
    if (!updatedTodo) res.status(404).json('No such ID');
    res.json(updatedTodo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findOneAndDelete({ uuid: id });
    if (!todo) res.status(404).json('No such ID');
    res.sendStatus(204);
  } catch (error) {
    res.send(404).json({ message: error.message });
  }
};
