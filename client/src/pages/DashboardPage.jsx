import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import axios from 'axios';
import NewTodo from '../components/NewTodo';
import Todos from '../components/Todos';
import MuiContainer from '../components/UI/MuiContainer';

axios.defaults.withCredentials = true;

function DashBoardPage() {
  const { user } = useSelector((state) => state.auth);
  const [todos, setTodos] = useState([]);
  const API_URL = process.env.REACT_API_URL || 'http://localhost:5000';

  const addTodo = async (todo) => {
    await axios.post(`${API_URL}/api/v1/todos`, todo);
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const getTodos = async () => {
    const response = await axios.get(`${API_URL}/api/v1/todos`);
    const { data } = response.data;
    setTodos(data);
  };

  const deleteTodo = async (todoId) => {
    await axios.delete(`${API_URL}/api/v1/todos/${todoId}`);
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <MuiContainer>
      {user && (
        <Typography component="p" variant="body2">
          Logged in as
          {' '}
          {user.fullName}
        </Typography>
      )}
      <NewTodo onAddTodo={addTodo} />
      {todos
        && <Todos todos={todos} onDeleteTodo={deleteTodo} />}
    </MuiContainer>
  );
}

export default DashBoardPage;
