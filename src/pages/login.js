import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const handleLogin = () => {
    localStorage.setItem('TOKEN_NAME', 'someValue');
    history.push('/');
  };
  return (
    <div>
      Login
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
