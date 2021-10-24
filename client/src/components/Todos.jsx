import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import MuiContainer from './UI/MuiContainer';

function Todos({ todos }) {
  return (
    <MuiContainer>
      {todos.map((todo) => <Todo todo={todo} key={todo.uuid} />)}
    </MuiContainer>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Todos;