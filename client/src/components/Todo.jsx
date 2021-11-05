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

function Todo({ todo, onDeleteTodo }) {
  const [showTodo, setShowTodo] = useState(false);

  const handleToggleTodo = () => {
    setShowTodo((prevState) => !prevState);
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
            onClick={handleToggleTodo}
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
              type="submit"
            >
              Edit Todo
            </Button>
          </ButtonGroup>
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
};

export default Todo;
