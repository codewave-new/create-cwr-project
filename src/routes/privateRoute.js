import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('TOKEN_NAME');

  if (isAuthenticated) {
    return children || <Outlet />;
  }
  return <Navigate replace to='/login' />;
};

export default ProtectedRoute;
