import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import MuiContainer from './UI/MuiContainer';

function Todos({ todos, onDeleteTodo, onEditTodo }) {
  return (
    <MuiContainer>
      {!todos
      && <p>loading...</p>}
      {todos.length > 0
      && todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.uuid}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </MuiContainer>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
};

export default Todos;
