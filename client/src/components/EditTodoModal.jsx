import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  ButtonGroup,
  Modal,
  TextField,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function EditTodoModal(props) {
  const {
    todo,
    editTodo,
    onToggleEditTodo,
    onEditTodo,
  } = props;

  const [title, setTitle] = useState(todo.title);
  const [body, setBody] = useState(todo.body);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const submitEditedTodo = (e) => {
    e.preventDefault();
    const editedTodo = {
      ...todo,
      title,
      body,
    };
    onEditTodo(editedTodo);
    onToggleEditTodo();
  };

  return (
    <Modal
      open={editTodo}
      aria-labelledby="modal-modal-edit-todo"
      aria-describedby="modal-modal-description"
    >
      {!todo ? <p>loading</p>
        : (
          <Box sx={style}>
            <form onSubmit={submitEditedTodo}>
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
                  onClick={onToggleEditTodo}
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
            </form>
          </Box>
        )}
    </Modal>
  );
}

EditTodoModal.propTypes = {
  todo: PropTypes.shape({
    __v: PropTypes.number,
    _id: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string,
    title: PropTypes.string,
    updated: PropTypes.string,
    uuid: PropTypes.string,
  }).isRequired,
  onToggleEditTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.bool.isRequired,
};

export default EditTodoModal;
