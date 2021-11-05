import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from '@mui/material/';
import Header from './components/Header';
import MuiContainer from './components/UI/MuiContainer';
import DashBoardPage from './pages/DashboardPage';
import LoginErrorPage from './pages/LoginErrorPage';
import LoginSuccessPage from './pages/LoginSuccessPage';

function App() {
  return (
    <MuiContainer>
      <Header />
      <Switch>
        <Route exact path="/">
          <Button
            href="http://localhost:5000/auth/google"
            variant="contained"
          >
            Sign in with Goggles 😎
          </Button>
        </Route>
        <Route exact path="/dashboard" component={DashBoardPage} />
        <Route exact path="/login/success" component={LoginSuccessPage} />
        <Route exact path="/login/error" component={LoginErrorPage} />
      </Switch>
    </MuiContainer>
  );
}

export default App;
