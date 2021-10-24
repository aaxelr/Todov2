import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
    console.log('submitting');
    e.preventDefault();
    // TODO add author
    const todoData = {
      title,
      body,
      last_edited: new Date(),
    };
    onSaveTodo(todoData);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container maxWidth="xs">
        <TextField
          id="todo-title"
          label="Title"
          value={title}
          onChange={handleTitleChange}
          required
          fullWidth
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
        />
        <ButtonGroup fullWidth>
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
