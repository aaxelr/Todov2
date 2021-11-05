import React from 'react';
import { Link } from 'react-router-dom';

function LoginErrorPage() {
  return (
    <div>
      <h1>SOMETHING WENT WRONG :C</h1>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default LoginErrorPage;
