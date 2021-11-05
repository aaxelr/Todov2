import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MuiContainer from '../components/UI/MuiContainer';

function LandingPage(props) {
  return (
    <MuiContainer>
      <Typography component="h2" variant="h4">
        Sign in with Google to kontinyū.
      </Typography>
      <Button
        href="http://localhost:5000/auth/google"
        variant="contained"
      >
        Sign in
      </Button>
      <button type="button" onClick={() => console.log(props)}>
        log props
      </button>
    </MuiContainer>
  );
}

export default LandingPage;
