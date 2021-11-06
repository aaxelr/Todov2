import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
import { setIsAuthenticated, setUser } from '../app/auth';
import MuiContainer from '../components/UI/MuiContainer';

function LoginSuccessPage() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const API_URL = process.env.REACT_API_URL || 'http://localhost:5000';

  const authenticateUser = async () => {
    const response = await axios.get(`${API_URL}/auth/user`, { withCredentials: true })
      .catch((error) => {
        setErrors((prevErrors) => [...prevErrors, error]);
      });

    if (response && response.data) {
      dispatch(setIsAuthenticated(true));
      dispatch(setUser(response.data));
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <div>
      {errors && errors.map((error) => <p>{error.message}</p>)}
      {user && (
        <MuiContainer>
          <Typography component="p" variant="body2">
            Successfully Logged in as
            {' '}
            {user.fullName}
          </Typography>
          <Button
            variant="contained"
            sx={{
              margin: '1.5rem',
            }}
          >
            <Link to="/dashboard" style={{ color: '#fff' }}>
              Continue to Dashboard
            </Link>
          </Button>
        </MuiContainer>
      )}
    </div>
  );
}

export default LoginSuccessPage;
