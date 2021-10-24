import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import MuiContainer from './UI/MuiContainer';

function Todo({ todo }) {
  const [showTodo, setShowTodo] = useState(false);

  const handleToggleTodo = () => {
    setShowTodo((prevState) => !prevState);
  };

  // TODO Fix styling
  return (
    <MuiContainer>
      <Box
        sx={{
          maxWidth: '60%',
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
        <Typography component="p" variant="body1">
          {todo.body}
        </Typography>
      )}
    </MuiContainer>
  );
}

Todo.propTypes = {
  todo: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Todo;
