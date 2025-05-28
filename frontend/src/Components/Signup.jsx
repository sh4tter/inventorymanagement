import React from "react";

export default function Signup({ setIsLogin }) {
  return (
    <form className="auth-form">
      <h3>Create Account</h3>
      <div className="input-with-icon">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Full Name" />
      </div>

      <div className="input-with-icon">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" />
      </div>

      <div className="input-with-icon">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>

      <button type="submit">Sign up</button>

      <p className="auth-toggle-text">
        Already have an account?
        <span onClick={setIsLogin}>Login</span>
      </p>
    </form>
  );
}
