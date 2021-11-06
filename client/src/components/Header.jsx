import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import MuiContainer from './UI/MuiContainer';
import LogOutButton from './LogOutButton';

function Header() {
  const { user } = useSelector((state) => state.auth);

  return (
    <MuiContainer>
      <Typography
        component="h1"
        variant="h2"
        sx={{ padding: '1rem' }}
      >
        Todo or not Todo
      </Typography>
      {user && (
        <Container sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
        >
          <Typography component="p" variant="body2">
            Logged in as
            {' '}
            {user.fullName}
          </Typography>
          <LogOutButton />
        </Container>
      )}
    </MuiContainer>
  );
}

export default Header;
