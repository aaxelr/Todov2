import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MuiContainer from './UI/MuiContainer';
import EditTodoModal from './EditTodoModal';

function Todo({ todo, onDeleteTodo, onEditTodo }) {
  const [showTodo, setShowTodo] = useState(false);
  const [editTodo, setEditTodo] = useState(false);

  const handleToggleShowTodo = () => {
    setShowTodo((prevState) => !prevState);
  };

  const handleToggleEditTodo = () => {
    setEditTodo((prevState) => !prevState);
  };

  const handleDeleteTodo = () => {
    onDeleteTodo(todo.uuid);
  };

  // TODO Fix styling
  return (
    <MuiContainer>
      <Box sx={{
        background: '#fff',
        border: '1px solid #111',
        padding: '1rem',
      }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography component="h2" variant="h4">
            {todo.title}
          </Typography>
          <Button
            onClick={handleToggleShowTodo}
            color="primary"
            variant={showTodo ? 'outlined' : 'contained'}
          >
            {showTodo ? 'Hide' : 'Show'}
          </Button>
        </Box>
        {showTodo && (
        <div>
          <ReactMarkdown>
            {todo.body}
          </ReactMarkdown>
          <ButtonGroup
            fullWidth
            sx={{
              margin: '.5rem',
            }}
          >
            <Button
              variant="outlined"
              startIcon={<DeleteForeverIcon />}
              color="error"
              onClick={handleDeleteTodo}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              color="primary"
              onClick={handleToggleEditTodo}
            >
              Edit Todo
            </Button>
          </ButtonGroup>
          {editTodo && (
            <EditTodoModal
              todo={todo}
              editTodo={editTodo}
              onEditTodo={onEditTodo}
              onToggleEditTodo={handleToggleEditTodo}
            />
          )}
        </div>
        )}
      </Box>
    </MuiContainer>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    __v: PropTypes.number,
    _id: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string,
    title: PropTypes.string,
    updated: PropTypes.string,
    uuid: PropTypes.string,
  }).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
};

export default Todo;
