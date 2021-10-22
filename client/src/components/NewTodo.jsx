import { Button } from '@mui/material';
import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import TodoForm from './TodoForm';

function NewTodo() {
  const [showTodoForm, setShowTodoForm] = useState(false);

  const handleToggleTodoForm = () => {
    setShowTodoForm(!showTodoForm);
  };

  // TODO lift state to App.jsx
  const handleSaveTodo = () => {
    // TODO handle
  };

  return (
    <div>
      {!showTodoForm && (
        <Button
          onClick={handleToggleTodoForm}
          variant="contained"
          startIcon={<AddCircleIcon />}
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

export default NewTodo;
