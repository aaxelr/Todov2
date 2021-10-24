import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Todo({ todo }) {
  return (
    <div>
      <Typography component="h2" variant="h4">
        {todo.title}
      </Typography>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Todo;
