import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Header from '../components/Header';
import MuiContainer from '../components/UI/MuiContainer';

function LandingPage() {
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  return (
    <MuiContainer>
      <Header />
      <Typography component="h2" variant="h4">
        Your least favorite todo app!
      </Typography>
      <Typography component="p" variant="body2">
        Log in or sign up to continue.
      </Typography>
      <Button
        href={`${API_URL}/auth/google`}
        variant="contained"
      >
        Sign in with Goggles 😎
      </Button>
    </MuiContainer>
  );
}

export default LandingPage;
