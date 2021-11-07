import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
import Header from '../components/Header';
import NewTodo from '../components/NewTodo';
import Todos from '../components/Todos';
import MuiContainer from '../components/UI/MuiContainer';

axios.defaults.withCredentials = true;

function DashBoardPage() {
  const { user } = useSelector((state) => state.auth);
  const [todos, setTodos] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

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

  const editTodo = async (todo) => {
    await axios.patch(`${API_URL}/api/v1/todos/${todo.uuid}`, todo);
    getTodos();
  };

  useEffect(() => {
    if (user) {
      getTodos();
    }
  }, []);

  if (!user) {
    return (
      <MuiContainer>
        <Header />
        <Typography>
          You have to log in to view the Dashboard
        </Typography>
        <Button
          variant="contained"
          sx={{
            margin: '1.5rem',
          }}
        >
          <Link to="/" style={{ color: '#fff' }}>
            Go to Landing page.
          </Link>
        </Button>
      </MuiContainer>
    );
  }

  return (
    <MuiContainer>
      <Header />
      <NewTodo onAddTodo={addTodo} />
      {todos
        && (
          <Todos
            todos={todos}
            onDeleteTodo={deleteTodo}
            onEditTodo={editTodo}
          />
        )}
    </MuiContainer>
  );
}

export default DashBoardPage;
