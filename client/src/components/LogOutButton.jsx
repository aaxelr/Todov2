import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { setIsAuthenticated, setUser } from '../app/auth';

function LogOutButton() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  const logoutUser = async () => {
    const response = await axios.get(`${API_URL}/auth/logout`, { withCredentials: true })
      .catch((error) => {
        setErrors((prevErrors) => [...prevErrors, error]);
      });

    if (response && response.status === 205) {
      dispatch(setIsAuthenticated(false));
      dispatch(setUser(null));
      history.push('/');
    }
  };

  if (errors.length > 0) {
    return errors.map((error) => <p>{error.message}</p>);
  }

  return (
    <Button
      variant="outlined"
      startIcon={<ExitToAppIcon />}
      onClick={logoutUser}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
