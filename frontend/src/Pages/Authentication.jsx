import React from 'react';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

const Authentication = ({ mode }) => {
  return (
    <div className="auth-container">
      {mode === 'login' ? <Login /> : <Signup />}
    </div>
  );
};

export default Authentication;
