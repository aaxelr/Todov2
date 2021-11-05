import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import MuiContainer from './UI/MuiContainer';

function Todos({ todos, onDeleteTodo }) {
  return (
    <MuiContainer>
      {!todos
      && <p>loading...</p>}
      {todos && console.log(todos)}
      {todos.length > 0
      && todos.map((todo) => <Todo todo={todo} key={todo.uuid} onDeleteTodo={onDeleteTodo} />)}
    </MuiContainer>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default Todos;
