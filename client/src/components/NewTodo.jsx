import { Button } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import axios from 'axios';

import TodoForm from './TodoForm';

function NewTodo({ onAddTodo }) {
  const [showTodoForm, setShowTodoForm] = useState(false);

  const handleToggleTodoForm = () => {
    setShowTodoForm((prevState) => !prevState);
  };

  const handleSaveTodo = (todoData) => {
    onAddTodo(todoData);
    handleToggleTodoForm();
  };

  return (
    <div>
      {!showTodoForm && (
        <Button
          onClick={handleToggleTodoForm}
          variant="contained"
          startIcon={<AddCircleIcon />}
          sx={{
            margin: '1.5rem',
          }}
        >
          Add new Todo
        </Button>
      )}
      {showTodoForm && (
        <TodoForm
          onToggleTodoForm={handleToggleTodoForm}
          onSaveTodo={handleSaveTodo}
        />
      )}
    </div>
  );
}

NewTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default NewTodo;
