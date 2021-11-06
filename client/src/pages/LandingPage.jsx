import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Header from '../components/Header';
import MuiContainer from '../components/UI/MuiContainer';

function LandingPage() {
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
        href="http://localhost:5000/auth/google"
        variant="contained"
      >
        Sign in with Goggles 😎
      </Button>
    </MuiContainer>
  );
}

export default LandingPage;
