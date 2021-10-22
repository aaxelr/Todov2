import React from 'react';
import Typography from '@mui/material/Typography';
import NewTodo from './components/NewTodo';

function App() {
  return (
    <div>
      {/* TODO material ui container */}
      {/* TODO navbar */}
      {/* TODO login */}
      <Typography variant="h3" component="h1">Todo or not Todo</Typography>
      <NewTodo />
      {/* TODO render todos */}
    </div>
  );
}

export default App;
