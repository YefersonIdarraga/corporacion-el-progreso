import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="login-overlay"></div>
      <Login onClose={handleCloseModal} />
    </>
  );
};

export default LoginPage;