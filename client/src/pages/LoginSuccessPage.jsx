import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setIsAuthenticated, setUser } from '../app/auth';

function LoginSuccessPage() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const API_URL = process.env.REACT_API_URL || 'http://localhost:5000';

  // TODO finish Google oAuth setup
  // NOTE put authenticateUser somewhere else?
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
        <div>
          <p>
            Successfully Logged in as
            {' '}
            {user.fullName}
          </p>
          <Link to="/dashboard">
            Continue to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}

export default LoginSuccessPage;
