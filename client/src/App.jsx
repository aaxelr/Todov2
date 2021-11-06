import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MuiContainer from './components/UI/MuiContainer';
import DashBoardPage from './pages/DashboardPage';
import LoginErrorPage from './pages/LoginErrorPage';
import LoginSuccessPage from './pages/LoginSuccessPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <MuiContainer>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={DashBoardPage} />
        <Route exact path="/login/success" component={LoginSuccessPage} />
        <Route exact path="/login/error" component={LoginErrorPage} />
      </Switch>
    </MuiContainer>
  );
}

export default App;
