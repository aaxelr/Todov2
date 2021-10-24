import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import {
  TextField,
  Button,
  ButtonGroup,
  Container,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function TodoForm({ onToggleTodoForm, onSaveTodo }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoData = {
      uuid: uuid(),
      title,
      body,
    };
    onSaveTodo(todoData);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container
        maxWidth="xs"
      >
        <TextField
          id="todo-title"
          label="Title"
          value={title}
          onChange={handleTitleChange}
          required
          fullWidth
          sx={{
            margin: '.5rem',
          }}
        />
        <TextField
          id="todo-body"
          label="Body"
          value={body}
          minRows={5}
          multiline
          onChange={handleBodyChange}
          required
          fullWidth
          sx={{
            margin: '.5rem',
          }}
        />
        <ButtonGroup
          fullWidth
          sx={{
            margin: '.5rem',
          }}
        >
          <Button
            variant="outlined"
            startIcon={<CancelIcon />}
            color="error"
            onClick={onToggleTodoForm}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            startIcon={<CheckCircleIcon />}
            color="success"
            type="submit"
          >
            Save Todo
          </Button>
        </ButtonGroup>
      </Container>
    </form>
  );
}

// LINK https://www.npmjs.com/package/prop-types
TodoForm.propTypes = {
  onToggleTodoForm: PropTypes.func.isRequired,
  onSaveTodo: PropTypes.func.isRequired,
};

export default TodoForm;
