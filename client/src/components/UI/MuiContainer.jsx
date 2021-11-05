import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '@mui/material';

// TODO fix flexbox
function MuiContainer({ children }) {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#ddd',
          margin: '.5rem',
        }}
      >
        {children}
      </Box>
    </Container>
  );
}

MuiContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MuiContainer;
