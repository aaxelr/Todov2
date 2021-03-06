import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { Button, Typography } from '@mui/material';
import { setIsAuthenticated, setUser } from '../app/auth';
import Header from '../components/Header';
import MuiContainer from '../components/UI/MuiContainer';

function LoginSuccessPage() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;

  const authenticateUser = async () => {
    const response = await axios.get(`${API_URL}/auth/user`, { withCredentials: true })
      .catch((error) => {
        const newError = { id: uuid(), error };
        setErrors((prevErrors) => [...prevErrors, newError]);
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
      <Header />
      {errors && errors.map(({ id, error }) => <p key={id}>{error.message}</p>)}
      {user && (
        <MuiContainer>
          <Typography component="p" variant="body2">
            Welcome!
          </Typography>
          <Typography component="p" variant="body2">
            Continue to the Dashboard to create, read, update and delete todos!
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
